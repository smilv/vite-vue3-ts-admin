/*
 * @Description: main
 * @Author: zhaobin
 * @Date: 2022-08-13 16:22:58
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-04-26 15:36:35
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

import "@/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
// import "element-plus/theme-chalk/src/message.scss";

import { createPermission } from "./permission";

const app = createApp(App);
app.use(router);
app.use(store);
createPermission();
app.mount("#app");
