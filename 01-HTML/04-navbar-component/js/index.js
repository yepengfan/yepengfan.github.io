// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
document.getElementById("mobile-menu-button").addEventListener("click", () => {
  const slideoutMenu = document.getElementById("slideout-menu");
  const menubar = document.getElementById("menu-bar");
  slideoutMenu.classList.toggle("open");
  menubar.classList.toggle("hidden");
});

document.getElementById("close-menu-button").addEventListener("click", () => {
  const slideoutMenu = document.getElementById("slideout-menu");
  const menubar = document.getElementById("menu-bar");

  slideoutMenu.classList.toggle("open");
  menubar.classList.toggle("hidden");
});
