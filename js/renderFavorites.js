const favorites = sessionStorage.getItem("favoritos").split("%");
function render(){
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
    const favoritesArr = [];
    for (let i = 0; i < favorites.length; i++) {
        if(i == id){
            console.log(true);
        }else{
            favoritesArr.push(JSON.parse(favorites[i]));      
        }
    }
    var newList = "";

    for (let i = 0; i < favoritesArr.length; i++) {
        newList = newList + JSON.stringify(favoritesArr[i]) + "%"   
    }

    sessionStorage.removeItem("favoritos");
    sessionStorage.setItem("favoritos", newList);

    const favoritesTable = document.getElementById("favorites_table");
    const newFavorites = sessionStorage.getItem("favoritos").split("%")
    const newFavoritesArr = [];

    for (let i = 0; i < newFavorites.length - 1; i++) {
        const object = JSON.parse(newFavorites[i])
        newFavoritesArr.push(object);
    }
    console.log(newFavoritesArr);
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
}