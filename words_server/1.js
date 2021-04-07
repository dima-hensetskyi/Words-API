/* arr.forEach((item) => console.log(item));
console.log(arr); */

const forEach = function (arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
};

/* forEach(arr, cons);
function cons(params) {
    console.log(params);
} */

/* const map = function (arr, func) {
    let array = [];
    forEach(arr, (item) => array.push(func(item)));
  return array;
}; */
/* console.log(arr);
const array1 = map(arr, (num) => num + 1);
console.log(array1);
console.log(arr); */
/* const arr = [1, 2, 2, 3, 3, 4, 4, 4, 5, 6, 4, 2, 1, 2, 3];
const unique = (arr) =>
  arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num));
console.log(unique(arr)); */
/* function getNumber(count) {
  return function () {
    count++;
    console.log(count);
  };
}
const number = getNumber(10);
number();
number();
number(); */
