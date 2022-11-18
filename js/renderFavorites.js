function render(){
    const favorites = sessionStorage.getItem("favoritos").split("%");
    const favoritesTable = document.getElementById("favorites_table");
    const favoritesArray = [];
    for (let i = 0; i < favorites.length; i++) {
        if(favorites[i] != ""){
            const object = JSON.parse(favorites[i])
            favoritesArray.push(object);
        }
    }
    for (let i = 0; i < favoritesArray.length; i++) {
        favoritesTable.innerHTML = favoritesTable.innerHTML + `
        <tr>
            <td>
                <div class="media">
                <div class="media-body">
                    <img class="favorite-img" src="${favoritesArray[i].img}">
                </div>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${favoritesArray[i].name}</p>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${favoritesArray[i].area}</p>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${favoritesArray[i].quartos}</p>
                </div>
            </td>
            <td>
                <a href="#" onclick="deletar(${[i]})" class="genric-btn danger circle">[X]</a>
            </td>
        </tr>`
    }
}
render();


function deletar(id) {
    const favorites = sessionStorage.getItem("favoritos").split("%");
    const favoritesTable = document.getElementById("favorites_table");
    const favoritesArray = [];
    for (let i = 0; i < favorites.length; i++) {
        if(favorites[i] != ""){
            favoritesArray.push(favorites[i]);
        }
    }
    favoritesArray.splice(id, 1);
    sessionStorage.removeItem("favoritos");

    let newFav = ""
    for (let i = 0; i < favoritesArray.length; i++) {
        newFav = `${newFav}%${favoritesArray[i]}`    
    }
    sessionStorage.setItem("favoritos", newFav);

    for (let i = 0; i < favoritesArray.length; i++) {
        favoritesArray[i] = JSON.parse(favoritesArray[i]);
    }

    favoritesTable.innerHTML = "";
    for (let i = 0; i < favoritesArray.length; i++) {
        favoritesTable.innerHTML = favoritesTable.innerHTML + `
        <tr>
            <td>
                <div class="media">
                <div class="media-body">
                    <img class="favorite-img" src="${favoritesArray[i].img}">
                </div>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${favoritesArray[i].name}</p>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${favoritesArray[i].area}</p>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${favoritesArray[i].quartos}</p>
                </div>
            </td>
            <td>
                <a href="#" onclick="deletar(${[i]})" class="genric-btn danger circle">[X]</a>
            </td>
        </tr>`
    }
}