"use strict";

let display = document.getElementById("display");
let input = document.getElementById("iTask");
let add = document.getElementById("add");
var s=[];

// need to create a function to update(remove, probably add listener or smth)

add.addEventListener("click", (e) => {
    s.push(input.value);
    //console.log(s);
    display.innerHTML += "<div class='goal'>" + s.length.toString(10) + ". " + s[s.length-1] + "</div><br>";
    input.value="";
});