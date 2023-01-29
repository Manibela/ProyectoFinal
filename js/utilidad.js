{
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
}