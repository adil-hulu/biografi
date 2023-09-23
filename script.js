// Toggle Class Active

const navbarnav = document.querySelector(".navbar-nav");

//ketika humberger menu di klik

document.querySelector("#humberger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

//Klik di luar side bar untuk menghilangkan menu

const hm = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
