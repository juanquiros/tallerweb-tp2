function valid_user(str_nom){
    //almenos 6 letras seguidas de al menos 2 digitos
    //mostrar en un span "nombre de usuario NO válido" o "Nombre de usuario válido"
    //retornar true si es correcto o false si no es correcto
    
    if(str_nom.value){        
        var exp =/^[a-zA-Z]{6,100}[0-9]{2,100}$/;
        var valido = false;
        if(str_nom.value.match(exp)!=null){
            document.getElementById('show_span').textContent="Nombre de usuario válido";
            document.getElementById('show_span').style.color='green';
            valido=true;
        }else{        
            document.getElementById('show_span').textContent="Nombre de usuario NO válido";
            document.getElementById('show_span').style.color='red';
        }
    }else{
        console.log('Ingrese un nombre de usuario');
    }
     return valido;    
}

