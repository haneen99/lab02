'use-strict'

let name = prompt("Hello there, please enter your name so start the little journey on my website ☺");

question1();
question2();
question3();
question4();
question5();

let score = 0;

socre = parseInt(score);





 

 


 

 
 









function question1(){
    let q1 = prompt("Welcome " + name + ", do you agree that my name is 'Ahmad' ? (answer y/n)").toLocaleLowerCase();
    console.log(q1);
    while(["y", "n"].indexOf(q1) == -1){
    q1 = prompt("Wrong answer ! please enter 'y' or 'n'");
    }

    if(q1 == 'y'){score++;}
    console.log(score);

}
function question2(){
    let q2 = prompt("do you agree that I am from Jordan ? (answer y/n)").toLocaleLowerCase();
    if(q2 == 'y'){score = score+1;}
}
function question3(){
    let q3 = prompt("do you agree that I am 15 years old ? (answer y/n)").toLocaleLowerCase();
    if(q3 == 'n'){score = score+1;}
}
function question4(){
    let q4 = prompt("do you agree that I graduated from BAU in Journalism ? (answer y/n)").toLocaleLowerCase();
    if(q4 == 'y'){score = score+1;}
}
function question5(){
    let q5 = prompt("do you agree that I am a full stack php developer ? (answer y/n)").toLocaleLowerCase();
    if(q5 == 'y'){score = score+1;}
}

function question6(){
    for(let i=1; i<=6; i++){var q6 = Number(prompt('now i\'m going to ask you about my age try to guess how old i am and i will tell you if it\'s higher or lower (try 20-30) you have 6 attempts'));
    if(q6 < 25){
        alert('Too low , try again (' + (6-i) + ') attempts left');
        q6 = Number(prompt('Try to guess my age again(' + (6-i) + ') attempts left'));
    } else if (q6 > 25){
        alert('Too high , try again(' + (6-i) + ') attempts left');
        q6 = Number(prompt('Try to guess my age again(' + (6-i) + ') attempts left'));
    } else if(q6 == 25) {
        alert('Correct answer');
        score++;
        break;
    }
}

if(q6 < 25){
    alert('Too low , sorry you have exceeded the allowed attempts');
} else if (q6 > 25){
    alert('Too high , sorry you have exceeded the allowed attempts');
} 

alert('My age is 25 .');

}

function question7(){
    let q7 = Number(prompt('Try to guess any number between 1-10 and type it below, you have only 6 attempts'));

let arr = [7,3,5];
for(let a=1; a<=6; a++){
    if(arr.includes(q7)){
        alert('Correct answer, good job')
        score++;
        break;
    } else{
        alert('Wrong answer try again, you have (' + (6-a) + ') attempts left');
        q7 = Number(prompt('Try to guess again between 1-10 and type it below'));
    }
}

alert('correct answers are (' + arr + ')');

alert('All done now, Thank you ' + name + ' for visiting my website, now have a look into my page and enjoy');

alert ('You have answered ' + score + ' right answers, wich means your score is' + score + "/7");


}