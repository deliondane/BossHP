//nav
const bottomLi = document.querySelectorAll('#bottom > li');

for (const item of bottomLi) {
  const dropdown = document.querySelector('.dropdown');
  //메뉴에 마우스를 올려놨을때 실행
  item.addEventListener('mouseenter', () => {
    //화살표 함수 내에서의 this는 상위객체인 window가 선택됨
    item.lastElementChild.style.maxHeight = item.lastElementChild.scrollHeight + "px";
  })
  //메뉴에서 마우스가 떠났을때 실행
  item.addEventListener("mouseleave", () => {
    item.lastElementChild.style.maxHeight = "0px";
  })
}

//product_dot
const dotOnList = document.querySelectorAll('ul.product_dot > li');

dotOnList.forEach(item => item.addEventListener('click', (e) => {
  for (const item of dotOnList) {
    item.classList.remove('on');
  }
  item.classList.add('on');
}))

//second_info
const dot = document.querySelectorAll('.dot > li');
const title = document.querySelector('#sec_info_txt h1');
const subTitle = document.querySelector('#sec_info_txt h3');
const secondInfo = document.querySelector('#second_info');

dot.forEach(item => {
  item.addEventListener('click', () => {
    const newSrc = item.getAttribute('data-src');
    const newTitle = item.getAttribute('data-title');
    const newSubTitle = item.getAttribute('data-subtitle');

    // 잠시 대기 후 배경 이미지 변경
    setTimeout(() => {
      secondInfo.style.backgroundImage = `url(${newSrc})`;
      secondInfo.style.transform = 'translateX(0)'; // 원래 위치로 돌아오기
      title.innerHTML = newTitle || "기본 제목";
      subTitle.innerHTML = newSubTitle || "기본 부제목";

      // 현재 선택된 점 표시
      dot.forEach(dotItem => dotItem.classList.remove('on'));
      item.classList.add('on');
    }, 500);
  });
});


/*
const sliderWrap = document.querySelector('.slider_wrap');
const sliderImg = sliderWrap.querySelector('.slider_img');
const sliderInner = sliderWrap.querySelector('.slider_inner');
const slider = sliderWrap.querySelectorAll('.slider');
const sliderDot = sliderWrap.querySelector('.slider_dot');
const sliderBtn = sliderWrap.querySelectorAll('.slider_btn a');

let currentIndex = 0; //현재 보이는 이미지
let sliderCount = slider.length; //이미지 갯수
let sliderWidth = slider[0].offsetWidth; //이미지가로값
let sliderInterval = 1000; //이미지 변경 시간
let dotIndex = '';

function init(){
  //이미지 갯수만큼 닷 메뉴 생성
  slider.forEach(()=>{
    dotIndex += `<a href="" class="dot"></a>`;
  })
    sliderDot.innerHTML = dotIndex;

  //첫번째 닷 메뉴에 활성화 표시
  sliderDot.firstChild.classList.add("active");
}
init();

function gotoSlider(num){
  sliderInner.style.transition = "all 400ms"
  sliderInner.style.transform = "translateX("+ -sliderWidth * num +"px)"
  currentIndex = num;

  let dotActive = document.querySelectorAll(".slider_dot .dot")
  dotActive.forEach((active)=>active.classList.remove("active"));
  dotActive[num].classList.add("active")
}

//버튼을 클릭했을 때
sliderBtn.forEach((btn, index)=>{
  btn.addEventListener("click",()=>{
      let prevIndex = (currentIndex + sliderCount-1) % sliderCount
      let nextIndex = (currentIndex + 1) % sliderCount

      if(btn.classList.contains("prev")){
          gotoSlider(prevIndex)
      } else {
          gotoSlider(nextIndex)
      }
  })
})
*/


// 사이드 메뉴
// 사이드 메뉴
const sideMenuBar = document.querySelector('.menu-toggle-btn'); // 단일 요소 선택
const mobileMenu = document.querySelector('.mobile-menu'); // 단일 요소 선택
const closeBtn = document.querySelector('.close-btn'); // 닫기 버튼 선택

