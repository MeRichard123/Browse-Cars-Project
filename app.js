const cta = document.querySelector(".cta");

window.addEventListener("load", () => {
  cta.addEventListener("click", () => {
    TweenLite.to(window, 2, { scrollTo: "900" });
  });
});

var images = [
  "./img/bmw.png",
  "./img/cobra.png",
  "./img/coupe.png",
  "./img/ford.png",
  "./img/lambo.png",
  "./img/mustang.png",
  "./img/ranger.png",
  "./img/action-asphalt-auto-210019.jpg"
];

var num = 0;
function next() {
  var slider = document.querySelector(".image");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}
function prev() {
  var slider = document.querySelector(".image");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}
