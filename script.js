let expressao = "";

function atualizarDisplay(valor) {
    const display = document.getElementById('display');
    display.innerText = valor || "0";
}

function inserir(caractere) {
    if (expressao === "Erro") {
        expressao = "";
    }
    expressao += caractere;
    atualizarDisplay(expressao);
}

function limparTudo() {
    expressao = "";
    atualizarDisplay("0");
}

function apagarUm() {
    if (expressao === "Erro") {
        limparTudo();
        return;
    }
    expressao = expressao.slice(0, -1);
    atualizarDisplay(expressao);
}

function calcular() {
    try {
        if (!expressao) return;
        // Substitui caracteres visuais caso necessário
        let resultado = eval(expressao);
        expressao = String(resultado);
        atualizarDisplay(expressao);
    } catch (error) {
        atualizarDisplay("Erro");
        expressao = "";
    }
}