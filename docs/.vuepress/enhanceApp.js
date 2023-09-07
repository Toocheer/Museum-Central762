import Vue from 'vue';

export default ({ router }) => {
  // 在 Vue 的 `beforeCreate` 钩子中执行代码
  Vue.mixin({
    beforeCreate() {
      // 检查是否在客户端环境中
      if (typeof window !== 'undefined') {
        const isSmallScreen = window.matchMedia("(max-width: 992px)").matches;

        if (isSmallScreen) {
          this.$nextTick(() => {
            const navbarCollapse = document.querySelector(".navbar-collapse");
            const navbarToggler = document.querySelector(".navbar-toggler");

            if (navbarCollapse && navbarToggler) {
              const isNavbarExpanded = navbarToggler.classList.contains("collapsed");

              if (!isNavbarExpanded) {
                navbarToggler.click();
              }
            }
          });
        }
      }
    }
  });
};
