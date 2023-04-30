document.write('Ingrese el id del producto <input type="number" id="id"/>');
document.write('Ingrese el nombre del producto <input type="text" id="nombre"/>');
document.write('Ingrese la cantidad del producto <input type="number" id="cantidad"/>');
document.write('Ingrese el precio unitario del producto $<input type="number" id="precio"/>');
document.write('Ingrese la imagen del producto <input type="file" id="imagen"/>');
id= document.getElementById('id').value;
nombre = document.getElementById('nombre').value;
cantidad = document.getElementById('cantidad').value;
precio = document.getElementById('precio').value;
imagen = document.getElementById('imagen').value; 

document.write('Ingresar prodducto <input type="button" id="imagen"/>');



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