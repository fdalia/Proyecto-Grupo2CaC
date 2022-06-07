const efectivoRapipago = document.getElementById("inlineRadio1");
const transferencia = document.getElementById("inlineRadio2");
const tarjeta = document.getElementById("inlineRadio3");
const cripto = document.getElementById("inlineRadio4");
const monto = document.querySelector('h5 span')

const parrafoPago = document.getElementById("info-pago");

document.addEventListener('DOMContentLoaded', () => {    
    
  carrito = JSON.parse(localStorage.getItem('carrito'))

  montoPagar()
  
});

efectivoRapipago.addEventListener("click", () => {
    parrafoPago.innerHTML = pagoRapipago;
})

transferencia.addEventListener("click", () => {
    parrafoPago.innerHTML = pagoTransfer;
})

tarjeta.addEventListener("click", () => {
    parrafoPago.innerHTML = pagoTarjeta;
})

cripto.addEventListener("click", () => {
    parrafoPago.innerHTML = pagoCripto;
})

var pagoRapipago = 
`<div id="stack">
<a href="https://rapipago.com.ar/rapipagoWeb/?utm_campaign=rapipago&utm_source=google&utm_medium=cpc&utm_content=textads&gclid=CjwKCAjw7cGUBhA9EiwArBAvoivTcngICtIFPjehI5cWAbX3mLVv3eurns1NC_QU7F2NY_5wwbKg_xoCR-gQAvD_BwE" id="rapipago">CONSULTA POR EL MÁS CERCANO</a>
<button type="button" class="btn btn-secondary">GENERAR CUPÓN DE PAGO</button>
</div>`

var pagoTransfer = 
`<div>
<p id="title-finishbuy">CBU</p>
<p>Banco Santander Río - Titular: Tech S.A.</p>
<p>01702046600000087865</p>
<p id="comprobante">¡IMPORTANTE!: Envianos el comprobante de pago a infoventas@techsa.com</p>
</div>`

var pagoTarjeta = 
`<div class="form-container">

<div class="field-container">
  <label for="name">Nombre</label>
  <input id="name" maxlength="35" type="text" placeholder="Como aparece en la tarjeta">
</div>

<div class="field-container">
  <label for="card">Número de tarjeta</label>
  <input id="card" maxlength="16" type="text" onKeyPress="return soloNumeros(event)">
</div>

<div class="field-container">
  <label for="expirationdate">Vencimiento</label>
  <input id="expirationdate" type="text" placeholder="MM" maxlength="2" onKeyPress="return soloNumeros(event)">
  <input id="expirationdate" type="text" placeholder="AA" maxlength="2" onKeyPress="return soloNumeros(event)">
</div>

<div class="field-container">
  <label for="securitycode">Código de seguridad</label>
  <input id="securitycode" maxlength="3" type="text" onKeyPress="return soloNumeros(event)" placeholder="3 dígitos">
  <img id="img-3digits" src="data:image/png;base64,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" alt="3digitos">
</div>

</div>`

var pagoCripto = 
`<p id="title-finishbuy">Paga con USDT <img id="usdt" src="https://play-lh.googleusercontent.com/0Qf5HtdbXxtEGOi6qAy538LmQkdqIdqU7g2cP_OK2mrsthjPx2Bti84B3y8mix2mpgI" alt="USDT"></p>
<p>IMPORTANTE: asegurate de estar usando la red ERC-20. La empresa no se hace responsable por errores en el pago.</p>                    
<p id="title-finishbuy">Wallet</p>
<p>0x2396001Ec7f47188EE5c424ea6d26Ce9f2454b68</p>`

function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}

// monto a pagar
function montoPagar(){

    
  const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
  monto.innerHTML= nPrecio
  console.log("monto")
  }