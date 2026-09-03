const COMMON_FIELDS = [
  {
    key: "submitter_name",
    label: "提交人姓名",
    type: "text",
    required: true,
    placeholder: "张三",
    example: "张三",
    help: "资料提交人，可以和项目成员不同。",
  },
  {
    key: "submitter_contact",
    label: "联系方式",
    type: "text",
    required: true,
    placeholder: "邮箱或微信",
    example: "zhangsan@hnu.edu.cn  或  微信号 weixin_id",
    help: "方便回访确认公开权限或补材料。",
  },
  {
    key: "visibility",
    label: "公开权限",
    type: "select",
    required: true,
    options: ["可公开", "需脱敏", "暂不公开", "待确认"],
    example: "可公开",
    help: "涉及未发表论文、企业课题、用户隐私时请选需脱敏或暂不公开。",
  },
];

const MEMBER_CONTACT_FIELD = {
  key: "submitter_contact",
  label: "邮箱",
  type: "email",
  required: true,
  placeholder: "name@hnu.edu.cn",
  example: "zhangsan@hnu.edu.cn",
  help: "成员信息只收集邮箱，请填写可联系到本人的学校或常用邮箱。",
};

const NOTES_FIELD = {
  key: "notes",
  label: "备注",
  type: "textarea",
  rows: 3,
  placeholder: "需要网站维护者注意的事项",
  example: "封面图中的合作方 Logo 需隐去；第 3 张过程图含受试者面部，请勿公开。",
};

