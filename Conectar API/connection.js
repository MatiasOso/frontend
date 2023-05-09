window.addEventListener('load', () => {

   fetch('URL')
   .then((resultado)=> {
    return(resultado.json);
   })
   .then((datos)=> {
    console.log(datos)
    for (i in datos.items){
        console.log(datos.items[i]);
        document.getElementById('productos').innerHTML += `
         <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="img/${datos.items[i].imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${datos.items[i].nombre}</h5>
                      <p class="card-text">${datos.items[i].precio}</p>
                      <a href="#" class="btn btn-primary"></a>
                    </div>
                  </div>
            </div>
        `
    }
   })
   .catch(()=> {})//...

});

//Agregar productos min 10 requisitos para el producto
//CORS POLICY
//*****crossite scripting*****
//sintaixis de una funcion asioncrona
// async function buscar(){
//     await 123;
// }


//inacap e-commerce

//fetch API
// es una promesa que se ejecuta cuando se resuelve la promesa
// una promesa es un objeto que representa la terminacion o el fracaso de una operacion asincrona