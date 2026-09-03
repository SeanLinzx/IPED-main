const PROJECTS = [
  {
    id: "gesture",
    category: "industry",
    cover: "./assets/projects/gesture/cover.jpg",
    thumb: "./assets/projects/gesture/thumb.jpg",
    gallery: [],
    video: "",
    zh: {
      title: "Color OS手机端常用手势交互规范研究",
      body: "建立手势定义、阈值与评价模型，并写入系统基础设定",
      detail:
        "面向全面屏与多任务场景，梳理手机端常态手势的易用性、一致性与误触问题。通过行业调研、人因实验和参数验证，形成覆盖手势定义、分类、阈值、评价与设计原则的规范，并应用于 Color OS 系统基础设定。",
    },
    en: {
      title: "ColorOS Common Gesture Guidelines",
      body: "gesture definitions, thresholds and evaluation models written into system settings",
      detail:
        "A human-factors study of everyday phone gestures under full-screen and multitasking use. The work produced definitions, thresholds and evaluation principles now used in ColorOS system settings.",
    },
  },
  {
    id: "motion",
    category: "industry",
    cover: "./assets/projects/motion/cover.jpg",
    thumb: "./assets/projects/motion/thumb.jpg",
    gallery: [],
    video: "",
    zh: {
      title: "手势交互动效人因数据研究",
      body: "用实验拟合差异化触发阈值，让手势从千人一面转向千人千面",
      detail:
        "联合开展水平滑动与垂直多任务实验，采集轨迹、速度与主观评价，建立用户行为模型与差异化触发阈值，为手势动效从“千人一面”转向“千人千面”提供数据依据。",
    },
    en: {
      title: "Gesture Motion Human Factors Study",
      body: "personalized trigger thresholds fitted from experiment data",
      detail:
        "Horizontal and vertical gesture experiments produced behavior models and differentiated trigger thresholds, so motion feedback can adapt to different users.",
    },
  },
  {
    id: "ai-insight",
    category: "industry",
    cover: "./assets/projects/ai-insight/cover.jpg",
    thumb: "./assets/projects/ai-insight/thumb.jpg",
    gallery: [
      "./assets/projects/ai-insight/g1.jpg",
      "./assets/projects/ai-insight/g2.jpg",
      "./assets/projects/ai-insight/g3.jpg",
    ],
    video: "",
    zh: {
      title: "AI产品用户洞察研究",
      body: "围绕超级助手、影像与知识服务，为系统级AI体验提供依据",
      detail:
        "从行业报告、竞品与用户访谈出发，识别 AI 超级助手、影像与知识服务中的需求与痛点，形成画像、机会点与概念方案，部分洞察已用于 ColorOS「小布记忆」相关功能。",
    },
    en: {
      title: "AI Product User Insight",
      body: "user evidence for system-level AI around assistant, imaging and knowledge services",
      detail:
        "Interviews and competitive analysis around AI assistants, imaging and knowledge services produced opportunity maps and concepts later used in ColorOS features.",
    },
  },
  {
    id: "usability",
    category: "industry",
    cover: "./assets/projects/usability/cover.jpg",
    thumb: "./assets/projects/usability/thumb.jpg",
    gallery: [],
    video: "",
    zh: {
      title: "产品易用性感知项目",
      body: "构建智能产品智能感评价体系与大模型自动评估流程",
      detail:
        "针对智能服务缺少统一评价标准的问题，建立智能感影响因子库、量表与评估流程，并探索基于大模型的自动评估方法，支持图文智能服务的体验迭代。",
    },
    en: {
      title: "Product Usability Perception",
      body: "an intelligence-perception evaluation system and LLM-based auto-assessment",
      detail:
        "A factor library, scales and an LLM-assisted assessment flow for measuring how intelligent a product feels across text and image services.",
    },
  },
  {
    id: "auto-ux",
    category: "industry",
    cover: "./assets/projects/auto-ux/cover.jpg",
    thumb: "./assets/projects/auto-ux/thumb.jpg",
    gallery: [],
    video: "./assets/projects/auto-ux/video.mp4",
    zh: {
      title: "自动化用户体验研究工具",
      body: "用多模态大模型完成界面理解、角色模拟与自动测评",
      detail:
        "面向快速迭代的产品验证需求，搭建基于多模态大模型的自动化 UX 研究工具，覆盖指标配置、角色生成、自动测评与报告导出。企业实测中单轮成本可压至百元以内，并获得 2025 年 OPPO 产学研优秀合作伙伴。",
    },
    en: {
      title: "Automated UX Research Tool",
      body: "multimodal LLMs for GUI understanding, persona simulation and automated evaluation",
      detail:
        "A multimodal-LLM platform for GUI understanding, persona simulation and automated evaluation, used in industry pilots with a much lower cost per round.",
    },
  },
  {
    id: "vivo-hf",
    category: "industry",
    cover: "./assets/projects/vivo-hf/cover.jpg",
    thumb: "./assets/projects/vivo-hf/thumb.jpg",
    gallery: [
      "./assets/projects/vivo-hf/g1.jpg",
      "./assets/projects/vivo-hf/g2.jpg",
      "./assets/projects/vivo-hf/g3.jpg",
    ],
    video: "",
    zh: {
      title: "构建人因研究全景框架",
      body: "整合智能手机软硬件人因研究，形成全景图与可视化平台",
      detail:
        "从人、机、环境整合智能手机软硬件人因研究，通过文献计量、专家共创与可视化原型，形成全景图、研究数据库与后续课题规划。",
    },
    en: {
      title: "Smartphone Human Factors Panorama",
      body: "a panorama and visualization platform integrating hardware and software HF research",
      detail:
        "A panorama that integrates hardware and software human-factors research for smartphones, with a knowledge base and visualization prototype.",
    },
  },
  {
    id: "vatti-hw",
    category: "industry",
    cover: "./assets/projects/vatti-hw/cover.jpg",
    thumb: "./assets/projects/vatti-hw/thumb.jpg",
    gallery: [
      "./assets/projects/vatti-hw/g1.jpg",
      "./assets/projects/vatti-hw/g2.jpg",
      "./assets/projects/vatti-hw/g3.jpg",
      "./assets/projects/vatti-hw/g4.jpg",
    ],
    video: "",
    zh: {
      title: "华帝硬件UX体验创新",
      body: "探索未来厨房的厨电硬件交互概念与人机技术路线",
      detail:
        "围绕厨电隐藏化与智能化趋势，梳理前沿交互技术与用户需求，提出硬件 UX 概念、实体原型与人机交互技术路线图，并用专家与用户评价模型筛选方向。",
    },
    en: {
      title: "Vatti Hardware UX Innovation",
      body: "future kitchen appliance interaction concepts and a human-machine roadmap",
      detail:
        "Concept directions, physical prototypes and a human-machine roadmap for next-generation kitchen appliance interaction.",
    },
  },
  {
    id: "vatti-basket",
    category: "industry",
    cover: "./assets/projects/vatti-basket/cover.jpg",
    thumb: "./assets/projects/vatti-basket/thumb.jpg",
    gallery: [],
    video: "",
    zh: {
      title: "华帝洗碗机碗篮体验设计",
      body: "按中式餐具习惯重构碗篮结构，方案已进入量产",
      detail:
        "针对中式餐具深碗、异形厨具与高密度摆放，通过调研与摆放实验形成设计原则，并产出可量产的碗篮方案，已应用于企业产品。",
    },
    en: {
      title: "Vatti Dishwasher Basket Design",
      body: "basket structures for Chinese tableware, already in mass production",
      detail:
        "Basket structures designed around Chinese tableware habits, validated by loading experiments and already in mass production.",
    },
  },
  {
    id: "vatti-oasis",
    category: "industry",
    cover: "./assets/projects/vatti-oasis/cover.jpg",
    thumb: "./assets/projects/vatti-oasis/thumb.jpg",
    gallery: [
      "./assets/projects/vatti-oasis/g1.jpg",
      "./assets/projects/vatti-oasis/g2.jpg",
      "./assets/projects/vatti-oasis/g3.jpg",
      "./assets/projects/vatti-oasis/g4.jpg",
    ],
    video: "./assets/projects/vatti-oasis/video.mp4",
    zh: {
      title: "华帝绿洲生活形态趋势创新研究",
      body: "洞察年轻人厨房生活，提出四类未来厨电场景",
      detail:
        "以年轻人厨房生活形态为核心，结合人类学调研与趋势分析，提出“都市小灶、轻岛社交圈、氛围感厨房、亲享厨趣”四类场景，并获得 2025 年华帝企业战略伙伴奖。",
    },
    en: {
      title: "Vatti Oasis Lifestyle Innovation",
      body: "four future kitchen scenes from young users' cooking lives",
      detail:
        "Lifestyle research that led to four future kitchen scenes for young users, later recognized as a Vatti strategic partnership project.",
    },
  },
  {
    id: "nssfc",
    category: "grant",
    cover: "./assets/projects/nssfc/cover.jpg",
    thumb: "./assets/projects/nssfc/thumb.jpg",
    gallery: [],
    video: "",
    zh: {
      title: "具身智能下产品触觉舒适性评价与设计研究",
      body: "构建触觉舒适性理论体系与实体界面设计策略",
      detail:
        "国家社科基金课题。从适配舒适性、表面舒适性、行为顺从性与社会文化维度，建立具身智能产品的触觉舒适性评价体系与实体界面设计策略。",
    },
    en: {
      title: "Tactile Comfort for Embodied AI Products",
      body: "a theory of tactile comfort and tangible interface design strategies",
      detail:
        "A National Social Science Fund project on tactile comfort theory and tangible interface strategies for embodied-AI products.",
    },
  },
  {
    id: "moe-ich",
    category: "grant",
    cover: "./assets/projects/moe-ich/cover.jpg",
    thumb: "./assets/projects/moe-ich/thumb.jpg",
    gallery: [],
    video: "",
    zh: {
      title: "面向触觉体验的跨文化非遗共创方法研究",
      body: "以长沙窑为对象，开发可传递经验性知识的触觉共创装置",
      detail:
        "教育部人文课题。以长沙窑烧制技艺为对象，研究跨文化非遗共创中的触觉经验传递，并开发力反馈与温度模拟装置，用于国际共创工坊。",
    },
    en: {
      title: "Cross-cultural ICH Co-creation through Touch",
      body: "tactile devices that transmit tacit knowledge of Changsha kiln",
      detail:
        "A Ministry of Education project that turns Changsha kiln making knowledge into tactile devices for cross-cultural co-creation.",
    },
  },
  {
    id: "yuelu",
    category: "grant",
    cover: "./assets/projects/yuelu/cover.jpg",
    thumb: "./assets/projects/yuelu/thumb.jpg",
    gallery: [],
    video: "./assets/projects/yuelu/video.mp4",
    zh: {
      title: "面向智能终端场景的人机交互技术创新和产业应用",
      body: "贯通智能通讯、出行与健康的人因指标、建模与验证闭环",
      detail:
        "岳麓山工业创新中心专项。构建可复用的人因指标与建模方法，并在智能通讯热舒适、智慧出行边缘动效与智慧健康辅具等场景形成可验证的技术链条。",
    },
    en: {
      title: "HCI Innovation for Intelligent Terminals",
      body: "a closed loop of metrics, modeling and validation across comms, mobility and health",
      detail:
        "A Yuelu Mountain special project linking human-factors metrics, modeling and validation across communication, mobility and health terminals.",
    },
  },
  {
    id: "platform",
    category: "grant",
    cover: "./assets/projects/platform/cover.jpg",
    thumb: "./assets/projects/platform/thumb.jpg",
    gallery: [],
    video: "",
    zh: {
      title: "面向智能人机交互的工业设计数据平台与设计工具系统研究",
      body: "提出无缝多通道体验框架，并落地卡牌工具与场景规范",
      detail:
        "建立“时间—认知”与“空间—认知”的无缝多通道体验框架，开发卡牌式设计工具，并在智慧睡眠、智能厨电与移动终端手势等场景形成可落地规范。",
    },
    en: {
      title: "Industrial Design Data Platform and Design Tools",
      body: "a seamless multimodal experience framework, card tools and scene guidelines",
      detail:
        "A seamless multimodal experience framework with card-based tools and applied guidelines for sleep, kitchen and mobile gesture scenes.",
    },
  },
  {
    id: "engine",
    category: "studio",
    cover: "./assets/projects/engine/cover.jpg",
    thumb: "./assets/projects/engine/thumb.jpg",
    gallery: [],
    video: "",
    zh: {
      title: "Design Engine 设计引擎",
      body: "国际工业设计智库资源与跨时区协同育人平台",
      detail:
        "建设国际工业设计智库与协同平台，引进国际专家开展讲座、写作工作坊与大师课，沉淀讲座视频、慕课与案例资源，服务跨时区混合育人。",
    },
    en: {
      title: "Design Engine",
      body: "an international industrial design think tank and cross-timezone teaching platform",
      detail:
        "An international think-tank and teaching platform that hosts lectures, writing workshops and shared design resources across time zones.",
    },
  },
  {
    id: "smec",
    category: "other",
    cover: "./assets/projects/smec/cover.jpg",
    thumb: "./assets/projects/smec/thumb.jpg",
    gallery: [],
    video: "",
    zh: {
      title: "SMEC",
      body: "将无缝多模态体验理论转化为卡片式参与式设计工具",
      detail:
        "把“无缝多模态体验”理论转译为情境、任务与模态卡牌，配合时间与空间画布，支持设计师与用户共同探索复杂场景中的多模态协同。",
    },
    en: {
      title: "SMEC",
      body: "turning Seamless Multimodal Experience theory into participatory design cards",
      detail:
        "Participatory design cards that turn Seamless Multimodal Experience theory into shared exploration of complex interaction scenes.",
    },
  },
];

