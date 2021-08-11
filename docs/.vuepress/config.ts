import { defineUserConfig } from "@vuepress/cli";
import sidebar from "./configs/siderbar";

export default defineUserConfig({
  lang: "zh-CN",
  description: "这是我的第一个 VuePress 站点666",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "ViteVui",
      description: "基于Vue3.0 开发的vue ui工具",
    },
  },
  themeConfig: {
    logo: "https://avatars.githubusercontent.com/u/19221378?s=60&v=4",

    repo: "bhabgs/vuepress-next",

    docsDir: "docs",
    locales: {
      "/": {
        // navbar
        navbar: [],

        // sidebar
        sidebar: sidebar,

        // page meta
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",

        // sidebar

        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",

        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",

        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",

        // a11y
        openInNewWindow: "在新窗口打开",
        toggleDarkMode: "切换夜间模式",
      },
    },
  },
});
