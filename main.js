let turn = "x";
let title = document.querySelector(".title");
let squares = [];
function end(num1, num2, num3) {
  title.innerHTML = `${squares[num1].toUpperCase()} WINNER`;
  document.getElementById("item" + num1).style.cssText =
    "color:white;background:#e08ff8";
  document.getElementById("item" + num2).style.cssText =
    "color:white;background:#e08ff8";
  document.getElementById("item" + num3).style.cssText =
    "color:white;background:#e08ff8";
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}
function winner() {
  for (i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    end(1, 2, 3);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    end(4, 5, 6);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    end(7, 8, 9);
  } else if (
    squares[7] == squares[4] &&
    squares[4] == squares[1] &&
    squares[7] != ""
  ) {
    end(1, 4, 7);
  } else if (
    squares[8] == squares[5] &&
    squares[5] == squares[2] &&
    squares[8] != ""
  ) {
    end(8, 5, 2);
  } else if (
    squares[9] == squares[6] &&
    squares[6] == squares[3] &&
    squares[9] != ""
  ) {
    end(3, 6, 9);
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    end(1, 5, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    end(3, 5, 7);
  } else if (squares[(1, 2, 3, 4, 5, 6, 7, 8, 9)] == turn) {
    title.innerHTML = `NO WINNERS`;
    setInterval(function () {
      title.innerHTML += ".";
    }, 2000);
    setTimeout(function () {
      location.reload();
    }, 6000);
  }
}
function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerText = "x";
    title.innerText = "O TURN";
    turn = "o";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerText = "o";
    turn = "x";
    title.innerText = "X TURN";
  }
  winner();
}
