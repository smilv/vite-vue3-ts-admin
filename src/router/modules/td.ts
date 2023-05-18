/*
 * @Description:flow router
 * @Author: zhaobin
 * @Date: 2023-01-10 14:02:01
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-05-18 16:45:36
 */
import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const td: RouteRecordRaw = {
  path: "/td",
  component: Layout,
  redirect: "/td/test-1",
  name: "Td",
  meta: {
    title: "测试",
  },
  children: [
    {
      path: "test-1",
      name: "Td1",
      meta: {
        title: "测试-1",
      },
      redirect: "/td/test-1/test-1-1",
      children: [
        {
          path: "test-1-1",
          component: () => import("@/views/test1-1.vue"),
          name: "Td11",
          meta: {
            title: "测试-1-1",
          },
        },
      ],
    },
    {
      path: "test-2",
      component: () => import("@/views/test2.vue"),
      name: "Td2",
      meta: {
        title: "测试-2",
      },
    },
    {
      path: "test-3",
      component: () => import("@/views/test3.vue"),
      name: "Td3",
      meta: {
        title: "测试-3",
      },
    },
    {
      path: "http://baidu.com",
      name: "Baidu",
      redirect: "",
      meta: {
        title: "百度",
      },
    },
  ],
};
export default td;
