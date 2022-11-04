const isLogged = sessionStorage.getItem("status");
if(isLogged){
    // Se o usário estiver logado, o imóvel será adicionado a lista de desejos/O usuário será redirecionado à página de agendamento de visita
    console.log("Bom dia");
}else{
    console.log("Boa noite");
}