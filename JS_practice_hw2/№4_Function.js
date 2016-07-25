// Вычисление квадрата числа

var x = prompt("Введите число")
var square = function(x) {
    return x * x;
}
console.log(square(x));


// Ввод степени и числа

var base = prompt("Введите число");
var exponent = prompt("Введите степень");
var power = function(base, exponent){
    var result = 1;
    for(var count = 0; count < exponent; count++)
        result *= base;
    return result;
}

console.log(power(base, exponent));


// Корень числа квадр/куб

var base = prompt("Введите число");
var exponent = prompt("Значение корня");
var power = function(base, exponent){
    var result = 1;
    for(var count = 0; count < exponent; count++)
       result = Math.sqrt(base);
    if(exponent === "3")
       result = Math.sqrt(result);
     return result;

}
console.log(power(base, exponent));


