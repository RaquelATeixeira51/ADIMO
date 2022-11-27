const container = document.getElementById('container');
const booking = sessionStorage.getItem("booking");
const userAccount = sessionStorage.getItem("user").split(",");
const clientContact = sessionStorage.getItem("clientContact").split('%');

container.innerHTML = `
    <div class="card">
        <div class="card-header text-uppercase">
            ${JSON.parse(booking).name}
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <p>Nome completo:</p>
                    <input type="text" id="nome" class="form-control" placeholder="João da Silva">
                </div>
                <div class="form-group">
                    <p>E-mail:</p>
                    <h3>${userAccount[1]}</h3>
                </div>
                <div class="form-group">
                    <p>Telefone:</p>
                    <h3>${clientContact[0]}</h3>
                </div>
                <div class="form-group">
                    <p>CPF:</p>
                    <input type="text" id="cpf" placeholder="000.000.000-00" maxlength="14" onkeydown="format()"
                        class="form-control">
                </div>
                <div class="form-group">
                    <p>Quantidade de parcelas:</p>
                    <select id="parcelas" size="6"></select>
                </div>
                <div class="form-group credito">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="form-group">
                                <p>Número do cartão:</p>
                                <input type="text" id="cartao" placeholder="0000 0000 0000 0000" maxlength="19" onkeydown="format()" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <p>CVV:</p>
                                <input type="text" id="cvv" maxlength="3" placeholder="000" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <input type="button" id="botaoDeVenda" onclick="vender()" class="btn btn-success" value="Vender o imóvel">
                </div>
            </form>
        </div>
    </div>
`
const parcelas = document.getElementById('parcelas');
const option = document.createElement("option");
const preco = Number(JSON.parse(booking).newPrice.split(' ')[1].replace(".", ""))
function formatarValor(valor) {
    return valor.toLocaleString('pt-BR');
}

for (let i = 5; i <= 20; i++) {
    if(i == 5){
        parcelas.innerHTML = parcelas.innerHTML + `<option selected>${i} ano(s) com parcelas mensais de R$ ${formatarValor(Math.trunc((preco/i)/12))} cada</option>`
    }else{
        parcelas.innerHTML = parcelas.innerHTML + `<option>${i} ano(s) com parcelas mensais de R$ ${formatarValor(Math.trunc((preco/i)/12))} cada</option>`
    }
}

function format(){
    const cpf = document.getElementById('cpf');
    const cpfLength = cpf.value.length
    if (cpfLength == 3 || cpfLength == 7) {
        cpf.value += '.'
    }else if (cpfLength == 11) {
        cpf.value += '-'
    }

    const cartao = document.getElementById('cartao');
    const cartaoLength = cartao.value.length
    if (cartaoLength == 4 || cartaoLength == 9 || cartaoLength == 14) {
        cartao.value += ' '
    }
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function vender(){
    const valor = Math.round(Math.random() * 999);
    const botaoDeVenda = document.getElementById('botaoDeVenda')
    botaoDeVenda.setAttribute("class", "btn btn-success active")
    botaoDeVenda.value = 'Espere...'
    sleep(2000).then(()=> {
        if(valor > 500){
            alert("Imóvel vendido")
            window.location.href = "bookings.html"
        }else{
            alert("Créditos insuficientes")
            window.location.href = "bookings.html"
        }
    })
}