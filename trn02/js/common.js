window.addEventListener("DOMContentLoaded", () => {
  const H1 = document.querySelector("h1");
  const TOGGLE = function () {
    //console.log(this);
    this.classList.toggle("on");
  };
  H1.addEventListener("click", TOGGLE);

  //////////////swiper
  const Item = document.querySelectorAll(".visual figure");
  const mainSwiper = new Swiper(".mainSwiper", {
    // Optional parameters
    //direction: "vertical",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade", // 페이드 효과 사용
    // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
    /*on: {
      init: function () {
        console.log("swiper initialized");
      },
    },*/
    on: {
      slideChangeTransitionEnd: function () {
        slideAll = document.querySelectorAll(".swiper-slide");
        realSlid = document.querySelector(".swiper-slide-active");
        CloneSlide = document.querySelectorAll(
          ".swiper-slide-duplicate"
        ).length; //복제품 제거
        //console.log(CloneSlide);
        slideAll.forEach((element, i) => {
          element.classList.remove("on");
        });
        realSlid.classList.add("on");
        //alert(this.realIndex);//현재 인덱스
      },
    },
  });
  const real_PSwiper = new Swiper(".real_PSwiper", {
    slidesPerView: 2,
    loop: true,
    navigation: {
      nextEl: ".real_PSwiper .swiper-button-next",
      prevEl: ".real_PSwiper .swiper-button-prev",
    },
  });
  const SSwiper = new Swiper(".SSwiper", {
    slidesPerView: 2,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 6,
      },
    },
  });

  const tab_box = document.querySelector(".tab_bt ul");
  const tab_li = [...tab_box.children];
  const con_box = document.querySelector(".tab_slide");
  const tab_slide = [...con_box.children];

  tab_li.forEach((el, idx) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      //console.log(e);
      tab_li.forEach((ele) => {
        ele.classList.remove("on");
      });
      this.classList.add("on");
      tab_slide.forEach((el) => {
        el.classList.remove("on");
      });
      tab_slide[idx].classList.add("on");
    });
  });
  var hamburgers = document.querySelector(".hamburger");
  var nav = document.querySelector("nav");
  var html = document.querySelector("html");

  hamburgers.addEventListener("click", function () {
    this.classList.toggle("is-active");
    nav.classList.toggle("on");
  });

  window.addEventListener("scroll", function () {
    let sct = window.scrollY;
    //console.log(sct);
    sct > 0
      ? document.querySelector("header").classList.add("on")
      : document.querySelector("header").classList.remove("on");
  });
});
