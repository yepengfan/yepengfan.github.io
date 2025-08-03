// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
document.getElementById("mobile-menu-button").addEventListener("click", () => {
  const slideoutMenu = document.getElementById("slideout-menu");

  slideoutMenu.classList.add("open");
});

document.getElementById("close-menu-button").addEventListener("click", () => {
  const slideoutMenu = document.getElementById("slideout-menu");

  slideoutMenu.classList.remove("open");
});
