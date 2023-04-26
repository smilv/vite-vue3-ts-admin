/*
 * @Description: permission
 * @Author: zhaobin
 * @Date: 2023-04-25 16:54:34
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-04-26 15:01:48
 */
import type { RouteRecordRaw } from "vue-router";

import { defineStore } from "pinia";
import { asyncRoutes, constantRoutes } from "@/router";

interface PermissionStore {
  routes: RouteRecordRaw[];
  addRoutes: RouteRecordRaw[];
}

export const usePermissionStore = defineStore("permission", {
  state: (): PermissionStore => ({
    routes: [],
    addRoutes: [],
  }),
  actions: {
    generateRoutes() {
      let routes: RouteRecordRaw[] = [];
      routes = asyncRoutes;
      this.setRoutes(routes);
      return routes;
    },
    setRoutes(routes: RouteRecordRaw[]) {
      this.addRoutes = routes;
      this.routes = constantRoutes.concat(routes);
    },
  },
});
