//Type conversion

let age = window.prompt("Age")

console.log(typeof age)
age = Number(age)
console.log(typeof age)
age += 1

console.log("Happy bd! You are", age, "years old")

//----------------------------------------------------------

let x
let y
let z
let z1

x = Number("3.14")
y = String(3.14)
z = Boolean("")
z1 = Boolean("prova")

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)
console.log(z1, typeof z1)