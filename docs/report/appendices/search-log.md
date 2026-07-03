# 搜索日志

## 工具状态

2026-07-03 运行 `agent-reach doctor --json`，结果摘要：

| 平台 | 状态 | 后端 |
| --- | --- | --- |
| Twitter/X | ok | OpenCLI |
| Reddit | ok | OpenCLI |
| B站 | ok | OpenCLI |
| 小红书 | ok | OpenCLI |
| LinkedIn | off | MCP 未配置，使用公开网页 fallback |
| V2EX | warn | API 超时 |
| Web | ok | Jina Reader |
| RSS | ok | feedparser |

## 公司与主体检索

| 查询 | 平台 | 结果用途 |
| --- | --- | --- |
| `Fenchem Biotek Ltd official website Fenchem` | 网页搜索 | 官网和英文主体线索 |
| `Fenchem animal nutrition pet food ingredients official` | 网页搜索 | 产品线和业务定位 |
| `南京泛成生物化工有限公司 泛成 工商 法律诉讼 招聘` | 网页搜索 | 中文主体、招聘和风险线索 |
| `南京泛成生物化工有限公司 行政处罚 被执行 失信 劳动争议` | 网页搜索 | 负面风险检索 |
| `南京泛成生物化工有限公司 裁判文书` | 网页搜索 | 司法风险线索 |
| `Fenchem lawsuit complaint FDA import alert warning letter` | 网页搜索 | 英文负面信号 |
| `Fenchem Biotek FDA 99-08` | 网页搜索 | FDA Import Alert 线索 |

## 招聘与雇主评价检索

| 查询 | 平台 | 结果用途 |
| --- | --- | --- |
| `Fenchem jobs international sales LinkedIn Glassdoor Indeed` | 网页搜索 | 招聘与海外雇主评价 |
| `南京泛成生物化工有限公司 国际业务员 招聘 外贸 销售` | 网页搜索 | 中文岗位线索 |
| `南京泛成生物化工有限公司 BOSS直聘 国际业务员` | 网页搜索 | BOSS 招聘线索 |
| `南京泛成生物化工有限公司 看准 评价` | 网页搜索 | 中文雇主评价线索 |
| `南京泛成生物化工有限公司 职友集 工资 评价` | 网页搜索 | 薪资和招聘线索 |
| `Fenchem Inc Glassdoor reviews` | 网页搜索 | 海外员工评价线索 |
| `Fenchem Inc Indeed reviews Chino` | 网页搜索 | 海外招聘/评价线索 |

## 行业与同行检索

| 查询 | 平台 | 结果用途 |
| --- | --- | --- |
| `Cargill animal nutrition pet food ingredients official` | 网页搜索 | 同行地图 |
| `ADM pet nutrition animal nutrition ingredients official` | 网页搜索 | 同行地图 |
| `DSM Firmenich animal nutrition pet food official` | 网页搜索 | 同行地图 |
| `Kemin pet food ingredients animal nutrition official` | 网页搜索 | 同行地图 |
| `Evonik animal nutrition pet food official` | 网页搜索 | 同行地图 |
| `Ingredion pet food ingredients official` | 网页搜索 | 食品配料生态 |

## 社交平台检索

| 查询 | 平台 | 结果 |
| --- | --- | --- |
| `Fenchem` | OpenCLI Twitter | 噪音高；相关结果包括 SupplySide 展会帖 |
| `Fenchem Inc` | OpenCLI Twitter | 噪音高；未形成雇主口碑样本 |
| `food ingredients sales B2B` | OpenCLI Twitter | 返回 B2B/食品配料行业讨论和噪音 |
| `Fenchem` | OpenCLI Reddit | 多为市场报告搬运和行业名单 |
| `B2B sales career quota commission stress first year` | OpenCLI Reddit | 返回 B2B 销售职业路径和 quota 风险样本 |
| `外贸业务员 真实工作 压力 提成` | OpenCLI Bilibili | 返回外贸新人、提成、抗压、作息样本 |
| `外贸业务员 KPI 提成 压力 新人` | OpenCLI Xiaohongshu | 页面脚本错误 |
| `外贸业务员压力` | OpenCLI Xiaohongshu | 返回空结果 |

## 失败与限制记录

- `mcporter call exa.web_search_exa` 在当前环境中因 server/tool 调用格式和 server 注册问题失败；报告改用网页搜索与 OpenCLI 结果交叉。
- LinkedIn MCP 未配置，无法使用 `linkedin-scraper` 抓取完整公司和员工资料。
- 小红书复杂查询报 `MutationObserver` 页面脚本错误，简化查询无结果。
- V2EX API 在 doctor 中超时，未纳入关键证据。

## 信息缺口总表

| 信息缺口 | 决策影响 |
| --- | --- |
| 劳动合同、社保、薪酬和提成发放主体 | 影响劳动风险和收入兑现 |
| 试用期 KPI 和转正标准 | 影响新人失败概率 |
| 客户资源分配和线索来源 | 影响销售可达性 |
| 宠物食品方向具体产品线、区域和客户 | 影响职业路径价值 |
| 海外差旅覆盖新人程度 | 影响“出国机会”真实性 |
| 年假、加班、时差沟通边界 | 影响生活质量 |
| 南京团队管理风格和离职率 | 影响心理风险 |
| 学校岗位具体薪资、强度和城市 | 影响机会成本 |

以上缺口均按报告规则处理为：“公开信息未能确认。由于该信息对决策重要，因此构成信息不透明风险。”

## 本附录引用来源

- agent-reach doctor 输出，2026-07-03。
- OpenCLI Twitter 搜索输出，2026-07-03。
- OpenCLI Reddit 搜索输出，2026-07-03。
- OpenCLI Bilibili 搜索输出，2026-07-03。
- OpenCLI Xiaohongshu 搜索输出，2026-07-03。
- Fenchem 官网：https://www.fenchem.com/
- FDA Import Alert 99-08：https://www.accessdata.fda.gov/cms_ia/importalert_259.html
