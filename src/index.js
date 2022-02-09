import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CryptoCurrency from "./js/crypto.js";

function clearFields() {
  $("#currency").val("");
  $(".showErrors").text("");
  $(".show-bitcoin").text("");
  $(".show-ethereum").text("");
  $(".show-cardano").text("");
  $(".show-polkadot").text("");
  $(".show-polygon").text("");
}

function getElements(response) {
  if (response) {
    $(".show-bitcoin").html(
      `<td>${response[0].id}</td>
      <td>${response[0].name}</td>
      <td>${response[0].price}</td>
      <td>${response[0]["1d"].price_change}</td>
      <td>${response[0]["1d"].volume}</td>
      <td>${response[0].market_cap}</td>`
    );
    $(".show-ethereum").html(
      `<td>${response[1].id}</td>
        <td>${response[1].name}</td>
        <td>${response[1].price}</td>
        <td>${response[1]["1d"].price_change}</td>
        <td>${response[1]["1d"].volume}</td>
        <td>${response[1].market_cap}</td>`
    );
    $(".show-cardano").html(
      `<td>${response[2].id}</td>
        <td>${response[2].name}</td>
        <td>${response[2].price}</td>
        <td>${response[2]["1d"].price_change}</td>
        <td>${response[2]["1d"].volume}</td>
        <td>${response[2].market_cap}</td>`
    );
    $(".show-polkadot").html(
      `<td>${response[3].id}</td>
        <td>${response[3].name}</td>
        <td>${response[3].price}</td>
        <td>${response[3]["1d"].price_change}</td>
        <td>${response[3]["1d"].volume}</td>
        <td>${response[3].market_cap}</td>`
    );
    $(".show-polygon").html(
      `<td>${response[4].id}</td>
        <td>${response[4].name}</td>
        <td>${response[4].price}</td>
        <td>${response[4]["1d"].price_change}</td>
        <td>${response[4]["1d"].volume}</td>
        <td>${response[4].market_cap}</td>`
    );
  } else {
    $(".show-errors").text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await CryptoCurrency.getCurrency();
  getElements(response);
}

$(document).ready(function () {
  $("#ticker-request").click(function () {
    clearFields();
    makeApiCall();
  });
});
