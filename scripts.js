var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var contain = document.querySelector(".contain");

// Change container width based on sidebar size
menuIcon.onclick = function(){
  sidebar.classList.toggle("small-sidebar");
  contain.classList.toggle("large-contain");
}

// Search field submit
$(document).ready(function(){
    $("#search-submit").click(function(){        
        $("#search-form").submit();
    });
});
