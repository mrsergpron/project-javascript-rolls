"use strict";

//контейнер для заказов
const cartGoogs = document.querySelector(".cart-wrapper");
//форма заказа
const orderForm = document.querySelector("#order-form");
//надпись "корзина пуста"
const cartEmpty = document.querySelector("[data-cart-empty]");

function cartFunction() {
  //если товар в корзине, скрываем надпись "корзина пуста" и форму заказа
  if (cartGoogs.children.length > 0) {
    //скроем форму заказа и надпись "корзина пуста"
    cartEmpty.classList.add("none");
    orderForm.classList.remove("none");
  }
  //если товара нет корзине, покажем надпись "корзина пуста" и форму заказа
  else {
    cartEmpty.classList.remove("none");
    orderForm.classList.add("none");
  }
}
