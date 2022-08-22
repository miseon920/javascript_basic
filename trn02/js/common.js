window.addEventListener("DOMContentLoaded", () => {
  const H1 = document.querySelector("h1");
  const TOGGLE = function () {
    //console.log(this);
    this.classList.toggle("on");
  };
  H1.addEventListener("click", TOGGLE);

  /*H1.innerText = `h2
    tetsdfsd
  `;*/
  // H1.addEventListener("click", function () {
  //   this.style.color = `pink`;
  // });
  /*
    위와 같은경우 아래와 같이 바꿀 수 있음!! 
    addEventListener의 콜백함수에서는 this에 해당 이벤트 리스너가 호출된 
    엘리먼트가 바인딩되도록 정의되어 있습니다.
    이처럼 이미 this의 값이 정해져있는 콜백함수의 경우, 
    화살표 함수를 사용하면 기존 바인딩 값이 사라지고 
    상위 스코프(이 경우엔 전역 객체)가 바인딩되기 때문에 의도했던대로 동작하지 않을 수 있습니다. 
    물론 상위 스코프의 속성들을 쓰려고 의도한 경우라면 사용할 수 있습니다.
    이러한 이유로 아래로 바꿔야함!
  */
  /*H1.addEventListener("click", (e) => {
    e.currentTarget.style.color = `red`;
    console.log(e.currentTarget, e.target);
    핵심은 currentTarget은 이벤트 핸들러가 부착된 것을 가리킨다는 것이다!
    즉, event.target은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 
    내가 클릭한 자식 요소를 반환한다. 하지만 currentTarget은 이벤트가 부착된 부모의 위치를 반환한다.    
    
  });*/
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

  const last_c = document.querySelector("main").lastElementChild;
  const last_ch = last_c.offsetTop - 300;
  window.addEventListener("scroll", function () {
    let sct = window.scrollY;
    //console.log(sct);
    sct > 0
      ? document.querySelector("header").classList.add("on")
      : document.querySelector("header").classList.remove("on");
    SCE_ELE.forEach((el, index) => {
      const idx = index + 1;
      //el.classList.add("on");
      sct > el.offsetTop - 300
        ? el.classList.add("on")
        : el.classList.remove("on");
    });
    sct >= last_ch ? last_c.classList.add("on") : last_c.classList.remove("on");
  });

  const UL = document.querySelector("nav ul");
  const LI = [...UL.children][1]; //칠드런 나열 - 배열[인덱스번호]
  //console.log(LI);
});
