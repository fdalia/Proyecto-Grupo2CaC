const monto = document.querySelector('h5 span')

document.addEventListener('DOMContentLoaded', () => {    
    
    carrito = JSON.parse(localStorage.getItem('carrito'))

    montoPagar()
    
});

// monto a pagar
function montoPagar(){

    
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    monto.innerHTML= nPrecio
    console.log("monto")
    }