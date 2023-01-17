//User input

//Easy way (window prompt)

let username = window.prompt("Name")
console.log(username)


//Difficult way (HTML textbox)


let username2
document.getElementById("myButton").onclick = function(){

    username2 = document.getElementById("myText").value
    console.log(username2)
    document.getElementById("p1").innerHTML = "Hello " + username2
}