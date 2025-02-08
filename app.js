//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    // Captura o valor 
    const nome = document.getElementById('amigo').value.trim();

    // Validação: se o campo estiver vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; // Se estiver vazio, sai da função
    }
    if (amigos.includes(nome)){
        alert(`O nome ${nome} ja esta na lista`)
        return;
    }
    // Adiciona o nome ao array de amigos
     amigos.push(nome);

    // Limpa o campo de entrada
     document.getElementById('amigo').value = " ";

    // Atualiza a lista exibida
    atualizarLista();
}

function atualizarLista() {
   
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

   
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("Nao tem amigo na lista");
        return;
    }
    const Sorteio = Math.floor(Math.random()*amigos.length);

    const amigosSorteado = amigos[Sorteio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigos Secreto e: ${amigosSorteado}`;


}