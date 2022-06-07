const cards = document.getElementById('cards')
const items = document.getElementById('items')
// const templateCard = document.getElementById('template-card').content
// const fragment = document.createDocumentFragment()
const listaProducto = document.querySelector('.listadoProducto')
const badge = document.querySelector('.badge')

let carrito = {}

// Eventos
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener('DOMContentLoaded', () => {
    fetchData() 

    
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }
    badgedisplay()
});

cards.addEventListener('click', e => { addCarrito(e) });

// Traer productos
const fetchData = async () => {
    const res = await fetch('../js/productosindex.json');
    const data = await res.json()
    pintarCards(data)

}

function badgedisplay() {   
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    // console.log( Object.values(carrito))
    badge.innerHTML = nCantidad
}
// Pintar productos
const pintarCards = data => {
  listaProducto.innerHTML = "";
  data.forEach((item) => {
    const html = `
        
        <div class="product-item col-12 mb-2 " category="${item.category}" style="width: 18rem;">
        <div class="card">
            <img src="${item.imagen}" alt="" class="card-img-top">
            <div class="card-body">
            <h4>${item.title}</h4>
            <p>Precio: $ <span>${item.precio}</span></p>
            <h6>Cuotas: ${item.cuotas}</h6>
            <h8>Descripcion: ${item.descripcion}</h8>
            <br><br>

            <button  onclick="snack1()" class="btn btn-dark" data-id="${item.id}">Agregar al carrito</button>
            <div id="snackbar">Producto agregado correctamente!!</div>    

            </div>
            </div>
            </div>
            
            
    `
    //concateno para que me muestre todos los productos, sino solo muestra la ultima

    listaProducto.innerHTML += html;
  });
}

// Agregar al carrito
const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        
        setCarrito(e.target.parentElement)
       
        console.log("agregado")
    }
    e.stopPropagation()
    localStorage.setItem('carrito', JSON.stringify(carrito))
    badgedisplay()
}

const setCarrito = item => {
    const producto = {
        title: item.querySelector('h4').textContent,
        precio: item.querySelector('p span').textContent,
        id: item.querySelector('button').dataset.id,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto }

}

function snack1() {
    var  snack = document.getElementById("snackbar");

    // Add the "show" class to DIV
    snack.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
  }