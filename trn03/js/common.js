window.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });

  //////////////swiper
  // const Item = document.querySelectorAll(".visual figure");
  // const mainSwiper = new Swiper(".mainSwiper", {
  //   // Optional parameters
  //   //direction: "vertical",
  //   loop: true,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  //   // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   effect: "fade", // 페이드 효과 사용
  //   // Navigation arrows
  //   // navigation: {
  //   //   nextEl: ".swiper-button-next",
  //   //   prevEl: ".swiper-button-prev",
  //   // },

  //   // And if we need scrollbar
  //   // scrollbar: {
  //   //   el: ".swiper-scrollbar",
  //   // },
  //   /*on: {
  //     init: function () {
  //       console.log("swiper initialized");
  //     },
  //   },*/
  //   on: {
  //     slideChangeTransitionEnd: function () {
  //       slideAll = document.querySelectorAll(".swiper-slide");
  //       realSlid = document.querySelector(".swiper-slide-active");
  //       CloneSlide = document.querySelectorAll(
  //         ".swiper-slide-duplicate"
  //       ).length; //복제품 제거
  //       //console.log(CloneSlide);
  //       slideAll.forEach((element, i) => {
  //         element.classList.remove("on");
  //       });
  //       realSlid.classList.add("on");
  //       //alert(this.realIndex);//현재 인덱스
  //     },
  //   },
  // });
});
function change_img(name, img, num) {
  const real_img = document.querySelector(".real_map");
  const map_tit = document.querySelector(".map_txt h3 span");
  const map_num = document.querySelector(".map_txt strong");
  real_img.src = img;
  map_tit.innerText = name;
  map_num.innerText = num;
  //console.log(img);
}
