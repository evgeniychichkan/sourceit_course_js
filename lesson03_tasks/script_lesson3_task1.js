﻿/*
Задача: 

var a = 10, b = 3, c = 40, d = 20;

Найти самую большую переменную. 
Умножить её значение на 20,
 следующую по величине умножить на 10,
  следующую по величине умножить на 5,
	с наименьшей ничего не делать.
Проделать это для 3 и 4 перменных;

первая часть - для трех переменных,
вторая часть - для четырех.

*/




//================= Для трех переменных ======================

var a = 10, b = 3, c = 40;

// Логика вычислений, если есть равные между собой переменные
if (a == b || b == c || c == a) {
  if (a == b && b == c && a == c) {a *= 20; c *= 20; b *= 20;}
  else if (a == b) {
    if (a > c) {a *= 20; b *= 20; c *= 10;}
     else {c *= 20; a *= 10; b *= 10;}
  }
  else if (b == c) {
    if (b > a) {b *= 20; c *= 20; a *= 10;}
     else {a *= 20; b *= 10; c *= 10;}
  }
  else if (a == c) {
    if(a > b) {a *= 20; c *= 20; b *= 10;}
     else {b *= 20; a *= 10; c *= 10;}
  } 
}

// Логика вычислений, если наибольшее значение у переменной а
else if (a > b && a > c) {
  a *= 20;
  if (b > c) {b *= 10;}
    else {c *= 10;}
   }
   
// Логика вычислений, если наибольшее значение у переменной b
else if (b > a && b > c) {
  b *= 20;
  if (a > c) {a *= 10;}
   else {c *= 10;}
   }
   
// Логика вычислений, если наибольшее значение у переменной c
else if (c > a && c > b) {
  c *= 20;
  if (a > b) {a *= 10;}
   else {b *= 10;}
}

console.log(a,b,c);

//Результат:
//100 3 800




//================= Для четырех переменных ======================

var a = 10, b = 3, c = 40, d = 20;

// Логика вычислений, если наибольшее значение у переменной а
if (a > b && a > c && a > d) {
  a *= 20;
  if (b > c && b > d) {
    b *= 10;
    if (c > d) {c *=5;}
     else {d *= 5;}
   }
  else if (c > b && c > d) {
    c *= 10;
    if (b > d) {b *= 5;}
     else {d *= 5;}
  }
  else if (d > b && d > c) {
    d *= 10;
    if (b > c) {b *= 5;}
     else {c *= 5;}
  }
}

// Логика вычислений, если наибольшее значение у переменной b
else if (b > a && b > c && b > d) {
  b *= 20;
  if (a > c && a > d) {
    a *= 10;
    if (c > d) {c *= 5;}
     else {d *= 5;}
  }
  else if (c > a && c > d) {
    c *=10;
    if (a > d) {a *= 5;}
     else {d *= 5;}
  }
  else if (d > a && d > c) {
    d *= 10;
    if (a > c) {a *= 5;}
     else {c *= 5;}
  }
}

// Логика вычислений, если наибольшее значение у переменной c
else if (c > a && c > b && c > d) {
  c *= 20;
  if (a > b && a > d ) {
    a *= 10;
    if (b > d) {b *= 5;}
     else {d *= 5;}
  }
  else if (b > a && b > d) {
    b *= 10;
    if (a > d) {a *= 5;}
     else {d *= 5;}
  }
  else if (d > a && d > b) {
    d *= 10;
    if (a > b) {a *= 5;}
     else {b *=5;}
  }
}

// Логика вычислений, если наибольшее значение у переменной d
else if (d > a && d > b && d > c) {
  d *= 20;
  if (a > b && a > c) {
    a *= 10;
    if (b > c) {b *= 5;}
     else {c *= 5;}
  }
  else if (b > a && b > c) {
    b *= 10;
    if (a > c) {a *= 5;}
     else {c *= 5;}
  }
  else if (c > a && c > b) {
    c *= 10;
    if (a > b) {a *= 5;}
     else {b *= 5;}
  }
}

//Вывод результата:
console.log(a,b,c,d);

//Результат:
//50 3 800 200






