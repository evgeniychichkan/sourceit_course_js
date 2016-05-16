//Задача 3:

var arr = [1,2,3,4,5,6,77,3,5];

//В данном массиве заменить на null все четные элементы (которые делятся на 2 нацело)


console.log('Массив до: \n');
console.log(arr);

var arrCount =  arr.length;
for (var i = 0; i < arrCount; i++) {
    if (arr[i] % 2 == 0) {
       arr[i] = null;
       console.log('Index of null = ' + i);
  }
}

console.log('\nМассив после: \n');
console.log(arr);
