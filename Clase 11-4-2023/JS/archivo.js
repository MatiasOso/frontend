a = 123;
b = 456;
c = a +b ;
console.log("El resultado es: " + c);
console.warn("El resultado es: " + c);
console.error("El resultado es: " + c);
console.info("El resultado es: " + c);
//lavariable = document.getElementById("brand-name");
//lavariable.innerHTML = "Hola mundo";
arreglos=[ 3,4,5,6,7,"abc","def"];
console.log(arreglos[5]);
i = 0; 


// Formas de recorrer un array
while(i<arreglos.length){
    console.log(arreglos[i]);
    i++;
}
diccionario= {
    "nombre":"juan",
    "apellido":"perez"
}

console.log(diccionario.nombre);
console.log(diccionario.apellido); 
basedatos = [ 
    {
        "nombre":"juan",
        "apellido":"perez"
    },
    {
        "nombre":"maria",
        "apellido":"perez"
    }
]
console.error(basedatos[0].nombre);

for(i=0; i<basedatos.length; i++){
    console.warn(basedatos[i].nombre);
}

for(var elemento of basedatos){
    console.log(elemento.nombre);
}

console.log(basedatos);
basedatos.forEach(elemento => {
    card = '<div class="card">
            <img src="/Clase 11-4-2023/imagenes/tele.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Televisor</h5>
        <p class="card-text">Televisor LED 43 Full HD Smart TV / T5202. $999.990</p>
        <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
        </div>
});
