/* =========================================================
   Motion UI Experience — Small JavaScript
   Only one feature: switch the animation on the demo box
   when a user clicks one of the demo buttons.
   ========================================================= */

// grab the demo box and all the demo buttons
const demoBox = document.getElementById("demoBox");
const buttons = document.querySelectorAll(".demo-controls .btn");

// list of all animation classes we can apply
const animationClasses = ["anim-fade", "anim-slide", "anim-pulse", "anim-spin"];

// listen to clicks on each button
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // get which animation was requested (from data-anim attribute)
    const animation = button.getAttribute("data-anim");

    // first, remove any previous animation class
    animationClasses.forEach(function (cls) {
      demoBox.classList.remove(cls);
    });

    // if the user clicked "Reset", we stop here
    if (animation === "none") return;

    // otherwise, apply the new animation class
    demoBox.classList.add("anim-" + animation);
  });
});
