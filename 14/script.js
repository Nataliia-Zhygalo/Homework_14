
/*Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

Наприклад:
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]*/
function removeElement(arr, item) {
index = arr.indexOf(item);
if (index >= -1) {
    arr.splice(index, 1);
    }
return arr;
    }
    console.log(removeElement);