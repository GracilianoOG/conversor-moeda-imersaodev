const valorEntrada = document.querySelector(".calculadora__entrada");
const moedaSaida = document.querySelector(".calculadora__saida--moeda");
const bitcoinSaida = document.querySelector(".calculadora__saida--bitcoin");
const opcaoSelecionada = document.querySelector(".calculadora__opcoes");
const calculaBotao = document.querySelector(".calculadora__efetua-conversao");

console.log(opcaoSelecionada.value);

calculaBotao.addEventListener("click", () => {
    const opcao = opcaoSelecionada.value;
    const input = parseFloat(valorEntrada.value);
    switch(opcao) {
        case "r-d":
            moedaSaida.value = "$" + (input / 5.25).toFixed(2);
            bitcoinSaida.value = "BTC " + (input * 0.00001);
        break;
            
        case "d-r":
            moedaSaida.value = "R$" + (input * 5.25).toFixed(2);
            bitcoinSaida.value = "BTC " + (input * 0.000053);
        break;
    }
});
