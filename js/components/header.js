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
	// Criar header pra ser renderizado para o administrador
	/* 
	Agenda de visitas 
	Controle de usuários
	*/
	header[0].innerHTML = `
	<div class="main_menu">
		<nav class="navbar navbar-expand-lg navbar-light main_box">
			<div class="container">
				<!-- Brand and toggle get grouped for better mobile display -->
				<a class="navbar-brand logo_h" href="index.html"><img class="logo-img" src="../img/logos/logomin.png" alt=""></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
					<ul class="nav navbar-nav menu_nav ml-auto">
						<li class="nav-item"><a class="nav-link" href="index.html">Início</a></li>
						<li class="nav-item submenu dropdown">
							<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
							aria-expanded="false">Shop</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><a class="nav-link" href="category.html">Shop Category</a></li>
								<li class="nav-item"><a class="nav-link" href="single-product.html">Product Details</a></li>
								<li class="nav-item"><a class="nav-link" href="checkout.html">Product Checkout</a></li>
								<li class="nav-item"><a class="nav-link" href="cart.html">Shopping Cart</a></li>
								<li class="nav-item"><a class="nav-link" href="confirmation.html">Confirmation</a></li>
							</ul>
						</li>
						<li class="nav-item submenu dropdown">
							<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
							aria-expanded="false">Blog</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
								<li class="nav-item"><a class="nav-link" href="single-blog.html">Blog Details</a></li>
							</ul>
						</li>
						<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
						<li class="nav-item"><a class="nav-link" href="bookings.html">Reservas</a></li>
						<li class="nav-item"><a class="nav-link" href="users.html">Usuários do site</a></li>
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
								<!-- Brand and toggle get grouped for better mobile display -->
								<a class="navbar-brand logo_h" href="index.html"><img class="logo-img" src="../img/logos/logomin.png" alt=""></a>
								<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
								 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
								<!-- Collect the nav links, forms, and other content for toggling -->
								<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
									<ul class="nav navbar-nav menu_nav ml-auto">
										<li class="nav-item active"><a class="nav-link">Bem vindo, <span class="active_user">${loginArray[0]}</span></a></li>
										<li class="nav-item"><a class="nav-link" href="index.html">Início</a></li>
										<li class="nav-item submenu dropdown">
											<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
											 aria-expanded="false">Shop</a>
											<ul class="dropdown-menu">
												<li class="nav-item"><a class="nav-link" href="category.html">Shop Category</a></li>
												<li class="nav-item"><a class="nav-link" href="single-product.html">Product Details</a></li>
												<li class="nav-item"><a class="nav-link" href="checkout.html">Product Checkout</a></li>
												<li class="nav-item"><a class="nav-link" href="cart.html">Shopping Cart</a></li>
												<li class="nav-item"><a class="nav-link" href="confirmation.html">Confirmation</a></li>
											</ul>
										</li>
										<li class="nav-item submenu dropdown">
											<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
											 aria-expanded="false">Blog</a>
											<ul class="dropdown-menu">
												<li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
												<li class="nav-item"><a class="nav-link" href="single-blog.html">Blog Details</a></li>
											</ul>
										</li>
										<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
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
						<!-- Brand and toggle get grouped for better mobile display -->
						<a class="navbar-brand logo_h" href="index.html"><img class="logo-img" src="../img/logos/logomin.png" alt=""></a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<!-- Collect the nav links, forms, and other content for toggling -->
						<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul class="nav navbar-nav menu_nav ml-auto">
								<li class="nav-item"><a class="nav-link" href="index.html">Início</a></li>
								<li class="nav-item submenu dropdown">
									<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
										aria-expanded="false">Shop</a>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="nav-link" href="category.html">Shop Category</a></li>
										<li class="nav-item"><a class="nav-link" href="single-product.html">Product Details</a></li>
										<li class="nav-item"><a class="nav-link" href="checkout.html">Product Checkout</a></li>
										<li class="nav-item"><a class="nav-link" href="cart.html">Shopping Cart</a></li>
										<li class="nav-item"><a class="nav-link" href="confirmation.html">Confirmation</a></li>
									</ul>
								</li>
								<li class="nav-item submenu dropdown">
									<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
										aria-expanded="false">Blog</a>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
										<li class="nav-item"><a class="nav-link" href="single-blog.html">Blog Details</a></li>
									</ul>
								</li>
								<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
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
						<!-- Brand and toggle get grouped for better mobile display -->
						<a class="navbar-brand logo_h" href="index.html"><img class="logo-img" src="../img/logos/logomin.png" alt=""></a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<!-- Collect the nav links, forms, and other content for toggling -->
						<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul class="nav navbar-nav menu_nav ml-auto">
								<li class="nav-item"><a class="nav-link" href="index.html">Início</a></li>
								<li class="nav-item submenu dropdown">
									<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
										aria-expanded="false">Shop</a>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="nav-link" href="category.html">Shop Category</a></li>
										<li class="nav-item"><a class="nav-link" href="single-product.html">Product Details</a></li>
										<li class="nav-item"><a class="nav-link" href="checkout.html">Product Checkout</a></li>
										<li class="nav-item"><a class="nav-link" href="cart.html">Shopping Cart</a></li>
										<li class="nav-item"><a class="nav-link" href="confirmation.html">Confirmation</a></li>
									</ul>
								</li>
								<li class="nav-item submenu dropdown">
									<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
										aria-expanded="false">Blog</a>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
										<li class="nav-item"><a class="nav-link" href="single-blog.html">Blog Details</a></li>
									</ul>
								</li>
								<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
								<li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>`
	}
}

{/* <li class="nav-item submenu dropdown">
	<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
		aria-expanded="false">Pages</a>
	<ul class="dropdown-menu">
		<li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
		<li class="nav-item"><a class="nav-link" href="tracking.html">Tracking</a></li>
		<li class="nav-item"><a class="nav-link" href="elements.html">Elements</a></li>
	</ul>
</li> */}