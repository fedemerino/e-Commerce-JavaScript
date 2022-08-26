//stock productos

const stock = 
{

    prod1: {
        'prod':"Procesador Intel Core i7 12700K 5.0 Ghz Alder Lake 1700 Sin Cooler" ,
        'categoria':"procesador",
        'img': "../assets/I7 12700k.png",
        'precio': 75.239,
        'id': 1
},
    prod2:{
    'prod':"Procesador Amd Ryzen 7 5800X 4.7 Ghz - AM4 Sin Cooler Sin Gpu" ,
    'categoria':"procesador",
    'img': "../assets/Ryzen 7 5800X.png",
    'precio': 82.399,
    'id': 2
},
prod3:{
    'prod':"Placa De Video GeForce RTX 3070 8Gb Msi Ventus 3x Plus" ,
    'categoria':"placa",
    'img': "../assets/Placa-De-Video-GeForce-RTX-3070-8Gb-Msi-Ventus-3x-Plus.png",
    'precio': 164.989,
    'id': 3
},
prod4:{
    'prod':"Placa De Video GeForce RTX 3060 12Gb Gigabyte Gaming Oc" ,
    'categoria':"placa",
    'img': "../assets/Gigabyte RTX 3060 12Gb.png",
    'precio': 119.999,
    'id': 4
},
prod5:{
    'prod':"Procesador Intel Core i5 10400 4.3 Ghz Comet Lake 1200" ,
    'categoria':"procesador",
    'img': "../assets/i510400.png",
    'precio': 39.889,
    'id': 5
},
prod6:{
    'prod':"Procesador Intel Core i5 12400 4.4 Ghz Alder Lake 1700" ,
    'categoria':"procesador",
    'img': "../assets/i512400.png",
    'precio': 49.989,
    'id': 6
},
prod7:{
    'prod':"Procesador Amd Ryzen 5 5600X 3.7 Ghz - AM4" ,
    'categoria':"procesador",
    'img': "../assets/r5 5600x.png",
    'precio': 50.999,
    'id': 7
},
prod8:{
    'prod':"Placa De Video LHR GeForce RTX 3080 12Gb Msi Gaming Z Trio" ,
    'categoria':"placa",
    'img': "../assets/MSI 3080 12GB.png",
    'precio': 279.999,
    'id': 8
},
prod9:{
    'prod':"Procesador Amd Ryzen 5 5600 3.5 Ghz - AM4 Sin Gpu" ,
    'categoria':"procesador",
    'img': "../assets/r5 5600x.png",
    'precio': 38.999,
    'id': 9
},
prod10:{
    'prod':"Procesador Amd Ryzen 7 5700G 4.6 Ghz - AM4" ,
    'categoria':"procesador",
    'img': "../assets/r7 5700x.png",
    'precio': 66.989,
    'id': 10
},
prod11:{
    'prod':"Procesador Intel Core i5 12400F 4.4 Ghz Alder Lake 1700 Sin Gpu" ,
    'categoria':"procesador",
    'img': "../assets/i512400.png",
    'precio': 43.889,
    'id': 11
},
prod12:{
    'prod':"Procesador Intel Core i5 11600K 4.9 Ghz Comet Lake 1200 Sin Cooler" ,
    'categoria':"procesador",
    'img': "../assets/i5_11600k.png",
    'precio': 56.299,
    'id': 12
},
prod13:{
    'prod':"Procesador Amd Ryzen 5 4600G 4.2 Ghz - AM4" ,
    'categoria':"procesador",
    'img': "../assets/r5 4600g.png",
    'precio': 34.219,
    'id': 13
},
prod14:{
    'prod':"Procesador Intel Core i7 11700KF 5.0 Ghz Sin Cooler Sin Gpu" ,
    'categoria':"procesador",
    'img': "../assets/i7 11700kf.png",
    'precio': 75.239,
    'id': 14
},
prod15:{
    'prod':"Procesador Intel Core i7 11700F 5.0 Ghz Sin Gpu" ,
    'categoria':"procesador",
    'img': "../assets/i711700f.png",
    'precio': 70.899,
    'id': 15
},
prod16:{
    'prod':"Placa De Video Radeon RX 6750 XT 12Gb Msi Mech 2X Oc" ,
    'categoria':"placa",
    'img': "../assets/msi Radeon RX 6750 XT 12Gb.png",
    'precio': 148.299,
    'id': 16
},
prod17:{
    'prod':"Procesador Intel Core i7 12700 4.9 Ghz Alder Lake 1700" ,
    'categoria':"procesador",
    'img': "../assets/i7 12700.png",
    'precio': 80.289,
    'id': 17
},
prod18:{
    'prod':"Procesador Amd Ryzen 7 5700X 4.6 Ghz - AM4 Sin Cooler" ,
    'categoria':"procesador",
    'img': "../assets/r7 5700x.png",
    'precio': 62.989,
    'id': 18
},
prod19:{
    'prod':"Placa De Video GeForce GTX1660 6Gb Msi SuperVentus Xs" ,
    'categoria':"placa",
    'img': "../assets/GTX 1660 6Gb Msi Super.png",
    'precio': 84.999,
    'id': 19
},
prod20:{
    'prod':"Placa De Video GeForce RTX 3090 24Gb Gigabyte Oc" ,
    'categoria':"placa",
    'img': "../assets/RTX 3090 24Gb Gigabyte.png",
    'precio': 354.999,
    'id': 20
}
};
/////////////////////////////////////////////////////////////////////////////

