let stockAuris = 12;
let stockMouse = 0;
let stockTeclado = 50;
let auris = "Auriculares";
let mouse = "Mouse";
let teclado = "Teclado";
let precioAuris = 17999;
let precioMouse= 3999;
let precioTeclado = 12499;


function checkStock(stock,producto){
    if(stock===0){
        console.log("El producto: " +producto + " no tiene stock.")
    }
    else {
        console.log("El producto " +producto + " está en stock");
    }
}


function calcularIntereses(precio, producto){
    let i=3;
    let precioInteres=precio;
   while(i<=12){
        precioInteres*=1.3;
        console.log("El producto " +producto + " cuesta $" +precioInteres + " en " +i+" cuotas. Cada cuota tiene un valor de " +precioInteres/i);
        i+=3;
    }
}


var prod = prompt("Ingrese el producto que desea comprar: \nTeclado\nMouse\nAuriculares");
//while(prod != "Teclado" && prod!="Mouse" && prod!="Auriculares"){
    //var prod = prompt("Ingrese el producto que desea comprar: \nTeclado\nMouse\nAuriculares");}

if(prod=="Teclado"){
    checkStock(stockTeclado, teclado);
    calcularIntereses(precioTeclado, teclado);
}
else if(prod=="Auriculares"){
    checkStock(stockAuris, auris);
    calcularIntereses(precioAuris, auris);
}
else {
    checkStock(stockMouse, mouse);
    calcularIntereses(precioMouse, mouse);
}