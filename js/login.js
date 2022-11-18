function registerUser(){
    const name_register = document.getElementById("name_register").value;
    const email_register = document.getElementById("email_register").value;
    const senha_register = document.getElementById("senha_register").value;

    sessionStorage.setItem("user", `${name_register},${email_register},${senha_register}`);
    sessionStorage.setItem("status", "logado");
    document.location.href = "./index.html";
}

function loginUser(){
    const name_login = document.getElementById("name_login").value;
    const senha_login = document.getElementById("senha_login").value;

    const login = sessionStorage.getItem("user");
    const loginArray = login.split(",");

    if(name_login == loginArray[0] && senha_login == loginArray[2]){
        sessionStorage.setItem("status", "logado");
        document.location.href = "./index.html";
    }else{
        const error = document.getElementById("err_message");
        error.innerHTML = "Usuário/Senha incorretos"
    }
}

function abrirFormFuncionario(){
    const form = document.getElementById("funcionario");
    const back = document.getElementById("background-funcionario");
    back.classList.add("show_back")
    form.classList.remove("hidden");
    form.classList.add("show_form")
}

function abrirFormRecuperarSenha(){
    const form = document.getElementById("esqueceuSenha");
    const back = document.getElementById("background-funcionario");
    back.classList.add("show_back")
    form.classList.remove("hidden");
    form.classList.add("show_form")
}

function fechar(){
    const form = document.getElementById("funcionario");
    const back = document.getElementById("background-funcionario");
    back.classList.remove("show_back")
    form.classList.remove("show_form")
    form.classList.add("hidden");
}

function fecharRecuperarSenha(){
    const form = document.getElementById("esqueceuSenha");
    const back = document.getElementById("background-funcionario");
    back.classList.remove("show_back")
    form.classList.remove("show_form")
    form.classList.add("hidden");
}

function loginFuncionario() {
    const name_login = document.getElementById("funcionario_login").value;
    const senha_login = document.getElementById("funcionario_senha").value;

    if(name_login == "admin_example" && senha_login == "1234"){
        sessionStorage.setItem("statusAdmin", "logado");
        document.location.href = "./index.html";
    }else{
        const error = document.getElementById("err_message_funcionario");
        error.innerHTML = "Usuário/Senha incorretos"
    }
}

function recoverSenha() {
    const input_email = document.getElementById("recoverEmail").value;
    const input_password = document.getElementById("recoverPassword").value;
    const user = sessionStorage.getItem("user");
    if(user){
        const email = user.split(",")[1]
        if(input_email == email){
            const newPassword = user.split(",");
            sessionStorage.setItem("user", `${newPassword[0]},${email},${input_password}`);
            document.location.href = "./index.html"
        }else{
            const error = document.getElementById("err_message_recover");
            error.innerHTML = "Usuário inexistente"
        }
    }else{
        const error = document.getElementById("err_message_recover");
        error.innerHTML = "Usuário inexistente"
    }
}