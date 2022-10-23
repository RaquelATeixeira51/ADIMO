function registerUser(){
    const name_register = document.getElementById("name_register").value;
    const email_register = document.getElementById("email_register").value;
    const senha_register = document.getElementById("senha_register").value;

    sessionStorage.setItem("user", `${name_register},${email_register},${senha_register}`);
    sessionStorage.setItem("status", "logado");
    document.location.href = "/pages/index.html";
}

function loginUser(){
    const name_login = document.getElementById("name_login").value;
    const senha_login = document.getElementById("senha_login").value;

    const login = sessionStorage.getItem("user");
    const loginArray = login.split(",");

    if(name_login == loginArray[0] && senha_login == loginArray[2]){
        console.log("Logado");
        sessionStorage.setItem("status", "logado");
        document.location.href = "/pages/index.html";
    }else{
        console.log("Senha/email incorretos");
    }
}