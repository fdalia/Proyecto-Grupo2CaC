const cards = document.getElementById('cards')
const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
let carrito = {}

// Eventos
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener('DOMContentLoaded', () => {
    fetchData() 
    
    
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }
    
});

cards.addEventListener('click', e => { addCarrito(e) });

// Traer productos
const fetchData = async () => {
    const res = await fetch('../js/productosindex.json');
    const data = await res.json()
    // console.log(data)
    pintarCards(data)
}


// Pintar productos
const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('h4 span').textContent = item.title
        templateCard.querySelector('p span').textContent = item.precio
		templateCard.querySelector('h6 span').textContent = item.cuotas
        templateCard.querySelector('h8 span').textContent = item.descripcion

        templateCard.querySelector('button').dataset.id = item.id
        templateCard.querySelector('img').setAttribute("src", item.imagen)

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}
// Agregar al carrito
const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        // console.log(e.target.dataset.id)
        // console.log(e.target.parentElement)
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
    localStorage.setItem('carrito', JSON.stringify(carrito))

}


const setCarrito = item => {
    // console.log(item)
    const producto = {
        title: item.querySelector('h4').textContent,
        precio: item.querySelector('p span').textContent,
        id: item.querySelector('button').dataset.id,
        cantidad: 1
    }
    // console.log(producto)
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto }
    
}