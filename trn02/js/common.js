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

  //img map
  const map_area = document.querySelectorAll("#image_map area");
  map_area.forEach((el, idx) => {
    //console.log(el);
    //ele.setAttribute("data-height", imgMax);
    const name = el.getAttribute("data-id");
    const map_name = el.getAttribute("alt");
    const map_num = el.getAttribute("data-num");

    el.setAttribute(
      "onmouseover",
      `change_img('${map_name}','./img/${name}.png','${map_num}')`
    );
    el.setAttribute(
      "onmouseout",
      `change_img('${map_name}','./img/map.png','${map_num}')`
    );
    //console.log(map_name);
  });
  //$("map").imageMapResize();
  function win_w() {
    const win_width = document.documentElement.clientWidth;
    const map_box = document.querySelector("#image_map");
    const real_img = document.querySelector(".real_map");
    const map_area = document.querySelectorAll("#image_map area");
    //console.log(map_area.length);
    let arr = [];
    let toggle = true;
    let idx = 0;

    if (win_width < 1025) {
      for (i = 0; i < map_area.length; i++) {
        //console.log(map_area[i]);
        const name = map_area[i].getAttribute("data-id");
        arr.push(name);
      }
      timer = setInterval(function () {
        idx++;
        idx == map_area.length ? "" : console.log(i, arr[idx], idx);
      }, 1000);
    } else {
      //clearInterval(mob_map);
    }
  }
  win_w();
  window.addEventListener("resize", function () {
    win_w();
  });
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
