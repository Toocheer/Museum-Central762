import Vue from 'vue';

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    // 使用媒体查询来检测屏幕宽度
    const isSmallScreen = window.matchMedia("(max-width: 992px)").matches;

    if (isSmallScreen) {
      // 屏幕宽度小于等于 768px 时应用折叠效果
      Vue.nextTick(() => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        const navbarToggler = document.querySelector(".navbar-toggler");

        if (navbarCollapse && navbarToggler) {
          const isNavbarExpanded = navbarToggler.classList.contains("collapsed");

          if (!isNavbarExpanded) {
            // 如果导航栏是展开状态，模拟点击折叠按钮
            navbarToggler.click();
          }
        }
        next();
      });
    } else {
      // 屏幕宽度大于 768px 时不应用折叠效果
      next();
    }
  });
};
