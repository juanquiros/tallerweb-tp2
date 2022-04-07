var concatenado = "";
function agregar(string){
    if(string.value){
        concatenado = concatenado + string.value + ';';
        string.value = '';
        console.log(concatenado);
    }
    
}

function finalizar(){    
    if(concatenado!=""){
        var split = concatenado.split(';');
        var str_html='<ol>'
        for (var i=0; i < split.length-1; i++) {
            str_html+= '<li>'+split[i]+'</li>';
         }         
         str_html+='</ol>'
         document.getElementById('lista').outerHTML = str_html;
    }
}