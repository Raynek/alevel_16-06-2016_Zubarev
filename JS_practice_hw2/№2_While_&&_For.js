// Вывод четных чисел от 0 до 100 с помощью While

var num = 0;

while (num <= 100) {
    console.log(num);
    num += 2;
}

// Вычисление 2 в 10 степени While

var result = 1;
var counter = 0;

while (counter < 10) {
    result *= 2;
    counter++;
}

console.log(result);


// Вычисление 2 в 10 степени For

var result = 1;

for (var counter = 0; counter < 10; counter++) {
    result *= 2;
    console.log(result);
}

// треугольник со * 



for(var i = "*"; i.length < 100; i+= "*") {
    console.log(i);
}

