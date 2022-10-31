const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", function sendMail(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    if(name == 0 || email == 0 || subject == 0 || message == 0){
        alert("Por favor preencha todos os campos!");
        return;
    }else{
        alert("Email enviado");
        document.location.href = "./index.html";
    }
})