const users = [
    {
        id: 1,
        img: "../img/users/finn.png",
        name: "John Doe",
        email: "john.doe@gmail.com",
    },
    {
        id: 2,
        img: "../img/users/batman-new.png",
        name: "Mary Doe",
        email: "mary.doe@gmail.com",
    },
    {
        id: 3,
        img: "../img/users/jake.png",
        name: "Peter Doe",
        email: "peter.doe@gmail.com",
    },
    {
        id: 4,
        img: "../img/users/futurama-bender.png",
        name: "William Doe",
        email: "william.doe@gmail.com",
    },
    {
        id: 5,
        img: "../img/users/morty-smith.png",
        name: "Phillips Doe",
        email: "phil.doe@gmail.com",
    },
    {
        id: 6,
        img: "../img/users/venom-head.png",
        name: "Mike Doe",
        email: "mike.doe@gmail.com",
    },
    {
        id: 7,
        img: "../img/users/avatar.png",
        name: "Debbie Doe",
        email: "debbie.doe@gmail.com",
    },
]

function deletar(id) {
    for (let i = 0; i < users.length; i++) {
        if(users[i].id === id){
            users.splice(i, 1);
        }        
    }
    const remainUsers = users;
    const usersTable = document.getElementById("users_table");
    usersTable.innerHTML = "";
    for (let i = 0; i < remainUsers.length; i++) {
        usersTable.innerHTML = usersTable.innerHTML + `
        <tr>
            <td>
                <div class="media">
                    <div class="d-flex">
                        <img class="user_image" src="${remainUsers[i].img}" alt="Imagem de Usuário">
                    </div>
                    <div class="media-body">
                        <p>${remainUsers[i].name}</p>
                    </div>
                </div>
            </td>
            <td>
                <div class="product_count">
                    <p>${remainUsers[i].email}</p>
                </div>
            </td>
            <td>
                <a href="#" onclick="deletar(${remainUsers[i].id})" class="genric-btn danger circle">Excluir conta</a>
            </td>
        </tr>`
    }
}


const usersTable = document.getElementById("users_table");
for (let i = 0; i < users.length; i++) {
    usersTable.innerHTML = usersTable.innerHTML + `
    <tr>
        <td>
            <div class="media">
                <div class="d-flex">
                    <img class="user_image" src="${users[i].img}" alt="Imagem de Usuário">
                </div>
                <div class="media-body">
                    <p>${users[i].name}</p>
                </div>
            </div>
        </td>
        <td>
            <div class="product_count">
                <p>${users[i].email}</p>
            </div>
        </td>
        <td>
            <a href="#" onclick="deletar(${users[i].id})" class="genric-btn danger circle">Excluir conta</a>
        </td>
    </tr>`
}