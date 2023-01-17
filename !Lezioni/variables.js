//Variables (Steps: 1) Declaration (var, let, const); 2) Assignment (= assigment operator)

let age
let name = "Ale"
let student
let working
let name2

age = 13
//age += 1
student = true
working = false
name2 = "Ricordy"

console.log(name, name2, age, "Student:", student, "Working:", working)

document.getElementById("p1").innerHTML = "Hello " + name + " " + name2
document.getElementById("p2").innerHTML = "You are " + age
document.getElementById("p3").innerHTML = "Student: " + student

//------------------------------------------------------------------------------------

// const = variale that can't be changed

const pi = 3.14
let radius
let circum

//pi = 314 we can't do it because pi is a const variable

radius = window.prompt("Radius")
radius = Number(radius)

circum = 2 * pi * radius

console.log(circum)
