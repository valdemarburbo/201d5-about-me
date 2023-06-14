"use strict";

alert("Hi! Welcome to the webpage about me, Val!");

alert("I have prepared a quiz to test your knowledge about me. Please answer the questions with yes (y) or no (n).");

let quizScore = 0;

let firstQuestion = "";

while (firstQuestion !== "y" && firstQuestion !== "yes" && firstQuestion !== "n" && firstQuestion !== "no") {

    firstQuestion = prompt("Is the full version of my first name Voldemort?").toLowerCase();

    switch (firstQuestion) {
        case "yes":
        case "y":
            alert("Incorrect!");
            break;
        case "no":
        case "n":
            quizScore += 1;
            alert("Correct!");
            break;
        default:
            alert("Invalid input. Please use yes (y) or no (n) answers.")
    }
}

let secondQuestion = "";

while (secondQuestion !== "y" && secondQuestion !== "yes" && secondQuestion !== "n" && secondQuestion !== "no") {

    secondQuestion = prompt("Can I play the guitar?").toLowerCase();

    switch (secondQuestion) {
        case "yes":
        case "y":
            quizScore += 1; 
            alert("Correct!");
            break;
        case "no":
        case "n":
            alert("Incorrect!");
            break;
        default:
            alert("Invalid input. Please use yes (y) or no (n) answers.")
    }
}

let thirdQuestion = "";

while (thirdQuestion !== "y" && thirdQuestion !== "yes" && thirdQuestion !== "n" && thirdQuestion !== "no") {
    thirdQuestion = prompt("Do I hail from the UK?").toLowerCase();

    switch (thirdQuestion) {
        case "yes":
        case "y": 
            alert("Incorrect!");
            break;
        case "no":
        case "n":
            quizScore += 1;
            alert("Correct!");
            break;
        default:
            alert("Invalid input. Please use yes (y) or no (n) answers.")    
    }
}

let fourthQuestion = "";

while (fourthQuestion !== "y" && fourthQuestion !== "yes" && fourthQuestion !== "n" && fourthQuestion !== "no") {
    fourthQuestion = prompt("Is the colour of my eyes brown?").toLowerCase();

    switch (fourthQuestion) {
        case "yes":
        case "y":
            quizScore += 1; 
            alert("Correct!");
            break;
        case "no":
        case "n":
            alert("Incorrect!");
            break;
        default:
            alert("Invalid input. Please use yes (y) or no (n) answers.")
    }
}

let fifthQuestion = "";

while (fifthQuestion !== "y" && fifthQuestion !== "yes" && fifthQuestion !== "n" && fifthQuestion !== "no") {
    fifthQuestion = prompt("Was I sold into slavery as a child and trained to be a fighter in an underground fight club, only to eventually fight my way out of it in a gruesome manner, leaving many bodies and my old life behind to start a new beginning by signing up to the Tech Educators Full-Stack MERN Developer course?").toLowerCase();

    switch (fifthQuestion.toLowerCase()) {
        case "yes":
        case "y": 
            alert("Incorrect!");
            break;
        case "no":
        case "n":
            quizScore += 1;
            alert("Correct!");
            break;
        default:
            alert("Invalid input. Please use yes (y) or no (n) answers.")
    }
}

alert("You got " + quizScore + " out of 5 questions right.")

//let sixthQuestion = prompt()

let userName = prompt("It is time for me to get to know you. What is your name?");

alert(userName + "! What a beautiful name!");
alert("Welcome to my webpage " + userName + ". Enjoy your stay!");
