const footer = document.getElementsByTagName("footer");
footer[0].innerHTML = `
<div class="container">
    <div class="row">
        <div class="col-lg-4  col-md-6 col-sm-6">
            <div class="single-footer-widget">
                <a class="footer_anchor" href="./about.html">Sobre a nossa empresa</a>
				<p class="footer_paragraph">
                    Conheça a história da empresa líder no mercado de imóveis.
                </p>
            </div>
        </div>
        <div class="col-lg-4  col-md-6 col-sm-6">
            <div class="single-footer-widget">
                <h6>Newsletter</h6>
                <p>Se mantenha atualizado com as últimas notícias da nossa loja</p>
                <div class="" id="mc_embed_signup">

                    <form target="_blank" novalidate="true"
                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                        method="get" class="form-inline">

                        <div class="d-flex flex-row">

                            <input class="form-control" name="EMAIL" placeholder="Enter Email"
                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '" required=""
                                type="email">


                            <button class="click-btn btn btn-default"><i class="fa fa-long-arrow-right"
                                    aria-hidden="true"></i></button>
                            <div style="position: absolute; left: -5000px;">
                                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text">
                            </div>
                        </div>
                        <div class="info"></div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
                <h6>Nos siga nas redes sociais!</h6>
                <div class="footer-social d-flex align-items-center">
                    <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
                    <a href="https://www.twitter.com/"><i class="fa fa-twitter"></i></a>
                    <a href="https://www.dribbble.com/"><i class="fa fa-dribbble"></i></a>
                    <a href="https://www.behance.net/"><i class="fa fa-behance"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
        <p class="footer-text m-0">
            Copyright &copy; Todos os direitos Reservados | 2022 - SENAC - Santo Amaro
        </p>
    </div>
</div>`