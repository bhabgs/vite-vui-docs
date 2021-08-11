import { defineClientAppEnhance } from "@vuepress/client";
import asa from "./components/contentmenu";
import ant from "ant-design-vue";
import vitevui from "vitevui";
import "vitevui/lib/style.css";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // ...
  app.use(vitevui);
  app.use(ant);
  app.component("rightMenu", asa);
  console.log(123);
});
