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
                        <a class="primary-btn" href="./contact.html">Agende sua Reserva</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    document.getElementById("specifications").innerHTML = `
    <div class="container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile"
                    aria-selected="false">Specification</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
        </div>
    </div>
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
    document.getElementById("product").innerHTML = `
    <div class="container">
        <div class="row s_product_inner">
            <div class="col-lg-5 offset-lg-1">
                <div class="s_product_text">
                    <h2>ERROR 404 :(</h2>
                    <h3>Não foi possível encontrar o seu produto, tente novamente mais tarde.</h3>
                    <div class="card_area d-flex align-items-center">
                        <a class="primary-btn" href="./category.html">Catálogo</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}