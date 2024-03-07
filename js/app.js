const body = document.querySelector("body");
const container = document.querySelector(".container");
const colortext = document.querySelector(".color-text");

const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",

  "a",
  "b",
  "c",
  "d",
  "e",
];
// random color function
function getGradient() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length);
    color += values[randomNumber];
  }
  return color;
}

getGradient();

// const color1 = getGradient();
// const color2 = getGradient();

// console.log(color1, color2);

// container.addEventListener("click", (event) => {
//   body.style.backgroundColor = "linear-gradient(color1,color2)";
// });

//set color to body
function setgradient() {
  const color1 = getGradient();
  const color2 = getGradient();
  const RandomDeg = Math.trunc(Math.random() * 360);

  const bgColor = `linear-gradient(
  ${RandomDeg}deg,
  ${color1},
  ${color2}
  )`;

  console.log(bgColor);
  body.style.background = bgColor;
  colortext.textContent = bgColor;
}

setgradient();

container.addEventListener("click", setgradient);
