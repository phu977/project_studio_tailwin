var navbtn = document.getElementById("navbtn");
var navopen = false;
var navBarItems = document.getElementById("navitems");
var navBar = document.getElementById("navbar");

navbtn.onclick = function () {
  navopen = !navopen;
  if (navopen == true) {
    navbtn.src = "../images/icon-close.svg";
  } else {
    navbtn.src = "../images/icon-hamburger.svg";
  }
  navBar.classList.toggle("bg-black");
  navBarItems.classList.toggle("hidden");
};
