module.exports = {
  title: '今日前端',
  description: '',
  base: '',
  // TODO 百度统计
  head: [
    [
     
    ],
  ],
  themeConfig: {
    logo: '/time.png',
    displayAllHeaders: true,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    sidebar: {
      '/web/': [
        'before',
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '14',
        '15',
        '16',
        '17',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
      ],
      '/daily/': ['today', '202210','202209'],
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '今日前端', link: '/daily/today' },
      { text: '前端脚手架', link: '/web/before' },
      { text: '他的博客', link: 'https://blog.liugezhou.online' },
    ],
    repo: 'liugezhou/daydayup',
    repoLabel: 'Github',
    docsBranch: 'main',
    editLinks: true,
    docsDir: '/docs/',
    editLinkText: '错误反馈',
    smoothScroll: true,
  },
}
