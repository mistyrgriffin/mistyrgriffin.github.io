const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenuExit = document.getElementById("mobile-exit-btn");
const mobileHeader = document.getElementById("mobileheader");
const mobilePopUp = document.getElementById("mobile-popup");



function mobileMenu() {
    if(mobilePopUp.style.display === "none") {
        mobilePopUp.style.display = "block"
    } else {
        mobilePopUp.style.display = "none"
    }
}
mobileMenu();
