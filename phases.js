const container = document.getElementById("container");

container.addEventListener("click",function(){
    console.log("Container is executed");
}, true)

const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    console.log("Button is executed");
})

