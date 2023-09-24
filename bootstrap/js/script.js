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
      } else if (optionOne === "real" && optionTwo === "dolar") {
        inputResultado.value = quantidadeOne.value / dolarReal;
      } else if (optionOne === "euro" && optionTwo === "real") {
        inputResultado.value = euroReal * quantidadeOne.value;
      } else if (optionOne === "real" && optionTwo === "euro") {
        inputResultado.value = quantidadeOne.value / euroReal;
      } else if (optionOne === "bitcoin" && optionTwo === "real") {
        inputResultado.value = btcReal * quantidadeOne.value;
      } else if (optionOne === "real" && optionTwo === "bitcoin") {
        inputResultado.value = quantidadeOne.value / btcReal;
      }

      // Combinações sem "real"
      if (optionOne === "dolar" && optionTwo === "euro") {
        inputResultado.value = (dolarReal * quantidadeOne.value) / euroReal;
      } else if (optionOne === "euro" && optionTwo === "dolar") {
        inputResultado.value = (euroReal * quantidadeOne.value) / dolarReal;
      } else if (optionOne === "dolar" && optionTwo === "bitcoin") {
        inputResultado.value = (dolarReal * quantidadeOne.value) / btcReal;
      } else if (optionOne === "bitcoin" && optionTwo === "dolar") {
        inputResultado.value = (btcReal * quantidadeOne.value) / dolarReal;
      } else if (optionOne === "euro" && optionTwo === "bitcoin") {
        inputResultado.value = (euroReal * quantidadeOne.value) / btcReal;
      } else if (optionOne === "bitcoin" && optionTwo === "euro") {
        inputResultado.value = (btcReal * quantidadeOne.value) / euroReal;
      }

      // Adicione aqui mais combinações se necessário.
    }
  });

// Veja se eu entendi sobre esse código, primeiro selecionamos os nossos select, quando uma das opções dentro
// deles forem clicadas, chamamos a função verificarSelecao, optemos os valores/opções selecionados, se esses valores
// forem diferentes dos valores padrões já selecionados, retornamos eles, certo?