let carrito = [];
let contenedor = document.getElementById('cards');
let tablaRender = document.getElementById('itemsTabla');
let contenedorCarrito = document.querySelector("#items");
let contenedorFooterCarrito = document.querySelector("#footer")
let totalItems = document.querySelector("#totalItems")

renderProductos();

function renderProductos(){
    for (let producto in stock){
        contenedor.innerHTML+=
        `
            <div class="col-lg-3">
            <div class="card ${stock[producto].categoria} todos">
                <div class="tituloCard">
                    <p>${stock[producto].prod}</p>
                </div>
                <img src="${stock[producto].img}">
                <p>Precio: $ ${stock[producto].precio}</p>
                <button class="botonComprar" id="btn${stock[producto].id}">Agregar al carrito</button>
                </div>
                
            </div>
            </div>
         `
    }
    for (let prod in stock){ 
    document.getElementById(`btn${stock[prod].id}`).addEventListener("click", function(){agregarAlCarrito(stock[prod])})  
}}

if(localStorage.getItem("productosEnCarro")){
    carrito=JSON.parse(localStorage.getItem("productosEnCarro"))
    console.log(carrito)
    let acum
    for(let prod of carrito){
        tablaRender.innerHTML+=
        `
        <div style="display:flex; text-align:center;" id="${prod.id}">
            <td style="margin: 0 3rem 0 3rem">${prod.id}</td>
            <td style="margin: 0 3rem 0 3rem">${prod.prod}</td>
            <td style="margin: 0 3rem 0 3rem">${prod.precio}</td>
        </div>
        `;
        acum = acum + parseInt(prod.precio)
        totalItems.innerHTML+=
        `
        <div style="display:flex; text-align:end;"> 
            <td style="margin: 0 3rem 0 3rem">${acum}</td>
        </div>
        `;
    }
}

function agregarAlCarrito(prod){
    carrito.push(prod)
    console.log(carrito)
    swal.fire("Agregaste " +prod.prod +" al carrito")
    localStorage.setItem("productosEnCarro", JSON.stringify(carrito))

     tablaRender.innerHTML+=
    `
    <div style="display:flex; text-align:center;">
        <td style="margin: 0 3rem 0 3rem">${prod.id}</td>
        <td style="margin: 0 3rem 0 3rem">${prod.prod}</td>
        <td style="margin: 0 3rem 0 3rem">${prod.precio}</td>
    </div>
    `;
}

const filtrarItems = document.querySelectorAll('.card');
const filtrarBotones = document.querySelectorAll('.filterButton');


filtrarBotones.forEach((btn) => {btn.addEventListener('click', () => {
        mostrarContenidoFiltrado(btn);
    }) 
});


function mostrarContenidoFiltrado(btn){
    filtrarItems.forEach((item) => {
        (item.classList.contains(btn.id)) ? item.style.display ="block" : item.style.display = "none";
    });
};

const botonComprar = document.getElementById('comprar');
const botonLimpiar = document.getElementById('clear');

botonLimpiar.addEventListener("click", function(){
    localStorage.removeItem('productosEnCarro');
    tablaRender.innerHTML = "";
})