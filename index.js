var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = `images/dice${rand1}.png`;
var randomDiceImage2 = `images/dice${rand2}.png`;

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", randomDiceImage1);
img2.setAttribute("src", randomDiceImage2);

document.querySelectorAll(`div .dice-number`)[0].innerHTML = rand1;
document.querySelectorAll(`div .dice-number`)[1].innerHTML = rand2;

if (rand1 > rand2) {
  document.querySelector("h1").innerHTML = "Player 1 wins! 😀";
} else if (rand2 > rand1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 😀";
} else {
  document.querySelector("h1").innerHTML = "Draw 😞";
}

// var ran = Math.floor(Math.random() * 6) + 1;
// var ran2 = Math.floor(Math.random() * 6) + 1;

// function setImageAndNumber(number, imgClass, diceImg, index) {
//   document
//     .querySelector(`div .${imgClass}`)
//     .setAttribute("src", `./images/${diceImg}.png`);

//   document.querySelectorAll(`div .dice-number`)[index].innerHTML = number;
// }

// function showResult() {
//   var select = document.querySelectorAll("div .dice-number");
//   var player1 = select[0].textContent;
//   var player2 = select[1].textContent;
//   var message;

//   if (player1 > player2) {
//     var message = (document.querySelector("div h1").innerHTML =
//       "Player 1 wins! 😀");
//   } else if (player2 > player1) {
//     var message = (document.querySelector("div h1").innerHTML =
//       "Player 2 wins! 😀");
//   } else if (player1 === player2) {
//     var message = (document.querySelector("div h1").innerHTML = "Draw 😞");
//   }
// }

// function changeDice(ran, image2Change, index) {
//   switch (ran) {
//     case 1:
//       setImageAndNumber(ran, image2Change, "dice1", index);

//       break;
//     case 2:
//       setImageAndNumber(ran, image2Change, "dice2", index);
//       break;
//     case 3:
//       setImageAndNumber(ran, image2Change, "dice3", index);
//       break;
//     case 4:
//       setImageAndNumber(ran, image2Change, "dice4", index);
//       break;
//     case 5:
//       setImageAndNumber(ran, image2Change, "dice5", index);
//       break;

//     case 6:
//       setImageAndNumber(ran, image2Change, "dice6", index);
//       break;
//     default:
//       null;
//   }
// }

// changeDice(ran, "img1", 0);
// changeDice(ran2, "img2", 1);
// showResult();
