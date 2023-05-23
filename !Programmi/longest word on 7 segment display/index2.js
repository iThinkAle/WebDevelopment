const fs = require("fs")
let dictionary = fs.readFileSync("E:\\!PERSONALE\\Programming\\Web (JavaScript - HTML)\\!Programmi\\longest word on 7 segment display\\dictionary.txt", "utf8")
let words = dictionary.split(/\s+/)
let longestword = ""
let badletters = /[gkmqvwxy]/


for(let testWord of words){

    if(testWord.length <= longestword.length){
        continue
    }

    if(testWord.match(badletters)){
        continue
    }

    longestword = testWord

}

console.log(longestword)
