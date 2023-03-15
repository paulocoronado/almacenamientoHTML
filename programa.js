
//Crear lo eventListener

let botonAlmacenar=document.getElementById("btnAlmacenar");
botonAlmacenar.addEventListener('click', ()=>{
    sessionStorage.setItem('nombre', 'Paulo');
    sessionStorage.setItem('apellido', 'Coronado');
    localStorage.setItem('nombre', 'Paulo');
    localStorage.setItem('apellido', 'Coronado');
});

let botonBorrar=document.getElementById("btnBorrar");

botonBorrar.addEventListener('click', function (){    
    sessionStorage.clear();
    localStorage.clear();
})


//Recorrer el sessionStorage y el localStorage
//Mostrando las variables como una fila en la
//tabla del DOM

function construirFilas(){

    //Crear un arreglo con las fuentes de datos
    let fuentes=[localStorage, sessionStorage];
    for(let k=0; k<fuentes.length;k++){
        let miFuente=fuentes[k];
        for(let i=0; i<miFuente.length;i++){

            
            let cuerpoTabla=document.getElementById("cuerpoTabla");
            let fila=cuerpoTabla.insertRow(i);
            let celda= fila.insertCell(0);
            let texto=document.createTextNode(miFuente.key(i));
            celda.appendChild(texto);
            celda= fila.insertCell(1);
            texto=document.createTextNode(miFuente.getItem(miFuente.key(i)));
            celda.appendChild(texto);



            /*
            let cuerpoTabla=document.getElementById("cuerpoTabla");
            let clave=miFuente.key(i);
            let valor=miFuente.getItem(miFuente.key(i));
            cuerpoTabla.innerHTML+= `<tr><td>${clave}</td><td>${valor}</td></tr>`;
            */



            /*
            let fila=document.createElement("tr");
            
            let celda=document.createElement("td");
            let texto=document.createTextNode(miFuente.key(i));
            celda.appendChild(texto);
            fila.appendChild(celda);

            celda=document.createElement("td");
            let valor=miFuente.getItem(miFuente.key(i));
            texto=document.createTextNode(valor);
            celda.appendChild(texto);
            fila.appendChild(celda);

            cuerpoTabla.appendChild(fila);
            */
        }    
    }





}


construirFilas()

