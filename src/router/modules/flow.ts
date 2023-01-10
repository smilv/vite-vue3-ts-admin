/*
 * @Description:flow router
 * @Author: zhaobin
 * @Date: 2023-01-10 14:02:01
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-01-10 15:52:03
 */
import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const flow: RouteRecordRaw = {
  path: "/flow",
  component: Layout,
  redirect: "/flow/index",
  name: "Flow",
  meta: {
    title: "charts",
    icon: "chart",
  },
  children: [
    {
      path: "index",
      component: () => import(/* webpackChunkName: "flow-index" */ "@/views/flow/index.vue"),
      name: "FlowIndex",
      meta: {
        title: "流程图",
      },
    },
  ],
};
export default flow;
