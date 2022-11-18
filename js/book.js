const imovel = JSON.parse(sessionStorage.getItem("booking"));
const element = document.getElementById("imovel");
element.innerHTML = `
    <img src="${imovel.img}" class="imovel-img">
    <h2>${imovel.name}</h2>
    <h5>${imovel.area}<h5>
    <p>${imovel.price}</p>
    <p>${imovel.newPrice}</p>
`
function agendar(){

}