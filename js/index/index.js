$('.goJeecg').on('click', () => {
  window.location.href = './html/jeecg-vue2/jeecgVue2.html';
});

$('.goTxt').on('click', () => {
  window.location.href = './html/novel/novel.html';
});

$('.goDiary').on('click', () => {
  window.location.href = './html/diary/diary.html';
});

// 鼠标滚动/点击直接下一屏
// 浏览器兼容
if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
  document.addEventListener("DOMMouseScroll", scrollFun, false);
} else if (document.addEventListener) {
  document.addEventListener("mousewheel", scrollFun, false);
} else if (document.attachEvent) {
  document.attachEvent("onmousewheel", scrollFun);
} else {
  document.onmousewheel = scrollFun;
}
// 默认在第一屏
let index = 1;
//如果不加时间控制，滚动会过度灵敏，一次翻好几屏
let startTime = 0;
let endTime = 0;
toPage(index)
//滚动事件处理函数
function scrollFun(event) {
    startTime = new Date().getTime();
    let delta = event.detail || -event.wheelDelta;
    //mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
    //DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
    if (endTime - startTime < -1000) {
        if (delta > 0 && index < 6) {
            //向下滚动
            index++;
            toPage(index);
        }
        if (delta < 0 && index > 0) {
            //向上滚动
            index--;
            toPage(index);
        }
        endTime = new Date().getTime();
    }
}
function toPage(idx) {
  index = idx
  if(idx == '1') {
      let jump1 = $("#pageJump1").offset().top;
      $("html,body").animate({scrollTop:jump1}, 'slow');
  } else if (idx == '2') {
      let jump2 = $("#pageJump2").offset().top;
      $("html,body").animate({scrollTop:jump2}, 'slow');
  } else if (idx == '3') {
      let jump3 = $("#pageJump3").offset().top;
      $("html,body").animate({scrollTop:jump3}, 'slow');
  }

}

// 轮播图
layui.use(function(){
  var carousel = layui.carousel;
  // 渲染 - 常规轮播
  carousel.render({
    elem: '#currVit',
    width: '100%',
    height: '100vh',
    anim: 'updown',
    indicator: 'none',
  });
})
