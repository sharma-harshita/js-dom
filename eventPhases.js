const container = document.getElementById("container")
container.addEventListener("click", function(){
    console.log("container is clicked");
})


const btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    event.stopPropagation()
    console.log("button is clicked");
})

