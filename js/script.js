const productos=[
    {
        prod: "Auriculares Logitech G Pro Black",
        precio: 17999,
        stock: 10

    },
    {
        prod: "mouse",
        precio: 3999,
        stock: 5
    },
    {
        prod: "teclado",
        precio: 12499,
        stock: 0
    }
];



function checkStock(producto,i){
    if(productos[i].stock===0){
        console.log("El producto: " +productos[i].prod + " no tiene stock.")
    }
    else {
        console.log("El producto " +productos[i].prod + " está en stock");
    }
}

function calcularIntereses(precio, producto){
    let i=3;
    let precioInteres=precio;
   while(i<=12){
        precioInteres*=1.3;
        console.log("El producto " +producto + " cuesta $" +(precioInteres.toFixed(2))   + " en " +i+" cuotas. Cada cuota tiene un valor de " +((precioInteres/i)).toFixed(2));
        i+=3;
    }
}

do{
var prod = prompt("Ingrese el producto que desea comprar: \nTeclado\nMouse\nAuriculares");
prod = prod.toLowerCase();
}while((prod != "teclado") && (prod!="mouse") && (prod!="auriculares"));

let pteclado=2;
let pmouse=1;
let pauris=0;

if(prod=="teclado"){
    checkStock(productos[2],pteclado);
    calcularIntereses(productos[2].precio, productos[2].prod);
}
else if(prod=="auriculares"){
    checkStock(productos[0],pauris);
    calcularIntereses(productos[0].precio, productos[0].prod);
}
else {
    checkStock(productos[1],pmouse);
    calcularIntereses(productos[1].precio, productos[1].prod);
}