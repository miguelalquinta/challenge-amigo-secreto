let valorAmigo = "";
let arrayAmigos = [];
let nuevoElemento = document.createElement('li');
let largoLista="";
let numeroAmigoSecreto="";

//Al presionar enter ejecuta lo que deberia realizar al presionar el boton añadir
document.getElementById('amigo').addEventListener('keydown', function (e) {
    validarFinSorteo();
    if (e.key === 'Enter') {
        e.preventDefault(); // evita que se envíe un formulario si lo hay
        agregarAmigo();
    }
});

function agregarAmigo (){
    validarFinSorteo();
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
                //alert('Se ingresó amigo');
                agregarLista();
                limpiarTexto();
                 }
         }
    document.getElementById('amigo').focus();
}

//Llena lista con nombre y agrega nombre al arreglo
function agregarLista(){
    arrayAmigos.push(valorAmigo);
    nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = valorAmigo;
    document.getElementById('listaAmigos').appendChild(nuevoElemento);
}

//limpia el texto
function limpiarTexto (){
     document.getElementById('amigo').value = "";
}

//realiza el sorteo del amigo secreto
function sortearAmigo(){
    validarFinSorteo();
    //verifica que exista mas de un nombre para poder realizar el sorteo
    if (arrayAmigos.length > 1){
        largoLista = arrayAmigos.length;
        numeroAmigoSecreto = Math.floor(Math.random() * largoLista);
        document.getElementById('resultado').textContent = 'El amigo secreto sorteado es: ' + arrayAmigos[numeroAmigoSecreto];
        document.getElementById('listaAmigos').innerHTML = "";
        arrayAmigos = [];
        document.getElementById('amigo').focus();
    }else {
        alert('Por favor ingrese minimo 2 nombres');
    }
}

//validar que el amigo secreto no haya sido sorteado
function validarFinSorteo(){ 
     document.getElementById('resultado').textContent = ""; 
}