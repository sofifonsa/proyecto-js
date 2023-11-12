//verifiquemos tu edad//

const EDAD = prompt("Antes de ingresar, verifiquemos tu edad");

// Verificar si la entrada contiene solo números //

if (/^\d+$/.test(EDAD)) {
    const EDAD_NUMERO = parseInt(EDAD, 10);

    if (!isNaN(EDAD_NUMERO)) {
        if (EDAD_NUMERO >= 18) {
            alert("Muy bien, ahora puedes ingresar tu correo electrónico.");
        } else {
            alert("Lo siento, debes ser mayor de edad para ingresar.");
        }
    } else {
        alert("Hubo un problema al convertir la edad a número.");
    }
} else {
    alert("Ingresa solo números.");
}



//ingreso al sitio//


let nombreIngresado = prompt("Ingresa tu nombre:");
let apellidoIngresado = prompt("Ingresa tu apellido");

function saludar(nombre, apellido) {
    console.log("Bienvenido " + nombre + " " + apellido);
}

saludar(nombreIngresado, apellidoIngresado);


let email = prompt("Ingresar tu email:");
let contraseña = prompt("Ingresa tu contraseña");

function saludar2(email, contraseña) {
    console.log("Tus datos son: " + email+ " " + contraseña);
}

saludar2(email, contraseña);





//calcular el precio de tu viaje//

function sumar() {
    let num1= parseFloat(prompt("Ingresa el precio del vuelo que has conseguido"));
    let num2= parseFloat(prompt("Ingresa el precio del pack Working Holiday de tu interés"));
    let suma= num1 + num2
    alert("Tu nuevo viaje de Working Holiday a Irlanda cuesta: " + " " + "$" + suma)
    console.log("la suma es" + " " + suma);
}


sumar();

//preguntar si esta conforme con los servicios //

const CONSULTA = "si";
let intentos = 0;
let consulta= " ";

while(consulta !== CONSULTA){
    consulta = prompt("Estas conforme con nuestro asesoramiento?").toLowerCase();
    intentos++;

    if(consulta !== CONSULTA){
        alert("No hay problema, cierra y vuelve al incio de página");
    }
}

alert("¡NOS ALEGRA MUCHO! GRACIAS POR ELEGIRNOS" + " " + intentos + " " + "Consultas" );