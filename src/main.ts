/*
 * @Description: main
 * @Author: zhaobin
 * @Date: 2022-08-13 16:22:58
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-06-06 14:34:27
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

import "virtual:svg-icons-register";
import "@/styles/index.scss";
import "uno.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import SvgIcon from "@/components/SvgIcon/index.vue";

import { createPermission } from "./permission";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.component("SvgIcon", SvgIcon);
app.use(router);
app.use(store);
createPermission();
app.mount("#app");
