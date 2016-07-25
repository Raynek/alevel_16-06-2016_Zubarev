//// Выбор числа
//
//var num = Number(prompt("Введите число ", "0"));
//
//if (num < 10) {
//    alert("Маловато");
//} else if (num < 100) {
//    alert("Сойдет");
//} else {
//   alert("Многовато");
//}
//
//
//// FizzBuzz
//
//for(var num = 1; num <= 100; num++){
//    if(num % 3 === 0 && num % 5 === 0){
//        console.log("FizzBuzz");
//        
//    } else if(num % 3 === 0 ){
//        console.log("fizz");
//        
//    } else if(num % 5 === 0){
//        console.log("Buzz");
//       
//    } else {
//          console.log(num);
//      }
//    }
//    
//
//
//// Правильный FizzBuzz
//
//for(var i = 1; i <= 100; i++){
//    var out = "";
//    
//    if(!(i % 3))
//        pustota += "Fizz";
//    if(!(i % 5)) 
//        pustota += "Buzz";
//    
//    console.log(out || i);
//}
//
//// Шахматная доска
//
//var height = Number(prompt("choose height"));
//var width = Number(prompt("choose width"));
//var board = "";
//
//for (var y = 0; y < height; y++) {
//  for (var x = 0; x < width; x++) {
//    if ((x + y) % 2 == 0)
//      board += " ";
//    else
//      board += "#";
//  }
//  board += "\n";
//}
//
//console.log(board);


