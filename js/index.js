const productosAElegir = [
    {id:1, nombre:"Working Holiday Dublin", precio:2950},
    {id:2, nombre:"Working Holiday en Cork", precio:2550},
    {id:3, nombre:"Working Holiday Galway", precio:2760},
    {id:4, nombre:"Working Holiday Kilkenny", precio:3600},
]
function agregarProducto(id,nombre,precio){
    const carrito = JSON.parse(localStorage.getItem(`carrito`)) || [];
    carrito.push({id, nombre, precio});
    localStorage.setItem(`carrito`, JSON.stringify(carrito));
    mostrarCarrito();
}

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem(`carrito`)) || [];
    const listaProductos = document.getElementById(`lista-productos`);
    const totalElement = document.getElementById(`total`);
    let total = 0;

    listaProductos.innerHTML = ``;

carrito.forEach(producto => {
    const listItem = document.createElement(`li`);
    listItem.innerHTML = `
    <span>${producto.nombre}</span>
    <span>${producto.precio}</span>
    `;
    listaProductos.appendChild(listItem);
    total += parseFloat(producto.precio);
});
totalElement.textContent = total.toFixed(2);

};

function limpiarCarrito(){
    localStorage.removeItem(`carrito`);
    mostrarCarrito();

}


function cards(){
    const contenedorProductos = document.getElementById (`productos`);

    productosAElegir.forEach(producto =>{
        const productoElement = document.createElement(`div`);
        productoElement.classList.add(`producto`);
        productoElement.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${"USD" + producto.precio}</p>
        <button onclick ="agregarProducto('${producto.id}','${producto.nombre}','${producto.precio}')">Agregar al carrito</button>
        

        `;
        contenedorProductos.appendChild(productoElement);
    })


}

mostrarCarrito();
cards();

const cotizador = "https://criptoya.com/api/dolar"

const divcotizador = document.getElementById("divcotizador");

setInterval (()=>{
    fetch (cotizador)
    .then(response => response.json())
    .then(({oficial,blue})=>{
    divcotizador.innerHTML = `
    <h3>Valorización del Dólar actual</h3>
    <p>Dólar Oficial:${oficial}</p>
    <p>Dólar Blue:${blue}</p>
    `
    })
    .catch (error => console.log (error))
},2000);

const BOTON = document.getElementById("boton");

let carrito = ["Galway", "Dublin", "Cork"];

BOTON.addEventListener("click", () => {
    Swal.fire({
        title: "¿Estas conforme con la compra de tu viaje?",
        icon: "warning",
        confirmButtonText: "Si",
        showCancelButton: true,
        cancelButtonText: "No",
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = carrito.filter((producto) => producto !== "bateria");
            console.log(carrito);
            Swal.fire({
                title: "¡Bienvenid@! te enviaremos los detalles por mail",
                icon: "success",
                confirmButtonText: "aceptar",
            });
        } else {
            Swal.fire({
                title: "Has cancelado la compra",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    });
});
