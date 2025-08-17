// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function actualizarAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    //recorre el array para mostrar a los amigos en la lista
    for (let i = 0; i < nombresAmigos.length; i++) {
        //crea el elemento li
        const li = document.createElement('li');
        li.textContent = nombresAmigos[i];
        //lo agrega a la lista
        listaHTML.appendChild(li);
    }
    return;
}

function agregarAmigo() {
    //guarda el valor del input en la variable
    let nombres = document.getElementById('amigo').value;
    //verificar que no este vacio
    if (nombres === '') {
        alert('Por favor ingresa un nombre valido');
        return;
    } else {
        //agrega el nombre a la lista de amigos
        nombresAmigos.push(nombres);
        document.getElementById('amigo').value = '';//limpia el input
        actualizarAmigos();//actualiza la lista
    }
    return;
}

function sortearAmigo() {
    //verificar si hay amigo para sortear
    if (nombresAmigos.length != 0) {
        let indice = Math.floor(Math.random() * nombresAmigos.length);
        //genera indice random para seleccionar al amigo secreto aleatorio
        let amigoSeleccionado = nombresAmigos[indice];//amigo aleatorio seleccionado
        //muestra el amigo selecionado
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        const li = document.createElement('li');
        li.textContent = `Tu amigo secreto es ${amigoSeleccionado}`;
        resultado.appendChild(li);
        return;
    }else{
        alert('Agrega amigos para sortear');
        return;
    }

}
