
// 베스트 상품 제어
new Swiper('.best-product .swiper', {
    slidesPerView: "auto",
    freeMode: true
  });


// 영상 제어
const controller = new ScrollMagic.Controller();
const videoEl = document.getElementById('index-video');

new ScrollMagic.Scene({triggerElement: videoEl, triggerHook: .5})
.addTo(controller)
.on("enter", function () {
    videoEl.play();
})
.on("leave", function () {
    videoEl.pause();
})


//  팝업 닫기 제어
const popupEl = document.querySelector('.popup');
document.querySelector('.popup__close').addEventListener('click', function (){
  popupEl.setAttribute('style', 'display:none');
});