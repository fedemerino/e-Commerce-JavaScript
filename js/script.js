
let carrito = [];
var productosJSON = [];
let contenedor = document.getElementById('cards');
let tablaRender = document.getElementById('itemsTabla');
let contenedorCarrito = document.querySelector("#items");
let contenedorFooterCarrito = document.querySelector("#footer")
let totalItems = document.querySelector("#totalItems")
let acum = 0;
let card = document.getElementsByClassName('card');
const searchBar = document.getElementById('searchBar')
const botonComprar = document.getElementById('comprar');
const botonLimpiar = document.getElementById('clear');
const filtrarItems = document.querySelectorAll('.card');
const filtrarBotones = document.querySelectorAll('.filterButton');
const filtrarTodos = document.querySelectorAll('.filterTodos')
let productosFiltrados = []

//SEARCHBAR

searchBar.addEventListener('keyup', (e) => {

    const searchString = e.target.value.toLowerCase();
    const filteredProducts = productosJSON.filter(producto => {
        return producto.prod.toLowerCase().includes(searchString) || producto.categoria.toLowerCase().includes(searchString);
    });
    productosFiltrados = filteredProducts;
    renderProductos(productosFiltrados)
});



fetchJSON();

// FETCH JSON LOCAL

async function fetchJSON() {
    const URLJSON = "../js/prod.json"
    const resp = await fetch(URLJSON)
    const data = await resp.json()
    productosJSON = data;
    renderProductos(productosJSON);
}

const renderProductos = (prod) => {
    const productos = prod
        .map((prod) => {
            return `
            <div class="col-lg-3">
            <div class=" card ${prod.categoria} todos ">
                <div class="tituloCard">
                    <p>${prod.prod}</p>
                </div>
                <img src="${prod.img}">
                <p>Precio: $ ${prod.precio}</p>
                <button class="botonComprar" id="btn${prod.id}">Agregar al carrito</button>
                </div>
                
            </div>
            </div>
        `;
        })
        .join('')
    contenedor.innerHTML = productos;
    for (let x in prod) {
        document.getElementById(`btn${prod[x].id}`).addEventListener("click", function () {
            agregarAlCarrito(prod[x])
        })}
};


// RENDERIZO EN EL CARRITO EL LOCALSTORAGE EN CASO DE TENER ALGO GUARDADO
if (localStorage.getItem("productosEnCarro")) {
    carrito = JSON.parse(localStorage.getItem("productosEnCarro"))
    for (let prod of carrito) {
        tablaRender.innerHTML +=
            `
        <div style="display:flex; text-align:center;" id="${prod.id}">
            <td style="margin: 0 3rem 0 3rem";><img src="${prod.img}" width="128" height="96"></td>
            <td style="margin: 0 3rem 0 3rem">${prod.prod}</td>
            <td style="margin: 0 3rem 0 3rem">${prod.precio}</td>
        </div>
        `;

        acum = Number(acum) + Number(prod.precio)

        totalItems.innerHTML =
            `
        <div style="text-align:end; margin-right:2.5rem; margin-bottom: 0.5rem;"> 
            <td style="margin: 0 3rem 0 3rem">${acum}</td>
        </div>
        `;
    }
}

//AGREGAR PRODUCTOS AL CARRITO

function agregarAlCarrito(prod) {
    carrito.push(prod)

    swal.fire("Agregaste " + prod.prod + " al carrito")
    localStorage.setItem("productosEnCarro", JSON.stringify(carrito))

    tablaRender.innerHTML +=
        `
    <div style="display:flex; text-align:center;">
    <td style="margin: 0 3rem 0 3rem";><img src="${prod.img}" width="128" height="96"></td>
        <td style="margin: 0 3rem 0 3rem">${prod.prod}</td>
        <td style="margin: 0 3rem 0 3rem">${prod.precio}</td>
    </div>
    `;
    acum = Number(acum) + Number(prod.precio)
    totalItems.innerHTML =
        `
    <div style="text-align:end; margin-right:2.5rem; margin-bottom: 0.5rem;"> 
        <td style="margin: 0 3rem 0 3rem">${acum}</td>
    </div>
    `;
}


//LIMPIAR CARRO

botonLimpiar.addEventListener("click", function () {
    localStorage.removeItem('productosEnCarro');
    tablaRender.innerHTML = "";
    totalItems.innerHTML = "";
})


//FILTRO PRODUCTOS CON LOS BOTONES


filtrarBotones.forEach((btn) => {
    btn.addEventListener('click', () => {
        mostrarContenidoFiltrado(btn)
    })
});

filtrarTodos.forEach((btn) => {
    btn.addEventListener('click', () => {
        renderProductos(productosJSON)
    })
});

function mostrarContenidoFiltrado(btn) {
    const filteredProducts = productosJSON.filter((producto) => {
        return producto.categoria.toLowerCase().includes(btn.id)
    });
    renderProductos(filteredProducts);
}