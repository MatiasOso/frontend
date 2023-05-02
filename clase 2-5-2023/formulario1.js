window.addEventListener("load", function(){
    document.getElementById("boton").addEventListener("click", function(event){
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        //validar email con admin@admin.com y password 12345
        console.log(email,password);
        if(email == 'admin@admin.com' && password == '12345'){
            alert("Bienvenido");
        }else{
            alert("Datos incorrectos");
        }
    });

});



