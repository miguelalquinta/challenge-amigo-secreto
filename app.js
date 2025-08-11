let valorAmigo = "";
let arrayAmigos = [];
let nuevoElemento = document.createElement('li');

function agregarAmigo (){
    valorAmigo = document.getElementById('amigo').value.trim(); 
    //Limpia los espacios en blanco extras
    valorAmigo = valorAmigo.replace(/\s+/g, ' ').trim();  
    //Valida que se ingrese un nombre valido
    if (valorAmigo === "" || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(valorAmigo)) {
        alert('Por favor ingrese un nombre valido');
        limpiarTexto();
    } 
    else {
        //revisa que nombre amigo no exista en la lista, si esta escrito con mayusculas o minusculas igual lo detecta
        if (arrayAmigos.some(nombre => nombre.toLowerCase() === valorAmigo.toLowerCase())){
            alert('Nombre ya existe en la lista, ingrese otro nombre')
            limpiarTexto();
             }else{
                alert('Se ingresó amigo');
                agregarLista();
                limpiarTexto();
                 }
         }
}

//Llena lista con nombre y agrega nombre al arreglo
function agregarLista(){
    arrayAmigos.push(valorAmigo);
    nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = valorAmigo;
    document.getElementById('listaAmigos').appendChild(nuevoElemento);
    console.log(arrayAmigos);
}

//limpia el texto
function limpiarTexto (){
     document.getElementById('amigo').value = "";
}