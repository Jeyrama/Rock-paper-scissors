/*
Let's play Rock paper scissors! 
You have to return which player won! 
In case of a draw return Draw!.
*/


// Solution

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  let rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!"
  }
};

// or

const rockPaperScissors = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  };
  return `Player ${/rockscissors|scissorpaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}