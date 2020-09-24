// For Search
var btnOpen = document.querySelector(".btn-search");
var frmSearch = document.querySelector(".section__search");
var frm = document.querySelector(".box__search");
var btnClose = document.querySelector(".btn-close");
btnOpen.onclick = function() {
    frmSearch.classList.add('active');
    frm.style.width = "100%";
};

btnClose.onclick = function() {
    frmSearch.classList.remove('active');
    frm.style.width = "0";
};

// For Navigation

var btnNav = document.querySelector(".section-menu");
var navMenu = document.querySelector(".section__navigation");
var pushLeft = document.querySelector(".section-left");
var btnClose = document.querySelector(".section-back");
var content = document.querySelector(".navigation-box")
btnNav.onclick = function() {
    navMenu.classList.add("active-3");
    content.classList.add("active");
    pushLeft.classList.add("active-2");
    btnClose.classList.add("active")
};

btnClose.onclick = function() {
    navMenu.classList.remove("active-3");
    pushLeft.classList.remove("active-2");
    content.classList.remove("active");
    btnClose.classList.remove("active");
}

// Collapse

// var btnCollapse = document.querySelectorAll(".btn-collapse");

// for (var i = 0; i < btnCollapse.length; i++) {
//     btnCollapse[i].addEventListener("click", function() {
//         this.classList.toggle("active-coll");
//        var content = this.nextElementSibling;
//        if (content.style.display === "block") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "block";
//       }
//     });
// }

var coll = document.getElementsByClassName("btn-collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-coll");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
  });
}

