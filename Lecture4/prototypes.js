let food = {
    veg: false
}

let fruit = Object.create(food)
fruit.taste = "sweet";

let Mango = Object.create(fruit)
Mango.color ="yellow"

/*console.log(Mango.taste)
console.log(Mango.color)
console.log(Mango.veg)
console.log(fruit.taste)
console.log(fruit.veg)
console.log(food.veg)
console.log(fruit.color)
*/

console.log(Mango._proto_ === Object._proto_)
console.log(food._proto_)
console.log(Mango.prototype)
console.log(food._proto_ === Object._proto_)