const imovel = JSON.parse(sessionStorage.getItem("booking"));
const element = document.getElementById("imovel");
element.innerHTML = `
    <img src="${imovel.img}" class="imovel-img">
    <h2 class="imovel-name">${imovel.name}</h2>
    <h5>${imovel.area}<h5>
    <p class="new-price">${imovel.newPrice}</p>
    <p class="old-price">${imovel.price}</p>
`

function telefoneFormat(telefone){
    const ddd = telefone.slice(0,2);
    const pre = telefone.slice(2,3);
    const parte1 = telefone.slice(3,7);
    const parte2 = telefone.slice(7,11);
    if(telefone.length == 11){
        return `(${ddd}) ${pre} ${parte1}-${parte2}`;
    }else{
        return telefone;
    }
}

function dateFormat(data){
    const formatedDate = data.split("-");
    return `${formatedDate[2]}/${formatedDate[1]}/${formatedDate[0]}`
}

function agendar(){
    const telefone = document.getElementById("telefone").value;
    const formatedTel = telefoneFormat(telefone)
    const data = document.getElementById("data").value;
    const formatedDate = dateFormat(data); 
    const horario = document.getElementById("horario").value;

    sessionStorage.setItem("clientContact", `${formatedTel}%${formatedDate} - ${horario}`)
}