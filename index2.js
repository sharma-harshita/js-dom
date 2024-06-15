const element = document.getElementById("container");
element.innerText = "MERN Full Stack Course"
element.innerText = "<h1>MERN Full Stack Course</h1>"
element.innerHTML = "<h1>MERN Full Stack Course</h1>"

element.style.backgroundColor = "red";
element.style.color = "yellow"

element.setAttribute("id", "head");
console.log(element);