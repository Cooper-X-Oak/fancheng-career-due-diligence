# 调研方法与证据标准

## 本章调研问题

如何用公开信息判断“放弃已签约学校编制岗位，接受南京泛成宠物食品方向国际业务员岗位”是否是理性选择。

## 方法框架

本报告采用五类证据交叉：

1. 公司主体证据：官网、工商/企业信息搜索、信用/司法搜索、海外分支页面。
2. 行业证据：食品配料、营养原料、动物营养、宠物食品原料和饲料添加剂行业资料。
3. 招聘证据：官方 Careers、BOSS/职友集/看准/LinkedIn/Indeed/Glassdoor 等公开职位或评价线索。
4. 社交证据：X / Twitter、Reddit、B站、小红书、中文职场平台和行业社区搜索。
5. 候选人约束：英语/英美文学背景、已签约学校编制、不期待长期做教师、想要稳定/假期/收入/出国/国际业务/自决权，但抗压能力一般且未验证销售适配。

## 平台覆盖情况

agent-reach doctor 显示：Twitter/X、Reddit、B站、小红书、RSS、任意网页和 GitHub 后端可用；LinkedIn MCP 未配置，因此 LinkedIn 使用公开网页和 Jina/搜索 fallback；V2EX API 超时，因此未作为关键来源。

实际检索中：

- 网页搜索覆盖中文网页、英文网页、官网、招聘平台、行业网站、工商/信用/司法线索。
- X / Twitter 使用 OpenCLI 搜索 `Fenchem`、`Fenchem Inc`、`food ingredients sales B2B`。
- Reddit 使用 OpenCLI 搜索 `Fenchem`、`B2B sales career quota commission stress first year`。
- B站使用 OpenCLI 搜索外贸业务员真实工作、压力、提成、新人入职样本。
- 小红书使用 OpenCLI 搜索外贸业务员压力；一次复杂查询报页面脚本错误，简化查询返回空结果。
- LinkedIn 通过公开公司页和搜索引擎结果作为 fallback。
- 雇主评价平台覆盖 Glassdoor、Indeed、看准、职友集、BOSS 直聘搜索线索。

## 证据解释原则

公开信息能确认的事项，作为事实写入；公开信息只能间接支持的事项，写为推断；公开信息无法确认且重要的事项，写入信息不透明风险。

尤其注意三个容易误判的地方：

- “宠物食品方向”不等于宠物食品品牌方。泛成公开产品和行业线索更接近原料、配料、营养和精细化工供应链。
- “国际业务”不等于高频出国或低压工作。B2B 外贸销售更常见的是客户开发、询盘、报价、样品、订单、物流、回款和复购。
- “民企市场化经验”不自动转化为外企 Offer。可迁移性取决于客户质量、产品复杂度、英文商务能力、业绩记录和行业深度。

## 决策标准

本报告以四个问题作为最终决策轴：

| 决策轴 | 南京泛成路径要证明什么 | 学校编制路径要证明什么 |
| --- | --- | --- |
| 生存性 | 入职 6-12 个月内收入、KPI、带教和压力可承受 | 候选人能否承受长期教师身份和家庭控制延续 |
| 可迁移性 | 经验能否通向更好的 B2B、外企、BD、KA、采购或产品岗位 | 教师经验未来转国际商业岗位的成本是否可接受 |
| 可修复性 | 失败后能否回到外贸/商务/跟单/跨境或其他路径 | 放弃商业路径几年后是否仍能进入市场化岗位 |
| 价值匹配 | 是否真正换来国际业务、自决权和收入上限 | 是否真正提供稳定、假期和低波动生活 |

## 本章信息缺口

- LinkedIn MCP 未配置，无法完整抓取员工画像、员工 tenure、公司动态和岗位列表。公开信息未能确认。由于该信息对决策重要，因此构成信息不透明风险。
- 小红书 OpenCLI 在复杂查询中报页面脚本错误，简化查询返回空结果，无法形成小红书样本。公开信息未能确认。由于该信息对决策重要，因此构成信息不透明风险。
- 招聘平台页面存在反爬、动态页面和搜索结果变动，不能把单一平台页面当作稳定事实。公开信息未能确认。由于该信息对决策重要，因此构成信息不透明风险。

## 本章检索痕迹

- 本地读取：`docs/goal-prompt.md`、`docs/.vitepress/config.mts`、`docs/report/index.md`。
- 后端体检：`agent-reach doctor --json`。
- 社交平台检索：OpenCLI Twitter、OpenCLI Reddit、OpenCLI Bilibili、OpenCLI Xiaohongshu。
- 网页检索：Fenchem 官网、中文企业信息平台、招聘平台、雇主评价平台、行业同行官网和 FDA Import Alert。

## 引用来源

- agent-reach doctor 输出，2026-07-03。
- OpenCLI Twitter 搜索：`Fenchem`、`Fenchem Inc`、`food ingredients sales B2B`，2026-07-03。
- OpenCLI Reddit 搜索：`Fenchem`、`B2B sales career quota commission stress first year`，2026-07-03。
- OpenCLI Bilibili 搜索：`外贸业务员 真实工作 压力 提成`，2026-07-03。
- OpenCLI Xiaohongshu 搜索：`外贸业务员 KPI 提成 压力 新人`、`外贸业务员压力`，2026-07-03。
- Fenchem 官网：https://www.fenchem.com/
- LinkedIn Fenchem 公开页：https://www.linkedin.com/company/fenchem/
- Glassdoor 搜索：https://www.glassdoor.com/Search/results.htm?keyword=Fenchem%20Inc
- Indeed 搜索：https://www.indeed.com/q-fenchem-jobs.html
