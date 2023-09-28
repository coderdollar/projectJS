let pais = prompt ("¡Hola! Gracias por ponerte en contacto con nosotros.\nPara iniciar, escribe con minúsculas el país dondé requieres el servicio");

if (pais == "colombia" || pais == "chile" || pais == "uruguay" || pais == "argentina") {
    alert("¡Buenas noticias! Contamos con cobertura nacional en tu país.\nDa clic en Aceptar y continuemos con tu solicitud.");
    
}  else if (pais == "paraguay" || pais == "mexico" || pais == "peru") {
    alert("Nuestra cobertura en tu país es limitada, pero haremos todo lo posible por brindarte el serivio que mereces.\nDa clic en Aceptar y continuemos con tu solicitud");

} else {
    alert("La cobertura en tu país es muy limitada, nuestro tiempo de entrega puede extenderse más de lo habitual. \nDa clic en Aceptar y continuemos con tu solicitud.")
}

function price (estudio, numero){
    switch (estudio) {
        case "sencillo":
            return numero * 25;
            break;
        case "plus":
            return numero * 50;
            break;
        case "premium":
            return numero * 75;
            break;
        default:
            return "Solicitud no identificada";
            break;              
    }
}

let estudio = prompt ("Ingresa el tipo de estudio de tu interés.  \n 1. sencillo  \n 2. plus  \n 3. premium");
let numero = Number(prompt("Ingresa el número de estudios requeridos."));

let resultado = price (estudio, numero);
alert ("Perfecto, el costo total del servicio es de $" + resultado + " USD.")

let confirmar = prompt("Escribe `confirmar` para enviar la solicitud")

while (confirmar != "confirmar") {
    alert ("Solicitud no confirmada.\nIntentalo nuevamente");
    confirmar = prompt("Escribe `confirmar` para enviar la solicitud")
}

alert("!Solicitud confirmada!\nGracias por confiar en nosotros.")