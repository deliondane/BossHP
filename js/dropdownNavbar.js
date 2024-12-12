const dropdownBtn = document.querySelectorAll(".dropdownBtn");
const dropdownNav = document.querySelectorAll(".mobile-menu-list-dropdown");

dropdownBtn.addEventListener('click', function(e){
  if(dropdownNav.style.display === 'block'){
    dropdownNav.style.display = "none";
    dropdownBtn.classList.remove("open");
  } else{
    dropdownNav.style.display = "block";
    dropdownBtn.classList.add("open");
  }
})