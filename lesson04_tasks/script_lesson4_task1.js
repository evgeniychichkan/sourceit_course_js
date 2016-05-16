//Задача 1:

var arr = [1,2,3,4,5,6,77,3,5];

/*
  Найти в данном массиве число 3 и вывести его индекс.
  Или -1, если число не найдено.
  Не юзать indexOf.

  ** Если число встречается больше одного раза, игнорируем.
*/


//Решение задачи:
var arrCount =  arr.length;
var indexCount = 0;
for (var i = 0; i < arrCount; i++) {
    if (arr[i] == 3) {
    	console.log('Index of 3 = ' + i);
     	break;
  } else if (i == (arrCount-1)) {
    	console.log(-1);
}
}


//Задача(вариация): найти все индексы числа 3, если числа 3 нет, вывести -1
//Решение задачи:
var arrCount =  arr.length;
var indexCount = 0;
for (var i = 0; i < arrCount; i++) {
    if (arr[i] == 3) {
    	console.log('Index of 3 = ' + i);
    	indexCount++;
  } else if (i == (arrCount-1) && indexCount == 0) {
        console.log(-1);
  }
}
