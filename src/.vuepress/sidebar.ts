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
            text: "退休计划",
            icon: "",
            prefix: "retire_plan/",
            collapsible: true,
            children: "structure",
          },
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
            text: "社会毒打",
            icon: "",
            prefix: "chicken_soup_for_life/",
            collapsible: true,
            children: "structure",
          },
      ],
    },
  ]
});
