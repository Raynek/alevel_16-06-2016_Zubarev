// выбор погодки

//switch (prompt("Как погодка?(дождь/снег/облачно/солнечно)")) {
//        case("дождь"):
//        alert("возьми зонтик");
//        break;
//        
//        case("снег"):
//        alert("мы в Рашке? Оо");
//        break;
//        
//        case("облачно"):
//        alert("пшел гулять");
//        break;
//        
//        case("солнечно"):
//        alert("ну збс");
//        break;
//        
//    default:
//        alert("Непонятно(");  
//}


// камень ножницы бумага со Switch

var userChoice = prompt("камень, ножницы, бумага");
var compChoice = Math.random;

    
    if (compChoice < 0.34) {
        compChoice = "Камень";
    } else if (compChoice <= 0.67 && compChoiceNormal >= 0.34) {
        compChoice = "Бумага";
    } else {
        compChoice = "Ножницы";
    } 

switch (userChoice = "камень") {
     case(compChoice = "ножницы"):
        alert("Вы выиграли!");
        break;
    
    case(compChoice = "бумага"):
        alert("Вы проиграли!");
        break;
        
    case(compChoice = "ножницы"):
        alert("Ничья!");
        break;
}