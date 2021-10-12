function btn_cancelar(){
    if(confirm("¿Deseas ir al Menu principal?")){
        location.href="Menu_principal.html";
    }else{
        alert("Has decidio quedarte en este formulario");
    }
}
