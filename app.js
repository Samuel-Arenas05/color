var selector= document.getElementById("selector")
var cajaU= document.getElementById("cajas")
var caja = document.getElementById("color")
var caja1 = document.getElementById("caja1")
var caja2 = document.getElementById("caja2")
var caja3 = document.getElementById("caja3")
var resultado1 = document.getElementById("resultado1")
var resultado2 = document.getElementById("resultado2")
var resultado3 = document.getElementById("resultado3")

function color(){
    var colores= selector.value
   switch (colores) {
       case "rojo":
        cajaU.style.display= "none"
        setTimeout(function(){
            cajaU.style.display= "inline-block" ;
        }, 500)

           caja.style.backgroundColor = "red"
           
           caja1.style.backgroundColor = "white"
           caja2.style.backgroundColor = "red"
           caja3.style.backgroundColor = "red"

           resultado1.style.backgroundColor = "pink"
           resultado2.style.backgroundColor = "purple"
           resultado3.style.backgroundColor = "orange"
           
           break;
        case "azul":
            cajaU.style.display= "none"
            setTimeout(function(){
                cajaU.style.display= "inline-block" ;
            }, 500);

            caja.style.backgroundColor = "blue"

            caja1.style.backgroundColor = "blue"
            caja2.style.backgroundColor = "white"
            caja3.style.backgroundColor = "blue"
 
            resultado1.style.backgroundColor = "purple"
            resultado2.style.backgroundColor = "lightblue"
            resultado3.style.backgroundColor = "green"
            break;
        case "amarillo":
            cajaU.style.display= "none"
            setTimeout(function(){
                cajaU.style.display= "inline-block" ;
            }, 500)

            caja.style.backgroundColor = "yellow"

            caja1.style.backgroundColor = "yellow"
            caja2.style.backgroundColor = "yellow"
            caja3.style.backgroundColor = "white"
 
            resultado1.style.backgroundColor = "orange"
            resultado2.style.backgroundColor = "green"
            resultado3.style.backgroundColor = "rgb(245, 245, 140)"
            break;
   
       default:
        cajaU.style.display= "none"
        setTimeout(function(){
            cajaU.style.display= "inline-block" ;
        }, 500)

         caja.style.backgroundColor = "white"

         
         caja1.style.backgroundColor = "white"
         caja2.style.backgroundColor = "white"
         caja3.style.backgroundColor = "white"

         resultado1.style.backgroundColor = "pink"
         resultado2.style.backgroundColor = "lightblue"
         resultado3.style.backgroundColor = "rgb(245, 245, 140)"
         
           break;
   }
}

