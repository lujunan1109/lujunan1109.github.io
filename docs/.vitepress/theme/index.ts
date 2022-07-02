/*
 * @Description: 
 * @Author: lujunan
 * @Date: 2022-07-02 11:38:42
 * @LastEditors: lujunan
 * @LastEditTime: 2022-07-02 12:48:52
 */
// 导入vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/client/theme-default'

// 导入主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 想引入全局自己的 css 文件，也可以在这里引入

// 导入插件的主题
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    registerComponents(app)
  }
}

