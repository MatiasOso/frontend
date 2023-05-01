class Product{
    constructor(id,nombre,cantidad,precio,imagen){
        this.id=id;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
        this.imagen=imagen;
    }
}

class UI {
    addProduct(){

    }
    deleteProduct(){

    }
    showMessage(){

    }
}

//DOM EVENTS
document.getElementById('product-form').addEventListener('submit',function() {
   const id = document.getElementById('id').value
   const nombre = document.getElementById('nombre').value
   const cantidad = document.getElementById('cantidad').value
   const precio = document.getElementById('precio').value
   const imagen = document.getElementById('imagen').value

    console.log(id,nombre,cantidad,precio,imagen)
});



















/*(id,nombreproducto,cantidad,precio,imagen) */









/* <script> PARA MAS TARDE
for(i=0;i<10;i++)
{   
    document.getElementById("productos").innerHTML+=` --------->OJO AHI
        <div class="col">
    <div class="card">
        <img src="${elemento.items[0].images[0].imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${elemento.productName}</h5>
            <p class="card-text">Valor Unitario: $ ${elemento.items[0].sellers[0].commertialOffer.ListPrice}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
};
</script> ------------->imprime 10 cards */ 