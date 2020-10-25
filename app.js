const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "rgba(45, 32, 200)",
];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0 3 we can use getRandomNumber function to invoke random color or dirrectly we can access color using Math.random()
  let randomNumber = Math.floor(Math.random() * colors.length);
  // console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

/*function to get random number
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
*/
