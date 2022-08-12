const filtrarItems = document.querySelectorAll('.card');
const filtrarBotones = document.querySelectorAll('.filterButton');


filtrarBotones.forEach((btn) => {btn.addEventListener('click', () => {
        mostrarContenidoFiltrado(btn);
    }) 
});

console.log(filt)

function mostrarContenidoFiltrado(btn){
    filtrarItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
};

