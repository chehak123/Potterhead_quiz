function check(){

    var q1=document.quiz.ques1.value;
    var q2=document.quiz.ques2.value;
    var q3=document.quiz.ques3.value;
    var q4=document.quiz.ques4.value;
    var q5=document.quiz.ques5.value;

    var correct=0;

    if(q1=="The Burrow"){
        correct++;
    }
    if(q2=="Lee Jordan"){
        correct++;
    }
    if(q3=="Daily Prophet"){
        correct++;
    }
    if(q4=="Gryffindor"){
        correct++;
    }
    if(q5=="Defense against dark arts"){
        correct++;
    }

var messages=["WOW!! You are a great potterhead!!","Great job!!","Well Tried but you need to work before you win potterhead tag","That's just okay","You really need to do better"];
var pictures=["img/mcgonagall clapping.gif","img/original.gif","img/okayfine.gif","img/giphy.gif","img/detention.gif"];

var range=4;

if(correct<2){
    range=4;
}

if(correct==2){
    range=3;
}

if(correct==3){
    range=2;
}

if(correct==4){
    range=1;
}

if(correct==5){
    range=0;
}

    document.getElementById("after-submit").style.visibility="visible";
    document.getElementById("message").innerHTML= messages[range];
    document.getElementById("number_correct").innerHTML="You got "+correct+" correct.";
    document.getElementById("picture").src=pictures[range];
}