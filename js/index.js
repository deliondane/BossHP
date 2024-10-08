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

        // 배경 이미지 변경 전, 이동 효과 추가
        secondInfo.style.transform = 'translateX(100%)'; // 오른쪽으로 이동

        // 잠시 대기 후 배경 이미지 변경
        setTimeout(() => {
            secondInfo.style.backgroundImage = `url(${newSrc})`;
            secondInfo.style.transform = 'translateX(0)'; // 원래 위치로 돌아오기
            title.innerHTML = newTitle || "기본 제목"; 
            subTitle.innerHTML = newSubTitle || "기본 부제목"; 

            // 현재 선택된 점 표시
            dot.forEach(dotItem => dotItem.classList.remove('on'));
            item.classList.add('on');
        }, 500); // 이동 애니메이션과 일치하도록 500ms 대기
    });
});
