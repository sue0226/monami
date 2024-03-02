// header top : 언어 설정 제어 
const langEl = document.querySelector('.lang');

langEl.addEventListener('click', function () {
  langEl.classList.toggle('on');
});


// header bottom : 전체메뉴 제어
const btnAllEl = document.querySelector('.btn-all');
const allMenuEl = document.querySelector('.header-bottom__allmenu');

btnAllEl.addEventListener('click', function () {
  btnAllEl.classList.toggle('open-menu');
  allMenuEl.classList.toggle('on');
});


// 메뉴 슬라이드 
// const menuEls = document.querySelectorAll('.header-bottom__menu > li > a');
// const menuUlEls = document.querySelector('.header-bottom__menu ul');

// menuEls.forEach(function (menuEl){

//   menuEl.addEventListener('mouseover', function() {
//     menuEl.classList.remove('close');
//     menuEl.classList.add('open');
//     console.log(menuEl);
//     // let selectedMenu = menuEl.getAttribute('ul');
//     console.log(menuUlEls);
//     gsap.set(menuUlEls , { 
//       height: 'auto' 
//     });
//     gsap.from(menuUlEls , .6, {
//       height: 0
//     })
//   });
//   menuEl.addEventListener('mouseout', function() {
//     menuEl.classList.remove('open');
//     menuEl.classList.add('close');
//     console.log(menuUlEls);
//     // gsap.set(menuUlEls , { 
//     //   height: 'auto' 
//     // });
//     gsap.to(menuUlEls , .6, {
//       height: 0,
//       paddingTop: 0,
//       marginTop: 0
//     })
//   });
// });

// Footer : family site 리스트 제어
const famSitesListEl = document.querySelector('.fam-sites__list');

document.querySelector('.fam-sites a').addEventListener('click', function () {
  famSitesListEl.classList.toggle('on');
});

