const teclados=[
    {
        prod: "Teclado Logitech G213 Prodigy",
        marca: "Logitech",
        precio: 9389,
        stock: 14

    },
    {
        prod: "Teclado Logitech G413",
        marca: "Logitech",
        precio: 18259,
        stock: 3
    },
    {
        prod: "Teclado Logitech G915 TKL",
        marca: "Logitech",
        precio: 38999,
        stock: 15
    },
    {
        prod: "Teclado Redragon K530 Draconic Rgb Inalámbrico",
        marca: "Redragon",
        precio: 10699,
        stock: 7

    },
    {
        prod: "Teclado Redragon K552 Kumara Rgb",
        marca: "Redragon",
        precio: 9199,
        stock: 9
    },
    {
        prod: "Teclado Gamer HyperX Alloy Elite 2 Rgb",
        marca: "HyperX",
        precio: 20539,
        stock: 2
    },
    {
        prod: "Teclado HyperX Alloy Core Rgb",
        marca: "HyperX",
        precio: 6889,
        stock: 5
    }

];

const mouses=[
    {
        prod: "Mouse Logitech G305 Lightspeed",
        marca: "Logitech",
        precio: 6149,
        stock: 3

    },
    {
        prod: "Mouse Logitech G203 Lightsync",
        marca: "Logitech",
        precio: 3999,
        stock: 5
    },
    {
        prod: "Mouse Logitech G Pro X Superlight",
        marca: "Logitech",
        precio: 17999,
        stock: 5
    },
    {
        prod: "Mouse HyperX Pulsefire Core Rgb",
        marca: "HyperX",
        precio: 3789,
        stock: 12

    },
    {
        prod: "Mouse HyperX Pulsefire Raid Rgb",
        marca: "HyperX",
        precio: 6599,
        stock: 1

    },
    {
        prod: "Mouse HyperX Pulsefire Dart Inalámbrico",
        marca: "HyperX",
        precio: 12459,
        stock: 5
    }

];

const auriculares=[
    {
        prod: "Auricular Logitech G433 Negro",
        marca: "Logitech",
        precio: 20999,
        stock: 16

    },
    {
        prod: "Auricular Logitech G733 Lightspeed Rgb Inalámbrico Azul",
        marca: "Logitech",
        precio: 24299,
        stock: 6
    },
    {
        prod: "Auricular Logitech G Pro X Lightspeed Negro",
        marca: "Logitech",
        precio: 36599,
        stock: 13
    },
    {
        prod: "Auricular HyperX Cloud II Rojo",
        marca: "HyperX",
        precio: 17999,
        stock: 3
    },
    {
        prod: "Auricular HyperX Cloud Flight Inalámbrico",
        marca: "HyperX",
        precio: 19999,
        stock: 2
    },
    {
        prod: "Auricular HyperX Cloud Stinger Core 7.1 Inalámbrico",
        marca: "HyperX",
        precio: 13499,
        stock: 6
    }

];

function listaTeclados(){
    do{
        var tec = parseInt(prompt("Ingrese la marca que desea: \n1-Logitech\n2-HyperX\n3-Redragon"));
    }while(tec<1 || tec>3);
    if (tec===1){
        const tecLogitech=teclados.filter((teclado)=>teclado.marca==="Logitech");
        const exiTecLogitech=teclados.some((teclado)=>teclado.marca==="Logitech")
        if(exiTecLogitech){
            console.table(tecLogitech);
        }
        else{
            console.log("No hay stock");
        }
    }
    else if (tec===2){
        const tecHyperX=teclados.filter((teclado)=>teclado.marca==="HyperX");
        const exiTecHyperX=teclados.some((teclado)=>teclado.marca==="HyperX")
        if(exiTecHyperX){
            console.table(tecHyperX);
        }
        else{
            console.log("No hay stock");
        }
    }
    else if(tec===3){
        const tecRedragon=teclados.filter((teclado)=>teclado.marca==="Redragon");
        const exiTecRedragon=teclados.some((teclado)=>teclado.marca==="Redragon")
        if(exiTecRedragon){
            console.table(tecRedragon);
        }
        else{
            console.log("No hay stock");
        }
    }
    else{
        console.log("La opción ingresada es incorrecta");
    }
}

function listaMouses(){
    do{
        var mou = parseInt(prompt("Ingrese la marca que desea: \n1-Logitech\n2-HyperX\n3-Redragon"));
    }while (mou<1 || mou>3);
    if (mou===1){
        const mouLogitech=mouses.filter((mouse)=>mouse.marca==="Logitech");
        const exiMouLogitech=mouses.some((mouse)=>mouse.marca==="Logitech")
        if(exiMouLogitech){
            console.table(mouLogitech)
        }
        else{
            console.log("No hay stock");
        }
    }
    else if (mou===2){
        const mouHyperX=mouses.filter((mouse)=>mouse.marca==="HyperX");
        const exiMouHyperX=mouses.some((mouse)=>mouse.marca==="HyperX")
        if(exiMouHyperX){
            console.table(mouHyperX);
        }
        else{
            console.log("No hay stock");
        }
    }
    else if(mou===3){
        const mouRedragon=mouses.filter((mouse)=>mouse.marca==="Redragon");
        const exiMouRedragon=mouses.some((mouse)=>mouse.marca==="Redragon")
        if(exiMouRedragon){
            console.table(mouRedragon);
        }
        else{
            console.log("No hay stock");
        }
    }
    else{
        console.log("La opción ingresada es incorrecta");
    }
}

function listaAuriculares(){
    do{
        var aur = parseInt(prompt("Ingrese la marca que desea: \n1-Logitech\n2-HyperX\n3-Redragon"));
    }while(aur<1 || aur>3);
    if (aur===1){
        const aurLogitech=auriculares.filter((auricular)=>auricular.marca==="Logitech");
        const exiAurLogitech=auriculares.some((auricular)=>auricular.marca==="Logitech")
        if(exiAurLogitech){
            console.table(aurLogitech);
        }
        else{
            console.log("No hay stock");
        }
    }
    else if (aur===2){
        const aurHyperX=auriculares.filter((auricular)=>auricular.marca==="HyperX");
        const exiAurHyperX=auriculares.some((auricular)=>auricular.marca==="HyperX")
        if(exiAurHyperX){
            console.table(aurHyperX);
        }
        else{
            console.log("No hay stock");
        }
    }
    else if(aur===3){
        const aurRedragon=auriculares.filter((auricular)=>auricular.marca==="Redragon");
        const exiAurRedragon=auriculares.some((auricular)=>auricular.marca==="Redragon")
        if(exiAurRedragon){
            console.table(aurRedragon);
        }
        else{
            console.log("No hay stock");
        }
    }
    else{
        console.log("La opción ingresada es incorrecta");
    }
}

function elegirProducto(){
    do{
        var prod = parseInt(prompt("Ingrese el producto que desee: \n1-Teclados\n2-Mouse\n3-Auriculares"));
    }while(prod>3 || prod<1);

    switch(prod){
        case 1:
            listaTeclados();
            break;
        case 2:
            listaMouses();
            break;
        case 3:
            listaAuriculares();
            break;
        default:
            console.log("La opción ingresada es incorrecta");
        
    }
        
}

elegirProducto();
