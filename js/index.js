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




// //verifiquemos tu edad//

// const EDAD = prompt("Antes de ingresar, verifiquemos tu edad");

// // Verificar si la entrada contiene solo números //

// if (/^\d+$/.test(EDAD)) {
//     const EDAD_NUMERO = parseInt(EDAD, 10);

//     if (!isNaN(EDAD_NUMERO)) {
//         if (EDAD_NUMERO >= 18) {
//             alert("Muy bien, ahora puedes ingresar tu correo electrónico.");
//         } else {
//             alert("Lo siento, debes ser mayor de edad para ingresar.");
//         }
//     } else {
//         alert("Hubo un problema al convertir la edad a número.");
//     }
// } else {
//     alert("Ingresa solo números.");
// }



// //ingreso al sitio//


// let nombreIngresado = prompt("Ingresa tu nombre:");
// let apellidoIngresado = prompt("Ingresa tu apellido");

// function saludar(nombre, apellido) {
//     console.log("Bienvenido " + nombre + " " + apellido);
// }

// saludar(nombreIngresado, apellidoIngresado);


// let email = prompt("Ingresar tu email:");
// let contraseña = prompt("Ingresa tu contraseña");

// function saludar2(email, contraseña) {
//     console.log("Tus datos son: " + email+ " " + contraseña);
// }

// saludar2(email, contraseña);

// ///////////////////////////////////////////////////////////////////////
// //Array con información del usuario//

// function Usuario(nombre, apellido, fecha_de_ingreso){
//     this.nombre = nombre
//     this.apellido = apellido
//     this.fecha_de_ingreso = fecha_de_ingreso
// }

// const USUARIO = new Usuario("Sofia", "Fonsalido", 2023);
// console.log(USUARIO);
// ///////////////////////////////////////////////////////////////////////


// //calcular el precio de tu viaje//

// function sumar() {
//     let num1= parseFloat(prompt("Ingresa el precio en Euros del vuelo que has conseguido"));
//     let num2= parseFloat(prompt("Ingresa el precio en Euros del pack Working Holiday de tu interés"));
//     let suma= num1 + num2
//     alert("Tu nuevo viaje de Working Holiday a Irlanda cuesta: " + " " + "$" + suma)
//     console.log("la suma es" + " " + suma);
// }


// sumar();

// ///////////////////////////////////////////////////////////////////////////////////
// //Carrito de compras de viaje//

// const CARRITO =[ 
//     {
//         producto: "Viaje a Dublin",
//         precio: 2950
//     },
//     {
//         producto: "Viaje a Cork",
//         precio: 2550
//     },    
//     {
//         producto: "Viaje a Galway",
//         precio: 2760
//     },  
// ]


// let precioTotal = 0;
// for(const item of CARRITO){
//     precioTotal += item.precio;
// }

// console.log("el precio total del viaje es : EUR" + precioTotal);

// //Carrito de productos ordenados por valor//

// const CARRITO2 = [
//     {producto: "Dublin", precio:2950},
//     {producto: "Cork", precio:2550},
//     {producto: "Galway", precio:2760},
// ]

// let productosOrdenados = CARRITO2.slice().sort((a,b) => a.precio - b.precio);
// console.log(productosOrdenados);

// //////////////////////////////////////////////////////////////////////////////////////


// //preguntar si esta conforme con los servicios //

// const CONSULTA = "si";
// let intentos = 0;
// let consulta= " ";

// while(consulta !== CONSULTA){
//     consulta = prompt("Estas conforme con nuestro asesoramiento?").toLowerCase();
//     intentos++;

//     if(consulta !== CONSULTA){
//         alert("No hay problema, cierra y vuelve al incio de página");
//     }
// }

// alert("¡NOS ALEGRA MUCHO! GRACIAS POR ELEGIRNOS" + " " + intentos + " " + "Consultas" );