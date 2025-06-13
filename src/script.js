const hum = document.getElementById("hamburger");
const mobilemenu = document.getElementById("mobile-menu");

hum.addEventListener("click", () => {
  mobilemenu.classList.toggle("hidden");
});

const mobileTicket = document.getElementById("mobile-ticket");
const mobileSubMenu = document.getElementById("mobile-sub");

mobileTicket.addEventListener("click", () => {
  mobileSubMenu.classList.toggle("hidden");
});

const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");
const coursel = document.getElementById("coursel");

leftbtn.addEventListener("click", () => {
  const itemWidth = coursel.getElementsByTagName("div")[0].clientWidth;
  coursel.scrollBy({ left: -itemWidth, behavior: "smooth" });
});

rightbtn.addEventListener("click", () => {
  const itemWidth = coursel.getElementsByTagName("div")[0].clientWidth;
  coursel.scrollBy({ left: itemWidth, behavior: "smooth" });
});
const darkMode = document.getElementById("dark-mode");
darkMode.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
});
