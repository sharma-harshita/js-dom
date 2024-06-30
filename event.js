function clickHandler(){
    console.log("event handler is executed");
}


const btn = document.getElementById("btn");
function a (){
    console.log("click event listener 1");
}

function b (){
    console.log("click event listener 2");
}

function c (){
    console.log("click event listener 3 mouse over");
}

function d (){
    console.log("click event listener 3 mouse out");
}

btn.addEventListener("click",a )
btn.addEventListener("click",b )

btn.addEventListener("mouseover", c)
btn.addEventListener("mouseout", d)


btn.removeEventListener("mouseout", d)