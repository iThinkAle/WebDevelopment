let a
let b
let x

/*

a = window.prompt("Inserisci lato a: ")
a = Number(a)

b = window.prompt("Inserisci lato b: ")
b = Number(b)

x = Math.sqrt((Math.pow(a, 2)) + (Math.pow(b, 2)))
console.log(x)

*/

document.getElementById("submitButton").onclick = function (){
    a = document.getElementById("aText").value
    a = Number(a)

    b = document.getElementById("bText").value
    b = Number(b)

    x = Math.sqrt((Math.pow(a, 2)) + (Math.pow(b, 2)))

    document.getElementById("cLabel").innerHTML = "Lato c: " + x
}
