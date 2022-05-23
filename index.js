"use strict";

let display = document.getElementById("display");
let input = document.getElementById("iTask");
let add = document.getElementById("add");
var s=[];

// need to create a function to update(remove, probably add listener or smth)

add.addEventListener("click", (e) => {
    
    if(input.value.length==0)
        return;
    
    let st=input.value;
    for(let i=20;i<st.length;i+=20)
    {
        if(st[i]==' ') st=[st.slice(0,i),"<br>",st.slice(i)].join('');
            else st=[st.slice(0,i),"-<br>",st.slice(i)].join('');
    }
    console.log(st);   
    
    s.push(st);

    display.innerHTML += "<li id=" + s.length + ">" + s[s.length-1] + "</li><br>";
    input.value="";
});