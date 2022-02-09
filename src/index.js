import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CryptoCurrency from "./js/crypto.js";

// function clearFields() {
//   $("#currency").val("");
//   $(".showErrors").text("");
//   $(".show-bitcoin").text("");
//   $(".show-ethereum").text("");
//   $(".show-cardano").text("");
//   $(".show-polkadot").text("");
//   $(".show-polygon").text("");
// }

function getElements(response) {
  if (response) {
    $(".show-bitcoin").html(
      `<td>${response[0].id}</td>
      <td>${response[0].name}</td>
      <td>$${parseFloat(response[0].price)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
      <td>${(parseFloat(response[0]["1d"].price_change_pct) * 100).toFixed(
        2
      )}%</td>
      <td>${(parseFloat(response[0]["1d"].volume) / 1000000000).toFixed(
        2
      )}B</td>
      <td>$${(parseFloat(response[0].market_cap) / 1000000000).toFixed(
        2
      )}B</td>`
    );
    $(".show-ethereum").html(
      `<td>${response[1].id}</td>
        <td>${response[1].name}</td>
        <td>$${parseFloat(response[1].price)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
        <td>${(parseFloat(response[1]["1d"].price_change_pct) * 100).toFixed(
          2
        )}%</td>
        <td>${(parseFloat(response[1]["1d"].volume) / 1000000000).toFixed(
          2
        )}B</td>
        <td>$${(parseFloat(response[1].market_cap) / 1000000000).toFixed(
          2
        )}B</td>`
    );
    $(".show-cardano").html(
      `<td>${response[2].id}</td>
        <td>${response[2].name}</td>
        <td>$${parseFloat(response[1].price)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
        <td>${(parseFloat(response[2]["1d"].price_change_pct) * 100).toFixed(
          2
        )}%</td>
        <td>${(parseFloat(response[2]["1d"].volume) / 1000000000).toFixed(
          2
        )}B</td>
        <td>$${(parseFloat(response[2].market_cap) / 1000000000).toFixed(
          2
        )}B</td>`
    );
    $(".show-polkadot").html(
      `<td>${response[3].id}</td>
        <td>${response[3].name}</td>
        <td>$${parseFloat(response[3].price)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
        <td>${(parseFloat(response[3]["1d"].price_change_pct) * 100).toFixed(
          2
        )}%</td>
        <td>${(parseFloat(response[3]["1d"].volume) / 1000000000).toFixed(
          2
        )}B</td>
        <td>$${(parseFloat(response[3].market_cap) / 1000000000).toFixed(
          2
        )}B</td>`
    );
    $(".show-polygon").html(
      `<td>${response[4].id}</td>
        <td>${response[4].name}</td>
        <td>$${parseFloat(response[1].price)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
        <td>${(parseFloat(response[4]["1d"].price_change_pct) * 100).toFixed(
          2
        )}%</td>
        <td>${(parseFloat(response[4]["1d"].volume) / 1000000000).toFixed(
          2
        )}B</td>
        <td>$${(parseFloat(response[4].market_cap) / 1000000000).toFixed(
          2
        )}B</td>`
    );
  } else {
    $(".show-errors").text(`There was an error: ${response}`);
  }
}

function getUserElements(response) {
  if (response) {
    $(".show-tickers").html(
      `<td>${response[0].id}</td>
      <td>${response[0].name}</td>
      <td>$${parseFloat(response[0].price)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
      <td>${(parseFloat(response[0]["1d"].price_change_pct) * 100).toFixed(
        2
      )}%</td>
      <td>${(parseFloat(response[0]["1d"].volume) / 1000000000).toFixed(
        2
      )}B</td>
      <td>$${(parseFloat(response[0].market_cap) / 1000000000).toFixed(
        2
      )}B</td>`
    );
  } else {
    $(".show-errors").text(`There was an error: ${response}`);
  }
}

async function makeApiCall(tickers) {
  const response = await CryptoCurrency.getCurrency(tickers);
  getElements(response);
}

async function makeUserApiCall(userTickers) {
  console.log(userTickers);
  const response = await CryptoCurrency.getCurrency(userTickers);
  console.log(response);
  getUserElements(response);
}

$(document).ready(function () {
  makeApiCall("BTC,ETH,ADA,MATIC,DOT");
  $("#ticker-request").click(function () {
    let tickers = $("#ticker-input").val().toUpperCase();
    makeUserApiCall(tickers);
    $("#ticker-input").val("");
    // clearFields();
  });
});
