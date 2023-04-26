/*
 * @Description: 路由权限配置
 * @Author: zhaobin
 * @Date: 2023-04-25 16:14:44
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-04-26 16:14:12
 */
import router from "./router";
import { usePermissionStore } from "@/store/modules/permission";

export function createPermission() {
  const permissionStore = usePermissionStore();
  let a = 1;
  router.beforeEach((to, from, next) => {
    console.log(a);
    if (a === 1) {
      const routes = permissionStore.generateRoutes();
      routes.forEach((route) => {
        router.addRoute(route);
      });
      a++;
      next({ ...to, replace: true });
    } else {
      next();
    }
  });
}
