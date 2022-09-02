window.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".blog-slider", {
    allowTouchMove: false,
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

  const Item = document.querySelectorAll(".visual_slider figure");
  const mainSwiper = new Swiper(".visual_slider", {
    // Optional parameters
    //direction: "vertical",
    allowTouchMove: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //slidesPerView: "auto",
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    // spaceBetween: 60,
    //slideToClickedSlide: true,
    loop: true,
    //loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
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
        slideAll = document.querySelectorAll(".visual_slider .swiper-slide");
        realSlid = document.querySelector(
          ".visual_slider .swiper-slide-active"
        );
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

  const tab_b = document.querySelectorAll(".tab_top .js-marquee");
  const tab_m = document.querySelector(".tab_menu ul");
  const tab_menu = [...tab_m.children];
  tab_b.forEach((ele, idx) => {
    ele.addEventListener("click", () => {
      console.log(idx);
      tab_b.forEach((el) => {
        el.classList.add("on");
      });
      ele.classList.remove("on");
      tab_menu.forEach((el) => {
        el.classList.add("on");
      });
      tab_menu[idx].classList.remove("on");
    });
  });
  const menu_li = document.querySelectorAll("header nav > ul > li");
  const menu_a = document.querySelectorAll("header nav > ul > li>a");
  const menu_smenu = document.querySelectorAll("header .submenu");
  menu_a.forEach((el, idx) => {
    el.addEventListener("mouseenter", function (e) {
      menu_li.forEach((ele) => {
        ele.classList.remove("on");
      });
      this.parentElement.classList.add("on");
      e.preventDefault();
    });
  });
  menu_smenu.forEach((el) => {
    el.addEventListener("mouseleave", function (e) {
      menu_li.forEach((ele) => {
        ele.classList.remove("on");
      });
    });
  });
});

$(function () {
  $.fn.iOverScript = function (o) {
    o = $.extend(
      {
        btns: "",
        bg: "",
        speed: 700,
      },
      o || {}
    );

    var e = $(this);

    e.on("mouseenter", o.btns, function (event) {
      var idx = $(o.btns).index($(this));
      point_ray("on", idx, event);
      imgMove("on", idx);
    });
    e.on("mouseleave", o.btns, function (event) {
      var idx = $(o.btns).index($(this));
      point_ray("off", idx, event);
      imgMove("off", idx);
    });

    function point_ray(directions, nums, event) {
      e.find(o.btns).each(function (index) {
        if (nums == index) {
          w = $(this).width();
          h = $(this).height();
          (x =
            (event.pageX - $(this).offset().left - w / 2) *
            (w > h ? h / w : 1)),
            (y =
              (event.pageY - $(this).offset().top - h / 2) *
              (h > w ? w / h : 1)),
            (direction =
              Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) %
              4);

          if (directions == "on") {
            $(this).find(o.bg).show();
            if (direction == 0) {
              $(this).find(o.bg).css({ top: -h, left: 0 });
            } else if (direction == 1) {
              $(this).find(o.bg).css({ top: 0, left: w });
            } else if (direction == 2) {
              $(this).find(o.bg).css({ top: h, left: 0 });
            } else {
              $(this).find(o.bg).css({ top: 0, left: -w });
            }
            $(this)
              .find(o.bg)
              .stop()
              .animate({ top: 0, left: 0 }, o.speed, "easeOutExpo");
          } else if (directions == "off") {
            if (direction == 0) {
              $(this)
                .find(o.bg)
                .stop()
                .animate(
                  { top: -h, left: 0 },
                  o.speed,
                  "easeOutExpo",
                  function () {
                    $(this).parent().find(o.bg).hide();
                  }
                );
            } else if (direction == 1) {
              $(this)
                .find(o.bg)
                .stop()
                .animate(
                  { top: 0, left: w },
                  o.speed,
                  "easeOutExpo",
                  function () {
                    $(this).parent().find(o.bg).hide();
                  }
                );
            } else if (direction == 2) {
              $(this)
                .find(o.bg)
                .stop()
                .animate(
                  { top: h, left: 0 },
                  o.speed,
                  "easeOutExpo",
                  function () {
                    $(this).parent().find(o.bg).hide();
                  }
                );
            } else {
              $(this)
                .find(o.bg)
                .stop()
                .animate(
                  { top: 0, left: -w },
                  o.speed,
                  "easeOutExpo",
                  function () {
                    $(this).parent().find(o.bg).hide();
                  }
                );
            }
          }
        }
      });
    }

    function imgMove(directions, nums) {
      if ($("html").hasClass("main")) {
        if (nums == 1) {
          var map = e.find(o.bg).find(".img");
          if (directions == "on") {
            TweenMax.staggerTo(
              map,
              4,
              {
                left: "-100%",
                repeat: 10,
                repeatDelay: 0,
                yoyo: true,
                ease: Linear.easeNone,
              },
              0.25
            );
          } else {
            TweenMax.killTweensOf(map);
            map.css("left", "0");
          }
        }
      }
    }
  };
  //[e] Img Over Script
  // 플러그인 이미지(bg 움직임) 오버
  const real_a = $(".recipe .content .con_left");
  $(real_a).iOverScript({
    btns: ".ray", // 이벤트 class
    bg: ".bg_l", // 활성화 class
    speed: 500, // 속도
  });
});
