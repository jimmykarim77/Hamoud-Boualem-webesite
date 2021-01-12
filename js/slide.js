const imgSlider = (anything) => {
  document.querySelector(".hamoud").src = anything;
};

const changeCircleColor = (color) => {
  const circle = document.querySelector(".circle");
  const ha = document.querySelector(".ha");

  circle.style.background = color;
  ha.style.color = color;
};
