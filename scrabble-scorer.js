// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble!\n")
  let word = input.question("Enter a word to score: ");

  return word;
};

let simpleScore = function(word){
  let score = word.length;
  // for (i=0; i<word.length; i++){
  //   points += `Points for '${word[i].toUpperCase()}': 1\n`;
  // }
  return score;
};

let vowelBonusScore = function(word){
  word.toLowerCase();
  const vowelStructure = {
    1: ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'],
    3: ['a','e','i','o','u']
  }
  let points = "";
  for (i=0; i<word.length; i++){

    for (const pointValue in vowelStructure){
      if (vowelStructure[pointValue].includes(word[i])){
        points += `Points for '${word[i].toUpperCase()}': ${pointValue}\n`
      }
    }
  };
  return points;
};

let scrabbleScore = function(word){
  let points = 0;
  for (i=0; i<word.length; i++){
    points += newPointStructure[word[i].toLowerCase()]
  }
  return points;
};

const scoringAlgorithms = [
  {
      name: "Simple",
      description: "One point per character",
      scorerFunction: simpleScore
   },
   {
      name: "Vowel Bonus",
      description: "Vowels are worth 3 points",
      scorerFunction: vowelBonusScore
   },
   {
      name: "Scrabble",
      description: "Uses scrabble point system",
      scorerFunction: scrabbleScore
   }];

function scorerPrompt(word) {
  algorithmChoice = '';
  while (algorithmChoice !== true){
    console.log("Which scoring algorithm would you like to use?");
    console.log("0 - Simple: One point per character");
    console.log("1 - Vowel Bonus: Vowels are worth 3 points");
    console.log("2 - Scrabble: Uses scrabble point system");
    algorithmChoice = input.question("Enter 0, 1, or 2: ");
    if (algorithmChoice === '0'){
      console.log(scoringAlgorithms[0].scorerFunction(word));
      return scoringAlgorithms[0];
    } else if (algorithmChoice === '1'){
      console.log(scoringAlgorithms[1].scorerFunction(word));
      return scoringAlgorithms[1];
      break;
    } else if (algorithmChoice === '2'){
      console.log(scoringAlgorithms[2].scorerFunction(word));
      return scoringAlgorithms[2];
    } else {
      algorithmChoice = false;
    }
  }
};

function transform() {};

let newPointStructure;

function runProgram() {
   let word = initialPrompt();
   let algo = scorerPrompt(word);
   
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

