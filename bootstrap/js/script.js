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
    // Após isso, puxamos os valores já no formato JSON:
    const dolarReal = data.USDBRL.high; // Quanto 1 USD vale em real(4.93)
    const euroReal = data.EURBRL.high; // Quanto 1 EUR vale em real(5.26)
    const btcReal = data.BTCBRL.high; // Quanto o bitcoin vale em real

    //Se o nosso input for definido chamamos a funcao de conversão
    if (quantidadeOne.value !== undefined || quantidadeOne.value !== null) {
      selectOne.addEventListener("change", convert);
      selectTwo.addEventListener("change", convert);
    }
    function convert() {
      const optionOne = selectOne.value;
      const optionTwo = selectTwo.value;

      // Todas as possíveis combinações cada um com o seu resultado:
      const chave = `${optionOne}-${optionTwo}`;
      const taxasDeConversao = {
        "dolar-real": dolarReal,
        "real-dolar": 1 / dolarReal,
        "euro-real": euroReal,
        "real-euro": 1 / euroReal,
        "bitcoin-real": btcReal,
        "real-bitcoin": 1 / btcReal,
        "dolar-euro": dolarReal / euroReal,
        "euro-dolar": euroReal / dolarReal,
        "dolar-bitcoin": dolarReal / btcReal,
        "bitcoin-dolar": btcReal / dolarReal,
        "euro-bitcoin": euroReal / btcReal,
        "bitcoin-euro": btcReal / euroReal,
      };
      if (taxasDeConversao[chave] !== undefined) {
        const resultado = taxasDeConversao[chave] * quantidadeOne.value;

        //Limitamos em tres casas decimais:
        const resultadoCasaD = resultado.toFixed(3);
        // Número sem zeros:
        const resultadoSemZ = parseFloat(resultadoCasaD);
        // Retornamos em formatação local do Brasil:
        inputResultado.value = resultadoSemZ.toLocaleString("pt-BR");
      }
    }
  });

