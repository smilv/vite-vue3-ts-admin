/*
 * @Description: main
 * @Author: zhaobin
 * @Date: 2022-08-13 16:22:58
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-01-09 15:28:42
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";

// import "@/styles/element/index.scss";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "@/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
