
    import Ubicacion from './data/Ubicacion.json' assert {type: 'json' };

   var col = document.getElementsByClassName("colapsable");
    console.log(col.length);
    var i=0;
    for(i ;i<col.length;i++){
        console.log(i);
      col[i].addEventListener("click", function(){
        this.classList.toggle("activo");
        var contenido = this.nextElementSibling;
        if(contenido.style.display === "block"){
            contenido.style.display="none";
        } else {
            contenido.style.display ="block";
        }
    });
    }

    console.log(JSON.stringify(Ubicacion));

    function insertarenUyD(tipo, info){
        let lista = document.getElementById("uyd");
        let nodo = document.createElement("li");
        nodo.appendChild(document.createTextNode(tipo+": "+info));
        lista.appendChild(nodo);
    }

    for(var x in Ubicacion){
        if(Ubicacion.hasOwnProperty(x)){
            let type=x;
            let info=Ubicacion[x];
            insertarenUyD(type, info);
        }
    }