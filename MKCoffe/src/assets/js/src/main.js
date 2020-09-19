// For Search
var btnOpen = document.getElementById("btn-search");
var frmSearch = document.querySelector('.box__search');
var btnClose = document.querySelector('.btn-close');
btnOpen.onclick = function() {
    frmSearch.classList.add('active');
}

btnClose.onclick = function() {
    frmSearch.classList.remove('active');
}