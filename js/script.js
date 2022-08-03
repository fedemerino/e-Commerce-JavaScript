const productos=[
    {
        prod: "Auriculares Logitech G Pro Black",
        precio: 17999,
        stock: 10

    },
    {
        prod: "Mouse Logitech G203 RGB",
        precio: 3999,
        stock: 5
    },
    {
        prod: "Teclado Logitech G Pro RGB",
        precio: 12499,
        stock: 0
    }
];



function checkStock(producto,i){
    if(productos[i].stock===0){
        alert("El producto: " +productos[i].prod + " no tiene stock.")
    }
    else {
        alert("El producto " +productos[i].prod + " está en stock");
    }
}

function calcularIntereses(precio, producto){
    let i=3;
    let precioInteres=precio;
   while(i<=12){
        precioInteres*=1.3;
        alert("El producto " +producto + " cuesta $" +(precioInteres.toFixed(2))   + " en " +i+" cuotas. Cada cuota tiene un valor de " +((precioInteres/i)).toFixed(2));
        i+=3;
    }
}

do{
var prod = prompt("Ingrese el producto que desea comprar: \nTeclado\nMouse\nAuriculares");
prod = prod.toLowerCase();
}while((prod != "teclado") && (prod!="mouse") && (prod!="auriculares"));

function confirmarCompra(){
    let confirm = prompt("Desea confirmar la compra? (s/n)")
    if (confirm==="s"){
        let nombre = prompt("Ingrese su nombre y apellido");
        let correo = prompt("Ingrese su correo electronico");
        alert("Muchas gracias " + nombre + ". Recibirá las instrucciones para continuar su compra en el siguiente correo: " +correo);
    }
    else{alert("Gracias por visitarnos!")}}

let pteclado=2;
let pmouse=1;
let pauris=0;

if(prod=="teclado"){
    checkStock(productos[2],pteclado);
    calcularIntereses(productos[2].precio, productos[2].prod);
    if (productos[2].stock > 0){
        confirmarCompra();}
}
else if(prod=="auriculares"){
    checkStock(productos[0],pauris);
    calcularIntereses(productos[0].precio, productos[0].prod);
    if (productos[0].stock > 0){
        confirmarCompra();}
}
else {
    checkStock(productos[1],pmouse);
    calcularIntereses(productos[1].precio, productos[1].prod);
    if (productos[1].stock > 0){
    confirmarCompra();}
}