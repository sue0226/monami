// header top : 언어 설정 제어 
const langEl = document.querySelector('.lang');

langEl.addEventListener('click', function () {
  
  if (!langEl.classList.contains('on')) {
      // on 클래스추가
    langEl.classList.add('on');
  } else {
    //  on 이 이미 존재하면 삭제
    langEl.classList.remove('on');
  }
});


// header bottom : 전체메뉴 버튼 제어
const btnAllEl = document.querySelector('.btn-all');

btnAllEl.addEventListener('click', function () {
  
  if (!btnAllEl.classList.contains('open-menu')) {
      btnAllEl.classList.add('open-menu');
  } else {
    btnAllEl.classList.remove('open-menu');
  }
});


// header bottom : 전체메뉴 표시 제어
const allMenuEl = document.querySelector('.header-bottom__allmenu');

document.querySelector('.btn-all').addEventListener('click', function () {
  
  if (!allMenuEl.classList.contains('on')) {
      // on 클래스추가
      allMenuEl.classList.add('on');
  } else {
    //  on 이 이미 존재하면 삭제
    allMenuEl.classList.remove('on');
  }
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
  
  if (!famSitesListEl.classList.contains('on')) {
      // on 클래스추가
      famSitesListEl.classList.add('on');
  } else {
    //  on 이 이미 존재하면 삭제
    famSitesListEl.classList.remove('on');
  }
});

