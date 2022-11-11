const favorites = sessionStorage.getItem("favoritos").split("%");
const favoritesTable = document.getElementById("favorites_table");
const favoritesArray = [];
for (let i = 0; i < favorites.length; i++) {
    const object = JSON.parse(favorites[i])
    favoritesArray.push(object);
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

function deletar(id) {
    for (let i = 0; i < favorites.length; i++) {
        if([i] == id){
            favorites.splice(i, 1);
        }        
    }
    const remainFavorites = favorites;
    
    /* Atualizar cache para nova lista de favoritos */
    const favoritesCache = sessionStorage.setItem("favoritos", "")
    for (let i = 0; i < remainFavorites.length; i++) {
        const m = sessionStorage.setItem("favoritos", `${JSON.stringify(remainFavorites[i])}%`)
        console.log(m);
    }

    const favoritesArray = [];
    for (let i = 0; i < remainFavorites.length; i++) {
        const object = JSON.parse(remainFavorites[i])
        favoritesArray.push(object);
    }
    const favoritesTable = document.getElementById("favorites_table");
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