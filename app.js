
class Producto {
    constructor (nombre, precio, peso, pais){
        this.id=id;
        this.nombre = nombre;
        this.precio = Number(precio);
        this.peso= peso;
        this.pais= pais;
    }
    // sumaIva(){
    // this.precio = this.precio * 1.16;
    // }
}
// Se declara un array de productos para almacenar los objetos 
const productos = [{
    id:"0",
    nombre:"piña",
    precio:45,
    peso: "500gr",
    pais: "Costa Rica"
}
];
productos.push ({
    id:"1",
    nombre:"Aguacate",
    precio:12.50,
    peso: "100gr",
    pais: "México"
});
productos.push ({
    id:"2",
    nombre:"Manzana",
    precio:8.00,
    peso: "100gr",
    pais: "Estados Unidos"
});
productos.push ({
    id:"3",
    nombre:"Pera",
    precio:7.50,
    peso: "100gr",
    pais: "Brasil"
});

console.log(productos)

//Uso MAP para sumar el IVA a cada dato y que genere un solo array con el producto y el precio. 

const preciosIva = productos.map((datos)=> {
    return {
    nombre: datos.nombre, 
 precio: datos.precio * 1.16}})

 console.log(preciosIva)


document.getElementById("item1").innerHTML = JSON.stringify (preciosIva[0]);
document.getElementById("item2").innerHTML = JSON.stringify (preciosIva[1]);
document.getElementById("item3").innerHTML = JSON.stringify (preciosIva[2]);
document.getElementById("item4").innerHTML = JSON.stringify (preciosIva[3]);