sideMenuBar.addEventListener('click', function () {
  mobileMenu.style.display = 'block'; // 'block'은 문자열이어야 함
  mobileMenu.style.animation = 'slideIn 0.5s forwards'; // 애니메이션 추가
});

closeBtn.addEventListener('click', function () {
  mobileMenu.style.animation = 'slideOut 0.5s forwards'; // 닫힐 때 애니메이션 추가
  setTimeout(() => {
    mobileMenu.style.display = 'none'; // 애니메이션 종료 후 display를 'none'으로 변경
  }, 500); // 애니메이션 시간에 맞춰 딜레이 설정
});

// //사이드 메뉴 드롭다운
// // 모든 드롭다운 버튼을 선택
// const dropdownBtn = document.querySelectorAll('.dropdownBtn');

// // 각 드롭다운 버튼에 클릭 이벤트 리스너 추가
// dropdownBtn.forEach(button => {
//   button.addEventListener('click', function () {
//     const dropdownMenu = this.nextElementSibling; // 버튼 바로 다음 요소가 드롭다운 메뉴

//     // 다른 드롭다운이 열려있다면 원상복구
//     document.querySelectorAll('.mobile-menu-list-dropdown').forEach(menu => {
//       if (menu !== dropdownMenu) { // 클릭된 메뉴가 아니라면
//         menu.style.display = 'none'; // 닫기
//       }
//     });

//     // 다른 버튼에서 열려있는 메뉴가 있으면 아이콘 원상복구
//     document.querySelectorAll('.dropdownBtn').forEach(btn => {
//       if (btn !== this) { // 클릭된 버튼이 아니라면
//         btn.classList.remove('open'); // 아이콘 회전 복구
//       }
//     });

//     // 클릭된 메뉴가 이미 열려 있다면 닫기
//     if (dropdownMenu.style.display === 'block') {
//       dropdownMenu.style.display = 'none';
//       this.classList.remove('open'); // 아이콘 원래대로
//     } else {
//       // 새로운 메뉴를 열기
//       dropdownMenu.style.display = 'block';
//       this.classList.add('open'); // 아이콘 180도 회전
//     }
//   });
// });

// // 모든 드롭다운 버튼을 선택
// const dropdownBtn = document.querySelectorAll('.dropdownBtn');

// // 각 드롭다운 버튼에 클릭 이벤트 리스너 추가
// dropdownBtn.forEach(button => {
//   button.addEventListener('click', function () {
//     const dropdownMenu = this.nextElementSibling; // 버튼 바로 다음 요소가 드롭다운 메뉴

//     // 다른 드롭다운이 열려있다면 원상복구
//     document.querySelectorAll('.mobile-menu-list-dropdown').forEach(menu => {
//       if (menu !== dropdownMenu) { // 클릭된 메뉴가 아니라면
//         menu.style.maxHeight = '0'; // 닫기
//         menu.style.display = 'none'; // display 속성도 'none'으로 설정하여 완전히 숨기기
//         menu.classList.remove('show'); // show 클래스 제거
//       }
//     });

//     // 다른 버튼에서 열려있는 메뉴가 있으면 아이콘 원상복구
//     document.querySelectorAll('.dropdownBtn').forEach(btn => {
//       if (btn !== this) { // 클릭된 버튼이 아니라면
//         btn.classList.remove('open'); // 아이콘 회전 복구
//       }
//     });

//     // 클릭된 메뉴가 이미 열려 있다면 닫기
//     if (dropdownMenu.style.maxHeight !== '0px') {
//       dropdownMenu.style.maxHeight = '0'; // 닫기
//       dropdownMenu.classList.remove('show'); // show 클래스 제거
//       this.classList.remove('open'); // 아이콘 원래대로
//     } else {
//       // 새로운 메뉴를 열기
//       dropdownMenu.style.display = 'block'; // 보이게 설정
//       dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`; // 콘텐츠에 맞게 max-height 설정
//       dropdownMenu.classList.add('show'); // show 클래스 추가
//       this.classList.add('open'); // 아이콘 180도 회전
//     }
//   });
// });

