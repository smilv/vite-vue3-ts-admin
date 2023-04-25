/*
 * @Description: 路由权限配置
 * @Author: zhaobin
 * @Date: 2023-04-25 16:14:44
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-04-25 16:36:38
 */
import router from "./router";

router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  return false;
});
