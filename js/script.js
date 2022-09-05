
let carrito = [];
var productosJSON = [];
let contenedor = document.getElementById('cards');
let tablaRender = document.getElementById('itemsTabla');
let contenedorCarrito = document.querySelector("#items");
let contenedorFooterCarrito = document.querySelector("#footer")
let totalItems = document.querySelector("#totalItems")

fetchJSON();


async function fetchJSON() {
    const URLJSON="../js/prod.json"
    const resp =await fetch(URLJSON)
    const data = await resp.json()
    productosJSON = data;
    renderProductos();
} 


function renderProductos(){
     for (let producto of productosJSON) {
        console.log(productosJSON)
        contenedor.innerHTML+=
        `
            <div class="col-lg-3">
            <div class="card ${producto.categoria} todos">
                <div class="tituloCard">
                    <p>${producto.prod}</p>
                </div>
                <img src="${producto.img}">
                <p>Precio: $ ${producto.precio}</p>
                <button class="botonComprar" id="btn${producto.id}">Agregar al carrito</button>
                </div>
                
            </div>
            </div>
         `
    }
     for (let producto in productosJSON){ 
    document.getElementById(`btn${productosJSON[producto].id}`).addEventListener("click", function(){agregarAlCarrito(productosJSON[producto])})  
} }



if(localStorage.getItem("productosEnCarro")){
    carrito=JSON.parse(localStorage.getItem("productosEnCarro"))
    console.log(carrito)
    let acum = 0;
    for(let prod of carrito){
        tablaRender.innerHTML+=
        `
        <div style="display:flex; text-align:center;" id="${prod.id}">
            <td style="margin: 0 3rem 0 3rem">${prod.id}</td>
            <td style="margin: 0 3rem 0 3rem">${prod.prod}</td>
            <td style="margin: 0 3rem 0 3rem">${prod.precio}</td>
        </div>
        `;

        acum = Number(acum) + Number(prod.precio)
       
        totalItems.innerHTML +=
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
    totalItems.innerHTML = "";
}) 