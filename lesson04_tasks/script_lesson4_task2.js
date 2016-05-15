//Задача 2:

var arr = [1,2,3,4,5,6,77,3,5];

/*
Изменить порядок эл-тов массива на обратный (а-ля reverse())
создаем новый массив, и делаем в нем всю нужную магию.
результат должен быть
[5, 3, 77, 6, 5, 4, 3, 2, 1]
*/


//Решение задачи:
var revArr = arr.slice();
var arrAmount = revArr.length;
for (var i = 0; i < arrAmount; i++) {
    revArr[i] = arr.pop();
  }
console.log(revArr);
