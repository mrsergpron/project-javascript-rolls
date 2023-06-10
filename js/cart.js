"use strict";

const wrapper = document.querySelector(".cart-wrapper");
const cardTitle = document.querySelector(".card-title");
const cardBody = document.querySelector("[data-form]");

//клик по кнопке + в корзину
window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-cart")) {
    const cart = event.target.closest(".card");

    //формируем объект заказа
    const goods = {
      id: cart.getAttribute("data-id"),
      img: cart.querySelector(".product-img").getAttribute("src"),
      title: cart.querySelector(".item-title").innerText,
      itemsInBox: cart.querySelector(".text-muted").innerText,
      weight: cart.querySelector(".price__weight").innerText,
      currency: cart.querySelector(".price__currency").innerText,
      quality: cart.querySelector(".items__current").innerText,
    };

    //шаблон товара для корзины заказа
    const cartOrder = `	
    <div class="cart-item" data-id="${goods.id}">
    <div class="cart-item__top">
      <div class="cart-item__img">
        <img src="${goods.img}" alt="">
      </div>
      <div class="cart-item__desc">
        <div class="cart-item__title">${goods.title}</div>
        <div class="cart-item__weight">${goods.itemsInBox} / ${goods.weight}</div>

        <!-- cart-item__details -->
        <div class="cart-item__details">

          <div class="items items--small counter-wrapper">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current" data-counter="">${goods.quality}</div>
            <div class="items__control" data-action="plus">+</div>
          </div>

          <div class="price">
            <div class="price__currency">${goods.currency}</div>
          </div>

        </div>
        <!-- // cart-item__details -->

      </div>
    </div>
  </div>
  `;

    //проверяем наличие товара в корзине заказа
    const itemCart = wrapper.querySelector(`[data-id="${goods.id}"]`);

    //если есть товар в корзине товара
    if (itemCart) {
      //если он есть, тогда увеличиваем его количество
      const counter = itemCart.querySelector("[data-counter]");
      counter.innerText = parseInt(counter.innerText) + parseInt(goods.quality);

      //и возвращаем кол-во товара в карточке товара на 1
      cart.querySelector(".items__current").innerText = 1;
    }
    //если нет товара в корзине товара
    else {
      //выводим товар в корзине заказа
      this.document
        .querySelector(".cart-wrapper")
        .insertAdjacentHTML("beforeend", cartOrder);

      //и возвращаем кол-во товара в карточке товара на 1
      cart.querySelector(".items__current").innerText = 1;
    }
  }

  //вызов функции корзины товаров
  cartFunction();

  //вызов функции пересчета общей суммы корзины товаров
  calcCart();
});
