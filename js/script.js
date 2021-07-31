let mobileMenuBtn = document.getElementById("mobile-menu-btn");
let mobileMenuExit = document.getElementById("mobile-exit-btn");
let mobileHeader = document.getElementById("mobileheader");
let mobilePopUp = document.getElementById("mobile-popup");



function mobileMenu() {
    if(mobilePopUp.style.display === "none") {
        mobilePopUp.style.display = "block"
    } else {
        mobilePopUp.style.display = "none"
    }
}
mobileMenu();
