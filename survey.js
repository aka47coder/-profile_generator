const readline = require('readline');

const questions1 = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
};

const answer1 = {0: "",1: "",2: "",3: "",4: "",5: "",6: ""};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let i = 0;

const question = function () {
  if (i < 7) {
    rl.question(`${questions1[i]}\n`, (answer) => {
      answer1[i] = answer;
      i++;
      console.log()
      question()
    });
  } else {
    rl.close()
    console.log("Your New Profile:");
    setTimeout(() => console.log(`
    ${answer1[0]} likes ${answer1[1]} while listening to ${answer1[2]}. 
    They like eating ${answer1[4]} for their,his  meal ${answer1[3]}. 
    ${answer1[0]}'s best sport for him is ${answer1[5]}.
    we ask ${answer1[0]}  their superpower they answered: ${answer1[6]}
  `), 2000);
  }
  
}

question()
