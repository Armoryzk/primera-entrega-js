function calcular_precio() {
   
    if(document.getElementById("opciones").selectedIndex){
        seleccion = document.getElementById("opciones").value;
        }
        else{alert("Debes seleccionar un producto");}
   
    
  for(var i=0; i<document.formu.estado.length;i++){
          if(document.formu.estado[i].checked){
            seleccionado = document.formu.estado[i].value;
             }
            }
   
     
   const unidades = document.getElementById("cantidad").value;
    if(unidades > 0){
      let unidades
    }
    else{
        alert("Debes poner número días");return false;
    }
   
     
   if(document.getElementById("iva").checked){
    impuesto = document.getElementById("iva").value;}
   
}

