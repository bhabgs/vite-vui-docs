import DefaultTheme from "vitepress/dist/client/theme-default";
import asa from "./component/contentmenu.vue";
import ant from "ant-design-vue";
import vitevui from "vitevui";
import "vitevui/lib/style.css";
import "./style.less";

export default {
  ...DefaultTheme,
  enhanceApp(opt) {
    console.log(0);
    const { app } = opt;
    app.use(vitevui);
    app.use(ant);
    app.component("rightMenu", asa);
    // setTimeout(async () => {
    // const vitevui = await import('../../../package/vitevui');

    // }, 500);
  },
};
