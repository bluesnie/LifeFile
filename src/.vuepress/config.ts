import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";

import theme from "./theme.js";

export default defineUserConfig({
  // base: "/MyLife/",  // 在线github-pages 部署
  base: "/",           // 本地调试npm run docs:dev 或 本地部署，python3 -m http.server 8080

  dest: 'docs', // 打包输出路径

  lang: "zh-CN",
  title: "我的人生",
  description: "人生档案",

  theme,
  plugins: [
    // 注册全局组件的插件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    // 搜索插件
    searchPlugin({
      //多语言支持
      locales: {
        "/": {
          placeholder: "搜索本站",
        },
      },
      // 热键支持
      hotKeys: ["command", "k"],
      // 最大推荐个数
      maxSuggestions: 7,
      // 排除首页
      isSearchable: (page) => page.path !== "/",
    }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
