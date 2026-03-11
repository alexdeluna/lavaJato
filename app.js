let banco = JSON.parse(localStorage.getItem("lavagens")) || []

function abrirTela(tela){

document.getElementById("menu").style.display="none"

document.querySelectorAll(".tela").forEach(t=>{

t.style.display="none"

})

document.getElementById(tela).style.display="block"

}

function voltarMenu(){

document.querySelectorAll(".tela").forEach(t=>{

t.style.display="none"

})

document.getElementById("menu").style.display="block"

}

function registrarLavagem(){

let placa = document.getElementById("placa").value.toUpperCase()
let nome = document.getElementById("nome").value
let telefone = document.getElementById("telefone").value

if(!placa) return alert("Digite a placa")

let agora = new Date()

let registro = {

placa,
nome,
telefone,
data:agora.toISOString()

}

banco.push(registro)

localStorage.setItem("lavagens",JSON.stringify(banco))

alert("Lavagem registrada")

document.getElementById("placa").value=""
document.getElementById("nome").value=""
document.getElementById("telefone").value=""

}

function consultarVeiculo(){

let placa = document.getElementById("placaConsulta").value.toUpperCase()

let registros = banco.filter(r=>r.placa===placa)

let resultado = document.getElementById("resultadoConsulta")

if(registros.length===0){

resultado.innerHTML="Veículo não encontrado"

return

}

let cliente = registros[0]

let ultima = registros[registros.length-1]

let dataUltima = new Date(ultima.data)

let dias = (Date.now()-dataUltima)/(1000*60*60*24)

let alerta = dias>15 ? "<div class='alerta'>Cliente pode ser chamado novamente</div>" : ""

let historico=""

registros.forEach(r=>{

let d = new Date(r.data)

historico += `<div>${d.toLocaleDateString()} ${d.toLocaleTimeString()}</div>`

})

resultado.innerHTML = `

<div class="card">

<strong>Placa:</strong> ${placa}<br>

Cliente: ${cliente.nome}<br>

Telefone: ${cliente.telefone}<br>

Última lavagem: ${dataUltima.toLocaleDateString()}<br>

Total de lavagens: ${registros.length}

${alerta}

<br><br>

<a href="https://wa.me/${cliente.telefone}" target="_blank">

<button>Chamar no WhatsApp</button>

</a>

<h3>Histórico</h3>

${historico}

</div>

`

}
