import Vue from 'vue';

export default ({ router }) => {
  // 检查是否在客户端环境中
  // if (typeof window !== 'undefined') {
  //   const isSmallScreen = window.matchMedia("(max-width: 992px)").matches;
  //   const navbarToggler = document.querySelector(".navbar-toggler");
  //   const navbarCollapse = document.querySelector(".navbar-collapse");

  //   if (isSmallScreen && navbarToggler && navbarCollapse) {
  //     // 在小屏幕上，点击按钮以切换导航栏的展开状态
  //     navbarToggler.addEventListener("click", () => {
  //       if (navbarCollapse.classList.contains("show")) {
  //         navbarCollapse.classList.add("collapsing"); // 添加 collapsing 类

  //         setTimeout(() => {
  //           navbarCollapse.classList.remove("show");
  //           navbarCollapse.classList.remove("collapsing"); // 移除 collapsing 类
  //           navbarCollapse.classList.add("collapse")
  //         }, 350); // 此处的时间与 CSS 过渡的时间一致
  //       } else {
  //         navbarCollapse.classList.add("show");

  //       }
  //     });
  //   }
  // }

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
