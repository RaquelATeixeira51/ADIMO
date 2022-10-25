const products = [
    {
        img: "p1.jpg",
        name: "adidas new hammer sole for sports person",
        newPrice: "$150.00", 
        price: "$210.00",
    },
    {
        img: "p2.jpg",
        name: "adidas new hammer sole for sports person",
        newPrice: "$150.00", 
        price: "$210.00",
    },
    {
        img: "p3.jpg",
        name: "nike new hammer sole for sports person",
        newPrice: "$150.00", 
        price: "$210.00",
    },
    {
        img: "p6.jpg",
        name: "adidas new balance sole for sports person",
        newPrice: "$150.00", 
        price: "$210.00",
    },
    {
        img: "p4.jpg",
        name: "adidas new balance sole for sports person",
        newPrice: "$150.00", 
        price: "$210.00",
    },
    {
        img: "p5.jpg",
        name: "adidas new hammer sole for sports person",
        newPrice: "$150.00", 
        price: "$210.00",
    }
]
const menu = document.getElementById("menu");

for(let i = 0; i < products.length; i++) {
    menu.innerHTML = menu.innerHTML + 
    `<div class="col-lg-4 col-md-6">
        <div class="single-product">
            <img class="img-fluid" src="../img/product/${products[i].img}" alt="${products[i].name}">
            <div class="product-details">
                <h6>${products[i].name}</h6>
                <div class="price">
                    <h6>${products[i].newPrice}</h6>
                    <h6 class="l-through">${products[i].price}</h6>
                </div>
                <div class="prd-bottom">
                    <a href="" class="social-info">
                        <span class="lnr lnr-heart"></span>
                        <p class="hover-text">Wishlist</p>
                    </a>
                    <a href="" class="social-info">
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
                <img class="img-fluid" src="../img/product/${filter[i].img}" alt="${filter[i].name}">
                <div class="product-details">
                    <h6>${filter[i].name}</h6>
                    <div class="price">
                        <h6>${filter[i].newPrice}</h6>
                        <h6 class="l-through">${filter[i].price}</h6>
                    </div>
                    <div class="prd-bottom">
                        <a href="" class="social-info">
                            <span class="lnr lnr-heart"></span>
                            <p class="hover-text">Wishlist</p>
                        </a>
                        <a href="" class="social-info">
                            <span class="lnr lnr-move"></span>
                            <p class="hover-text">view more</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>`    
    }
}
