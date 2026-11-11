const papers = [
  {
    "title": "Iris: Bringing Real-World Priors into Diffusion Model for Monocular Depth Estimation",
    "conference": "CVPR",
    "year": 2026,
    "authors": "Cai et al.",
    "abstract": "Iris 将真实图像先验引入扩散深度估计。模型先迁移低频先验，再用合成深度标注约束高频细节，以改善单张图像的深度边缘和跨域泛化。",
    "source": "https://arxiv.org/abs/2603.16340",
    "pdf": "https://arxiv.org/pdf/2603.16340",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/CVPR2026/html/Cai_Iris_Bringing_Real-World_Priors_into_Diffusion_Model_for_Monocular_Depth_CVPR_2026_paper.html",
    "figures": [
      {
        "category": "模型架构图",
        "image": "iris-depth",
        "figure": 3,
        "figureNote": "图中两个 U-Net 阶段从左到右排列，上方分别标出低频先验迁移和高频一致性约束。并排标注不同阶段的监督信号，适合表达分阶段训练。"
      },
      {
        "category": "方法流程图",
        "image": "iris-depth-fig4",
        "figure": 4,
        "figureNote": "上排是教师深度，下排是学生预测。每排左侧是处理前的深度图，右侧是低通处理后的结果。用同一场景贯穿两排，可以看出蒸馏阶段主要传递了哪些低频结构。"
      }
    ]
  },
  {
    "title": "Medic-AD: Towards Medical Vision-Language Model's Clinical Intelligence",
    "conference": "CVPR",
    "year": 2026,
    "authors": "Park et al.",
    "abstract": "MEDIC-AD 让医学视觉语言模型分阶段学习异常感知、病灶差异和热图生成，覆盖病灶定位、症状追踪和视觉解释三项任务。",
    "source": "https://arxiv.org/abs/2603.27176",
    "pdf": "https://arxiv.org/pdf/2603.27176",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/CVPR2026/html/Park_Medic-AD_Towards_Medical_Vision-Language_Models_Clinical_Intelligence_CVPR_2026_paper.html",
    "figures": [
      {
        "category": "模型架构图",
        "image": "medic-ad",
        "figure": 3,
        "figureNote": "三个编号子图各自画出输入、视觉特征和输出。把共用的图像输入与不同阶段的监督分开，能减少多任务架构图里的交叉连线。"
      },
      {
        "category": "任务示意图",
        "image": "medic-ad-fig6",
        "figure": 6,
        "figureNote": "左右两栏对照原始问答模板与 MEDIC-AD 模板。后者把病灶异常和前后变化分别写成独立的视觉标记，便于看清模型回答医学图像问题时获得哪些额外信息。"
      }
    ]
  },
  {
    "title": "Cycle-Consistent Tuning for Layered Image Decomposition",
    "conference": "CVPR",
    "year": 2026,
    "authors": "Gu et al.",
    "abstract": "论文用扩散模型把真实图像中的标志和物体表面分离。方法联合训练分解与重组，让两条路径互相约束，并通过生成样本迭代补充训练数据。",
    "source": "https://arxiv.org/abs/2602.20989",
    "pdf": "https://arxiv.org/pdf/2602.20989",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/CVPR2026/html/Gu_Cycle-Consistent_Tuning_for_Layered_Image_Decomposition_CVPR_2026_paper.html",
    "figures": [
      {
        "category": "方法流程图",
        "image": "layered-decomposition",
        "figure": 2,
        "figureNote": "流程图把数据准备、图层分离和结果展示并排组织。相同案例跨阶段复用，使读者能追踪标志和底层物体分别发生了什么变化。"
      },
      {
        "category": "任务示意图",
        "image": "layered-decomposition-fig1",
        "figure": 1,
        "figureNote": "每组用两张带标志的物体照片示范先拆分、再交叉重组。固定各列的输入和输出角色，可让读者一眼分辨哪一层是标志，哪一层是物体表面。"
      }
    ]
  },
  {
    "title": "SPDMark: Selective Parameter Displacement for Robust Video Watermarking",
    "conference": "CVPR",
    "year": 2026,
    "authors": "Fares et al.",
    "abstract": "SPDMark 在视频扩散模型的部分参数中嵌入水印，使生成过程直接携带来源信号。水印密钥决定各层参数偏移的组合。",
    "source": "https://arxiv.org/abs/2512.12090",
    "pdf": "https://arxiv.org/pdf/2512.12090",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/CVPR2026/html/Fares_SPDMark_Selective_Parameter_Displacement_for_Robust_Video_Watermarking_CVPR_2026_paper.html",
    "figures": [
      {
        "category": "方法流程图",
        "image": "spdmark",
        "figure": 1,
        "figureNote": "上半部展示多个视频帧中的水印信号，下半部展开不同层的参数位移。虚线把模型内部操作与可见输出对应起来。"
      },
      {
        "category": "定性结果对比图",
        "image": "spdmark-fig2",
        "figure": 2,
        "figureNote": "两行分别对应 SVD-XT 和 ModelScope。每种水印方法使用同一段生成视频的两帧，便于检查加入水印后，画面细节和相邻帧观感有何变化。"
      }
    ]
  },
  {
    "title": "Dynamic Exposure Burst Image Restoration",
    "conference": "CVPR",
    "year": 2026,
    "authors": "Kim et al.",
    "abstract": "DEBIR 从预览图像、增益和运动信息预测连拍序列的曝光时间，再将按这些时间拍摄的图像交给复原网络，联合考虑采集条件和恢复效果。",
    "source": "https://arxiv.org/abs/2603.21784",
    "pdf": "https://arxiv.org/pdf/2603.21784",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/CVPR2026/html/Kim_Dynamic_Exposure_Burst_Image_Restoration_CVPR_2026_paper.html",
    "figures": [
      {
        "category": "方法流程图",
        "image": "debir",
        "figure": 1,
        "figureNote": "图按预览输入、曝光预测、连拍采集、复原输出四步排列。不同颜色的模块区分可学习网络和真实拍摄环节。"
      },
      {
        "category": "定性结果对比图",
        "image": "debir-fig2",
        "figure": 2,
        "figureNote": "同一场景的连拍输入与各方法复原结果按列对齐。查看重复出现的局部放大区域，可以比较暗部纹理与运动边缘保留得如何。"
      }
    ]
  },
  {
    "title": "A Semantically Disentangled Unified Model for Multi-category 3D Anomaly Detection",
    "conference": "CVPR",
    "year": 2026,
    "authors": "Kim et al.",
    "abstract": "这项工作用同一模型检测多类三维点云中的缺陷。方法通过类别条件对比学习分离不同物体的语义，并用几何信息引导特征重建和异常定位。",
    "source": "https://arxiv.org/abs/2603.25159",
    "pdf": "https://arxiv.org/pdf/2603.25159",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/CVPR2026/html/Kim_A_Semantically_Disentangled_Unified_Model_for_Multi-category_3D_Anomaly_Detection_CVPR_2026_paper.html",
    "figures": [
      {
        "category": "任务示意图",
        "image": "3d-anomaly",
        "figure": 1,
        "figureNote": "三栏依次对照按类别训练、统一模型和作者提出的语义解耦模型。使用相同的点云示例和颜色编码，可以突出每种设计如何处理不同类别。"
      },
      {
        "category": "模型架构图",
        "image": "3d-anomaly-fig3",
        "figure": 3,
        "figureNote": "图上方把点云编码后的表征学习和几何引导重建连在一起，下方分别展开全局标记和类别条件对比模块。上下两层布局适合同时说明模型主干与训练子模块。"
      }
    ]
  },
  {
    "title": "Scaling Zero-Shot Reference-to-Video Generation",
    "conference": "CVPR",
    "year": 2026,
    "authors": "Zhou et al.",
    "abstract": "Saber 只用视频与文本对训练参考图生视频模型。它用掩膜训练和专门的注意力设计学习主体一致性，并通过掩膜增强减少复制粘贴伪影。",
    "source": "https://arxiv.org/abs/2512.06905",
    "pdf": "https://arxiv.org/pdf/2512.06905",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/CVPR2026/html/Zhou_Scaling_Zero-Shot_Reference-to-Video_Generation_CVPR_2026_paper.html",
    "figures": [
      {
        "category": "定性结果对比图",
        "image": "saber",
        "figure": 1,
        "figureNote": "多组案例依次给出参考图和生成视频的连续帧。用相同的抽帧布局，可以同时检查主体是否保持一致、动作是否连贯。"
      },
      {
        "category": "模型架构图",
        "image": "saber-fig3",
        "figure": 3,
        "figureNote": "图把遮罩后的参考图像与视频帧映射成潜空间标记，再交给共享的自注意力模块。不同色块区分参考图、视频和文本条件，可以沿着它们看清各路信号如何组合。"
      }
    ]
  },
  {
    "title": "DiG: Differential Grounding for Enhancing Fine-Grained Perception in Multimodal Large Language Models",
    "conference": "CVPR",
    "year": 2026,
    "authors": "Tao et al.",
    "abstract": "DiG 训练多模态模型找出并定位相似图像间的全部差异。方法用三维渲染生成可控图像对，并从单个差异逐步过渡到多个差异。",
    "source": "https://arxiv.org/abs/2512.12633",
    "pdf": "https://arxiv.org/pdf/2512.12633",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/CVPR2026/html/Tao_DiG_Differential_Grounding_for_Enhancing_Fine-Grained_Perception_in_Multimodal_Large_CVPR_2026_paper.html",
    "figures": [
      {
        "category": "任务示意图",
        "image": "dig-grounding",
        "figure": 1,
        "figureNote": "左栏用单图示例说明常规视觉问答，右栏用图像对说明如何找出差异，并用边框坐标给出位置。对照两种输入和输出格式，可以快速理解任务区别。"
      },
      {
        "category": "方法流程图",
        "image": "dig-grounding-fig2",
        "figure": 2,
        "figureNote": "上排从可控三维场景渲染图像对并生成差异标注，下排把训练任务从少量差异逐步推进到更多差异。分行展示能把数据构建和训练顺序说明白。"
      }
    ]
  },
  {
    "title": "MAPo: Motion-Aware Partitioning of Deformable 3D Gaussian Splatting for High-Fidelity Dynamic Scene Reconstruction",
    "conference": "CVPR",
    "year": 2026,
    "authors": "Jiao et al.",
    "abstract": "MAPo 根据运动强度对可变形三维高斯分区。对高动态区域进一步细分，以保留单一变形模型容易模糊掉的运动细节。",
    "source": "https://arxiv.org/abs/2508.19786",
    "pdf": "https://arxiv.org/pdf/2508.19786",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/CVPR2026/html/Jiao_MAPo_Motion-Aware_Partitioning_of_Deformable_3D_Gaussian_Splatting_for_High-Fidelity_CVPR_2026_paper.html",
    "figures": [
      {
        "category": "定性结果对比图",
        "image": "mapo",
        "figure": 1,
        "figureNote": "同一个动态场景按方法横向排列，并在最后给出真实图像。各方法沿用同样的高亮位置，读者可以集中比较运动区域的渲染细节。"
      },
      {
        "category": "方法流程图",
        "image": "mapo-fig3",
        "figure": 3,
        "figureNote": "先沿时间观察高斯点的位移，再据此计算动态程度并对运动更强的部分递归分段。图中把静态和动态分支用不同颜色标出，便于看清各自何时被拆分。"
      }
    ]
  },
  {
    "title": "DiffGraph: An Automated Agent-driven Model Merging Framework for In-the-Wild Text-to-Image Generation",
    "conference": "CVPR",
    "year": 2026,
    "authors": "Li et al.",
    "abstract": "DiffGraph 用图结构组织具有不同能力的文生图模型。系统根据提示词激活相关子图，并自动组合其中的专家模型来生成图像。",
    "source": "https://arxiv.org/abs/2603.20470",
    "pdf": "https://arxiv.org/pdf/2603.20470",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/CVPR2026/html/Li_DiffGraph_An_Automated_Agent-driven_Model_Merging_Framework_for_In-the-Wild_Text-to-Image_CVPR_2026_paper.html",
    "figures": [
      {
        "category": "模型架构图",
        "image": "diffgraph",
        "figure": 1,
        "figureNote": "左侧描绘专家模型的注册与校准，右侧展示如何从用户需求出发选取和组合专家。底部给出全图和被激活的子图，便于对应两个阶段。"
      },
      {
        "category": "定性结果对比图",
        "image": "diffgraph-fig2",
        "figure": 2,
        "figureNote": "每组先给出同一段提示词，再横向对比各方法生成的图像。提示词中的颜色标记与视觉属性对应，可逐项查看哪些属性或组合得到保留。"
      }
    ]
  },
  {
    "title": "Concept-Guided Fine-Tuning: Steering ViTs away from Spurious Correlations to Improve Robustness",
    "conference": "CVPR",
    "year": 2026,
    "authors": "Elisha et al.",
    "abstract": "论文根据任务相关概念微调视觉 Transformer，引导模型关注真正有判别力的区域，减少对背景等伪相关线索的依赖。",
    "source": "https://arxiv.org/abs/2603.08309",
    "pdf": "https://arxiv.org/pdf/2603.08309",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/CVPR2026/html/Elisha_Concept-Guided_Fine-Tuning_Steering_ViTs_away_from_Spurious_Correlations_to_Improve_CVPR_2026_paper.html",
    "figures": [
      {
        "category": "任务示意图",
        "image": "concept-guided",
        "figure": 1,
        "figureNote": "图以鸟和动物为例，说明细粒度识别任务为何容易受背景干扰。对照输入与相关性热图，可以看到任务希望模型关注哪些与类别相关的局部概念。"
      },
      {
        "category": "定性结果对比图",
        "image": "concept-guided-fig2",
        "figure": 2,
        "figureNote": "同一输入依次对照基线和 CFT 的相关性热图及预测。看热区是否从背景移到目标特征，再结合预测标签，能够区分关注区域改变与分类纠错。"
      }
    ]
  },
  {
    "title": "Open-World Object Counting in Videos",
    "conference": "AAAI",
    "year": 2026,
    "authors": "Amini-Naieni and Zisserman",
    "abstract": "COUNTVID 根据文本或示例图片指定目标，在视频中追踪并统计不同实例。论文把单帧计数与跨帧分割跟踪结合，处理同一物体在多个时刻反复出现的问题。",
    "source": "https://ora.ox.ac.uk/objects/uuid:18bf636b-1f98-4156-81af-cf84f34f0534",
    "pdf": "https://ora.ox.ac.uk/objects/uuid:18bf636b-1f98-4156-81af-cf84f34f0534/files/s6q182n625",
    "license": "by",
    "proceedings": "https://ojs.aaai.org/index.php/AAAI/article/view/37214",
    "figures": [
      {
        "category": "任务示意图",
        "image": "countvid",
        "figure": 1,
        "figureNote": "上半部分按时间排列视频帧，并用颜色和编号标记鱼的身份。下方曲线对应累计发现的独立实例，便于区分单帧数量与整段视频计数。"
      },
      {
        "category": "方法流程图",
        "image": "countvid-fig2",
        "figure": 2,
        "figureNote": "流程按检测、跟踪和去重三个阶段展开。图中同一条鱼的颜色在不同帧保持一致，帮助读者理解单帧检测怎样转化为整段视频的独立实例数。"
      }
    ]
  },
  {
    "title": "Let’s Think with Images Efficiently! An Interleaved-Modal Chain-of-Thought Reasoning Framework with Dynamic and Precise Visual Thoughts",
    "conference": "AAAI",
    "year": 2026,
    "authors": "Liu et al.",
    "abstract": "DaP-ICoT 让多模态模型根据当前推理需要决定何时引入视觉线索，并用更连贯的视觉表示辅助推理，减少不必要的视觉步骤。",
    "source": "https://arxiv.org/abs/2603.21754v1",
    "pdf": "https://arxiv.org/pdf/2603.21754v1",
    "license": "by-nc-sa",
    "proceedings": "https://ojs.aaai.org/index.php/AAAI/article/view/40494",
    "figures": [
      {
        "category": "任务示意图",
        "image": "dap-icot",
        "figure": 1,
        "figureNote": "同一个视觉问题分别交给固定插入视觉线索和按需插入的推理流程。两条路径上下对照，让读者看出视觉线索何时出现、怎样影响推理。"
      },
      {
        "category": "方法流程图",
        "image": "dap-icot-fig2",
        "figure": 2,
        "figureNote": "左侧展示模型如何在推理中判断是否需要视觉线索，右侧把视觉区域选择和后续推理接起来。读图时可跟着同一个问题，看模型何时插入图像信息。"
      }
    ]
  },
  {
    "title": "Expand Your SCOPE: Semantic Cognition over Potential-Based Exploration for Embodied Visual Navigation",
    "conference": "AAAI",
    "year": 2026,
    "authors": "Wang et al.",
    "abstract": "SCOPE 面向未知环境中的零样本视觉导航。它利用视觉语言模型评估探索边界的价值，再把候选边界和空间关系整理成图，供智能体选择下一步行动。",
    "source": "https://arxiv.org/abs/2511.08935v2",
    "pdf": "https://arxiv.org/pdf/2511.08935v2",
    "license": "by",
    "proceedings": "https://ojs.aaai.org/index.php/AAAI/article/view/38929",
    "figures": [
      {
        "category": "方法流程图",
        "image": "scope-nav",
        "figure": 1,
        "figureNote": "从左到右可读出当前观察、探索价值估计和下一步决策。图把预测和决策做成不同色块，并用环境截图对应抽象地图。"
      },
      {
        "category": "任务示意图",
        "image": "scope-nav-fig8",
        "figure": 8,
        "figureNote": "平面图标出目标所在位置和智能体的行走路线。把目标与实际轨迹画在同一视图上，便于理解导航任务需要在多个房间之间找到哪一个物体。"
      }
    ]
  },
  {
    "title": "DICE: Distilling Classifier-Free Guidance into Text Embeddings",
    "conference": "AAAI",
    "year": 2026,
    "authors": "Zhou et al.",
    "abstract": "DICE 把无分类器引导的作用蒸馏进文本嵌入，使扩散模型在采样时可以少做一部分计算，同时尽量保持文本与图像的匹配。",
    "source": "https://arxiv.org/abs/2502.03726v3",
    "pdf": "https://arxiv.org/pdf/2502.03726v3",
    "license": "by-nc-sa",
    "proceedings": "https://ojs.aaai.org/index.php/AAAI/article/view/38397",
    "figures": [
      {
        "category": "方法流程图",
        "image": "dice-guidance",
        "figure": 2,
        "figureNote": "图把无引导、常规引导和 DICE 三条采样路径从上到下排列。每行都用同一提示词，把文本条件、采样步骤和生成结果对齐，便于逐项比较。"
      },
      {
        "category": "模型架构图",
        "image": "dice-guidance-fig10",
        "figure": 10,
        "figureNote": "图并排展示引导蒸馏、适配器蒸馏和 DICE。顺着每列的输入与网络看，可以区分三种方法分别在哪里注入引导信号、更新哪一部分。"
      }
    ]
  },
  {
    "title": "Predicting Video Slot Attention Queries from Random Slot-Feature Pairs",
    "conference": "AAAI",
    "year": 2026,
    "authors": "Zhao et al.",
    "abstract": "论文研究如何在无监督视频建模中预测下一帧的对象槽查询。它利用随机槽位与图像特征配对训练查询预测器，让下一帧的特征参与查询生成。",
    "source": "https://arxiv.org/abs/2508.01345v7",
    "pdf": "https://arxiv.org/pdf/2508.01345v7",
    "license": "by",
    "proceedings": "https://ojs.aaai.org/index.php/AAAI/article/view/38322",
    "figures": [
      {
        "category": "模型架构图",
        "image": "randsf-query",
        "figure": 2,
        "figureNote": "左侧画出视频帧编码、槽注意力和预测器如何连接，右侧单独展开随机配对的训练过程。总图和局部训练图分开放，便于追踪两套信息流。"
      },
      {
        "category": "定性结果对比图",
        "image": "randsf-query-fig3",
        "figure": 3,
        "figureNote": "用同一视频的连续帧对齐 SlotContrast 和 RandSF.Q 的分割结果。沿时间方向追踪颜色区域，可以比较两个方法是否持续覆盖同一对象。"
      }
    ]
  },
  {
    "title": "MMSI-Bench: A Benchmark for Multi-Image Spatial Intelligence",
    "conference": "ICLR",
    "year": 2026,
    "authors": "Yang et al.",
    "abstract": "MMSI-Bench 评估多模态模型能否综合多张图像推断三维空间关系。研究者人工设计选择题、干扰项和逐步推理依据。",
    "source": "https://arxiv.org/abs/2505.23764v3",
    "pdf": "https://arxiv.org/pdf/2505.23764v3",
    "license": "by",
    "proceedings": "https://iclr.cc/virtual/2026/poster/10008161",
    "figures": [
      {
        "category": "任务示意图",
        "image": "mmsi-bench",
        "figure": 1,
        "figureNote": "左侧给出多张观察图和对应选择题，中间展示需要合并的空间线索。把输入、问题和推理依据放在同一区域，便于展示多图任务的难点。"
      },
      {
        "category": "方法流程图",
        "image": "mmsi-bench-fig4",
        "figure": 4,
        "figureNote": "从多源图像中选出能组成空间推理任务的图像组，再设计问题、干扰项和推理依据。各阶段附带样例，让读者看到数据如何从原始图像变成评测题。"
      }
    ]
  },
  {
    "title": "Agent-X: Evaluating Deep Multimodal Reasoning in Vision-Centric Agentic Tasks",
    "conference": "ICLR",
    "year": 2026,
    "authors": "Ashraf et al.",
    "abstract": "Agent-X 用真实图像、视频和交互环境中的任务考查视觉智能体。评估覆盖多步推理和工具使用，也记录中间步骤以检查完成过程。",
    "source": "https://arxiv.org/abs/2505.24876v2",
    "pdf": "https://arxiv.org/pdf/2505.24876v2",
    "license": "by",
    "proceedings": "https://iclr.cc/virtual/2026/poster/10009109",
    "figures": [
      {
        "category": "任务示意图",
        "image": "agent-x",
        "figure": 1,
        "figureNote": "图并排展示两组任务，每组把用户问题、观察画面和工具调用放在一起。逐步列出中间动作，让读者看到终点答案依赖哪些决策。"
      },
      {
        "category": "方法流程图",
        "image": "agent-x-fig2",
        "figure": 2,
        "figureNote": "图从图像、视频和可用工具出发，依次展示初始问题生成、人工完善和逐步推理轨迹标注。各阶段保留对应的输入和输出，便于追踪一条评测样本怎样形成。"
      }
    ]
  },
  {
    "title": "Constructive Distortion: Improving MLLMs with Attention-Guided Image Warping",
    "conference": "ICLR",
    "year": 2026,
    "authors": "Dalal et al.",
    "abstract": "AttWarp 根据文本问题提取模型的跨模态注意力，在推理时重新分配图像分辨率。它让与问题相关的局部获得更多像素，同时保留全图上下文。",
    "source": "https://arxiv.org/abs/2510.09741v4",
    "pdf": "https://arxiv.org/pdf/2510.09741v4",
    "license": "by",
    "proceedings": "https://iclr.cc/virtual/2026/poster/10009409",
    "figures": [
      {
        "category": "方法流程图",
        "image": "attwarp",
        "figure": 1,
        "figureNote": "图从原始图像和问题开始，经由注意力图与边缘分布生成变形网格，再给出变形后的图像。将中间信号画在相邻位置，可以追踪局部为何被放大。"
      },
      {
        "category": "模型架构图",
        "image": "attwarp-fig2",
        "figure": 2,
        "figureNote": "视觉标记和文本条件进入不同的处理路径，随后合成两个方向的注意力分布。小图单独展开预测器，便于对照主流程里的变形模块如何获得输入。"
      }
    ]
  },
  {
    "title": "DETR-ViP: Detection Transformer with Robust Discriminative Visual Prompts",
    "conference": "ICLR",
    "year": 2026,
    "authors": "Qian et al.",
    "abstract": "DETR-ViP 在 Grounding DINO 中加入视觉提示编码器，用示例图像指定要检测的类别，并结合全局提示信息及视觉与文本提示之间的关系提升区分能力。",
    "source": "https://arxiv.org/abs/2604.14684v2",
    "pdf": "https://arxiv.org/pdf/2604.14684v2",
    "license": "by",
    "proceedings": "https://iclr.cc/virtual/2026/poster/10011754",
    "figures": [
      {
        "category": "模型架构图",
        "image": "detr-vip",
        "figure": 2,
        "figureNote": "左侧放入待检测图像和视觉提示，中央展开编码与融合模块，右侧给出检测结果。多种输入使用不同路径，清楚标明各自何时合流。"
      },
      {
        "category": "任务示意图",
        "image": "detr-vip-fig3",
        "figure": 3,
        "figureNote": "左右两图保留同一个检测场景，只改变视觉提示集合。对照输出框，可以直观看到同一目标在单一提示和多类别提示下为何出现不同检测结果。"
      }
    ]
  },
  {
    "title": "SuperF: Neural Implicit Fields for Multi-Image Super-Resolution",
    "conference": "ICLR",
    "year": 2026,
    "authors": "Jyhne et al.",
    "abstract": "SuperF 将多张略有错位的低分辨率图像对齐到共享的隐式图像表示，以恢复高分辨率细节。方法适用于地面连拍和卫星图像等场景。",
    "source": "https://arxiv.org/abs/2512.09115v2",
    "pdf": "https://arxiv.org/pdf/2512.09115v2",
    "license": "by",
    "proceedings": "https://iclr.cc/virtual/2026/poster/10010572",
    "figures": [
      {
        "category": "定性结果对比图",
        "image": "superf",
        "figure": 2,
        "figureNote": "每行是一个场景，列出低分辨率输入、不同超分辨率方法和参考图。用一致的放大倍率和排列方式，便于比较各方法保留纹理的能力。"
      },
      {
        "category": "模型架构图",
        "image": "superf-fig1",
        "figure": 1,
        "figureNote": "多张低分辨率图像共享同一个隐式图像表示，同时保留各自的对齐参数。图用多路输入和共同表示说明模型如何从错位观测中恢复统一的高分辨率图像。"
      }
    ]
  },
  {
    "title": "Pygmalion Effect in Vision: Image-to-Clay Translation for Reflective Geometry Reconstruction",
    "conference": "NeurIPS",
    "year": 2026,
    "authors": "Lee et al.",
    "abstract": "论文研究反光表面的三维重建。作者把多视角照片转换成保留形状的黏土风格图像，将其作为去除反光干扰的几何监督，并与反射建模分支共享三维表示。",
    "source": "https://arxiv.org/abs/2511.21098v2",
    "pdf": "https://arxiv.org/pdf/2511.21098v2",
    "license": "by",
    "proceedings": "https://neurips.cc/virtual/2026/poster/150623",
    "figures": [
      {
        "category": "任务示意图",
        "image": "pygmalion-vision",
        "figure": 1,
        "figureNote": "图由反光原图、去反光的黏土图和重建结果组成。把反光外观与目标几何放在相邻列，能直观看出镜面高光为何会干扰形状恢复。"
      },
      {
        "category": "模型架构图",
        "image": "pygmalion-vision-fig2",
        "figure": 2,
        "figureNote": "上路用去反光的黏土图提供几何监督，下路模拟反射外观。把两路共用的高斯几何放在分叉之前，可以看出外观和几何怎样在同一个模型里联合学习。"
      }
    ]
  },
  {
    "title": "Rethinking Geometric Depth in Monocular 3D Object Detection: A Projection-Consistent Reformulation",
    "conference": "NeurIPS",
    "year": 2026,
    "authors": "Zhang et al.",
    "abstract": "MonoPCA 研究单目三维检测中的深度偏差。传统的二维框高公式容易估到物体可见前表面的深度，作者加入与朝向相关的几何校正来估计物体中心。",
    "source": "https://arxiv.org/abs/2611.11607v1",
    "pdf": "https://arxiv.org/pdf/2611.11607v1",
    "license": "by",
    "proceedings": "https://neurips.cc/virtual/2026/poster/152569",
    "figures": [
      {
        "category": "模型架构图",
        "image": "monopca",
        "figure": 3,
        "figureNote": "图从输入图像和特征骨干开始，连接二维框、尺寸和朝向等预测分支，再汇入投影校正模块。各分支的输出对应明确的几何量。"
      },
      {
        "category": "任务示意图",
        "image": "monopca-fig2",
        "figure": 2,
        "figureNote": "图把相机、可见前表面和物体中心画在同一投影几何里。对照不同深度定义，可以看出用二维框高反推距离时，为什么容易把物体中心估得过近。"
      }
    ]
  },
  {
    "title": "Virtual Task Prompting for Multi-Task Scene Understanding",
    "conference": "NeurIPS",
    "year": 2026,
    "authors": "Wang et al.",
    "abstract": "VTP 用共享的虚拟任务状态支持多种场景理解任务。每层通过可学习的路由读取任务相关组合，与图像特征交互后再写回共享状态。",
    "source": "https://arxiv.org/abs/2611.11041v1",
    "pdf": "https://arxiv.org/pdf/2611.11041v1",
    "license": "by",
    "proceedings": "https://neurips.cc/virtual/2026/poster/154323",
    "figures": [
      {
        "category": "方法流程图",
        "image": "virtual-task-prompting",
        "figure": 1,
        "figureNote": "图并列展示基线和 VTP 的处理流程。沿 VTP 一栏阅读，可以追踪虚拟任务状态如何在每层被读取、处理并写回。"
      },
      {
        "category": "定性结果对比图",
        "image": "virtual-task-prompting-fig2",
        "figure": 2,
        "figureNote": "列方向固定不同的场景理解任务，行方向对齐各方法与参考标注。横向能看任务覆盖，纵向能检查分割边界、显著区域等细节的差别。"
      }
    ]
  },
  {
    "title": "ORCA: Hunting Compositional Failures in Text-to-Image Diffusion",
    "conference": "NeurIPS",
    "year": 2026,
    "authors": "Hemmat et al.",
    "abstract": "ORCA 针对扩散模型在颜色、物体数量和空间关系等组合指令上的错误，用文本条件构造低秩视觉目标，帮助训练时的扩散潜变量对齐组合语义。",
    "source": "https://arxiv.org/abs/2610.09841v2",
    "pdf": "https://arxiv.org/pdf/2610.09841v2",
    "license": "by",
    "proceedings": "https://neurips.cc/virtual/2026/poster/154803",
    "figures": [
      {
        "category": "方法流程图",
        "image": "orca-diffusion",
        "figure": 1,
        "figureNote": "左侧画出输入和文本编码，中央标明投影器如何给扩散模型提供训练约束，右侧用曲线展示训练进度。把训练信号与推理路径分开，更容易解释额外计算发生在哪个阶段。"
      },
      {
        "category": "模型架构图",
        "image": "orca-diffusion-table5",
        "label": "表 5 重绘",
        "figureNote": "据原文表 5 重绘。T5 向量先投到 CLIP 空间，取残差后送入两层 MLP，再用 QR 分解得到正交基。下方单独标出由冻结 DINOv2 特征预计算的 PCA 目标。",
        "source": "https://arxiv.org/pdf/2610.09841v2#page=16"
      }
    ]
  },
  {
    "title": "Click3R: Interactive Stereo 3D Reconstruction with Sparse Correspondence Clicks",
    "conference": "NeurIPS",
    "year": 2026,
    "authors": "Gu et al.",
    "abstract": "Click3R 让用户通过少量跨图像对应点修正双目三维重建。模型把点击作为几何约束，处理低重叠、重复纹理等容易让自动重建出错的场景。",
    "figures": [
      {
        "category": "任务示意图",
        "image": "click3r",
        "figure": 1,
        "figureNote": "图先给出图像对与彩色点击，再展示自动重建与加入点击后的结果。任务输入、用户反馈和输出依次排列，清楚交代交互式重建的操作方式。"
      },
      {
        "category": "模型架构图",
        "image": "click3r-architecture",
        "figure": 2,
        "figureNote": "两张输入图像用共享权重的 ViT 编码。用户点击的对应点经标记化后进入两侧的适配器，更新送往解码器的特征。图用上下对称的布局，把两路输入如何汇成三维重建结果画清楚。"
      }
    ],
    "source": "https://arxiv.org/abs/2611.12875v1",
    "pdf": "https://arxiv.org/pdf/2611.12875v1",
    "license": "by",
    "proceedings": "https://neurips.cc/virtual/2026/poster/148962"
  },
  {
    "title": "Matrix3D: Large Photogrammetry Model All-in-One",
    "conference": "CVPR",
    "year": 2025,
    "authors": "Lu et al.",
    "abstract": "Matrix3D 用同一多模态扩散 Transformer 处理相机位姿估计、深度预测和新视角合成。训练时屏蔽部分模态，使图像、位姿和深度标签不齐全的数据也能使用。",
    "source": "https://arxiv.org/abs/2502.07685",
    "pdf": "https://arxiv.org/pdf/2502.07685",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/CVPR2025/html/Lu_Matrix3D_Large_Photogrammetry_Model_All-in-One_CVPR_2025_paper.html",
    "figures": [
      {
        "category": "模型架构图",
        "image": "matrix3d",
        "figure": 1,
        "figureNote": "上方以多视图输入串起模型和三维重建，下方并列展示已知模态和待预测模态的不同组合，适合表现一个模型支持多种任务。"
      },
      {
        "category": "方法流程图",
        "image": "matrix3d-fig2",
        "figure": 2,
        "figureNote": "左侧说明不同模态如何被随机遮盖，右侧展示观测与加噪目标进入不同处理分支。按颜色追踪图像、位姿和深度，可看清一次训练如何利用不完整数据。"
      }
    ]
  },
  {
    "title": "Amodal Depth Anything: Amodal Depth Estimation in the Wild",
    "conference": "ICCV",
    "year": 2025,
    "authors": "Li et al.",
    "abstract": "这项工作估计被遮挡物体的不可见部分与可见部分的相对深度。作者用实例分割数据和合成策略建立训练数据，并利用对齐步骤减少物体与背景的尺度差异。",
    "source": "https://arxiv.org/abs/2412.02336",
    "pdf": "https://arxiv.org/pdf/2412.02336",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/ICCV2025/html/Li_Amodal_Depth_Anything_Amodal_Depth_Estimation_in_the_Wild_ICCV_2025_paper.html",
    "figures": [
      {
        "category": "定性结果对比图",
        "image": "amodal-depth",
        "figure": 1,
        "figureNote": "图中把自然场景与彩色深度图成组展示。固定配色与重复布局让读者快速定位被遮挡的物体，并观察预测延伸到哪些不可见区域。"
      },
      {
        "category": "模型架构图",
        "image": "amodal-depth-fig4",
        "figure": 4,
        "figureNote": "在原有图像编码器前增加掩膜及深度提示等输入通道，再由模型输出目标的不可见部分深度。图将新增条件和保留模块分别标出，便于说明对基础模型的改动。"
      }
    ]
  },
  {
    "title": "HOI-Dyn: Learning Interaction Dynamics for Human-Object Motion Diffusion",
    "conference": "NeurIPS",
    "year": 2025,
    "authors": "Wu et al.",
    "abstract": "HOI-Dyn 把三维人–物交互建模为人的动作驱动物体响应。作者用轻量 Transformer 预测物体响应，并在训练时将预测用于约束运动扩散模型。",
    "source": "https://eprints.whiterose.ac.uk/id/eprint/236948/",
    "pdf": "https://eprints.whiterose.ac.uk/id/eprint/236948/1/NeurIPS_2025_HOI_Dyn__Camera_ready___Copy____deposit.pdf",
    "license": "by",
    "proceedings": "https://proceedings.neurips.cc/paper_files/paper/2025/hash/82cddd1547dd8e3915d1a220f209e714-Abstract-Conference.html",
    "figures": [
      {
        "category": "模型架构图",
        "image": "hoi-dyn",
        "figure": 1,
        "figureNote": "三个子图分别解释条件运动扩散、整体监督关系和物体响应预测。用总图串联两个模块，再用局部子图展开各自输入与输出。"
      },
      {
        "category": "任务示意图",
        "image": "hoi-dyn-fig3",
        "figure": 3,
        "figureNote": "两组连续姿态展示虚拟人物在三维环境中与不同物体交互。固定每组场景并按时间排列，可以清楚交代任务同时涉及人体动作、物体响应和空间约束。"
      }
    ]
  },
  {
    "title": "Step-Calibrated Diffusion for Biomedical Optical Image Restoration",
    "conference": "AAAI",
    "year": 2025,
    "abstract": "生物医学光学图像难以获得成对的低质量与高质量样本。RSCD 用无需配对数据的扩散模型做图像修复，并动态估计还需去噪多少步。作者在图像质量指标和专家盲评中报告了改善。",
    "authors": "Lyu et al.",
    "source": "https://arxiv.org/abs/2403.13680",
    "pdf": "https://arxiv.org/pdf/2403.13680",
    "license": "by-nc-sa",
    "proceedings": "https://ojs.aaai.org/index.php/AAAI/article/view/32635",
    "figures": [
      {
        "category": "方法流程图",
        "image": "rscd",
        "figure": 2,
        "figureNote": "沿时间轴看图，从左侧噪声到右侧修复结果。上方两条箭头分别标出初次估计和中途重新校准，颜色带区分了扩散生成与校准修复两个阶段。"
      },
      {
        "category": "任务示意图",
        "image": "rscd-fig1",
        "figure": 1,
        "figureNote": "每行左边给出一块低质量组织图像，右边给出对应的修复结果。连续展示不同退化场景，可以快速说明任务输入的多样性以及期望恢复的组织细节。"
      }
    ]
  },
  {
    "title": "ViewSRD: 3D Visual Grounding via Structured Multi-View Decomposition",
    "conference": "ICCV",
    "year": 2025,
    "authors": "Huang et al.",
    "abstract": "ViewSRD 把包含多个参照物的三维定位描述拆成更简单的关系语句，并结合多个视角的信息，减少视角变化带来的空间关系歧义。",
    "source": "https://arxiv.org/abs/2507.11261",
    "pdf": "https://arxiv.org/pdf/2507.11261",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/ICCV2025/html/Huang_ViewSRD_3D_Visual_Grounding_via_Structured_Multi-View_Decomposition_ICCV_2025_paper.html",
    "figures": [
      {
        "category": "任务示意图",
        "image": "viewsrd",
        "figure": 1,
        "figureNote": "上半部分用室内场景解释多参照物和视角变化为何容易造成误定位，下半部分用分解后的关系与视角展示如何描述目标。"
      },
      {
        "category": "方法流程图",
        "image": "viewsrd-fig2",
        "figure": 2,
        "figureNote": "先把包含多个参照物的问题拆成单参照物描述，再分别编码文字和多视角场景。沿箭头可追踪两路信息在跨视角模块里怎样汇合，最终定位三维目标。"
      }
    ]
  },
  {
    "title": "VRBench: A Benchmark for Multi-Step Reasoning in Long Narrative Videos",
    "conference": "ICCV",
    "year": 2025,
    "authors": "Yu et al.",
    "abstract": "VRBench 用长叙事视频评估模型的多步推理。标注包含问答、逐步推理依据，以及各步骤对应的视频时间段。",
    "source": "https://arxiv.org/abs/2506.10857",
    "pdf": "https://arxiv.org/pdf/2506.10857",
    "license": "by-nc-sa",
    "proceedings": "https://openaccess.thecvf.com/content/ICCV2025/html/Yu_VRBench_A_Benchmark_for_Multi-Step_Reasoning_in_Long_Narrative_Videos_ICCV_2025_paper.html",
    "figures": [
      {
        "category": "任务示意图",
        "image": "vrbench",
        "figure": 2,
        "figureNote": "图从一段视频和一道问题出发，将时间戳、推理步骤、答案和题型分色排列，让读者快速看懂模型要完成的任务及评测依据。"
      },
      {
        "category": "方法流程图",
        "image": "vrbench-fig1",
        "figure": 1,
        "figureNote": "从长视频筛选开始，经由问题生成和人工审核，最后为推理步骤标注时间范围。图用一个样例贯穿流程，便于区分原视频、评测问题和逐步证据。"
      }
    ]
  },
  {
    "title": "Bokehlicious: Photorealistic Bokeh Rendering with Controllable Apertures",
    "conference": "ICCV",
    "year": 2025,
    "authors": "Seizinger et al.",
    "abstract": "Bokehlicious 用可感知光圈的注意力模块控制散景强度。作者采集 RealBokeh 数据，训练模型从普通图像直接生成不同光圈条件下的背景虚化。",
    "source": "https://arxiv.org/abs/2503.16067",
    "pdf": "https://arxiv.org/pdf/2503.16067",
    "license": "by-nc-sa",
    "proceedings": "https://openaccess.thecvf.com/content/ICCV2025/html/Seizinger_Bokehlicious_Photorealistic_Bokeh_Rendering_with_Controllable_Apertures_ICCV_2025_paper.html",
    "figures": [
      {
        "category": "任务示意图",
        "image": "bokehlicious",
        "figure": 3,
        "figureNote": "每行用同一场景展示从小光圈输入到不同大光圈参考图，列顶标注 f 值。视角和主体保持一致，读者可以集中观察虚化强度与散景形状的变化。"
      },
      {
        "category": "模型架构图",
        "image": "bokehlicious-fig4",
        "figure": 4,
        "figureNote": "图把输入图像和目标光圈值画成两路。光圈条件调节中间的注意力模块，图像特征经编码和解码后生成目标虚化效果。"
      }
    ]
  },
  {
    "title": "HUG: Hierarchical Urban Gaussian Splatting with Block-Based Reconstruction for Large-Scale Aerial Scenes",
    "conference": "ICCV",
    "year": 2025,
    "authors": "Su et al.",
    "abstract": "HUG 将大型航拍城市场景拆成可独立处理的块，为各视角生成可见性掩膜，再通过分层高斯表示重建与融合街区。",
    "source": "https://arxiv.org/abs/2504.16606",
    "pdf": "https://arxiv.org/pdf/2504.16606",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/ICCV2025/html/Su_HUG_Hierarchical_Urban_Gaussian_Splatting_with_Block-Based_Reconstruction_for_Large-Scale_ICCV_2025_paper.html",
    "figures": [
      {
        "category": "方法流程图",
        "image": "hug-splatting",
        "figure": 2,
        "figureNote": "图分两行串起场景分块、掩膜生成、训练视角筛选、分块重建和场景融合。每一步都复用同一个城区示例，减少读者在抽象框图和实际场景之间切换的负担。"
      },
      {
        "category": "模型架构图",
        "image": "hug-splatting-fig3",
        "figure": 3,
        "figureNote": "图把不同八叉树层级的高斯锚点画在同一城市场景里。对照各尺度和视角下的选择结果，可以看出分层表示如何在全局结构和局部细节之间切换。"
      }
    ]
  },
  {
    "title": "Harnessing Vision Foundation Models for High-Performance, Training-Free Open Vocabulary Segmentation",
    "conference": "ICCV",
    "year": 2025,
    "authors": "Shi et al.",
    "abstract": "Trident 用视觉基础模型增强免训练开放词汇分割。它先获得子图像的特征，再用整幅图像的相关性聚合这些特征，以保留局部细节与全局上下文。",
    "source": "https://arxiv.org/abs/2411.09219",
    "pdf": "https://arxiv.org/pdf/2411.09219",
    "license": "by",
    "proceedings": "https://openaccess.thecvf.com/content/ICCV2025/html/Shi_Harnessing_Vision_Foundation_Models_for_High-Performance_Training-Free_Open_Vocabulary_Segmentation_ICCV_2025_paper.html",
    "figures": [
      {
        "category": "模型架构图",
        "image": "trident-seg",
        "figure": 4,
        "figureNote": "图上方和下方分别展示整图与子图的处理路径，右侧展示特征融合后的分割输出。两条路径用不同图像尺度区分，能清楚表达双路输入如何汇合。"
      },
      {
        "category": "任务示意图",
        "image": "trident-seg-fig2",
        "figure": 2,
        "figureNote": "图在同一幅图像上依次展示不同输入分辨率和切片方式的分割表现。用相同位置的局部视图说明开放词汇分割面临的任务难点：小物体细节和全局语义都要保留。"
      }
    ]
  }
];
