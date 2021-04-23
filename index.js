const readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.bgRedBright.bold('\t\t\t\t\tWelcome to Quizzinga\t\t\t\t'));
console.log('');
console.log();
console.log('Hey Muggle! Do you consider yourself a Potterhead?\n');
console.log('Try answering some Harry Potter questions and see how much you know him!\n');
let muggleName = readlineSync.question("Please enter your name : ");
console.log(`\nSo ${muggleName}, let's begin and see if can you answer all of them`);
const questionArray = [
  {
    question: "What is the Dursley's address?",
    options: ['(1) Number 12, Grimmauld Place','(2) 4 Privet Drive','(3) Nurmengard','(4) The Leaky Cauldron'],
    answer: 2
  },
  {
    question: "What is Snape's signature spell?",
    options: ['(1) Sectumsempra','(2) Expelliarmus','(3) Sectumsempra','(4) Riddikulus '],
    answer: 1
  },
  {
    question: "Who was flying with Mad Eye Moody when he died?",
    options: ['(1) Harry Potter','(2) Ron Weasley','(3) Roger Davies', '(4) Mundungus Fletcher'],
    answer: 4
  },
  {
    question: "Who did Ron Weasley's pet rat used to belong to?",
    options: ['(1) Timothy Spall','(2) His brother Percy','(3) Lucius Malfoy','(4) Hedwig'],
    answer: 2
  },
  {
    question: "How many copies of Harry Potter and the Philosopher's Stone were printed in the book's first print run?",
    options: ['(1) 200','(2) 400','(3) 500','(4) 1000'],
    answer: 3
  }
];
let countCorrectAnswer = 0;
const Quiz = function QuestionBank(question,options,answer,i){
  console.log(`${i}: ${question}`);
  console.log(`${options.join('\t\n')}`);
  let userResponse = parseInt(readlineSync.question("\nYour choice is: "));
  if(userResponse == answer){
    console.log(chalk.green.bold("\nYou got it right!\n"));
    countCorrectAnswer++;
  }
  else{
    console.log(chalk.redBright.bold("\nSorry,your answer is wrong."));
    console.log(chalk.bgCyan.bold("\nThe correct answer is: ",options[answer-1]));
  }
}

for(let i = 0;i < questionArray.length; i++){
  Quiz(questionArray[i].question,questionArray[i].options,questionArray[i].answer,i+1);
}

if(countCorrectAnswer === questionArray.length){
  console.log(chalk.bgYellow.italic(`Congratulations! ${muggleName} You proved yourself to be a real potterhead.\nYour total score is: ${countCorrectAnswer+'/'+questionArray.length}`));
}
else if(countCorrectAnswer === questionArray.length-1){
  console.log(chalk.bgYellow.italic(`Good Job! You were really close to prove yourself a real Potterhead.\n${muggleName}, Your total score is: ${countCorrectAnswer+'/'+questionArray.length}`));
}
else{
  console.log(chalk.bgRedBright.italic.bold(`You missed by a small margin to prove yourself a real Potterhead. Better luck next time!\n${muggleName}, Your total score is: ${countCorrectAnswer+'/'+questionArray.length}`));
}
console.log(chalk.bgMagenta.bold.underline(`\n\t\t\t\t\tThank you for playing\t\t\t\t\t\n`));