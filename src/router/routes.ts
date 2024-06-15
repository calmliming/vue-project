export default [
  {
    path: "/",
    // redirect: '/Dashboard',
    name: "Home",
    component: () => import("../layout/Home.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
];
