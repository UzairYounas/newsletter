document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();

    checkData();
})

let email = document.getElementById("email");

function checkData(){
    let emailValue = email.value.trim();

    if(emailValue === ""){
        setError(email, "Email can't be blanked")
    }
    else if(!isEmail(emailValue)){
        setError (email, "valid email required")
    }
    else{
        setSuccess(email);
    }
}

function setError(u, msg){
    let parentBox = u.parentElement;
    console.log (u.parentElement)
    parentBox.className = "d-flex flex-column justify-content-center pt-4 pb-2 error";
    let span = parentBox.querySelector("span")
    span.innerText = msg;
}

function setSuccess(u){
    let parentBox = u.parentElement;
    parentBox.className = "d-flex flex-column justify-content-center pt-4 pb-2 sucess";

}

function isEmail(e){
    let reg= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e)
}