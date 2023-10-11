// ***** Menú *****
const menu = [
    {nombre: "hamburguesa", precio: 5},
    {nombre: "papas fritas", precio: 2}, 
    {nombre: "gaseosa", precio: 1},
    {nombre: "cerveza", precio: 3},
    {nombre: "pizza", precio: 10},
    {nombre: "nachos", precio: 4},
    {nombre: "malteada", precio: 3},
    {nombre: "hot dog", precio: 4},
];

let carrito = []

let seleccion = prompt("¡Bienvenido!, Gracias por visitar nuestro restaurante ¿Deseas ordenar algo?");

while(seleccion != "si" && seleccion != "no"){
    alert ("Por favor ingresa únicamente si o no")
    seleccion = prompt("¡Bienvenido!, Gracias por visitar nuestro restaurante ¿Deseas ordenar algo?");
}

// ***** Se corta ciclo (si o no) *****

// ***** Comienza mostrar el menu o envía proceso al final******

if(seleccion === "si"){
    alert("Te presentamos nuestro menú");
    let allProducts = menu.map((item) => item.nombre + " " + "$" + item.precio + " USD");
    alert(allProducts.join(" - "));
} else if (seleccion === "no"){
    alert ("Gracias por visitarnos, ¡hasta pronto!");
}

// ***** Termina Menu de bienvenida ******

// ***** Comienza la compra ******

while(seleccion != "no"){
    let producto = prompt("Agrega un delicioso producto a tu carrito. No olvides escribirlo todo en minúsculas");
    let precio = 0;

    if (producto == "hamburguesa" || producto == "papas fritas" || producto == "gaseosa" || producto == "cerveza" || producto == "pizza" || producto == "nachos" || producto == "malteada" || producto == "hot dog"){
        switch (producto){
            case "hamburguesa":
                precio = 5;
                break;
            case "papas fritas":
                precio = 2;
                break;
            case "gaseosa":
                precio = 2;
                break;
            case "cerveza":
                precio = 3;
                break;
            case "pizza":
                precio = 10;
                break;
            case "nachos":
                precio = 4;
                break;
            case "malteada":
                precio = 3;
                break;
            case "hot dog":
                precio = 4;
                break;
            default:
                break;
        }

    let unidades = parseInt(prompt("¿Cuantás unidades desea ordenar?"));

    carrito.push({producto, unidades, precio})

    } else{
        alert ("Lo sentimos, ese producto no se encuentra en nuestro menú");
    }

    seleccion = prompt ("¿Desea añadir otro producto a su orden?");

    while (seleccion === "no"){
        alert ("Gracias por tu compra.\nDa click en aceptar para conocer el total de tu orden");
        // ****** Cálculo de total por producto en consola únicamente ******
        carrito.forEach((carritoFinal) => {
            console.log (`Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades}, Total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;    
    }
}

// ******* Termina orden de compra *******

// *+**** Total ******
const total = carrito.reduce((acumulador, orden) => acumulador + orden.precio * orden.unidades, 0);

alert (`Su total es de: $${total} USD`);