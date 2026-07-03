import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '择业调研与雇主背调',
  description: '南京泛成外贸销售岗位择业调研与雇主背调报告',
  lang: 'zh-CN',
  base: '/fancheng-career-due-diligence/',
  cleanUrls: true,
  appearance: false,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '报告', link: '/report/' },
      { text: 'Goal Prompt', link: '/goal-prompt' }
    ],
    sidebar: {
      '/report/': [
        {
          text: '报告总览',
          items: [
            { text: '报告索引', link: '/report/' },
            { text: '交付规范', link: '/report/delivery-spec' }
          ]
        },
        {
          text: '核心报告',
          items: [
            { text: '调研方法与证据标准', link: '/report/00-methodology/research-method-and-evidence-standard' },
            { text: '公司与雇主背调', link: '/report/01-company-background/company-and-employer-due-diligence' },
            { text: '行业与上下游分析', link: '/report/02-industry-supply-chain/industry-and-supply-chain' },
            { text: '岗位真实画像', link: '/report/03-role-reality/role-reality' },
            { text: '社交平台与口碑调研', link: '/report/04-social-platform-and-reputation/social-platform-and-reputation' },
            { text: '职业路径与上位替代', link: '/report/05-career-path-and-upward-substitutes/career-path-and-upward-substitutes' },
            { text: '学校编制路径机会成本', link: '/report/06-teacher-path-opportunity-cost/teacher-path-opportunity-cost' },
            { text: '候选人适配与取舍', link: '/report/07-candidate-fit/candidate-fit-and-tradeoffs' },
            { text: '风险模型与止损计划', link: '/report/08-risk-model/risk-model-and-stop-loss-plan' },
            { text: '最终决策输出', link: '/report/09-final-decision/final-decision' }
          ]
        },
        {
          text: '附录',
          items: [
            { text: '来源总表', link: '/report/appendices/source-bibliography' },
            { text: '搜索日志', link: '/report/appendices/search-log' }
          ]
        }
      ]
    },
    outline: {
      level: [2, 3]
    },
    search: {
      provider: 'local'
    }
  }
})
