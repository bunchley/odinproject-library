console.log("New Book Form");
const sliderValue = document.querySelector(".ratingValue");
const slider = document.querySelector(".rating");

slider.oninput = function () {
  sliderValue.innerHTML = this.value;
};
