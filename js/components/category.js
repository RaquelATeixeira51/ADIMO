const products = [
    {
        img: "../img/product/bella-vista-pauliceia-no-bela-vista-sao-paulo.jpg",
        name: "bella vista pauliceia - pauliceia",
        newPrice: "R$ 315.000,00", 
        price: "",
        area: "28m²",
        quartos: "1",
        banheiros: "1",
        vagas: "--"
    },
    {
        img: "../img/product/helbor-art-paulista-no-bela-vista-sao-paulo.jpg",
        name: "helbor art paulista - bela vista",
        newPrice: "R$ 816.070", 
        price: "",
        area: "46-65m²",
        quartos: "1-2",
        banheiros: "1-2",
        vagas: "--"
    },
    {
        img: "../img/product/apartamento-com-2-quartos-a-venda-50m-no-vila-maria-sao-paulo.webp",
        name: "apartamento com 2 quartos à venda, 50m² - vila maria",
        newPrice: "R$ 372.000", 
        price: "R$ 398.500",
        area: "50m²",
        quartos: "2",
        banheiros: "2",
        vagas: "1"
    },
    {
        img: "../img/product/apartamento-com-2-quartos-a-venda-35m-no-mooca-sao-paulo.jpg",
        name: "apartamento com 2 quartos à venda, 35m² - mooca",
        newPrice: "R$ 227.000", 
        price: "",
        area: "35m²",
        quartos: "2",
        banheiros: "1",
        vagas: "--"
    },
    {
        img: "../img/product/apartamento-com-3-quartos-a-venda-111m-no-bras-sao-paulo.jpg",
        name: "apartamento com 3 quartos à venda, 111m² - brás",
        newPrice: "R$ 1.068.000", 
        price: "",
        area: "111m²",
        quartos: "3",
        banheiros: "2",
        vagas: "2"
    },
    {
        img: "../img/product/apartamento-com-2-quartos-a-venda-74m-no-jardim-das-acacias-sao-paulo.webp",
        name: "apartamento com 2 quartos à venda, 74m² - jardim das acacias",
        newPrice: "R$ 400.000", 
        price: "",
        area: "74m²",
        quartos: "2",
        banheiros: "2",
        vagas: "2"
    }
]
const menu = document.getElementById("menu");

for(let i = 0; i < products.length; i++) {
    menu.innerHTML = menu.innerHTML + 
    `<div class="col-lg-4 col-md-6">
        <div class="single-product">
            <img class="img-fluid" src="${products[i].img}" alt="${products[i].name}">
            <div class="product-details">
                <h6>${products[i].name}</h6>
                <div class="price">
                    <h6>${products[i].newPrice}</h6>
                    <h6 class="l-through">${products[i].price}</h6>
                </div>
                <div class="prd-bottom">
                    <a href="#" class="social-info">
                        <span class="lnr lnr-heart"></span>
                        <p class="hover-text">Wishlist</p>
                    </a>
                    <a href="#" onclick="register(${[i]})" class="social-info">
                        <span class="lnr lnr-move"></span>
                        <p class="hover-text">view more</p>
                    </a>
                </div>
            </div>
        </div>
    </div>`    
}

function buscar(){
    const search = document.getElementById("search").value.toLowerCase();
    const filter = products.filter(product => product.name.includes(search));
    
    menu.innerHTML = "";

    for(let i = 0; i < filter.length; i++) {
        menu.innerHTML = menu.innerHTML + 
        `<div class="col-lg-4 col-md-6">
            <div class="single-product">
                <img class="img-fluid" src="${filter[i].img}" alt="${filter[i].name}">
                <div class="product-details">
                    <h6>${filter[i].name}</h6>
                    <div class="price">
                        <h6>${filter[i].newPrice}</h6>
                        <h6 class="l-through">${filter[i].price}</h6>
                    </div>
                    <div class="prd-bottom">
                        <a href="#" class="social-info">
                            <span class="lnr lnr-heart"></span>
                            <p class="hover-text">Wishlist</p>
                        </a>
                        <a href="#" onclick="register(${[i]})" class="social-info">
                            <span class="lnr lnr-move"></span>
                            <p class="hover-text">view more</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>`    
    }
}

function register(index){
    sessionStorage.setItem("product", `${JSON.stringify(products[index])}`);
    document.location.href = "./single-product.html"
}
