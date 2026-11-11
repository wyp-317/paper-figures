const grid = document.querySelector("#papers");
const template = document.querySelector("#paper-template");
const search = document.querySelector("#search");
const count = document.querySelector("#count");
const reset = document.querySelector("#reset-filters");
const thumbnailObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
    for (const { isIntersecting, target } of entries) {
      if (isIntersecting) {
        thumbnailObserver.unobserve(target);
        loadThumbnail(target);
      }
    }
  }, { rootMargin: "240px 0px" })
  : null;
const filters = [
  { field: "year", input: document.querySelector("#year-filter"), compare: (a, b) => b - a },
  { field: "conference", input: document.querySelector("#conference-filter") },
  { field: "category", input: document.querySelector("#category-filter") }
];

for (const { field, input, compare } of filters) {
  const values = [...new Set(papers.map(paper => paper[field]))].sort(compare);
  for (const value of values) {
    input.add(new Option(String(value), String(value)));
  }
  input.addEventListener("change", render);
}

function loadThumbnail(image) {
  const base = image.dataset.figure;
  image.srcset = base + "-small.webp 1x, " + base + ".webp 2x";
  image.src = base + "-small.webp";
}

function createCard(paper, index) {
  const card = template.content.cloneNode(true);
  const venue = [paper.conference, paper.year, paper.track].filter(Boolean).join(" ");
  const link = card.querySelector(".paper-link");
  link.href = paper.pdf;
  link.setAttribute("aria-label", paper.title + "，在新标签页打开 PDF");
  const image = card.querySelector("img");
  image.dataset.figure = "figures/" + paper.image;
  image.alt = paper.category + "，论文图 " + paper.figure;
  if (index < 2 || !thumbnailObserver) {
    image.loading = index < 2 ? "eager" : "lazy";
    loadThumbnail(image);
  } else {
    thumbnailObserver.observe(image);
  }

  card.querySelector("h2").textContent = paper.title;
  card.querySelector(".venue").textContent = venue;
  card.querySelector(".category").textContent = paper.category;
  card.querySelector(".abstract").textContent = paper.abstract;
  card.querySelector(".figure-note").textContent = paper.figureNote;

  const source = card.querySelector(".source");
  source.href = paper.source;
  source.textContent = paper.authors + " · 图 " + paper.figure + "（裁切自论文）";
  const license = card.querySelector(".license");
  license.href = "https://creativecommons.org/licenses/" + paper.license + "/4.0/";
  license.textContent = "CC " + paper.license.toUpperCase() + " 4.0";
  card.querySelector(".proceedings").href = paper.proceedings;
  return card;
}

function render() {
  const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const activeFilters = filters.filter(({ input }) => input.value);
  const matches = papers.filter(paper => {
    const metadata = [
      paper.title, paper.conference, paper.track, paper.year, paper.category,
      paper.authors, paper.abstract, paper.figureNote
    ].join(" ").toLowerCase();
    return activeFilters.every(({ field, input }) => String(paper[field]) === input.value)
      && terms.every(term => metadata.includes(term));
  });
  reset.disabled = !search.value && activeFilters.length === 0;
  count.textContent = matches.length === papers.length
    ? papers.length + " 篇论文"
    : matches.length + " / " + papers.length + " 篇论文";
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
  for (const { input } of filters) {
    input.value = "";
  }
  search.focus();
  render();
});
render();
