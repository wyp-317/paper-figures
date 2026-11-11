const grid = document.querySelector("#papers");
const template = document.querySelector("#paper-template");
const search = document.querySelector("#search");
const count = document.querySelector("#count");
const reset = document.querySelector("#reset-filters");
const categoryFilter = document.querySelector("#category-filter");
const catalog = papers.map(paper => ({
  ...paper,
  figures: paper.figures ?? [paper]
}));
const thumbnailObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
    for (const { isIntersecting, target } of entries) {
      if (!target.isConnected) continue;
      if (isIntersecting) {
        if (!target.hasAttribute("src")) loadThumbnail(target);
      } else {
        target.removeAttribute("src");
      }
    }
  }, { rootMargin: "240px 0px" })
  : null;
const paperFilters = [
  { field: "year", input: document.querySelector("#year-filter"), compare: (a, b) => b - a },
  { field: "conference", input: document.querySelector("#conference-filter") }
];

function populateFilter(input, entries, compare) {
  const values = [...new Set(entries)].sort(compare);
  for (const value of values) {
    input.add(new Option(String(value), String(value)));
  }
  input.addEventListener("change", render);
}

for (const { field, input, compare } of paperFilters) {
  populateFilter(input, catalog.map(paper => paper[field]), compare);
}
const categoryTotals = new Map();
for (const { figures } of catalog) {
  for (const { category } of figures) {
    categoryTotals.set(category, (categoryTotals.get(category) ?? 0) + 1);
  }
}
for (const [category, total] of categoryTotals) {
  categoryFilter.add(new Option(category + "（" + total + " 张）", category));
}
categoryFilter.addEventListener("change", render);

function loadThumbnail(image) {
  image.src = image.dataset.thumbnail;
}

function createCard({ paper, figures, selectedFigure }, index) {
  const card = template.content.cloneNode(true);
  const venue = [paper.conference, paper.year, paper.track].filter(Boolean).join(" ");
  const link = card.querySelector(".paper-link");
  link.href = paper.pdf;
  link.setAttribute("aria-label", paper.title + "，在新标签页打开 PDF");
  const image = card.querySelector("img");
  const category = card.querySelector(".category");
  const note = card.querySelector(".figure-note");
  const source = card.querySelector(".source");
  const license = card.querySelector(".license");
  const controls = card.querySelector(".figure-controls");
  const buttons = [];

  function showFigure(figure) {
    const label = figure.label ?? "图 " + figure.figure;
    image.dataset.thumbnail = "figures/" + figure.image + "-small.webp";
    image.alt = figure.category + "，" + label;
    if (image.hasAttribute("src")) loadThumbnail(image);
    category.textContent = figure.category;
    note.textContent = figure.figureNote;
    source.href = figure.source ?? paper.source;
    source.textContent = paper.authors + " · " + (figure.label ?? label + "（裁切自论文）");
    const licenseCode = figure.license ?? paper.license;
    license.href = "https://creativecommons.org/licenses/" + licenseCode + "/4.0/";
    license.textContent = "CC " + licenseCode.toUpperCase() + " 4.0";
    for (const [option, button] of buttons) {
      button.setAttribute("aria-pressed", String(option === figure));
    }
  }

  if (figures.length > 1) {
    for (const figure of figures) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = (figure.label ?? "图 " + figure.figure) + " · " + figure.category;
      button.addEventListener("click", () => showFigure(figure));
      buttons.push([figure, button]);
      controls.append(button);
    }
    controls.hidden = false;
  }
  showFigure(selectedFigure);
  if (index < 2 || !thumbnailObserver) {
    image.loading = index < 2 ? "eager" : "lazy";
    loadThumbnail(image);
  }
  thumbnailObserver?.observe(image);

  card.querySelector("h2").textContent = paper.title;
  card.querySelector(".venue").textContent = venue;
  card.querySelector(".abstract").textContent = paper.abstract;
  card.querySelector(".proceedings").href = paper.proceedings;
  return card;
}

function render() {
  const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const activeFilters = paperFilters.filter(({ input }) => input.value);
  const category = categoryFilter.value;
  const matches = [];
  for (const paper of catalog) {
    if (!activeFilters.every(({ field, input }) => String(paper[field]) === input.value)) continue;
    const figures = paper.figures.filter(figure => !category || figure.category === category);
    const selectedFigure = figures.find(figure => {
      const metadata = [
        paper.title, paper.conference, paper.track, paper.year, paper.authors, paper.abstract,
        figure.category, figure.figureNote
      ].join(" ").toLowerCase();
      return terms.every(term => metadata.includes(term));
    });
    if (selectedFigure) matches.push({ paper, figures, selectedFigure });
  }
  reset.disabled = !search.value && !category && activeFilters.length === 0;
  const figureCount = matches.reduce((total, match) => total + match.figures.length, 0);
  count.textContent = matches.length + " 篇论文 · " + figureCount + " 张图";
  thumbnailObserver?.disconnect();
  grid.replaceChildren(...matches.map(createCard));
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "没有匹配的论文。试试调整筛选条件或清空搜索。";
    grid.append(empty);
  }
}

search.addEventListener("input", render);
reset.addEventListener("click", () => {
  search.value = "";
  categoryFilter.value = "";
  for (const { input } of paperFilters) {
    input.value = "";
  }
  search.focus();
  render();
});
render();
