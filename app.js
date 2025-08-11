let valorAmigo = "";
let arrayAmigos = [];
let nuevoElemento = document.createElement('li');

function agregarAmigo (){
    valorAmigo = document.getElementById('amigo').value.trim();    
    //Valida que no se ingrese un nombre de amigo en blanco
    if (valorAmigo === "" || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(valorAmigo)) {
        alert('Por favor ingrese un nombre valido');
        limpiarTexto();
    } 
    else {
    alert('Se ingresó amigo');
    agregarLista();
    limpiarTexto();
        }
}

function agregarLista(){
    arrayAmigos.push(valorAmigo);
    nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = valorAmigo;
    document.getElementById('listaAmigos').appendChild(nuevoElemento);
    console.log(arrayAmigos);
}

function limpiarTexto (){
     document.getElementById('amigo').value = "";
}