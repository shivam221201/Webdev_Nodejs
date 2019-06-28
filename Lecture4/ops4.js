/*let arr =[3,4,1,2,6.7.];

function odd(num) {
    if (num%2 == 0) return false;
    else return true;
}

arr1 = arr.filter(odd)

console.log(arr1)
*/

let arr = [1,2,3,4]

let sum = arr.reduce((acum , item) => {
    return acum + item
})/arr.length;

console.log(arr)