# ConversorDeMoedas
## Tecnologias Utilizadas:
### API:
```javascript
fetch(url + coins) // Fazemos a  requisição, após isso, a transformamos em formato json()
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    // Após isso, puxamos os valores já no formato JSON:
    const dolarReal = data.USDBRL.high; // Quanto 1 USD vale em real(4.93)
    const euroReal = data.EURBRL.high; // Quanto 1 EUR vale em real(5.26)
    const btcReal = data.BTCBRL.high; // Quanto o bitcoin vale em real

```
