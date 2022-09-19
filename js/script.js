let carrito = [];
var productosJSON = [];
let contenedor = document.getElementById('cards');
let tablaRender = document.getElementById('itemsTabla');
let tablaFooter = document.querySelector('#Footer');
let contenedorCarrito = document.querySelector("#items");
let contenedorFooterCarrito = document.querySelector("#footer")
let totalItems = document.querySelector("#totalItems")
let acum = 0;
let acumTotal = 0;
let card = document.getElementsByClassName('card');
const searchBar = document.getElementById('searchBar')
const botonComprar = document.getElementById('comprar');
const botonLimpiar = document.getElementById('clear');
const filtrarItems = document.querySelectorAll('.card');
const filtrarBotones = document.querySelectorAll('.filterButton');
const filtrarTodos = document.querySelectorAll('.filterTodos')
let productosFiltrados = []
const estandarDolaresAmericanos = Intl.NumberFormat('es-AR');

// FETCH JSON LOCAL

fetchJSON();

async function fetchJSON() {
    const URLJSON = "./js/prod.json"
    const resp = await fetch(URLJSON)
    const data = await resp.json()
    productosJSON = data;
    renderProductos(productosJSON);
}

//RENDERIZAR PRODUCTOS Y LE ASIGNO A CADA BOTON UN EVENTO PARA AGREGAR CADA PRODUCTO AL CARRO

const renderProductos = (prod) => {
    const productos = prod.map((prod) => {
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
        })
    };
    mostrarLocal();
};


//SEARCHBAR

searchBar.addEventListener('keyup', (e) => {

    const searchString = e.target.value.toLowerCase();
    const filteredProducts = productosJSON.filter(producto => {
        return producto.prod.toLowerCase().includes(searchString) || producto.categoria.toLowerCase().includes(searchString);
    });
    productosFiltrados = filteredProducts;
    renderProductos(productosFiltrados)
});


// RENDERIZO EN EL CARRITO EL LOCALSTORAGE EN CASO DE TENER ALGO GUARDADO

function mostrarLocal() {
    
    if (localStorage.getItem("productosEnCarro")) {
        carrito = JSON.parse(localStorage.getItem("productosEnCarro"))
        mostrarEnCarrito();
    }
}

//CAMBIOCANTIDAD

function cambioCantidad(prod) {
    agregarAlCarrito(prod);
}


// RENDERIZAR CARRITO

function mostrarEnCarrito() {
    let acumTotal = 0;
    tablaRender.innerHTML = '';
    carrito.forEach((prod) => {
        let renglonCarrito = document.createElement("tr");
        renglonCarrito.innerHTML =
            `
    <div style="display:flex; text-align:center;">
        <td style="margin: 0 3rem 0 3rem; padding: 1rem"><img src="${prod.img}" width="96" height="64"></td>
        <td style="margin: 0 3rem 0 3rem">${prod.prod}</td>
        <td style="margin: 0 3rem 0 3rem; text-align:center;"><input type="number" id="prodCantidad-${prod.id}" style="color:black;width: 3rem; padding: 0.2rem; margin: 0rem; text-align:center;" min = "1" max = "9" step="1" value="${prod.cantidad}" ></td>
        <td style="margin: 0 3rem 0 3rem">$${estandarDolaresAmericanos.format(prod.precio * prod.cantidad)}</td>
        <td style="margin: 0 3rem 0 3rem; width: 3rem;"><button class="btn" id="eliminarProducto-${prod.id}">🗑️</button></td>
    </div>
    `;
        tablaRender.append(renglonCarrito); 
        acum = prod.precio * prod.cantidad;
        prod.precioTotal = acum ;
        
    })

    for (let prod of carrito){
        acumTotal += prod.precioTotal
    }  
    
    if(carrito.length == 0){
        totalItems.innerHTML = "";
    }
    else {
        totalItems.innerHTML =

        `
        <div style="text-align:end; margin-right:2.5rem; margin-bottom: 0.5rem;"> 
        <td style="margin: 0 3rem 0 3rem">$${estandarDolaresAmericanos.format(acumTotal)}</td>
        </div>
        `;
    }

        carrito.forEach((prod) => {
            document.getElementById(`prodCantidad-${prod.id}`).addEventListener('change', (e) => {
                let nuevaCantidad = e.target.value;
                prod.cantidad = nuevaCantidad;
                console.log(nuevaCantidad);    
                mostrarEnCarrito(prod);})
            document.getElementById(`eliminarProducto-${prod.id}`).addEventListener('click', function(){
                eliminarProductoDelCarrito(prod.id)
                if(carrito.length == 0){
                    totalItems.innerHTML = "";
                }
                localStorage.removeItem('productosEnCarro');
                localStorage.setItem("productosEnCarro", JSON.stringify(carrito))
            })
            
            });
}

//AGREGAR PRODUCTOS AL CARRITO

function agregarAlCarrito(prod) {

    const existe = carrito.some(producto => {
        if (producto.id === prod.id) {
            return true;
        }

        return false;
    });

    if (existe) {
        Swal.fire('¡Este producto ya se encuentra en el carrito!')
    }
    else {
        carrito.push(prod);
        localStorage.setItem("productosEnCarro", JSON.stringify(carrito))
        swal.fire("Agregaste " + prod.prod + " al carrito")
        mostrarEnCarrito();
    }

    console.log(carrito)
}


//LIMPIAR CARRO

botonLimpiar.addEventListener("click", function () {
    localStorage.removeItem('productosEnCarro');
    carrito = [];
    tablaRender.innerHTML = "";
    totalItems.innerHTML = "";
})

//ELIMINAR PRODUCTOS
const eliminarProductoDelCarrito = (prodId) => {
    const producto = carrito.find((prod) => prod.id === prodId);
    const index = carrito.indexOf(producto);
    carrito.splice(index, 1);
    mostrarEnCarrito();
}


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