const HOME_THEMES = [
  {
    id: "tangible",
    cover: "./assets/projects/nssfc/cover.jpg",
    projects: ["nssfc", "moe-ich", "smec"],
    zh: { title: "可触交互", intro: "触觉舒适性、非遗共创与多模态参与式工具。" },
    en: { title: "Tangible Interaction", intro: "Tactile comfort, ICH co-creation and multimodal tools." },
  },
  {
    id: "product",
    cover: "./assets/projects/gesture/cover.jpg",
    projects: ["gesture", "motion", "usability", "auto-ux"],
    zh: { title: "智能产品界面", intro: "手势规范、动效阈值、易用性与自动化测评。" },
    en: { title: "Intelligent Product Interface", intro: "Gestures, motion thresholds, usability and automated UX." },
  },
  {
    id: "humanfactors",
    cover: "./assets/projects/vivo-hf/cover.jpg",
    projects: ["vivo-hf", "yuelu", "ai-insight"],
    zh: { title: "人因与体验", intro: "人因全景、智能终端场景与系统级 AI 洞察。" },
    en: { title: "Human Factors", intro: "HF panorama, terminal scenes and system-level AI insight." },
  },
  {
    id: "scene",
    cover: "./assets/projects/vatti-oasis/cover.jpg",
    projects: ["vatti-oasis", "vatti-hw", "vatti-basket", "platform", "engine"],
    zh: { title: "生活与场景", intro: "厨电生活形态、硬件创新、数据平台与国际协同。" },
    en: { title: "Life and Scenes", intro: "Kitchen life, hardware innovation, data platforms and teaching." },
  },
];

const RESEARCH_CATEGORIES = [
  { id: "industry", zh: "校企合作", en: "Industry Collaboration" },
  { id: "grant", zh: "科研课题", en: "Funded Research" },
  { id: "studio", zh: "教学与工作坊", en: "Teaching & Workshops" },
  { id: "other", zh: "其他研究项目", en: "Other Research" },
];

function getProject(id) {
  return PROJECTS.find((item) => item.id === id);
}
