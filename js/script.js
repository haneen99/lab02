'use-strict'

var name = prompt("Hello there, please enter your name so start the little journey on my website ☺");
var q1 = prompt("Welcome " + name + ", Are you above 18 years old ? (answer y/n)");

q1 = q1.toLowerCase();

 
while(["y", "n"].indexOf(q1) == -1){
   q1 = prompt("Wrong answer ! please enter 'y' or 'n'");
}

if(q1 == "y"){
    // console.log("Great ! you are above 18 years old");
    alert("Great ! you are above 18 years old");
} else if(q1 == "n"){
    // console.log("Telling lies " + name + "? I'm sure you are above 18 because you are seeing this from LTUC, Loool ☺");
    alert("Telling lies " + name + "? I'm sure you are above 18 because you are seeing this from LTUC, Loool ☺");
}

var age = prompt("Welcome " + name + ", please enter your age to calculate how many days you have lived !");

alert ('You have lived about ' + (age*365) + " days in your life, I hope you a long happy life " + name + " ♥");