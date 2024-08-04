import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/life_file/",
  {
    text: "学习笔记",
    icon: "book",
    link: "https://bluesnie.github.io/Learning-notes/",
  },
  {
    text: "更新时间轴",
    icon: "timeline",
    prefix: "/timeline/",
    link: "/timeline/",
  },

  {
    text: "文档",
    icon: "circle-info",
    children: [
      {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
      },
      {
        text: "icon 图标",
        icon: "signs-post",
        link: "https://fontawesome.com/search?o=r&m=free",
      },
      {
        text: "emoji 图标",
        icon: "signs-post",
        link: "https://github.com/ikatyang/emoji-cheat-sheet",
      },
    ],
  },
]);