const TYPES = [
  {
    id: "member",
    label: "成员信息",
    kicker: "学生 / 导师 / 毕业生",
    summary: "与 sheji.ai/about 一样，每人只交头像、姓名、身份，以及一行职务或研究方向。",
    sections: [
      {
        title: "成员卡片",
        format: "关于页每人一张卡片：头像、姓名、一行职务或方向。导师写职务，学生写研究方向。",
        fields: [
          { key: "name_zh", label: "中文姓名", type: "text", required: true, placeholder: "张三", example: "张三" },
          { key: "name_en", label: "英文姓名", type: "text", placeholder: "没有可空", example: "Zhang San" },
          {
            key: "role",
            label: "身份",
            type: "select",
            required: true,
            options: ["导师", "博士生", "硕士生", "本科生", "博士毕业生", "硕士毕业生", "访问学生", "合作研究员"],
            example: "博士生",
          },
          {
            key: "title_line",
            label: "职务或研究方向",
            type: "text",
            required: true,
            placeholder: "导师写职务；学生写方向",
            example: "可触交互    或    教授，实验室主任",
            help: "会出现在姓名下方，一行即可。对照 sheji.ai/about 的「设计人工智能」或职务写法。",
          },
          { key: "avatar", label: "头像", type: "file", accept: "image/*", required: true, help: "正方形或半身照，建议 ≥1200×1200px，直接上传。" },
        ],
      },
    ],
  },
  {
    id: "project",
    label: "项目信息",
    kicker: "一个项目交一份",
    summary: "研究页按类别归档，写法对照 sheji.ai/research：项目名：一句话。先选类别，再填名称和简介。",
    sections: [
      {
        title: "基本信息",
        format: "先选归档类别。研究页会按校企合作、科研课题、教学与工作坊、展览、竞赛、其他研究项目分组。中文名不用书名号。",
        fields: [
          {
            key: "category",
            label: "项目类别",
            type: "select",
            required: true,
            options: ["校企合作", "科研课题", "教学与工作坊", "展览", "竞赛", "其他研究项目"],
            example: "校企合作",
            help: "决定该项目出现在研究页的哪一组。校企合作请同时填写合作单位。",
          },
          {
            key: "theme",
            label: "所属研究主题",
            type: "text",
            required: true,
            placeholder: "可触交互 / 智能材料 / 空间媒介 / 设计研究，或按项目自拟",
            example: "可触交互",
            help: "可写四个方向之一，也可写更具体的主题。",
          },
          { key: "year", label: "年份或起止时间", type: "text", required: true, placeholder: "2025 或 2024–2026", example: "2024–2026" },
          { key: "title_zh", label: "项目中文名", type: "text", required: true, placeholder: "可触城市导览界面", example: "可触城市导览界面" },
          { key: "title_en", label: "项目英文名", type: "text", placeholder: "没有可空", example: "Tangible City Wayfinding Interface" },
        ],
      },
      {
        title: "简介",
        format: "一句话 20–40 字，格式与 sheji.ai 相同：只写结果或对象，不加句号以外的标点堆砌。",
        fields: [
          {
            key: "one_liner",
            label: "一句话简介",
            type: "text",
            required: true,
            placeholder: "20–40 字，用于卡片和首页索引",
            example: "面向视障与银龄人群的多感官城市信息导览原型。",
            help: "首页会显示为「项目名：一句话」。",
          },
          {
            key: "abstract",
            label: "项目摘要",
            type: "textarea",
            rows: 6,
            required: true,
            placeholder: "150–300 字：问题、方法、原型、结果",
            example: "城市导览信息多依赖视觉界面，视障与银龄行人难以独立确认路径分叉与到站。本项目通过用户观察与低保真触觉模型，将入口、换乘、目的地转译为不同震动与纹理提示，并做成可点击的导览原型。测试表明，短震动、脉冲与长震动可以分别对应进入、分叉和到达。",
          },
          {
            key: "methods",
            label: "方法 / 技术 / 材料",
            type: "textarea",
            rows: 3,
            placeholder: "用顿号或分号分隔",
            example: "用户研究；Arduino；压力/震动传感；织物与树脂模型；可用性测试",
          },
        ],
      },
      {
        title: "团队",
        format: "成员按贡献顺序，每人一行：姓名（角色）。",
        fields: [
          { key: "advisors", label: "指导老师", type: "text", placeholder: "姓名，单位", example: "李四，湖南大学设计艺术学院" },
          { key: "lead", label: "项目负责人", type: "text", placeholder: "姓名", example: "张三" },
          {
            key: "members",
            label: "参与成员",
            type: "textarea",
            rows: 3,
            required: true,
            placeholder: "每人一行：姓名（角色）",
            example: "张三（负责人）\n王五（硬件）\n赵六（用户研究）",
          },
          { key: "partners", label: "合作单位", type: "text", placeholder: "正式全称", example: "湖南省博物馆", help: "校企合作请填写企业或机构全称。未授权公开请把公开权限选为需脱敏。" },
        ],
      },
      {
        title: "素材与链接",
        format: "封面与过程图请直接上传。视频、Demo、论文等索引每行一条，先写类型再写 URL。",
        fields: [
          { key: "cover", label: "封面图", type: "file", accept: "image/*", required: true, help: "横图，建议 ≥1600×1100px，直接上传图片文件。" },
          { key: "process_images", label: "过程图 / 成果图", type: "file", accept: "image/*", multiple: true, help: "3–8 张，可多选，宽边建议 ≥1400px。" },
          {
            key: "media_links",
            label: "视频与外部链接",
            type: "textarea",
            rows: 3,
            placeholder: "每行：类型 链接",
            example: "视频  https://www.bilibili.com/video/BVxxxx\n论文  https://doi.org/10.xxxx/xxxxx\nGitHub  https://github.com/lab/project",
          },
          {
            key: "need_demo",
            label: "是否做网页 Demo",
            type: "select",
            options: ["否", "是", "修改现有 Demo 后保留"],
            example: "否",
          },
          {
            key: "demo_notes",
            label: "Demo 说明",
            type: "textarea",
            rows: 3,
            placeholder: "观众体验什么；可操作哪些；哪些只是模拟",
            example: "观众点击地图三个节点，查看入口 / 换乘 / 目的地的触觉说明。震动参数为示意，不接真实硬件。",
          },
        ],
      },
    ],
  },
  {
    id: "publication",
    label: "出版成果",
    kicker: "论文 / 报告 / 书",
    summary: "一条成果交一份。对照 sheji.ai/publication：类型、出处、题名、作者、年份和链接即可。",
    requireAny: [
      { keys: ["title_zh", "title_en"], message: "中文题名与英文题名请至少填写一项" },
    ],
    sections: [
      {
        title: "出版信息",
        format: "先写期刊或会议，再按该出版物语言填对应题名。页面上会排成一条引用 + 一个链接。",
        fields: [
          {
            key: "pub_type",
            label: "成果类型",
            type: "select",
            required: true,
            options: ["论文", "报告", "专著 / 书籍", "阅读 / 媒体", "播客"],
            example: "论文",
            help: "与 sheji.ai/publication 的分栏一致：论文、报告、书、阅读、播客。",
          },
          {
            key: "venue",
            label: "期刊 / 会议 / 出版社",
            type: "text",
            placeholder: "正式名称，阅读或播客可空",
            example: "CHI 2025    或    装饰    或    同济大学出版社",
            help: "论文、报告、书籍请先填出处；阅读与播客可空。",
          },
          { key: "year", label: "年份", type: "text", required: true, placeholder: "2025", example: "2025" },
          {
            key: "title_zh",
            label: "中文题名",
            type: "text",
            requireAny: "pub_title",
            placeholder: "正式中文题名",
            example: "触觉反馈在智能产品体验中的设计方法",
            help: "与英文题名至少填一项。",
          },
          {
            key: "title_en",
            label: "英文题名",
            type: "text",
            requireAny: "pub_title",
            placeholder: "正式英文题名",
            example: "Tangible Interfaces for Inclusive Public Services",
            help: "与中文题名至少填一项。",
          },
          {
            key: "authors",
            label: "作者",
            type: "text",
            placeholder: "与正式发表一致，阅读可空",
            example: "Zhang San; Li Si; Wang Wu",
          },
          {
            key: "link",
            label: "链接",
            type: "url",
            placeholder: "https://doi.org/…  或  论文 / 书籍页",
            example: "https://doi.org/10.1145/xxxxxx",
            help: "对应 sheji.ai 每条旁边的 link。DOI、出版社页、报告下载均可。",
          },
        ],
      },
    ],
  },
  {
    id: "home",
    label: "主页信息",
    kicker: "实验室定位",
    summary: "名称、简介、四个研究主题和页脚入口。通常由负责人一次性确认。",
    sections: [
      {
        title: "品牌标识",
        format: "名称与学院对外口径一致；简称只保留一种。",
        fields: [
          { key: "lab_name_zh", label: "实验室中文名称", type: "text", required: true, placeholder: "湖南大学可触界面实验室", example: "湖南大学可触界面实验室" },
          { key: "lab_name_en", label: "实验室英文名称", type: "text", required: true, placeholder: "Touchable Interface Lab", example: "Touchable Interface Lab" },
          { key: "lab_abbr", label: "实验室简称", type: "text", placeholder: "TIL", example: "TIL", help: "只写一种。现网站用 TIL，勿与 IPED 混用。" },
          { key: "college_zh", label: "所属学院中文名称", type: "text", placeholder: "湖南大学设计艺术学院", example: "湖南大学设计艺术学院" },
          { key: "college_en", label: "所属学院英文名称", type: "text", placeholder: "School of Design and Art, Hunan University", example: "School of Design and Art, Hunan University" },
          { key: "logo", label: "Logo", type: "file", accept: "image/*,.svg,.pdf,.ai", help: "优先 SVG / AI / PDF；深色和浅色两版可分两次提交或打包。直接上传文件。" },
        ],
      },
      {
        title: "首页简介",
        format: "简介 60–120 字，一句定位即可，不要列名单。",
        fields: [
          {
            key: "intro",
            label: "首页一句话简介",
            type: "textarea",
            rows: 4,
            required: true,
            placeholder: "中文 60–120 字",
            example: "可触界面实验室（Touchable Interface Lab）致力于探索触觉多感官与多模态人机交互、智能产品界面与用户体验设计的交叉研究领域。",
          },
          { key: "hero_image", label: "首页主视觉", type: "file", accept: "image/*", help: "横图，建议 ≥1600px，直接上传图片。" },
        ],
      },
      {
        title: "四个研究主题",
        format: "每个主题按三行写：名称（中英） / 简介 / 代表项目：一句话。",
        fields: [
          {
            key: "theme1",
            label: "主题 1：名称、简介、代表项目",
            type: "textarea",
            rows: 4,
            placeholder: "名称（中英）\n简介\n项目名：一句话",
            example: "可触交互 / Tangible Interaction\n触觉反馈、实体控制、柔性界面与多模态交互原型。\n可触城市导览界面：面向视障与银龄人群的多感官城市信息导览原型。",
          },
          {
            key: "theme2",
            label: "主题 2：名称、简介、代表项目",
            type: "textarea",
            rows: 4,
            placeholder: "名称（中英）\n简介\n项目名：一句话",
            example: "智能材料 / Smart Materials\n将传感、驱动、光影与材料实验转化为体验媒介。\n柔性触控控制面板：探索织物、压力传感与可穿戴设备中的自然控制方式。",
          },
          {
            key: "theme3",
            label: "主题 3：名称、简介、代表项目",
            type: "textarea",
            rows: 4,
            placeholder: "名称（中英）\n简介\n项目名：一句话",
            example: "空间媒介 / Spatial Media\n面向展陈、城市服务与公共场景的交互系统设计。\n湖湘文化触感档案：将纹样、器物与地方叙事转译为可触摸、可互动的展览媒介。",
          },
          {
            key: "theme4",
            label: "主题 4：名称、简介、代表项目",
            type: "textarea",
            rows: 4,
            placeholder: "名称（中英）\n简介\n项目名：一句话",
            example: "设计研究 / Design Research\n以用户研究、原型评估和论文写作沉淀方法。\n触感原型工作坊：以 Arduino、织物传感、投影映射做一周制原型冲刺。",
          },
        ],
      },
      {
        title: "页脚与入口",
        fields: [
          { key: "wechat_name", label: "微信公众号名称", type: "text", placeholder: "公众号全称", example: "可触界面实验室" },
          { key: "wechat_qr", label: "微信公众号二维码", type: "file", accept: "image/*", help: "PNG / SVG，≥800×800px，长期有效。" },
          { key: "portfolio_entry", label: "作品集入口", type: "url", placeholder: "https://", example: "https://creaitor.cn/IPED/infor_collect/" },
          { key: "join_entry", label: "加入咨询入口", type: "url", placeholder: "https://", example: "https://xxx.feishu.cn/share/base/form/xxxx" },
          { key: "join_qr", label: "加入咨询二维码", type: "file", accept: "image/*" },
          { key: "other_media", label: "其他媒体入口", type: "textarea", rows: 2, placeholder: "每行：名称 链接", example: "B 站  https://space.bilibili.com/xxxx" },
          { key: "copyright", label: "版权信息", type: "text", placeholder: "© 年份 实验室全称", example: "© 2026 Tangible Interface Lab" },
          { key: "beian", label: "备案号", type: "text", placeholder: "没有则写：不需要", example: "不需要" },
        ],
      },
    ],
  },
  {
    id: "about",
    label: "关于页面",
    kicker: "使命与团队",
    summary: "定位长文已有初稿。此处可修订文案，名单由成员各自交「成员信息」。",
    sections: [
      {
        title: "使命与愿景",
        format: "先写总定位，再按学术视野 / 研究方法 / 以人为中心三段展开，与 sheji.ai/about 的结构对齐。",
        fields: [
          { key: "about_title", label: "关于页标题", type: "text", placeholder: "可触界面实验室", example: "可触界面实验室" },
          {
            key: "about_lead",
            label: "关于页导语",
            type: "textarea",
            rows: 3,
            placeholder: "40–80 字",
            example: "致力于探索触觉多感官与多模态人机交互、智能产品界面与用户体验设计的交叉研究。",
          },
          {
            key: "mission",
            label: "使命与愿景（总定位）",
            type: "textarea",
            rows: 6,
            required: true,
            placeholder: "实验室定位与核心价值",
            example: "可触界面实验室（Touchable Interface Lab）致力于探索触觉多感官与多模态人机交互、智能产品界面与用户体验设计的交叉研究领域。我们秉持平等、包容、多元的核心价值，以人文关怀为底色，坚信技术发展的终极意义在于服务人的真实需求。",
          },
          {
            key: "expand1",
            label: "学术视野",
            type: "textarea",
            rows: 4,
            placeholder: "一段 80–150 字",
            example: "在学术视野上，我们聚焦具身智能交互与用户体验评估，构建人智协同策略体系；引入不确定性理论与机器学习算法，量化系统、环境与人的不确定性。依托与 UAL、佐治亚理工、金匠等国际顶尖院校的深度合作，我们始终站在全球学术前沿。",
          },
          {
            key: "expand2",
            label: "研究方法",
            type: "textarea",
            rows: 4,
            placeholder: "一段 80–150 字",
            example: "在研究方法上，我们打破学科壁垒，融合设计、机械、数学、计算机等多学科视角；运用人因智能与混合量化方法，结合精准质性研究，构建从用户研究、人因实验到数据建模、设计标准的完整闭环。",
          },
          {
            key: "expand3",
            label: "以人为中心",
            type: "textarea",
            rows: 4,
            placeholder: "一段 80–150 字",
            example: "我们始终以以人为中心为根本出发点，在推动技术创新的同时，不忘设计的人文本质——让每一次交互都更加自然、包容，让每一项技术都真正服务于人的福祉。",
          },
        ],
      },
      {
        title: "研究框架",
        format: "每条：名称：40–80 字说明。可与上方三段对应。",
        fields: [
          { key: "framework1", label: "研究框架 1", type: "textarea", rows: 2, placeholder: "名称：说明", example: "学术视野：具身智能交互、用户体验评估、人智协同与不确定性量化。" },
          { key: "framework2", label: "研究框架 2", type: "textarea", rows: 2, placeholder: "名称：说明", example: "研究方法：设计、机械、数学、计算机交叉，人因智能与混合量化闭环。" },
          { key: "framework3", label: "研究框架 3", type: "textarea", rows: 2, placeholder: "名称：说明", example: "以人为中心：平等、包容、多元，让技术服务于人的真实需求。" },
        ],
      },
      {
        title: "团队名单",
        format: "负责人：姓名 + 职务。学生：姓名 + 年级 + 方向。每人一行。",
        fields: [
          {
            key: "directors",
            label: "实验室负责人",
            type: "textarea",
            rows: 4,
            required: true,
            placeholder: "每人一行：姓名 + 职务/职称",
            example: "张三  教授，实验室主任\n李四  副教授",
          },
          {
            key: "phd_students",
            label: "博士研究生",
            type: "textarea",
            rows: 4,
            placeholder: "每人一行：姓名 + 年级 + 方向",
            example: "王五  2023 级  可触交互\n赵六  2024 级  智能材料",
          },
          {
            key: "master_students",
            label: "硕士研究生",
            type: "textarea",
            rows: 6,
            placeholder: "每人一行：姓名 + 年级 + 方向",
            example: "钱七  2024 级  空间媒介\n孙八  2025 级  设计研究",
          },
          {
            key: "phd_alumni",
            label: "博士毕业生",
            type: "textarea",
            rows: 3,
            placeholder: "每人一行：姓名 + 年份 + 方向 + 去向（可选）",
            example: "周九  2024  可触交互  某某高校",
          },
          {
            key: "master_alumni",
            label: "硕士毕业生",
            type: "textarea",
            rows: 4,
            placeholder: "每人一行：姓名 + 年份 + 方向 + 去向（可选）",
            example: "吴十  2025  智能材料  某某企业",
          },
        ],
      },
      {
        title: "空间",
        fields: [
          {
            key: "space_intro",
            label: "实验室空间 / 设备",
            type: "textarea",
            rows: 3,
            placeholder: "80–150 字",
            example: "实验室含原型工作台、基础电子设备、织物与树脂加工区，以及小型可用性测试角落，可供一周制工作坊和课题原型并行。",
          },
          { key: "space_photos", label: "空间照片", type: "file", accept: "image/*", multiple: true, help: "2–4 张工作台或设备照片。" },
        ],
      },
    ],
  },
  {
    id: "join",
    label: "加入我们",
    kicker: "招生与合作",
    summary: "招谁、交什么材料、发到哪个邮箱。合作方向可一并写上。",
    sections: [
      {
        title: "招生",
        format: "分条写，一条一行；材料请写清是否必须。",
        fields: [
          { key: "join_title", label: "加入页标题", type: "text", placeholder: "一句号召", example: "一起把界面做得可触、可感、可协作" },
          {
            key: "join_intro",
            label: "加入页导语",
            type: "textarea",
            rows: 3,
            required: true,
            placeholder: "60–120 字",
            example: "欢迎研究生、访问学生、合作机构与企业团队联系实验室，开展课程、课题、展览和原型验证。",
          },
          {
            key: "recruit_scope",
            label: "招收对象",
            type: "textarea",
            rows: 3,
            required: true,
            placeholder: "每行一类",
            example: "博士后\n博士研究生\n硕士研究生\n本科科研 / 访问学生",
          },
          {
            key: "majors",
            label: "招生专业方向",
            type: "textarea",
            rows: 3,
            required: true,
            placeholder: "专业列表 + 跨学科说明",
            example: "交互设计、工业设计、数字媒体、计算机、电子信息等。欢迎设计背景具备硬件或编程经验，或工科背景并对可触界面有研究意愿的申请者。",
          },
          {
            key: "materials",
            label: "申请材料",
            type: "textarea",
            rows: 5,
            required: true,
            placeholder: "分条，注明是否必须",
            example: "1. 研究计划书（必须）\n2. 学术代表作或作品集（设计背景必须交作品集）\n3. 简历与获奖证明（可选）",
          },
          {
            key: "submit_method",
            label: "提交方式与邮件格式",
            type: "textarea",
            rows: 4,
            placeholder: "邮箱、标题、附件、回复周期",
            example: "发送至 til@hnu.edu.cn\n标题：[TIL博士/硕士申请] + 高校 + 姓名\n附件请用网盘链接\n完整材料 2 周内回复",
          },
          {
            key: "other_req",
            label: "其他要求",
            type: "textarea",
            rows: 3,
            placeholder: "80–150 字",
            example: "希望申请者能按节点完成原型与写作，参与组会和展览筹备，并对用户研究中的隐私与公开授权负责。",
          },
        ],
      },
      {
        title: "期待与合作",
        format: "每条：标题：说明。准备建议另起一句。",
        fields: [
          {
            key: "expect1",
            label: "能力期待 1",
            type: "textarea",
            rows: 2,
            placeholder: "标题：说明",
            example: "会做原型的人：熟悉 Arduino、前端、建模或材料工艺。建议准备 2–3 个作品链接，并写明自己负责的部分。",
          },
          {
            key: "expect2",
            label: "能力期待 2",
            type: "textarea",
            rows: 2,
            placeholder: "标题：说明",
            example: "会做研究的人：能组织访谈、可用性测试和论文写作。建议准备一页研究兴趣说明。",
          },
          {
            key: "expect3",
            label: "能力期待 3",
            type: "textarea",
            rows: 2,
            placeholder: "标题：说明",
            example: "有真实场景的人：欢迎带着公共服务、展陈、健康或教育议题来合作。",
          },
          {
            key: "collab",
            label: "对外合作方向",
            type: "textarea",
            rows: 3,
            placeholder: "每行一类",
            example: "企业联合课题与原型验证\n博物馆 / 展馆互动展陈\n医院与公共机构服务设计",
          },
        ],
      },
      {
        title: "联系",
        fields: [
          { key: "public_email", label: "公共邮箱", type: "email", required: true, placeholder: "lab@hnu.edu.cn", example: "til@hnu.edu.cn", help: "实验室公共邮箱，勿用私人邮箱。" },
          { key: "contact_person", label: "联系人", type: "text", placeholder: "姓名  职务", example: "张三  实验室管理员" },
          { key: "consult_qr", label: "加入咨询二维码", type: "file", accept: "image/*", help: "长期有效，不要用个人微信群码。" },
          { key: "consult_url", label: "长期表单链接", type: "url", placeholder: "https://", example: "https://xxx.feishu.cn/share/base/form/xxxx" },
          {
            key: "faq",
            label: "常见问题",
            type: "textarea",
            rows: 5,
            placeholder: "每两条一组：问 / 答",
            example: "问：本科生能否跟组？\n答：可以先发作品链接和研究兴趣，视课题情况安排。\n问：作品集有页数要求吗？\n答：建议 10–20 页，突出你负责的部分。",
          },
        ],
      },
    ],
  },
];

function getType(id) {
  return TYPES.find((item) => item.id === id) || null;
}

function commonFieldsFor(typeId) {
  return COMMON_FIELDS.map((field) => {
    if (field.key === "submitter_contact" && typeId === "member") return MEMBER_CONTACT_FIELD;
    return field;
  });
}

function allFields(type) {
  const fields = commonFieldsFor(type.id);
  for (const section of type.sections) fields.push(...section.fields);
  fields.push(NOTES_FIELD);
  return fields;
}

function publicSchema() {
  return {
    common: COMMON_FIELDS,
    memberContact: MEMBER_CONTACT_FIELD,
    notes: NOTES_FIELD,
    types: TYPES.map((type) => ({
      id: type.id,
      label: type.label,
      kicker: type.kicker,
      summary: type.summary,
      requireAny: type.requireAny || [],
      sections: type.sections,
    })),
  };
}

module.exports = {
  TYPES,
  COMMON_FIELDS,
  MEMBER_CONTACT_FIELD,
  NOTES_FIELD,
  getType,
  commonFieldsFor,
  allFields,
  publicSchema,
};
