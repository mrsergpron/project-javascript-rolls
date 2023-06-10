"use strict";

//подсчет суммы заказа в корзине товаров
function calcCart() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const itemWrapper = cartWrapper.querySelectorAll(".cart-item");
  const totalPrice = document.querySelector(".total-price");
  const delivery = document.querySelector(".delivery-cost");
  //сумма заказа в корзине
  let sum = 0;

  itemWrapper.forEach((item) => {
    let quality = item.querySelector("[data-counter]");
    let price = item.querySelector(".price__currency");

    sum += parseInt(quality.innerText) * parseInt(price.innerText);
  });
  totalPrice.innerText = sum;

  if (
    document.querySelector(".cart-wrapper").children.length > 0 &&
    sum <= 1000
  ) {
    delivery.innerText = "500 ₽";
  } else if (
    document.querySelector(".cart-wrapper").children.length > 0 &&
    sum > 1000
  ) {
    delivery.innerText = "Бесплатно";
  } else {
    delivery.innerText = "0 ₽";
  }
}
