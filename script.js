function converter() {
    var valor = parseFloat(document.getElementById('valor').value);
    var moeda = document.getElementById('moeda').value;
    var resultadoElement = document.getElementById('resultado');
    var taxaConversao;

    switch (moeda) {
        case 'eur':
            taxaConversao = 6.53; // Taxa de conversão de Euro para Real
            break;
        case 'usd':
            taxaConversao = 5.80; // Taxa de conversão de Dólar para Real
            break;
        case 'clp':
            taxaConversao = 0.0076; // Taxa de conversão de Peso Chileno para Real
            break;
        default:
            resultadoElement.innerText = "Selecione uma moeda válida.";
            return;
    }

    var resultado = valor * taxaConversao;
    resultadoElement.innerText = valor + " " + moeda.toUpperCase() + " = R$" + resultado.toFixed(2);
}
