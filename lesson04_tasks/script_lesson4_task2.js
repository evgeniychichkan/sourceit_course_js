//Задача 2:

var arr = [1,2,3,4,5,6,77,3,5];
console.log('Массив до:\n');
console.log(arr);

/*
Изменить порядок эл-тов массива на обратный (а-ля reverse())
создаем новый массив, и делаем в нем всю нужную магию.
результат должен быть
[5, 3, 77, 6, 5, 4, 3, 2, 1]
*/


//Решение задачи:
var revArr = arr.slice();
var arrCount = revArr.length;
for (var i = 0; i < arrCount; i++) {
    revArr[i] = arr.pop();
  }

console.log('Массив после:\n');
console.log(revArr);