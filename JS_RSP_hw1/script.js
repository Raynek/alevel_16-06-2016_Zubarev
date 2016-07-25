var diffChoice = document.getElementsByName("difficulty");
//diffChoice = ("Выберите сложность: Легко, Нормально, Сложно");
try{
var userChoice = prompt("Выберите: Камень, Ножницы, Бумага");
}

catch(ex){
    alert(ex);
}
var compChoiceNormal = Math.random();
var compChoiceEasy;
var compChoiceHard;


if (diffChoice === easy){
    
    if (compChoiceNormal < 0.34) {
        compChoiceNormal = "Камень";
    } else if (compChoiceNormal <= 0.67 && compChoiceNormal >= 0.34) {
        compChoiceNormal = "Бумага";
    } else {
        compChoiceNormal = "Ножницы";
    } 

    
    function normalFunc(choice1, choice2) {
        if (choice1 === choice2){
            confirm ("Ничья");
        }

        else if (choice1 === "Камень") {
            if (choice2 === "Ножницы") {
                confirm ("Вы победили!");
            } else {
                confirm ("Вы проиграли");
            }
        }

        else if (choice1 === "Ножницы") {
            if (choice2 === "Бумага") {
                confirm ("Вы победили!");
            } else {
                confirm ("Вы проиграли");
            }
        }

        else if (choice1 === "Бумага") {
            if (choice2 === "Камень") {
                confirm ("Вы победили!");
            } else {
                confirm ("Вы проиграли");
            }
        }
    }
    normal(userChoice, compChoiceNormal);
}

else if (diffChoice === normal){
    function easyfunc(choice1, choice2){
        if(choice1 === "Камень"){
            choice2 === "Ножницы";
            confirm ("Вы победили!")
        } else if(choice1 === "Ножницы") {
            choice2 === "Бумага";
            confirm ("Вы победили!");
        } else {
            choice2 === "Бумага";
            confirm ("Вы победили!");
        }
    }
    easy(userChoice, compChoiceEasy);
}

else if (diffChoice === hard){
    function hardFunc(choice1, choice2){
        if(choice1 === "Камень"){
            choice2 === "Бумага";
            confirm ("Вы проиграли!");
        } else if(choice1 === "Ножницы") {
            choice2 === "Камень";
            confirm ("Вы проиграли!");
        } else {
            choice2 === "Бумага";
            confirm ("Вы проиграли!");
        }
    }
    hard(userChoice, compChoiceHard);
    
}


var userChoice = "rock";

switch(userChoice){
    case "rock": console.log("rock"); break;
    case "paper":
    case "scissors": console.log("paper or scissors"); break;
    default: console.log("dadada"); break;
}