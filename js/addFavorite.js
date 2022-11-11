const sessionAlreadyExists = sessionStorage.getItem("favoritos")
if(!sessionAlreadyExists){
    sessionStorage.setItem("favoritos", "");
}

function isLogged(item) {
    const isLogged = sessionStorage.getItem(`${item}`);
    if (isLogged) {
        return true;
    } else {
        return false;
    }
}

function favorite(index) {
    const booleanIsLogged = isLogged("status");
    if(booleanIsLogged){
        const favorites = sessionStorage.getItem("favoritos")
        if(favorites.trim() != 0){
            sessionStorage.setItem("favoritos", `${favorites}%${JSON.stringify(products[index])}`)
        }else{
            sessionStorage.setItem("favoritos", `${JSON.stringify(products[index])}`)
        }
    }else{
        document.location.href = "./login.html"
    }
}
