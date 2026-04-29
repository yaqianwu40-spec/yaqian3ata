import { Project, Achievement, Capability, TimelineItem } from './types';

export const PERSONAL_INFO = {
  name: "吴亚倩",
  avatar: "/photo.png",
  title: "产品经理",
  subtitle: "专注 AI 产品化、教育科技、数据产品与商业化落地",
  email: "AnnaWu528@163.com",
  education: {
    school: "廊坊师范学院",
    degree: "本科 | 软件工程",
  },
  certifications: [
    "PMP (项目管理专业人士认证)",
    "欧洲开放大学 MBA",
    "国家发明专利 (CN117787937A)"
  ],
  productPhilosophy: [
    "产品本质是解决问题",
    "AI 的价值在于产品化，而非技术堆砌",
    "商业化是产品最终验证标准",
    "好产品必须平衡用户价值、商业价值与可持续增长"
  ]
};

export const ACHIEVEMENTS: Achievement[] = [
  { label: "国家发明专利", value: "1", description: "基于 BERT 模型的数据匹配技术" },
  { label: "产品销售额", value: "¥100W+", description: "多产品矩阵联动商业化落地" },
  { label: "区域市占率", value: "87.2%", description: "产业需求大数据平台市场表现" },
  { label: "客户续费率", value: "85%", description: "教育 SaaS 平台服务认可度" },
  { label: "效率提升", value: "4倍", description: "AIGC 赋能报告交付流程" },
  { label: "交付周期", value: "72h", description: "标准化交付体系缩短响应时间" }
];

export const CAPABILITIES: Capability[] = [
  {
    title: "工科背景",
    description: "软件工程本科，具备扎实的逻辑思维与系统分析能力",
    iconName: "Code2"
  },
  {
    title: "产品思维",
    description: "4 年 B/C 端产品全链路经验，精通需求挖掘、0-1 项目落地和敏捷管理",
    iconName: "Layout"
  },
  {
    title: "AI 能力",
    description: "具备 AI 产品化能力，擅长以技术驱动效率与产品壁垒",
    iconName: "BrainCircuit"
  },
  {
    title: "商业化能力",
    description: "能够推动产品实现可持续增长，百万级销售额项目落地",
    iconName: "TrendingUp"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    company: "ATA全美在线(教育行业龙头)",
    role: "产品经理",
    period: "2025.06 - 2025.10",
    description: "负责智慧监考大脑平台重构，落地 AI 智能研判闭环"
  },
  {
    company: "竞业达集团 (教育行业上市名企)",
    role: "产品经理",
    period: "2023.04 - 2025.03",
    description: "主导产业需求与就业大数据平台，获国家发明专利。"
  },
  {
    company: "天津麒麟智能网络科技有限公司（初创）",
    role: "产品助理",
    period: "2022.03 - 2023.03",
    description: "辅助靓号电商平台从 0-1 搭建。"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "industry-data",
    title: "产业需求大数据平台",
    tagline: "0-1 搭建 + 数据 SaaS + AIGC 生成报告",
    period: "2023.04 - 2025.03",
    role: "产品经理",
    category: "AI/Big Data",
    image: "/f3.png",
    background: "学校相关部门缺乏产业人才需求动态数据支撑招生计划制定、人才培养方案优化。",
    painPoints: [
      "用户调研数据无法满足快速变化的市场需求",
      "缺乏动态预测能力"
    ],
    solutions: [
      "深度分析竞品，定位 '动态预测 + AIGC 报告生成' 差异化策略",
      "设计 AIGC 报告生成 SOP 与 Prompt 模板库"
    ],
    aiCapability: "将人工报告产出模板化并嵌入 AIGC 技术，实现自动化报告产出。",
    results: [
      "上线即占据 87.2% 区域市场份额",
      "报告交付周期从 14 天缩短至 72 小时",
      "2024 年销售额达 100 万元"
    ],
    reflection: "AI 的价值在于解决非标准化咨询的自动化产出，通过产品化沉淀行业壁垒。"
  },
  {
    id: "employment-data",
    title: "学生就业大数据平台",
    tagline: "BERT 专利 + B/C 联动 + 岗位精准匹配",
    period: "2023.12 - 2024.12",
    role: "产品经理",
    category: "AI/NLP",
    image: "/f8.png",
    background: "高校毕业生面临岗位匹配度低、职业规划缺乏数据支撑等痛点。",
    painPoints: [
      "推荐精准度不足",
      "学生缺乏技能查缺补漏清单"
    ],
    solutions: [
      "主导设计基于 BERT 模型的岗位匹配算法 (获国家发明专利)",
      "构建 '画像构建-智能推荐-就业反馈-数据沉淀' 闭环"
    ],
    aiCapability: "自研 BERT 匹配算法，实现 85% 岗位匹配准确度。",
    results: [
      "岗位匹配准确率达 85%",
      "助力公司教育 AI 产品矩阵销售破百万",
      "积累大规模学生就业数据，形成行业评估标准"
    ],
    reflection: "核心算法技术需转化为业务价值，通过闭环反馈持续优模型表现。"
  },
  {
    id: "reporting-project",
    title: "智慧监考大脑平台",
    tagline: "教平台体验重构 + AI 研判闭环落地",
    period: "2025.06 - 2025.10",
    role: "教育项目合伙人",
    category: "AI Proctoring",
    image: "/f11.png",
    background: "原智慧监考平台操作流程繁杂、用户体验差、AI 研判功能缺失等问题，无法满足考试全流程监管需求，亟需进行全流程重构与智能化升级。",
    painPoints: [
      "平台操作流程繁杂，影响监考人员使用效率",
      "缺乏 AI 智能研判能力，依赖人工判卷效率低下",
      "用户培训成本高，上手难度大"
    ],
    solutions: [
      "以用户访谈 + 竞品分析定位核心优化方向，设计「考中实时监控→异常行为识别→智能辅助判卷」的全流程 AI 闭环",
      "制定模型迭代 SOP，含数据标注规范、效果评估指标、灰度发布机制，保障 AI 能力落地",
      "搭建双周迭代敏捷开发机制，协调跨部门资源推进 3 轮灰度测试"
    ],
    aiCapability: "将 AI 异常行为识别、智能辅助判卷功能嵌入监考全流程，通过数据看板与核心指标定义，实现监考行为的自动化研判与效率提升。",
    results: [
      "平台体验问题解决，监考人员使用效率显著提升",
      "获得考试主办方高度认可，完成标准化产品文档沉淀"
    ],
    reflection: "真正的产品价值，从来不是功能的堆叠，而是用技术解决真实的业务痛点"
  },
  {
    id: "ecommerce-platform",
    title: "靓号电商平台",
    tagline: "0-1 搭建 + 增长策略 + 私域转化",
    period: "2022.03 - 2023.03",
    role: "产品助理",
    category: "E-commerce",
    image: "/f9.png",
    background: "通信靓号业务高度依赖线下销售，获客成本高 (单客 > 150 元)。",
    painPoints: [
      "线上渠道缺失",
      "转化链路不明晰"
    ],
    solutions: [
      "主导抖音小程序与系统打通，实现全链路在线交易",
      "设计 '热销榜-新品榜-个性推荐' 三栏位布局"
    ],
    aiCapability: "应用协同过滤算法实现靓号个性化推荐。",
    results: [
      "上线首月平台交易量 1200+",
      "客户转化率较线下提升 32%",
      "首月用户粘度显著提升"
    ],
    reflection: "私域转化的核心在于流量的精准匹配与顺畅的交易路径。"
  }
];
