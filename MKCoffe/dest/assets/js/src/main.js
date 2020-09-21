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


