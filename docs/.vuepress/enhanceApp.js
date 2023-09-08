import Vue from 'vue';

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    // 检查是否在客户端环境中
    if (typeof window !== 'undefined') {
      // 在路由切换后，将导航栏折叠（如果是小屏幕）
      const isSmallScreen = window.matchMedia("(max-width: 992px)").matches;
      const navbarCollapse = document.querySelector(".navbar-collapse");

      if (isSmallScreen && navbarCollapse) {
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      }
    }

    next();
  });
};
