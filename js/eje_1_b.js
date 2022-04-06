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
        var html=''
        for (var i=0; i < split.length-1; i++) {
            document.write('<li>'+split[i]+'</li>');
         }
         
         document.getElementById('lista').outerHTML = '<h1>ASD</h1>';
    
}