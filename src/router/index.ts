import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import routes from "./routes";

export const router = createRouter({
  // hash模式：createWebHashHistory()，url上带#号，不需要后端配置
  // history模式：createWebHistory()，url上不带#号，需要后端配置
  history: createWebHashHistory(),
  routes,
});

// 路由加载前，路由拦截，权限验证
router.beforeEach(async (to, from, next) => {
  next();
  // 根据token存在的情况判断是否要拦截路由，代码后面补充
});
