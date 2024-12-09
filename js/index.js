//nav
const bottomLi = document.querySelectorAll('#bottom > li');

for(const item of bottomLi){
  const dropdown = document.querySelector('.dropdown');
  //메뉴에 마우스를 올려놨을때 실행
  item.addEventListener('mouseenter', () => {
    //화살표 함수 내에서의 this는 상위객체인 window가 선택됨
    item.lastElementChild.style.maxHeight = item.lastElementChild.scrollHeight+"px";
  })
  //메뉴에서 마우스가 떠났을때 실행
  item.addEventListener("mouseleave", () => {
    item.lastElementChild.style.maxHeight = "0px";
  })
}

//product_dot
const dotOnList = document.querySelectorAll('ul.product_dot > li');

dotOnList.forEach(item => item.addEventListener('click',(e)=>{
  for(const item of dotOnList){
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
const sideMenuBar = document.getElementsByClassName('menu-toggle-btn');
const mobileMenu = document.getElementsByClassName('mobile-menu-bar');
const closeBtn = document.getElementsByClassName('mobile-menu-bar');

sideMenuBar.addEventListener('click', function(){
  mobileMenu.style.display = block;
  mobileMenu.style.animate = ({left: 0}, 500)
  sideMenuBar.style.screen = '';
})

closeBtn.addEventListener('click', function(){
  mobileMenu.style.animate = ({left: '-100%'}, 500)
  mobileMenu.style.display = none;
  sideMenuBar.style.screen = none;
})
