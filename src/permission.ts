/*
 * @Description: 路由权限配置
 * @Author: zhaobin
 * @Date: 2023-04-25 16:14:44
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-05-17 10:49:56
 */
import router from "./router";
import { usePermissionStore } from "@/store/modules/permission";

export function createPermission() {
  const permissionStore = usePermissionStore();
  let a = 1;
  router.beforeEach((to, from, next) => {
    if (a === 1) {
      const routes = permissionStore.generateRoutes();
      routes.forEach((route) => {
        router.addRoute(route);
      });
      a++;
      // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
      next({ path: to.fullPath, replace: true, query: to.query });
    } else {
      next();
    }
  });
}
