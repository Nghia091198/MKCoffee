// For Search
var btnOpen = document.querySelector(".btn-search");
var frmSearch = document.querySelector(".section__search");
var frm = document.querySelector(".box__search");
var btnClose = document.querySelector(".btn-close");
var root = document.querySelector("html");
btnOpen.onclick = function() {
    frmSearch.classList.add('active-1');
    frm.style.width = "100%";
    root.style.overflow = "hidden";
    btnNav.disabled = true;
};

btnClose.onclick = function() {
    frmSearch.classList.remove('active-1');
    frm.style.width = "0";
    root.style.overflow = "unset";
    btnNav.disabled = false;
};

// For Navigation

var btnNav = document.querySelectorAll(".section-menu");
var navMenu = document.querySelector(".section__navigation");
var pushLeft = document.querySelector(".section-left");
var btnClose = document.querySelector(".section-back");
var content = document.querySelector(".navigation-box")
for (var i =0 ; i < btnNav.length ; i++){
btnNav[i].onclick = function() {
    navMenu.classList.add("active-3");
    content.classList.add("active-1");
    pushLeft.classList.add("active-2");
    btnClose.classList.add("active-1");
    root.style.overflow = "hidden";
    btnOpen.disabled = true;
};
}

btnClose.onclick = function() {
    navMenu.classList.remove("active-3");
    pushLeft.classList.remove("active-2");
    content.classList.remove("active-1");
    btnClose.classList.remove("active-1");
    root.style.overflow = "unset";
    btnOpen.disabled = false;
}

// Collapse


var coll = document.getElementsByClassName("btn-collapse");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active-coll");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = "100%";
        }
    });
}

// Full Page

