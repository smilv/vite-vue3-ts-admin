/*
 * @Description: main
 * @Author: zhaobin
 * @Date: 2022-08-13 16:22:58
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-05-31 17:09:53
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

import "@/styles/index.scss";
import "uno.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import { createPermission } from "./permission";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(store);
createPermission();
app.mount("#app");
