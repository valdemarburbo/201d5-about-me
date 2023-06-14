"use strict";

alert("Hi! Welcome to the webpage about me, Val!");

alert("I have prepared a quiz to test your knowledge about me. Please answer the questions with yes (y) or no (n).");

let firstQuestion = prompt("Is the full version of my first name Voldemort?");
switch (firstQuestion.toLowerCase()) {
    case "yes":
    case "y": 
        alert("Incorrect!");
        break;
    case "no":
    case "n":
        alert("Correct!");
        break;
    default:
        alert("Invalid input. Please use yes (y) or no (n) answers.")
}

let secondQuestion = prompt("Can I play the guitar?");
switch (secondQuestion.toLowerCase()) {
    case "yes":
    case "y": 
        alert("Correct!");
        break;
    case "no":
    case "n":
        alert("Incorrect!");
        break;
    default:
        alert("Invalid input. Please use yes (y) or no (n) answers.")
}

let thirdQuestion = prompt("Do I hail from the UK?");
switch (thirdQuestion.toLowerCase()) {
    case "yes":
    case "y": 
        alert("Incorrect!");
        break;
    case "no":
    case "n":
        alert("Correct!");
        break;
    default:
        alert("Invalid input. Please use yes (y) or no (n) answers.")
}

let fourthQuestion = prompt("Is the colour of my eyes brown?")
switch (fourthQuestion.toLowerCase()) {
    case "yes":
    case "y": 
        alert("Correct!");
        break;
    case "no":
    case "n":
        alert("Incorrect!");
        break;
    default:
        alert("Invalid input. Please use yes (y) or no (n) answers.")
}
let fifthQuestion = prompt("Was I sold into slavery as a child and trained to be a fighter in an underground fight club, only to eventually fight my way out of it in a gruesome manner, leaving many bodies and my old life behind to start a new beginning by signing up to the Tech Educators Full-Stack MERN Developer course?");
switch (fifthQuestion.toLowerCase()) {
    case "yes":
    case "y": 
        alert("Incorrect!");
        break;
    case "no":
    case "n":
        alert("Correct!");
        break;
    default:
        alert("Invalid input. Please use yes (y) or no (n) answers.")
}

let userName = prompt("It is time for me to get to know you. What is your name?");

alert(userName + "! What a beautiful name!");
alert("Welcome to my webpage " + userName + ". Enjoy your stay!");