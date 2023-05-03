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
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product ID/strong>: ${product.id}
                    <strong>Product Name</strong>: ${product.nombre}
                    <strong>Product cantidad</strong>: ${product.cantidad}
                    <strong>Product precio $</strong>: ${product.precio}
                    <strong>Product imagen</strong>: ${product.imagen}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        this.resetForm();
        
    }
    deleteProduct(element){
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto eliminado', 'danger');
        }

    }
    showMessage(message,cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        // Mostrando en el DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('App');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },2000);
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
}

//DOM EVENTS
document.getElementById('product-form').addEventListener('submit',function(e) {
   const id = document.getElementById('id').value
   const nombre = document.getElementById('name').value
   const cantidad = document.getElementById('cantidad').value
   const precio = document.getElementById('precio').value
   const imagen = document.getElementById('imagen').value

    

    const product =new Product(id,nombre,cantidad,precio,imagen);
    const ui = new UI();
    ui.addProduct(product);
    ui.showMessage('Producto agregado', 'success');
    e.preventDefault(); //para que no desaparezca esto puedo intervenir con la rapidez de la pagina ya que esto es util para almacenar en un servidor 
});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
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