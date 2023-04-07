// player class, contains name, marker and set of 'claimable coords' for each possible
// win condition;
// if a set of coords reaches length 0 that player wins.
const newPlayer = (name, marker) => {
  let sets = [
    ["a1", "a2", "a3"],
    ["b1", "b2", "b3"],
    ["c1", "c2", "c3"],
    ["a1", "b1", "c1"],
    ["a2", "b2", "c2"],
    ["A3", "b3", "c3"],
    ["a1", "b2", "c3"],
    ["c1", "b2", "a3"],
  ];
  return { name, marker, sets };
};

// removes a claimed tile from the claimable sets in the appropriate players sets
// checks if any sets are empty and outputs the winner.
function spliceSet(player, tile) {
  // The nested Loop scans each of the players sets[i][j] for a match and 'claims'
  // that tile with a splice.
  for (let i = 0; i < player.sets.length; i++) {
    for (let j = 0; j < player.sets[i].length; j++) {
      if (tile == player.sets[i][j]) {
        player.sets[i].splice(j, 1);
      }
      // checks if the set is now empty and declares the winner if true.
      if (player.sets[i].length == 0) {
        winner = player.name;
        drawVictorMessage(player);
      }
    }
  }
}

const player1 = newPlayer("player1", "X");
const player2 = newPlayer("player2", "O");
let winner = "";

// turn order for the game. turns[0] represents the current player and turns[0] is
// spliced out after each turn.
turns = [
  player1,
  player2,
  player1,
  player2,
  player1,
  player2,
  player1,
  player2,
  player1,
];
// Every Tic Tac Toe tile responds to clicks and calls the spliceSet() function
// passing in the current player: turns[0] and the tiles id as the coordinate to be matched
// and removed from the players sets.
// If the turns array is emptied the game must be a tie and the outcome is displayed.
const tiles = document.getElementsByClassName("tile");
[...tiles].forEach((element) => {
  element.onclick = function () {
    spliceSet(turns[0], element.id);

    if (element.id != "") {
      drawMarker(element, turns[0]);
      element.removeAttribute("id");
      turns.splice(0, 1);

      if (turns.length == 0) {
        console.log("Its a Tie!!");
      }
    }
  };
});

function drawMarker(element, player) {
  const shape = document.createElement("p");
  shape.textContent = player.marker;
  shape.classList.add("marker");
  element.append(shape);
}

function drawVictorMessage(player) {
  const bluredElements = document.querySelectorAll("div.board, div.tile");
  [...bluredElements].forEach((element) => {
    element.classList.add("blured-element");
  });

  const body = document.getElementById('body');
  const victorMessage = document.createElement("h1");
  victorMessage.innerText = `The Winner is ${player.name}!!`;
  body.append(victorMessage);
}
