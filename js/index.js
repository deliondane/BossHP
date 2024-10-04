const bottomLi = document.querySelectorAll('#bottom > li');
console.log(document.querySelectorAll('#bottom > li'));

for(const item of bottomLi){
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