var mobileMenuBtn = document.getElementById("mobile-menu-btn");
var mobileMenuExit = document.getElementById("mobile-exit-btn");
var mobileHeader = document.getElementById("mobileheader");
var mobilePopUp = document.getElementById("mobile-popup");



function mobileMenu() {
    if(mobilePopUp.style.display === "none") {
        mobilePopUp.style.display = "block"
    } else {
        mobilePopUp.style.display = "none"
    }
}
mobileMenu();
