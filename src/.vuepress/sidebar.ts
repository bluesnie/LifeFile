import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [],
  "/life_file/":[
    {
      text: "人生档案",
      icon: "",
      prefix: "",
      link: "",
      collapsible: true,
      children: [
        {
          text: "人生待办",
          icon: "",
          prefix: "todo/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "旅途",
          icon: "",
          prefix: "journey/",
          collapsible: true,
          children: "structure",
        },
          {
            text: "退休计划",
            icon: "",
            prefix: "retire_plan/",
            collapsible: true,
            children: "structure",
          },

      ],
    },
  ],
  "/knowledge_expansion/": [
    {
      text: "知识拓展",
      icon: "",
      prefix: "",
      link: "",
      collapsible: true,
      children: [
          {
            text: "书籍",
            icon: "",
            prefix: "books/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "影视作品",
            icon: "",
            prefix: "video/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "人生如戏",
            icon: "",
            prefix: "life_movie/",
            collapsible: true,
            children: "structure",
          },
      ],
    },
  ]
});
