export function GameLogic(choice) {
  // const ROCK = 1;
  // const PAPER = 2;
  // const SCISSORS = 3;
  let random = Math.floor(Math.random() * Math.floor(3) + 1);

  const rules = [
    { choice: 'rock', house: 1, result: null },
    { choice: 'rock', house: 2, result: false },
    { choice: 'rock', house: 3, result: true },
    { choice: 'paper', house: 1, result: true },
    { choice: 'paper', house: 2, result: null },
    { choice: 'paper', house: 3, result: false },
    { choice: 'scissors', house: 1, result: false },
    { choice: 'scissors', house: 2, result: true },
    { choice: 'scissors', house: 3, result: null },
  ];

  return checkForWin(choice, random, rules);
}

function checkForWin(myChoice, houseChoice, rules) {
  for (let i = 0; i < rules.length; i++) {
    if (rules[i].choice === myChoice && rules[i].house === houseChoice) {
      return {
        result: rules[i].result,
        myChoice,
        houseChoice: rules[i].house,
      };
    }
  }
}
