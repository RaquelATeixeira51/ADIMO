function render(){
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
}
render();


function deletar(id) {
    const favorites = sessionStorage.getItem("favoritos").split("%");
    const favoritesTable = document.getElementById("favorites_table");
    const favoritesArray = [];

    for (let i = 0; i < favorites.length; i++) {
        const object = JSON.parse(favorites[i])
        favoritesArray.push(object);
    }
    for (let i = 0; i < favoritesArray.length; i++) {
        if(i === id){
            favoritesArray.splice(i, 1);
        }        
    }
    var newFavoritesList = "";
    for (let i = 0; i < favoritesArray.length; i++) {
        newFavoritesList = newFavoritesList+"%"+JSON.stringify(favoritesArray[i]);       
    }
    console.log(newFavoritesList);
    const m = newFavoritesList.slice(1, 1);
    console.log("Olá",m);

    favoritesTable.innerHTML = "";
    for (let i = 0; i < newFavoritesArr.length; i++) {
        favoritesTable.innerHTML = favoritesTable.innerHTML + `
        <tr>
            <td>
                <div class="media">
                <div class="media-body">
                    <img class="favorite-img" src="${newFavoritesArr[i].img}">
                </div>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${newFavoritesArr[i].name}</p>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${newFavoritesArr[i].area}</p>
                </div>
            </td>
            <td>
                <div class="product_count">
                <p>${newFavoritesArr[i].quartos}</p>
                </div>
            </td>
            <td>
                <a href="#" onclick="deletar(${[i]})" class="genric-btn danger circle">[X]</a>
            </td>
        </tr>`
    }
    console.log("Tchau",favoritesArray);
}