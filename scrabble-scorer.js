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
  return score;
};

let vowelBonusScore = function(word){
  word.toLowerCase();
  const vowels = 'aeiou';
  const consonants = 'bcdfghjklmnopqrstvwxyz';
  let points = 0;
  for (i=0; i<word.length; i++){
    if (vowels.includes(word[i].toLowerCase())){
      points += 3;
    } else if (vowels.includes(word[i].toLowerCase())){
      points++;
    }
  };
  return points;
};

let scrabbleScore = function(word){
  let points = 0;
  for (i=0; i<word.length; i++){
    points += newPointStructure[word[i].toLowerCase()]
    console.log(newPointStructure[word[i].toLowerCase()])
  }
  console.log(points);
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
    for (i=0; i<scoringAlgorithms.length; i++){
      console.log(`${i} - ${scoringAlgorithms[i]['name']}: ${scoringAlgorithms[i]['description']}`)
    }
    algorithmChoice = input.question("Enter 0, 1, or 2: ");
    algorithmChoice = Number(algorithmChoice);
    console.log(`score: ${scoringAlgorithms[algorithmChoice].scorerFunction(word)}`);
    return scoringAlgorithms[algorithmChoice];
  }
};

function transform(obj) {
  const newObj = {};
  for (key in obj){
    for (char in obj[key]){
      let letter = (obj[key][char]).toLowerCase();
      newObj[letter] = Number(key);
    }
  }
  return newObj;
};

let newPointStructure = transform(oldPointStructure);

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

