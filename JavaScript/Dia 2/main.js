//#7DaysOfCode - Lógica JS 2/7: 👩🏽‍💻 Variáveis

/*
Perguntas:
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando? 

Retorno:
1. "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
2. Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
    Dependendo da resposta:
    1 > Muito bom! Continue estudando e você terá muito sucesso.
    2 > Ahh que pena... Já tentou aprender outras linguagens?
*/

let nome = window.document.getElementById("username");
let idade = window.document.getElementById("age");
let linguagem = window.document.getElementById("language");
let texto = window.document.getElementById("texto");

function Mensagem() {
    if (nome.value.length == 0 || idade.value.length == 0 || linguagem.value.length == 0) {
        window.alert("Preencha os campos");
    } else{
        texto.innerHTML = `
            <p>👋 Olá ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagem.value}!</p>
            <h2>☝️ Uma perguntinha</h2>
            <label for="escolha">Você gosta de estudar ${linguagem.value}? Responda com o número 1 para SIM ou 2 para NÃO</label>
            <input type="text" name="escolha" id="escolha">
            <div id="buttondiv">
                <input class="button" type="button" value="SUBMIT" onclick="Algoritmo()">
            </div>
        `
    }
}

function Algoritmo() {
    let escolha = Number(window.document.getElementById("escolha").value);

    if (escolha < 1 || escolha > 2) {
        window.alert(`Insira 1 para SIM e 2 para NÃO`);
    } else {
        switch (escolha) {
            case 1:
                texto.innerHTML += "Muito bom! Continue estudando e você terá muito sucesso";
                break;
            case 2:
                texto.innerHTML += "Ahh que pena... Já tentou aprender outras linguagens?"
        }
    }
}