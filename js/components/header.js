const header = document.getElementsByTagName("header");

function logout(){
	sessionStorage.removeItem("status");
	document.location.href = "./index.html";
}

function logoutFuncionario(){
	sessionStorage.removeItem("statusAdmin");
	document.location.href = "./index.html";
}

const user = sessionStorage.getItem("user");
const admin = sessionStorage.getItem("statusAdmin");

if(admin){
	header[0].innerHTML = `
	<div class="main_menu">
		<nav class="navbar navbar-expand-lg navbar-light main_box">
			<div class="container">
				<a class="navbar-brand logo_h" href="index.html"><img class="logo-img" src="../img/logos/logo.png" alt=""></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
					<ul class="nav navbar-nav menu_nav ml-auto">
						<li class="nav-item"><a class="nav-link" href="index.html">Início</a></li>
						<li class="nav-item"><a class="nav-link" href="./category.html">Imóveis</a></li>
						<li class="nav-item"><a class="nav-link" href="./contact.html">Contato</a></li>
						<li class="nav-item"><a class="nav-link" href="./about.html">Sobre</a></li>
						<li class="nav-item"><a class="nav-link" href="bookings.html">Reservas</a></li>
						<li class="nav-item"><a class="nav-link" href="users.html">Usuários</a></li>
						<li class="nav-item"><a class="nav-link" onclick="logoutFuncionario()" href="#">Logout</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>`
}else{
	if(user){
		const loginArray = user.split(",");
		const login = sessionStorage.getItem("status");
	
		if(login == "logado"){
			header[0].innerHTML = `
			<div class="main_menu">
						<nav class="navbar navbar-expand-lg navbar-light main_box">
							<div class="container">
								<a class="navbar-brand logo_h" href="index.html"><img class="logo-img" src="../img/logos/logo.png" alt=""></a>
								<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
								 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
								<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
									<ul class="nav navbar-nav menu_nav ml-auto">
									<li class="nav-item"><a class="nav-link" href="./favorites.html">Interesses</a></li>
										<li class="nav-item"><a class="nav-link" href="index.html">Início</a></li>
										<li class="nav-item"><a class="nav-link" href="./category.html">Imóveis</a></li>
										<li class="nav-item"><a class="nav-link" href="./contact.html">Contato</a></li>
										<li class="nav-item"><a class="nav-link" href="./about.html">Sobre</a></li>
										<li class="nav-item active"><a class="nav-link">Bem vindo, <span class="active_user">${loginArray[0]}</span></a></li>
										<li class="nav-item"><a class="nav-link" onclick="logout()" href="#">Logout</a></li>
									</ul>
								</div>
							</div>
						</nav>
					</div>`
		}else{
			header[0].innerHTML = `
			<div class="main_menu">
				<nav class="navbar navbar-expand-lg navbar-light main_box">
					<div class="container">
						<a class="navbar-brand logo_h" href="index.html"><img class="logo-img" src="../img/logos/logo.png" alt=""></a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul class="nav navbar-nav menu_nav ml-auto">
								<li class="nav-item"><a class="nav-link" href="index.html">Início</a></li>
								<li class="nav-item"><a class="nav-link" href="./category.html">Imóveis</a></li>
								<li class="nav-item"><a class="nav-link" href="contact.html">Contato</a></li>
								<li class="nav-item"><a class="nav-link" href="./about.html">Sobre</a></li>
								<li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>`
		}
	}else{
		header[0].innerHTML = `
		<div class="main_menu">
		<nav class="navbar navbar-expand-lg navbar-light main_box">
			<div class="container">
				<a class="navbar-brand logo_h" href="index.html"><img class="logo-img" src="../img/logos/logo.png" alt=""></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
					<ul class="nav navbar-nav menu_nav ml-auto">
						<li class="nav-item"><a class="nav-link" href="index.html">Início</a></li>
						<li class="nav-item"><a class="nav-link" href="./category.html">Imóveis</a></li>
						<li class="nav-item"><a class="nav-link" href="./contact.html">Contato</a></li>
						<li class="nav-item"><a class="nav-link" href="./about.html">Sobre</a></li>
						<li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>`
	}
}