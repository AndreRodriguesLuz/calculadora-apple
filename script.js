// Função que adiciona os números e operadores no visor da calculadora
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Função que limpa totalmente o visor da calculadora
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função que pega a expressão do visor e calcula o resultado matemático
function calculate() {
    const display = document.getElementById('display');
    try {
        // O comando eval resolve a conta matemática que está em texto
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}
