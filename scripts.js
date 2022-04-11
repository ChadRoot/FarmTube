var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var contain = document.querySelector(".contain");

menuIcon.onclick = function(){
  sidebar.classList.toggle("small-sidebar");
  contain.classList.toggle("large-contain");
}