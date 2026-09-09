const PROJECTS = [
  {
    id: "gesture",
    category: "industry",
    year: "2024–2025",
    yearStart: 2024,
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
    year: "2024–2025",
    yearStart: 2024,
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
    year: "2024–2025",
    yearStart: 2024,
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
    year: "2024–2025",
    yearStart: 2024,
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
    year: "2025",
    yearStart: 2025,
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
    year: "2024–2025",
    yearStart: 2024,
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
    year: "2024–2025",
    yearStart: 2024,
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
    year: "2024–2025",
    yearStart: 2024,
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
    year: "2025",
    yearStart: 2025,
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
    year: "2024–2026",
    yearStart: 2024,
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
    year: "2023–2025",
    yearStart: 2023,
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
    year: "2025",
    yearStart: 2025,
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
    year: "2023–2025",
    yearStart: 2023,
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
    year: "2023–2025",
    yearStart: 2023,
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
    year: "2023",
    yearStart: 2023,
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
    cover: "./assets/home/focus-01.png",
    projects: ["nssfc", "moe-ich", "smec"],
    zh: { title: "触觉交互研究", intro: "触觉舒适性、非遗共创与多模态参与式工具。" },
    en: { title: "Tactile Interaction Research", intro: "Tactile comfort, ICH co-creation and multimodal tools." },
  },
  {
    id: "humanfactors",
    cover: "./assets/home/focus-02.png",
    projects: ["vivo-hf", "yuelu", "gesture", "motion"],
    zh: { title: "人机协同与智能设计", intro: "人因全景、手势规范、动效阈值与智能终端场景。" },
    en: { title: "Human–AI Collaboration and Intelligent Design", intro: "HF panorama, gesture guidelines, motion thresholds and intelligent terminals." },
  },
  {
    id: "aiux",
    cover: "./assets/home/focus-03.png",
    projects: ["ai-insight", "auto-ux", "usability"],
    zh: { title: "用户体验与人工智能", intro: "系统级 AI 洞察、自动化测评与智能感评价。" },
    en: { title: "User Experience and Artificial Intelligence", intro: "System-level AI insight, automated evaluation and intelligence perception." },
  },
  {
    id: "scene",
    cover: "./assets/home/focus-04.png",
    projects: ["vatti-oasis", "vatti-hw", "vatti-basket", "platform", "engine"],
    zh: { title: "智能家电与生活场景研究", intro: "厨电体验、生活场景、数据平台与国际协同。" },
    en: { title: "Smart Appliances and Living Scenes", intro: "Kitchen experience, living scenes, data platforms and teaching." },
  },
];

const RESEARCH_CATEGORIES = [
  {
    id: "industry",
    zh: "校企合作",
    en: "Industry Collaboration",
    descZh: "连接产业与学术，推动技术落地与创新应用。",
    descEn: "Connecting industry and academia to land technology in real products.",
    keys: ["INDUSTRY", "×", "ACADEMIA", "×", "REAL-WORLD IMPACT"],
    art: "metal",
  },
  {
    id: "grant",
    zh: "科研课题",
    en: "Research Projects",
    descZh: "面向前沿问题，探索触觉与智能交互的新理论、新方法与新系统。",
    descEn: "Exploring new theories, methods and systems for haptic and intelligent interaction.",
    keys: ["IDEAS", "DRIVE", "CHANGE"],
    art: "wave",
  },
  {
    id: "studio",
    zh: "教学与工作坊",
    en: "Teaching & Workshops",
    descZh: "通过课程、工作坊与实践项目，培养面向未来的跨学科人才。",
    descEn: "Training interdisciplinary talent through courses, workshops and studio practice.",
    keys: ["LEARN", "×", "MAKE", "×", "SHARE"],
    art: "studio",
  },
  {
    id: "other",
    zh: "其他研究项目",
    en: "Other Research Projects",
    descZh: "面向更广泛的探索，记录实验性的想法与持续进行的研究实践。",
    descEn: "A wider set of experiments and ongoing research practices.",
    keys: ["SMALL", "IDEAS", "BIG", "POTENTIAL"],
    art: "glass",
  },
];

