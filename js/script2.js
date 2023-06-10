"use strict";

//ставим прослушку на все окно
window.addEventListener("click", function (event) {
  //получаем родительский элемент
  const counter = event.target.closest(".counter-wrapper");

  // если кнопка + прибавляем 1 к количеству
  if (event.target.dataset.action === "plus") {
    const quantity = counter.querySelector("[data-counter]");

    quantity.innerText = +quantity.innerText + 1;
  }

  // если кнопка - вычитаем 1 к количеству
  if (event.target.dataset.action === "minus") {
    const quantity = counter.querySelector("[data-counter]");

    //если  это корзина и кол-во товара 1 удаляем его из корзины
    if (event.target.closest(".cart-wrapper") && quantity.innerText === "1") {
      event.target.closest(".cart-item").remove();

      //вызов функции корзины товаров
      cartFunction();
    }
    // проверяем если кол-во > 1 тогда вычитаем 1 из количества
    quantity.innerText > 1
      ? (quantity.innerText = +quantity.innerText - 1)
      : null;
  }
});