// // 모든 드롭다운 버튼을 선택
// const dropdownBtn = document.querySelectorAll('.dropdownBtn');

// // 각 드롭다운 버튼에 클릭 이벤트 리스너 추가
// dropdownBtn.forEach(button => {
//   button.addEventListener('click', function () {
//     const dropdownMenu = this.nextElementSibling; // 버튼 바로 다음 요소가 드롭다운 메뉴

//     // 다른 드롭다운이 열려있다면 원상복구
//     document.querySelectorAll('.mobile-menu-list-dropdown').forEach(menu => {
//       if (menu !== dropdownMenu) { // 클릭된 메뉴가 아니라면
//         menu.classList.remove('show'); // 닫기
//         menu.style.maxHeight = '0'; // 높이 원상복구
//         menu.style.visibility = 'hidden'; // 숨기기
//       }
//     });

//     // 다른 버튼에서 열려있는 메뉴가 있으면 아이콘 원상복구
//     document.querySelectorAll('.dropdownBtn').forEach(btn => {
//       if (btn !== this) { // 클릭된 버튼이 아니라면
//         btn.classList.remove('open'); // 아이콘 회전 복구
//       }
//     });

//     // 클릭된 메뉴가 이미 열려 있다면 닫기
//     if (dropdownMenu.classList.contains('show')) {
//       dropdownMenu.classList.remove('show'); // 닫기
//       dropdownMenu.style.maxHeight = '0'; // 높이 원상복구
//       dropdownMenu.style.visibility = 'hidden'; // 숨기기
//       this.classList.remove('open'); // 아이콘 회전 복구
//     } else {
//       // 새로운 메뉴를 열기
//       dropdownMenu.classList.add('show'); // 열기
//       dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`; // 내용에 맞는 높이 설정
//       dropdownMenu.style.visibility = 'visible'; // 보이게 설정
//       this.classList.add('open'); // 아이콘 180도 회전
//     }
//   });
// });

// //모든 드롭다운 버튼을 선택
// const dropdownBtn = document.querySelectorAll('.dropdownBtn');

// // 각 드롭다운 버튼에 클릭 이벤트 리스너 추가
// dropdownBtn.forEach(button => {
//   button.addEventListener('click', function () {
//     const dropdownMenu = this.parentNode.nextElementSibling.children;

//     // 다른 드롭다운이 열려있다면 원상복구
//     document.querySelectorAll('.mobile-menu-list-dropdown').forEach(menu => {
//       if (menu !== dropdownMenu) { // 클릭된 메뉴가 아니라면
//         menu.classList.remove('show'); // 닫기
//         //menu.style.maxHeight = '0'; // 높이 원상복구
//         menu.style.display = 'block'; // 숨기기
//       }
//     });

//     // 다른 버튼에서 열려있는 메뉴가 있으면 아이콘 원상복구
//     document.querySelectorAll('.dropdownBtn').forEach(btn => {
//       if (btn !== this) { // 클릭된 버튼이 아니라면
//         btn.classList.remove('open'); // 아이콘 회전 복구
//       }
//     });

//     // 클릭된 메뉴가 이미 열려 있다면 닫기
//     if (dropdownMenu.classList.contains('show')) {
//       dropdownMenu.classList.remove('show'); // 닫기
//       dropdownMenu.style.maxHeight = '0'; // 높이 원상복구
//       dropdownMenu.style.display = 'none'; // 숨기기
//       this.classList.remove('open'); // 아이콘 원래대로
//     } else {
//       // 새로운 메뉴를 열기
//       dropdownMenu.classList.add('show'); // 열기
//       dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`; // 내용에 맞는 높이 설정
//       dropdownMenu.style.display = 'block'; // 보이게 설정
//       this.classList.add('open'); // 아이콘 180도 회전
//     }
//   });
// });










