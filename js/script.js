'use-strict'

let name = prompt("Hello there, please enter your name so start the little journey on my website ☺");
let q1 = prompt("Welcome " + name + ", do you agree that my name is 'Ahmad' ? (answer y/n)").toLocaleLowerCase();
let q2 = prompt("do you agree that I am from Jordan ? (answer y/n)").toLocaleLowerCase();
let q3 = prompt("do you agree that I am 15 years old ? (answer y/n)").toLocaleLowerCase();
let q4 = prompt("do you agree that I graduated from BAU in Journalism ? (answer y/n)").toLocaleLowerCase();
let q5 = prompt("do you agree that I am a full stack php developer ? (answer y/n)").toLocaleLowerCase();

let score = 0;

socre = parseInt(score);


console.log(q1);
while(["y", "n"].indexOf(q1) == -1){
   q1 = prompt("Wrong answer ! please enter 'y' or 'n'");
}

if(q1 == 'y'){score = score+1;}
console.log(score);


 if(q2 == 'y'){score = score+1;}

 if(q3 == 'n'){score = score+1;}


 if(q4 == 'y'){score = score+1;}

 
 if(q5 == 'y'){score = score+1;}




alert ('You have answered ' + score + ' right answers, wich means your score is' + score*20 + "/100");