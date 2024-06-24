function validatorForm(){
    event.preventDefault()
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;

    if(name === "" && contact === ""){
        alert("Name and Contact is required")
    }else if(contact === ""){
        alert("Contact is required")
    }else if (name === ""){
        alert("Name is required")
    }
}