const PUBLICATIONS = [
  {
    "id": "thermal-illusion-for-wearables-effects-o-2026",
    "year": "2026",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.54941/ahfe1007450",
    "cover": "",
    "zh": {
      "title": "Thermal illusion for wearables: Effects of vibrotactile parameters and placement on thermal masking and comfort.",
      "body": "Zheng, J., Wang, W., Sun, G., & Zheng, R. (2026). Thermal illusion for wearables: Effects of vibrotactile parameters and placement on thermal masking and comfort. In Z. Li (Ed.), *Human factors and ergonomics in design* (AHFE Open Access, Vol. 210). AHFE International."
    },
    "en": {
      "title": "Thermal illusion for wearables: Effects of vibrotactile parameters and placement on thermal masking and comfort.",
      "body": "Zheng, J., Wang, W., Sun, G., & Zheng, R. (2026). Thermal illusion for wearables: Effects of vibrotactile parameters and placement on thermal masking and comfort. In Z. Li (Ed.), *Human factors and ergonomics in design* (AHFE Open Access, Vol. 210). AHFE International."
    }
  },
  {
    "id": "investigating-common-hands-free-modaliti-2026",
    "year": "2026",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.1007/s10055-026-01448-6",
    "cover": "",
    "zh": {
      "title": "Investigating common hands-free modalities in supporting seamless cross-reality multitasking",
      "body": "Song, F., Gao, X., Zeng, W., & Wang, W. (2026). Investigating common hands-free modalities in supporting seamless cross-reality multitasking. *Virtual Reality*."
    },
    "en": {
      "title": "Investigating common hands-free modalities in supporting seamless cross-reality multitasking",
      "body": "Song, F., Gao, X., Zeng, W., & Wang, W. (2026). Investigating common hands-free modalities in supporting seamless cross-reality multitasking. *Virtual Reality*."
    }
  },
  {
    "id": "preliminary-explorations-of-generative-a-2026",
    "year": "2026",
    "type": "论文",
    "venue": "CHI EA ’26",
    "authors": "Bryan-Kinns, N., Zhang, D., Li, H., He, M., Yuan, X., Zhao, X., Pavlov, I., Yang, Y., & Wang, S.",
    "link": "https://doi.org/10.1145/3772363.3798663",
    "cover": "",
    "zh": {
      "title": "生成式 AI 与花瑶挑花非遗具身刺绣的初步探索",
      "body": "Bryan-Kinns et al. (2026). Extended Abstracts of CHI EA ’26. ACM."
    },
    "en": {
      "title": "Preliminary explorations of generative AI and the embodied embroidery of Huayao intangible cultural heritage",
      "body": "Bryan-Kinns et al. (2026). Extended Abstracts of CHI EA ’26. ACM."
    }
  },
  {
    "id": "designing-emotionally-resonant-thermal-i-2026",
    "year": "2026",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://dl.designresearchsociety.org/drs-conference-papers/drs2026/researchpapers/184/",
    "cover": "",
    "zh": {
      "title": "Designing emotionally resonant thermal interactions for public speaking support.",
      "body": "Sun, G., Wang, W., and Zheng, R. (2026) Designing emotionally resonant thermal interactions for public speaking support, in Simeone, L., Gray, C. M., Verhoeven, A., de Götzen, A., Bakırlıoğlu, Y., Zohar, H., Stead, M., and Buwert, P. (eds.), DRS2026: Edinburgh, 8–12 June, Edinburgh, United Kingdom. https://doi.org/10.21606/drs.2026.1011"
    },
    "en": {
      "title": "Designing emotionally resonant thermal interactions for public speaking support.",
      "body": "Sun, G., Wang, W., and Zheng, R. (2026) Designing emotionally resonant thermal interactions for public speaking support, in Simeone, L., Gray, C. M., Verhoeven, A., de Götzen, A., Bakırlıoğlu, Y., Zohar, H., Stead, M., and Buwert, P. (eds.), DRS2026: Edinburgh, 8–12 June, Edinburgh, United Kingdom. https://doi.org/10.21606/drs.2026.1011"
    }
  },
  {
    "id": "towards-praxis-genai-exploring-generativ-2026",
    "year": "2026",
    "type": "论文",
    "venue": "ACM Creativity & Cognition",
    "authors": "Bryan-Kinns, N., Zhang, D., Li, H., He, M., Yuan, X., Zhao, X., Pavlov, I., Yang, Y., & Wang, S.",
    "link": "https://doi.org/10.1145/3803784.3807557",
    "cover": "",
    "zh": {
      "title": "面向花瑶挑花工艺实践的生成式 AI 工具探索",
      "body": "Bryan-Kinns et al. (2026). Proceedings of the 2026 Conference on Creativity and Cognition. ACM."
    },
    "en": {
      "title": "Towards Praxis GenAI: Exploring generative AI tools for Huayao embroidery craft practice",
      "body": "Bryan-Kinns et al. (2026). Proceedings of the 2026 Conference on Creativity and Cognition. ACM."
    }
  },
  {
    "id": "exploring-enhanced-strategies-for-emotio-2025",
    "year": "2025",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.1016/j.ijhcs.2025.103453",
    "cover": "",
    "zh": {
      "title": "Exploring enhanced strategies for emotionally-perceptive music recommendations in mid-day sleep induction scenarios.",
      "body": "Yang, S., Zhang, H., Zheng, R., Lin, Z., Shan, H., & Zhang, J. (2025). Exploring enhanced strategies for emotionally-perceptive music recommendations in mid-day sleep induction scenarios. *International Journal of Human-Computer Studies, 197*, 103453."
    },
    "en": {
      "title": "Exploring enhanced strategies for emotionally-perceptive music recommendations in mid-day sleep induction scenarios.",
      "body": "Yang, S., Zhang, H., Zheng, R., Lin, Z., Shan, H., & Zhang, J. (2025). Exploring enhanced strategies for emotionally-perceptive music recommendations in mid-day sleep induction scenarios. *International Journal of Human-Computer Studies, 197*, 103453."
    }
  },
  {
    "id": "a-review-of-user-experience-evaluation-f-2025",
    "year": "2025",
    "type": "论文",
    "venue": "包装工程",
    "authors": "Zhu, X., Wang, W., Yang, Y., & Du, L.",
    "link": "https://doi.org/10.19554/j.cnki.1001-3563.2025.24.009",
    "cover": "",
    "zh": {
      "title": "移动端生成式AI产品用户体验评估研究综述",
      "body": "Zhu, X., Wang, W., Yang, Y., & Du, L. (2025). 包装工程, 46(24), 100–114."
    },
    "en": {
      "title": "A review of user experience evaluation for mobile generative AI products",
      "body": "Zhu, X., Wang, W., Yang, Y., & Du, L. (2025). 包装工程, 46(24), 100–114."
    }
  },
  {
    "id": "maintaining-balanced-conflict-proactive--2025",
    "year": "2025",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.1145/3706598.3713457",
    "cover": "",
    "zh": {
      "title": "Maintaining \"balanced\" conflict: Proactive intervention strategies of AI voice agents in online collaboration of temporary design teams.",
      "body": "Chen, X., Yuan, X., Zhang, H., Zheng, R., & Wei, W. (2025). Maintaining \"balanced\" conflict: Proactive intervention strategies of AI voice agents in online collaboration of temporary design teams. In *Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25)* (Article 907, pp. 1–19). Association for Computing Machinery."
    },
    "en": {
      "title": "Maintaining \"balanced\" conflict: Proactive intervention strategies of AI voice agents in online collaboration of temporary design teams.",
      "body": "Chen, X., Yuan, X., Zhang, H., Zheng, R., & Wei, W. (2025). Maintaining \"balanced\" conflict: Proactive intervention strategies of AI voice agents in online collaboration of temporary design teams. In *Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25)* (Article 907, pp. 1–19). Association for Computing Machinery."
    }
  },
  {
    "id": "investigating-diverse-trace-motion-patte-2025",
    "year": "2025",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.1016/j.ijhcs.2025.103716",
    "cover": "",
    "zh": {
      "title": "Investigating diverse Trace motion patterns as informative cues in the far periphery",
      "body": "Song, F., Gao, X., & Wang, W. (2025). Investigating diverse Trace motion patterns as informative cues in the far periphery. *International Journal of Human-Computer Studies, 208*, 103716."
    },
    "en": {
      "title": "Investigating diverse Trace motion patterns as informative cues in the far periphery",
      "body": "Song, F., Gao, X., & Wang, W. (2025). Investigating diverse Trace motion patterns as informative cues in the far periphery. *International Journal of Human-Computer Studies, 208*, 103716."
    }
  },
  {
    "id": "exploring-user-interactions-with-commerc-2025",
    "year": "2025",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.1007/s12193-025-00456-1",
    "cover": "",
    "zh": {
      "title": "Exploring User Interactions with Commercial Machines via Real-world Application Logs in the Lab",
      "body": "Song, F., Wang, W., Zhou, D., Bryan-Kinns, N., Zhang, J., Chen, Q., & Du, L. (2025). Exploring user interactions with commercial machines via real-world application logs in the lab. *Journal on Multimodal User Interfaces, 19*, 253–269."
    },
    "en": {
      "title": "Exploring User Interactions with Commercial Machines via Real-world Application Logs in the Lab",
      "body": "Song, F., Wang, W., Zhou, D., Bryan-Kinns, N., Zhang, J., Chen, Q., & Du, L. (2025). Exploring user interactions with commercial machines via real-world application logs in the lab. *Journal on Multimodal User Interfaces, 19*, 253–269."
    }
  },
  {
    "id": "smec-a-card-based-participatory-design-t-2024",
    "year": "2024",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.1080/14606925.2024.2420154",
    "cover": "",
    "zh": {
      "title": "SMEC: A card-based participatory design tool for seamless multimodal experience innovation in connected and autonomous vehicles",
      "body": "Song, F., & Wang, W. (2024). SMEC: A card-based participatory design tool for seamless multimodal experience innovation in connected and autonomous vehicles. *The Design Journal*."
    },
    "en": {
      "title": "SMEC: A card-based participatory design tool for seamless multimodal experience innovation in connected and autonomous vehicles",
      "body": "Song, F., & Wang, W. (2024). SMEC: A card-based participatory design tool for seamless multimodal experience innovation in connected and autonomous vehicles. *The Design Journal*."
    }
  },
  {
    "id": "waves-push-me-to-slumberland-reducing-pr-2024",
    "year": "2024",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.1145/3613904.3642736",
    "cover": "",
    "zh": {
      "title": "\"Waves push me to slumberland\": Reducing pre-sleep stress through spatio-temporal tactile displaying of music.",
      "body": "Zhang, H., Zheng, R., Yang, S., Wei, W., Shan, H., & Zhang, J. (2024). \"Waves push me to slumberland\": Reducing pre-sleep stress through spatio-temporal tactile displaying of music. In *Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (CHI '24)* (Article 995, pp. 1–15). Association for Computing Machinery."
    },
    "en": {
      "title": "\"Waves push me to slumberland\": Reducing pre-sleep stress through spatio-temporal tactile displaying of music.",
      "body": "Zhang, H., Zheng, R., Yang, S., Wei, W., Shan, H., & Zhang, J. (2024). \"Waves push me to slumberland\": Reducing pre-sleep stress through spatio-temporal tactile displaying of music. In *Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (CHI '24)* (Article 995, pp. 1–15). Association for Computing Machinery."
    }
  },
  {
    "id": "construction-and-practice-of-emotionally-2024",
    "year": "2024",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://kns.cnki.net/kcms2/article/abstract?v=4Kwr3-EHKF5S5FxcmC3G2DJKRjfiaM-wT0TZZciIxXQsSx84msyms6QKAZcAiGf5nj_-Nj4wwuLIBOTLtBRtXVlwjfjKaH9fesd_FEAdqs2y77abbcDNNx9G2P8_h0kLucl1eJZij-9TXfVTbiT5sdmhI5CWvK3y_UxCpSTQf9w=&uniplatform=NZKPT",
    "cover": "",
    "zh": {
      "title": "情感感知的助眠音乐推荐策略构建与实践．",
      "body": "张卉,杨诗娆,郑瑞啸,梁欣婕,陈心惠,魏莞懿．情感感知的助眠音乐推荐策略构建与实践[J]．包装工程,2024,45(12):38-48"
    },
    "en": {
      "title": "情感感知的助眠音乐推荐策略构建与实践．",
      "body": "张卉,杨诗娆,郑瑞啸,梁欣婕,陈心惠,魏莞懿．情感感知的助眠音乐推荐策略构建与实践[J]．包装工程,2024,45(12):38-48"
    }
  },
  {
    "id": "evidence-based-uncertainty-quantificatio-2023",
    "year": "2023",
    "type": "论文",
    "venue": "Applied Mathematical Modelling",
    "authors": "Li, Z., Cao, L., Huo, M., et al.",
    "link": "",
    "cover": "",
    "zh": {
      "title": "基于证据理论的双金属复合材料弯曲性能不确定性量化",
      "body": "Li, Z., Cao, L., Huo, M., et al. (2023). Applied Mathematical Modelling, 121, 59–74. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Evidence-based uncertainty quantification for bending properties of bimetal composites",
      "body": "Li, Z., Cao, L., Huo, M., et al. (2023). Applied Mathematical Modelling, 121, 59–74. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "how-to-enhance-the-social-discourse-powe-2023",
    "year": "2023",
    "type": "论文",
    "venue": "2022国际艺术与设计博士生论坛论文集 / 中国青年出版社",
    "authors": "栾之珑",
    "link": "",
    "cover": "",
    "zh": {
      "title": "如何提升设计的社会话语权：初探将设计伦理与实践应用相结合的6C分析模型",
      "body": "栾之珑. 收入《“向多样的世界提问”——2022国际艺术与设计博士生论坛论文集》, 中国青年出版社, 2023. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "How to enhance the social discourse power of design: A study on the 6C analysis model combining design ethics and practical actions",
      "body": "栾之珑. 收入《“向多样的世界提问”——2022国际艺术与设计博士生论坛论文集》, 中国青年出版社, 2023. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "the-concept-history-and-development-of-s-2023",
    "year": "2023",
    "type": "报告",
    "venue": "ACM ISS 2023 Workshop",
    "authors": "Wang, W., & Song, F.",
    "link": "https://iss2023.acm.org/details/iss-2023-workshop--framing-seamlessness/1/Keynote-The-concept-history-and-development-of-seamless-multimodal-interaction",
    "cover": "",
    "zh": {
      "title": "无缝多模态交互的概念、历史与发展",
      "body": "Wang, W., & Song, F. (2023). Keynote, ACM ISS 2023 Workshop: Framing Seamlessness."
    },
    "en": {
      "title": "The concept, history and development of seamless multimodal interaction",
      "body": "Wang, W., & Song, F. (2023). Keynote, ACM ISS 2023 Workshop: Framing Seamlessness."
    }
  },
  {
    "id": "evaluation-of-usability-and-user-experie-2023",
    "year": "2023",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.1007/978-3-031-35702-2_10",
    "cover": "",
    "zh": {
      "title": "Evaluation of Usability and User Experience of Dishwasher Rack Design for Chinese Families",
      "body": "Chen, D., Wang, W., Gao, X., Ding, Y., & Liang, W. (2023). Evaluation of usability and user experience of dishwasher rack design for Chinese families. In *HCI International 2023*. Springer."
    },
    "en": {
      "title": "Evaluation of Usability and User Experience of Dishwasher Rack Design for Chinese Families",
      "body": "Chen, D., Wang, W., Gao, X., Ding, Y., & Liang, W. (2023). Evaluation of usability and user experience of dishwasher rack design for Chinese families. In *HCI International 2023*. Springer."
    }
  },
  {
    "id": "same-the-design-space-for-seamless-autom-2022",
    "year": "2022",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.1109/MITP.2022.3172943",
    "cover": "",
    "zh": {
      "title": "SAME: The Design Space for Seamless Automotive Multimodal Experience",
      "body": "Wang, W., Song, F., & Zhu, T. (2022). SAME: The design space for seamless automotive multimodal experience. *IT Professional, 24*(3), 35–42."
    },
    "en": {
      "title": "SAME: The Design Space for Seamless Automotive Multimodal Experience",
      "body": "Wang, W., Song, F., & Zhu, T. (2022). SAME: The design space for seamless automotive multimodal experience. *IT Professional, 24*(3), 35–42."
    }
  },
  {
    "id": "positioning-accuracy-reliability-analysi-2022",
    "year": "2022",
    "type": "论文",
    "venue": "Journal of Mechanical Design",
    "authors": "Cao, L., Liu, J., Zhang, J., et al.",
    "link": "",
    "cover": "",
    "zh": {
      "title": "基于平行多面体证据理论模型的工业机器人定位精度可靠性分析",
      "body": "Cao, L., Liu, J., Zhang, J., et al. (2022). Journal of Mechanical Design, 145(2), 023303. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Positioning accuracy reliability analysis of industrial robots based on parallelotope evidence theory model and space affine collocation",
      "body": "Cao, L., Liu, J., Zhang, J., et al. (2022). Journal of Mechanical Design, 145(2), 023303. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "interaction-change-in-the-era-of-intelli-2022",
    "year": "2022",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://kns.cnki.net/kcms2/article/abstract?v=tBI8TAhqnxQeKgsWaEbdN9gLMjsVaessgz92fdQvImlST9VhX5s34G2OZ938A4D-Tpahspp8WBG9WSQk0XJ1z6dBoGvDAYwGew8myC8XAAB1J8Y-F4EYT-Px54wEwOVgmi9krTEp9knYWzBydGcofRP1QvGN4Bwa23nlQ1nsHFV98sQal70tkw==&uniplatform=NZKPT&language=CHS",
    "cover": "",
    "zh": {
      "title": "智能产品时代的交互之变：面向实体可触交互的设计刍议",
      "body": "王巍, & 杨逸景. (2022). 智能产品时代的交互之变:面向实体可触交互的设计刍议. 美术大观(006), 000."
    },
    "en": {
      "title": "智能产品时代的交互之变：面向实体可触交互的设计刍议",
      "body": "王巍, & 杨逸景. (2022). 智能产品时代的交互之变:面向实体可触交互的设计刍议. 美术大观(006), 000."
    }
  },
  {
    "id": "structural-stochastic-identification-con-2022",
    "year": "2022",
    "type": "论文",
    "venue": "Structural and Multidisciplinary Optimization",
    "authors": "Cao, L., Liu, J., Hu, Y., et al.",
    "link": "",
    "cover": "",
    "zh": {
      "title": "考虑建模不确定性的结构随机识别：稀疏网格与相似系统分析",
      "body": "Cao, L., Liu, J., Hu, Y., et al. (2022). Structural & Multidisciplinary Optimization, 65, 219. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Structural stochastic identification considering modeling uncertainty through sparse grid and similar system analysis",
      "body": "Cao, L., Liu, J., Hu, Y., et al. (2022). Structural & Multidisciplinary Optimization, 65, 219. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "exploring-the-effect-of-visual-and-audit-2022",
    "year": "2022",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.21606/drs.2022.496",
    "cover": "",
    "zh": {
      "title": "Exploring the effect of visual and auditory information in haptic experience",
      "body": "Gao, X., Wang, W., Song, F., & Liu, F. (2022). Exploring the effect of visual and auditory information in haptic experience. In *DRS2022: Bilbao*. Design Research Society."
    },
    "en": {
      "title": "Exploring the effect of visual and auditory information in haptic experience",
      "body": "Gao, X., Wang, W., Song, F., & Liu, F. (2022). Exploring the effect of visual and auditory information in haptic experience. In *DRS2022: Bilbao*. Design Research Society."
    }
  },
  {
    "id": "optimal-sparse-polynomial-chaotic-expans-2022",
    "year": "2022",
    "type": "论文",
    "venue": "Computer Methods in Applied Mechanics and Engineering",
    "authors": "Cao, L., Liu, J., Chen, W., et al.",
    "link": "https://doi.org/10.1016/j.cma.2022.115368",
    "cover": "",
    "zh": {
      "title": "面向任意概率分布的最优稀疏多项式混沌展开及其全局灵敏度分析",
      "body": "Cao, L., Liu, J., Chen, W., et al. (2022). CMAME, 399, 115368. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Optimal sparse polynomial chaotic expansion for arbitrary probability distribution and its application on global sensitivity analysis",
      "body": "Cao, L., Liu, J., Chen, W., et al. (2022). CMAME, 399, 115368. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "a-framework-for-designing-the-seamless-a-2022",
    "year": "2022",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.21606/drs.2022.163",
    "cover": "",
    "zh": {
      "title": "A framework for designing the seamless automotive multimodal experience in future connected and autonomous vehicles",
      "body": "Song, F., Wang, W., Lin, H., & Tian, Y. (2022). A framework for designing the seamless automotive multimodal experience in future connected and autonomous vehicles. In *DRS2022: Bilbao*. Design Research Society."
    },
    "en": {
      "title": "A framework for designing the seamless automotive multimodal experience in future connected and autonomous vehicles",
      "body": "Song, F., Wang, W., Lin, H., & Tian, Y. (2022). A framework for designing the seamless automotive multimodal experience in future connected and autonomous vehicles. In *DRS2022: Bilbao*. Design Research Society."
    }
  },
  {
    "id": "hack3d-crowdsourcing-the-assessment-of-c-2021",
    "year": "2021",
    "type": "论文",
    "venue": "Computer",
    "authors": "Linares, M., Aswani, N., Mac, G., Jin, C., Chen, F., Gupta, N., & Karri, R.",
    "link": "https://doi.org/10.1109/MC.2021.3074192",
    "cover": "",
    "zh": {
      "title": "Hack3D：众包评估数字制造中的网络安全",
      "body": "Linares, M. et al. (2021). Computer, 54(11), 58–67. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Hack3D: Crowdsourcing the assessment of cybersecurity in digital manufacturing",
      "body": "Linares, M. et al. (2021). Computer, 54(11), 58–67. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "study-of-the-compressive-properties-of-a-2021",
    "year": "2021",
    "type": "论文",
    "venue": "The Journal of Adhesion",
    "authors": "Chen, F., Pinisetty, D., & Gupta, N.",
    "link": "https://doi.org/10.1080/00218464.2021.1982706",
    "cover": "",
    "zh": {
      "title": "不同应变率下胶接碳纤维层合板压缩性能研究",
      "body": "Chen, F., Pinisetty, D., & Gupta, N. (2021). The Journal of Adhesion. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Study of the compressive properties of adhesively bonded carbon fiber laminates at different strain rates",
      "body": "Chen, F., Pinisetty, D., & Gupta, N. (2021). The Journal of Adhesion. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "non-probabilistic-polygonal-convex-set-m-2021",
    "year": "2021",
    "type": "论文",
    "venue": "Applied Mathematical Modelling",
    "authors": "Cao, L., Liu, J., Xie, L., et al.",
    "link": "https://doi.org/10.1016/j.apm.2020.07.025",
    "cover": "",
    "zh": {
      "title": "用于结构不确定性量化的非概率多边形凸集模型",
      "body": "Cao, L., Liu, J., Xie, L., et al. (2021). Applied Mathematical Modelling, 89, 504–518. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Non-probabilistic polygonal convex set model for structural uncertainty quantification",
      "body": "Cao, L., Liu, J., Xie, L., et al. (2021). Applied Mathematical Modelling, 89, 504–518. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "evidence-based-structural-uncertainty-qu-2020",
    "year": "2020",
    "type": "论文",
    "venue": "Journal of Mechanical Design",
    "authors": "Cao, L., Liu, J., Jiang, C., et al.",
    "link": "",
    "cover": "",
    "zh": {
      "title": "基于降维分解与边际区间分析的结构不确定性量化",
      "body": "Cao, L., Liu, J., Jiang, C., et al. (2020). Journal of Mechanical Design, 142(5), 051701. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Evidence-based structural uncertainty quantification by dimension reduction decomposition and marginal interval analysis",
      "body": "Cao, L., Liu, J., Jiang, C., et al. (2020). Journal of Mechanical Design, 142(5), 051701. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "embedded-product-authentication-codes-in-2020",
    "year": "2020",
    "type": "论文",
    "venue": "Additive Manufacturing",
    "authors": "Chen, F., Zabalza, J., Murray, P., Marshall, S., Yu, J. H., & Gupta, N.",
    "link": "https://doi.org/10.1016/j.addma.2020.101319",
    "cover": "",
    "zh": {
      "title": "增材制造零件中的嵌入式产品认证码：成像与图像处理以提升可扫描性",
      "body": "Chen, F. et al. (2020). Additive Manufacturing, 35, 101319. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Embedded product authentication codes in additive manufactured parts: Imaging and image processing for improved scan ability",
      "body": "Chen, F. et al. (2020). Additive Manufacturing, 35, 101319. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "obfuscation-of-embedded-codes-in-additiv-2019",
    "year": "2019",
    "type": "论文",
    "venue": "Advanced Engineering Materials",
    "authors": "Chen, F., Yu, J. H., & Gupta, N.",
    "link": "https://doi.org/10.1002/adem.201900146",
    "cover": "",
    "zh": {
      "title": "增材制造零件中嵌入码的混淆方法：面向产品认证",
      "body": "Chen, F., Yu, J. H., & Gupta, N. (2019). Advanced Engineering Materials, 21(8), 1900146. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Obfuscation of embedded codes in additive manufactured components for product authentication",
      "body": "Chen, F., Yu, J. H., & Gupta, N. (2019). Advanced Engineering Materials, 21(8), 1900146. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "exploring-the-design-ethics-of-the-futur-2019",
    "year": "2019",
    "type": "论文",
    "venue": "LeNS 2019",
    "authors": "Luan, Z. L., & Lu, X. B.",
    "link": "http://hdl.handle.net/11311/1123787",
    "cover": "",
    "zh": {
      "title": "未来信息社会的设计伦理初探：以“社会性互联网产品”为例",
      "body": "Luan, Z. L., & Lu, X. B. (2019). LeNS 2019. http://hdl.handle.net/11311/1123787"
    },
    "en": {
      "title": "Exploring the design ethics of the future information society: A brief design ethics study of “DiDi” as a sociality internet product",
      "body": "Luan, Z. L., & Lu, X. B. (2019). LeNS 2019. http://hdl.handle.net/11311/1123787"
    }
  },
  {
    "id": "the-value-generation-in-design-studies-v-2019",
    "year": "2019",
    "type": "论文",
    "venue": "齐鲁艺苑",
    "authors": "栾之珑, 鲁晓波",
    "link": "",
    "cover": "",
    "zh": {
      "title": "设计研究中的价值挖掘——虚拟现实文创产品的价值分析",
      "body": "栾之珑, 鲁晓波. 齐鲁艺苑, 2019(4). 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "The value generation in design studies: Value analysis of virtual reality cultural creative products",
      "body": "栾之珑, 鲁晓波. 齐鲁艺苑, 2019(4). 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "embedding-tracking-codes-in-additive-man-2018",
    "year": "2018",
    "type": "论文",
    "venue": "Advanced Engineering Materials",
    "authors": "Chen, F., Luo, Y., Tsoutsos, N. G., Maniatakos, M., Shahin, K., & Gupta, N.",
    "link": "https://doi.org/10.1002/adem.201800495",
    "cover": "",
    "zh": {
      "title": "在增材制造零件中嵌入追踪码以进行产品认证",
      "body": "Chen, F. et al. (2018). Advanced Engineering Materials, 21(4), 1800495. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Embedding tracking codes in additive manufactured parts for product authentication",
      "body": "Chen, F. et al. (2018). Advanced Engineering Materials, 21(4), 1800495. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "graphene-reinforced-aluminum-matrix-comp-2018",
    "year": "2018",
    "type": "论文",
    "venue": "JOM",
    "authors": "Chen, F., Gupta, N., Behera, R. K., & Rohatgi, P. K.",
    "link": "https://doi.org/10.1007/s11837-018-2810-7",
    "cover": "",
    "zh": {
      "title": "石墨烯增强铝基复合材料：制备方法与性能综述",
      "body": "Chen, F. et al. (2018). JOM, 70(6), 837–845. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Graphene-reinforced aluminum matrix composites: A review of synthesis methods and properties",
      "body": "Chen, F. et al. (2018). JOM, 70(6), 837–845. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "design-features-to-address-security-chal-2018",
    "year": "2018",
    "type": "专著 / 书籍",
    "venue": "CRC Press",
    "authors": "Gupta, N., Chen, F., & Shain, K.",
    "link": "https://doi.org/10.1201/9781315104133",
    "cover": "",
    "zh": {
      "title": "面向增材制造安全挑战的设计特征",
      "body": "Gupta, N., Chen, F., & Shain, K. (2018). In Manufacturing Techniques for Materials. CRC Press. ISBN 9781315104133. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Design features to address security challenges in additive manufacturing",
      "body": "Gupta, N., Chen, F., & Shain, K. (2018). In Manufacturing Techniques for Materials. CRC Press. ISBN 9781315104133. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "obfuscade-obfuscating-additive-manufactu-2017",
    "year": "2017",
    "type": "论文",
    "venue": "ACM/IEEE DAC",
    "authors": "Gupta, N., Chen, F., Tsoutsos, N. G., & Maniatakos, M.",
    "link": "https://doi.org/10.1145/3061639.3079847",
    "cover": "",
    "zh": {
      "title": "ObfusCADe：混淆增材制造 CAD 模型以防伪",
      "body": "Gupta, N., Chen, F., Tsoutsos, N. G., & Maniatakos, M. (2017). DAC ’17. ACM. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "ObfusCADe: Obfuscating additive manufacturing CAD models against counterfeiting",
      "body": "Gupta, N., Chen, F., Tsoutsos, N. G., & Maniatakos, M. (2017). DAC ’17. ACM. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "from-designing-lifestyles-to-designing-l-2017",
    "year": "2017",
    "type": "论文",
    "venue": "工业设计",
    "authors": "栾之珑",
    "link": "",
    "cover": "",
    "zh": {
      "title": "从设计生活方式到设计生活意义——浅析信息社会体验设计的发展方式与设计潜力",
      "body": "栾之珑. 工业设计, 2017(1). 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "From designing lifestyles to designing life meanings: Experience design in the informational society",
      "body": "栾之珑. 工业设计, 2017(1). 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "nonlinear-narrative-unfolding-in-multipl-2017",
    "year": "2017",
    "type": "论文",
    "venue": "装饰",
    "authors": "栾之珑, 师丹青",
    "link": "https://www.izhsh.com.cn/doc/3/3558.html",
    "cover": "",
    "zh": {
      "title": "多维度下展开的非线性叙事——新媒体时代的体验性叙事设计",
      "body": "栾之珑, 师丹青. 装饰, 2017(4). 来源：湖南大学设计艺术学院教师主页 / 《装饰》2017年第4期目录。"
    },
    "en": {
      "title": "Nonlinear narrative unfolding in multiple dimensions: Experiential narrative design in the new media era",
      "body": "栾之珑, 师丹青. 装饰, 2017(4). 来源：湖南大学设计艺术学院教师主页 / 《装饰》2017年第4期目录。"
    }
  },
  {
    "id": "security-features-embedded-in-computer-a-2017",
    "year": "2017",
    "type": "论文",
    "venue": "Materials & Design",
    "authors": "Chen, F., Mac, G., & Gupta, N.",
    "link": "https://doi.org/10.1016/j.matdes.2017.04.078",
    "cover": "",
    "zh": {
      "title": "嵌入 CAD 实体模型的增材制造安全特征",
      "body": "Chen, F., Mac, G., & Gupta, N. (2017). Materials & Design, 128, 182–194. 来源：湖南大学设计艺术学院教师主页。"
    },
    "en": {
      "title": "Security features embedded in computer aided design (CAD) solid models for additive manufacturing",
      "body": "Chen, F., Mac, G., & Gupta, N. (2017). Materials & Design, 128, 182–194. 来源：湖南大学设计艺术学院教师主页。"
    }
  },
  {
    "id": "sheet-20260910-40",
    "year": "2024",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.21606/drs.2024.1334",
    "cover": "",
    "zh": {
      "title": "Toward mutual understanding: Constructing the designer-developer collaboration in designing gesture interaction",
      "body": "Yang, Y., Wang, W., Zhang, J., Chen, Q., and Du, L. (2024) Toward mutual understanding: Constructing the\ndesigner-developer collaboration in designing gesture interaction, in Gray, C., Ciliotta Chehade, E., Hekkert,\nP., Forlano, L., Ciuccarelli, P., Lloyd, P. (eds.), DRS2024: Boston, 23–28 June, Boston, USA. https://doi.org/\n10.21606/drs.2024.1334"
    },
    "en": {
      "title": "Toward mutual understanding: Constructing the designer-developer collaboration in designing gesture interaction",
      "body": "Yang, Y., Wang, W., Zhang, J., Chen, Q., and Du, L. (2024) Toward mutual understanding: Constructing the\ndesigner-developer collaboration in designing gesture interaction, in Gray, C., Ciliotta Chehade, E., Hekkert,\nP., Forlano, L., Ciuccarelli, P., Lloyd, P. (eds.), DRS2024: Boston, 23–28 June, Boston, USA. https://doi.org/\n10.21606/drs.2024.1334"
    }
  },
  {
    "id": "sheet-20260910-41",
    "year": "2026",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://doi.org/10.1177/29776481261427591",
    "cover": "",
    "zh": {
      "title": "The Role of Designers in Human–AI Collaborative Design: Capturing the New Patterns in AI4UX Framework",
      "body": "Wang, W., Yang, Y., & Luan, Z. (2026). The Role of Designers in Human–AI Collaborative Design: Capturing the New Patterns in AI4UX Framework. Design for Augmented Humanity, 1(1), 31-48. https://doi.org/10.1177/29776481261427591"
    },
    "en": {
      "title": "The Role of Designers in Human–AI Collaborative Design: Capturing the New Patterns in AI4UX Framework",
      "body": "Wang, W., Yang, Y., & Luan, Z. (2026). The Role of Designers in Human–AI Collaborative Design: Capturing the New Patterns in AI4UX Framework. Design for Augmented Humanity, 1(1), 31-48. https://doi.org/10.1177/29776481261427591"
    }
  },
  {
    "id": "sheet-20260910-42",
    "year": "",
    "type": "教材",
    "venue": "",
    "authors": "",
    "link": "",
    "cover": "",
    "zh": {
      "title": "智能产品交互设计（人民美术出版社）"
    },
    "en": {
      "title": "智能产品交互设计（人民美术出版社）"
    }
  },
  {
    "id": "sheet-20260910-43",
    "year": "",
    "type": "其他",
    "venue": "",
    "authors": "",
    "link": "",
    "cover": "",
    "zh": {
      "title": "SemanticHaptics: Multimodal Attention Guidance for Remote Learning"
    },
    "en": {
      "title": "SemanticHaptics: Multimodal Attention Guidance for Remote Learning"
    }
  },
  {
    "id": "sheet-20260910-44",
    "year": "",
    "type": "论文",
    "venue": "",
    "authors": "",
    "link": "https://www.researchgate.net/publication/381336141_High-Frequency_Gripping_Area_for_One-Handed_Smartphone_Rear_Interactions",
    "cover": "",
    "zh": {
      "title": "High-Frequency Gripping Area for One-Handed Smartphone Rear Interactions"
    },
    "en": {
      "title": "High-Frequency Gripping Area for One-Handed Smartphone Rear Interactions"
    }
  }
];

const SITE_META = {
  zh: {},
  en: {},
  assets: {},
};

function getProject(id) {
  return PROJECTS.find((item) => item.id === id);
}
