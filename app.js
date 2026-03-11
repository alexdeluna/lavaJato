let banco = JSON.parse(localStorage.getItem("lavagens")) || []

function salvar(){

let placa = document.getElementById("placa").value
let nome = document.getElementById("nome").value
let telefone = document.getElementById("telefone").value

let data = new Date()

let registro = {

placa,
nome,
telefone,
data:data.toLocaleDateString(),
hora:data.toLocaleTimeString()

}

banco.push(registro)

localStorage.setItem("lavagens", JSON.stringify(banco))

limpar()

mostrar()

}

function limpar(){

document.getElementById("placa").value=""
document.getElementById("nome").value=""
document.getElementById("telefone").value=""

}

function mostrar(){

let lista = document.getElementById("lista")

lista.innerHTML=""

banco.slice().reverse().forEach(item=>{

lista.innerHTML+=`

<div class="card">

<strong>${item.placa}</strong><br>
Cliente: ${item.nome}<br>
Telefone: ${item.telefone}<br>
Data: ${item.data} ${item.hora}

</div>

`

})

}

mostrar()


// registrar service worker

if('serviceWorker' in navigator){

navigator.serviceWorker.register("sw.js")

}
