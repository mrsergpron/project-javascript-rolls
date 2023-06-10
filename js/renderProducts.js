"use strict";

const productsContainer = document.querySelector("#products-container");

//получаем данные о товарах sиз json файла

//Вариант1
//асинхронная функция
//async function getProducts() {
//try {
//делаем запрос к файлу products.json
// const response = await fetch("./js/products.json");

//получаем данные в виде массива объектов товара
// const products = await response.json();

//передаем полученные данные для рендеринга товара и вывода его на страницу
//renderProducts(products);
//} catch (error) {
//console.log(error);
//}
//}

//getProducts();

//Вариант2
fetch("./js/products.json")
  .then((response) => response.json())
  .then((products) => renderProducts(products))
  .catch((error) => console.error(error));

//добавляем товары на страницу
function renderProducts(products) {
  products.forEach((product) => {
    const productHtml = `
    <!-- Ролл -->
    <div class="col-md-6">
              <div class="card mb-4" data-id="${product.id}">
                <img class="product-img" src="img/roll/${product.imgSrc}" alt="">
                <div class="card-body text-center">
                  <h4 class="item-title">${product.title}</h4>
                  <p><small data-items-in-box class="text-muted">${product.itemsBox} шт.</small></p>
  
                  <div class="details-wrapper">
                    <div class="items counter-wrapper">
                      <div class="items__control" data-action="minus">-</div>
                      <div class="items__current" data-counter>1</div>
                      <div class="items__control" data-action="plus">+</div>
                    </div>
  
                    <div class="price">
                      <div class="price__weight">${product.weight}г.</div>
                      <div class="price__currency">${product.price} ₽</div>
                    </div>
                  </div>
  
                  <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в
                    корзину</button>
  
                </div>
              </div>
            </div>
            <!-- // Ролл -->
            `;

    productsContainer.insertAdjacentHTML("beforeend", productHtml);
  });
}
