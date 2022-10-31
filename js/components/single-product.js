const product = JSON.parse(sessionStorage.getItem("product"));

if (product) {
    document.getElementById("product").innerHTML = `
    <div class="container">
        <div class="row s_product_inner">
            <div class="col-lg-6">
                <div class="s_Product_carousel">
                    <div class="single-prd-item">
                        <img class="img-fluid" src="${product.img}" alt="${product.name}">
                    </div>
                </div>
            </div>
            <div class="col-lg-5 offset-lg-1">
                <div class="s_product_text">
                    <h3 class="major">${product.name}</h3>
                    <h2>${product.newPrice}</h2>
                    <div class="card_area d-flex align-items-center">
                        <a class="primary-btn" href="#">Agende sua Reserva</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    document.getElementById("profile").innerHTML = `
    <div class="table-responsive">
        <table class="table">
            <tbody>
                <tr>
                    <td>
                        <h5>Área</h5>
                    </td>
                    <td>
                        <h5>${product.area}</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Quartos</h5>
                    </td>
                    <td>
                        <h5>${product.quartos}</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Banheiros</h5>
                    </td>
                    <td>
                        <h5>${product.banheiros}</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Vagas</h5>
                    </td>
                    <td>
                        <h5>${product.vagas}</h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>`
} else {
   alert("Erro de conexão/Produto não encontrado");
   document.location.href = "./category.html";
}