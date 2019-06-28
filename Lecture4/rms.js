let arr =[1,2,3,4,5];

let arr1 = arr.map(item => item*item)
console.log(arr1)

var arr2 = arr1.reduce((acum,item) =>{
     return acum+item;
})/arr.length

console.log(arr2);

let rmsValue = Math.sqrt(arr2.reduce(item) => {return item;})
console.log(rmsValue)