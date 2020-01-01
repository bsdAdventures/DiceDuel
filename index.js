var ran = Math.floor(Math.random() * 6) + 1;
var ran2 = Math.floor(Math.random() * 6) + 1;

function changeImage(number, imgClass, diceImg, index) {
  document
    .querySelector(`div .${imgClass}`)
    .setAttribute("src", `./images/${diceImg}.png`);

  document.querySelectorAll(`div .dice-number`)[index].innerHTML = number;
}

function showResult() {
  var select = document.querySelectorAll("div .dice-number");
  var player1 = select[0].textContent;
  var player2 = select[1].textContent;

  if (player1 > player2) {
    var message = (document.querySelector("div h1").innerHTML =
      "Player 1 wins! 😀");
  } else if (player2 > player1) {
    var message = (document.querySelector("div h1").innerHTML =
      "Player 2 wins! 😀");
  } else if (player1 === player2) {
    var message = (document.querySelector("div h1").innerHTML = "Draw 😞");
  }
}

function changeDice(ran, image2Change, index) {
  switch (ran) {
    case 1:
      changeImage(ran, image2Change, "dice1", index);

      break;
    case 2:
      changeImage(ran, image2Change, "dice2", index);
      break;
    case 3:
      changeImage(ran, image2Change, "dice3", index);
      break;
    case 4:
      changeImage(ran, image2Change, "dice4", index);
      break;
    case 5:
      changeImage(ran, image2Change, "dice5", index);
      break;

    case 6:
      changeImage(ran, image2Change, "dice6", index);
      break;
    default:
      null;
  }
}

changeDice(ran, "img1", 0);
changeDice(ran2, "img2", 1);
showResult();
