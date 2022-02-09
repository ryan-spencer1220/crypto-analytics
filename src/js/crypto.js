export default class CryptoCurrency {
  static getCurrency() {
    return fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids=BTC,ETH,ADA,MATIC,DOT&interval=1d,30d&convert=USD&per-page=100&page=1`
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}
