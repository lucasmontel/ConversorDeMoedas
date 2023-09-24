const url = "https://economia.awesomeapi.com.br/last/";
const coins = "USD-BRL,EUR-BRL,BTC-BRL";
const selectOne = document.getElementById("selectOne");
const selectTwo = document.getElementById("selectTwo");
const inputResultado = document.getElementById("resultado");
const quantidadeOne = document.getElementById("quantidadeOne");

fetch(url + coins) // Fazemos a  requisição, após isso, a transformamos em formato json()
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    // Após isso, puxamos os valores:
    const dolarReal = data.USDBRL.high; // Quanto 1 USD vale em real(4.93)
    const euroReal = data.EURBRL.high; // Quanto 1 EUR vale em real(5.26)
    const btcReal = data.BTCBRL.high;
    console.log(dolarReal, euroReal, btcReal);
    selectOne.addEventListener("change", checkSelect);
    selectTwo.addEventListener("change", checkSelect);

    function checkSelect() {
      const optionOne = selectOne.value;
      const optionTwo = selectTwo.value;

      if (optionOne === "dolar" && optionTwo === "real") {
        inputResultado.value = dolarReal * quantidadeOne.value;
      } else if (optionOne === "euro" && optionTwo === "real") {
        inputResultado.value = euroReal * quantidadeOne.value;
      } else if (optionOne === "bitcoin" && optionTwo === "real") {
        inputResultado.value = btcReal * quantidadeOne.value;
      }
       }
  });

// Veja se eu entendi sobre esse código, primeiro selecionamos os nossos select, quando uma das opções dentro
// deles forem clicadas, chamamos a função verificarSelecao, optemos os valores/opções selecionados, se esses valores
// forem diferentes dos valores padrões já selecionados, retornamos eles, certo?
