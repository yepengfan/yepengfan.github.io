// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
document.getElementById("mobile-menu-button").addEventListener("click", () => {
  console.log("Mobile menu button clicked");
  const slideoutMenu = document.getElementById("slideout-menu");
  console.log(slideoutMenu.classList.contains("open"));
  if (slideoutMenu.classList.contains("open")) {
    slideoutMenu.classList.remove("open");
  } else {
    slideoutMenu.classList.add("open");
  }
});
