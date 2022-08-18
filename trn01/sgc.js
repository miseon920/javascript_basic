$(function () {
  var TXT = ["HOME", "01", "02", "03", "04", "05", "06"];
  $(".main").fullpage({
    anchors: ["page01", "page02", "page03", "page04", "page05", "page06"],
    menu: "#myMenu",
    //navigation: true,
    // afterRender: function () {
    //   var pluginContainer = this;
    //   //alert("The resulting DOM structure is ready");
    // },
    afterLoad: function (page, num) {
      //origin, destination, direction, trigger
      //console.log(num);
      setTimeout(function () {
        $("section")
          .eq(num - 1)
          .addClass("on")
          .siblings()
          .removeClass("on");
      });
      $(".gnb li")
        .eq(num - 1)
        .addClass("on")
        .siblings()
        .removeClass("on");
      //$(".this_page").text(page);
      $(".this_page").text(TXT[num - 1]);
      // $(".this_bg").css({
      //   backgroundPositionY: -100 * (num - 1) + "px",
      // });
      // $(".this_pic img").attr({
      //   src: `./assets/images/img0` + num + `.jpg`,
      // });
      // $(".this_tp").css({
      //   backgroundImage: `url(./assets/images/img0` + num + `.jpg)`,
      // });
    },
  });
  $(".page03").on("wheel", function (e) {
    console.log(e.originalEvent);
  });
});
