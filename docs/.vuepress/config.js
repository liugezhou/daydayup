module.exports = {
  title: '今日前端',
  description: '',
  base: '',
  plugins: [
    [
      '@vuepress/back-to-top',
      '@vuepress/last-updated',
      {
        dateOptions: {
          hour12: false,
        },
      },
    ],
  ],
  head: [
    [
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?4ef6dc604509807e9702b3851e114a74";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      </script>
      `,
    ],
    [
      'script', // js 文件
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1183508160150958',
        crossorigin: 'anonymous',
      },
    ],
  ],
  themeConfig: {
    logo: '/favicon.ico',
    displayAllHeaders: false,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    sidebar: {
      '/github/': [
        'before',
        'signup',
        'create',
        {
          title: '个人设置',
          children: ['profile', 'settings'],
        },
        'alerts',
        'codespaces',
        'packages',
      ],
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
      '/daily/': [
        {
          title: '2022年11月',
          collapsable: true,
          children: ['day28','day27', 'day26'],
        },
        {
          title: '2022年10月',
          collapsable: true,
          children: [
            'day25',
            'day24',
            'day23',
            'day22',
            'day21',
            'day20',
            'day19',
            'day18',
            'day17',
            'day16',
            'day15',
            'day14',
            'day13',
            'day12',
            'day11',
          ],
        },
        {
          title: '2022年9月',
          collapsable: true,
          children: [
            'day10',
            'day9',
            'day8',
            'day7',
            'day6',
            'day5',
            'day4',
            'day3',
            'day2',
            'day1',
          ],
        },
      ],
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '今日前端', link: '/daily/day28' },
      { text: 'Github网站食用', link: '/github/before' },
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
