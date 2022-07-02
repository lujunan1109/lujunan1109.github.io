/*
 * @Description: 
 * @Author: lujunan
 * @Date: 2022-07-02 10:53:20
 * @LastEditors: lujunan
 * @LastEditTime: 2022-07-02 13:17:32
 */
// vitepress/config.js
module.exports = {
  title: "lulujunan__BLOG",// 网站标题
  description: '我的vitepress博客.', //网站描述
  base: '/lujunan1109.github.io/dist/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  // 网页头部配置，引入需要图标，css，js
  head: [
    // 改变title的图标
    [
      'link',
      {
        rel: 'icon',
        href: '/img/Blog.png',//图片放在public文件夹下
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    repo: 'https://github.com/lujunan1109', // 你的 github 仓库地址，网页的右上角会跳转
    //   头部导航
    nav: [
      {
        text: '前端技术', items: [
          { text: '全家桶', link: '/ts/basics', activeMatch: '^/ts/' },
          { text: '类型体操', link: '/skills/vue' }
        ]
      },
      {
        text: '日常记录', items: [
          { text: '上分', link: '/mine/index', activeMatch: '^/mine/' },
        ]
      },
      {
        text: '技术之外', items: [
          { text: '学习', link: '/about/index', activeMatch: '^/about/' },
        ]
      }
    ],
    //   侧边导航
    sidebar: {
      '/home/': [
        {
          text: '基础知识',
          items: [
            { text: 'js基础', link: '/home/index' }, // link 和 头部导航的 link 对应， 访问文件为 docs/ts/basics.md 文件
            { text: 'js基础2', link: '/home/js' }, // link 和 头部导航的 link 对应， 访问文件为 docs/ts/basics.md 文件
          ]
        },
      ],
      '/': [
        {
          text: '基础知识',
          items: [
            { text: '基础', link: '/ts/basics' }, // link 和 头部导航的 link 对应， 访问文件为 docs/ts/basics.md 文件
            { text: '内置类型', link: '/ts/inside-type' },
          ]
        },
      ],
      '/ts/': [
        {
          text: '基础知识',
          items: [
            { text: '基础', link: '/ts/basics' }, // link 和 头部导航的 link 对应， 访问文件为 docs/ts/basics.md 文件
            { text: '内置类型', link: '/ts/inside-type' },
          ]
        },
      ],
      '/skills/': [
        {
          text: '基础知识',
          items: [
            { text: '基础', link: '/skills/vue' }, // link 和 头部导航的 link 对应， 访问文件为 docs/ts/basics.md 文件
            { text: '内置类型', link: '/ts/inside-type' },
          ]
        }
      ]
    },
     //丝滑滚动
     smoothScroll: true,
     // 启用时间线
     editLinks: true,
     //在git上编辑提示文字
     editLinkText: '在 GitHub 上编辑此页',
     // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
     lastUpdated: '上次更新'
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        lang: 'ts'
      })
    }
  }
}



