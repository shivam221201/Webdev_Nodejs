function person (Name, Age){
    this.name =Name;
    this.age = Age;

    this.isAdult = function() {
        if(this.age > 18) return true;
        else false;
    }
}

let p1 = new person ("shivam", 22)
let p2 = new person ("joe", 21)
let p3 = new person ("john", 17)

console.log(p1.isAdult())
console.log(p1)
console.log(p2)
console.log(p3)