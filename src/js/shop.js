

const appContainer = document.querySelector(".flex-container-product");

async function fetchProducts() {
    const response = await fetch("../shop/shop.json");
    const products = await response.json();
    console.log(products);

    const productsHtml = products
    .map(
      (product) => `
    <a class="a-shop" href="./shop.html?id=${product.id}">
    <article class="product">
            <div class="product__image-container">
              <img class="product__image" src="../images/FEND_Coffee_Costa-Rica-2.png" alt="Kaffee aus Costa Rica">
            </div>
            <p class="bodytext__m">${product.productName}</p>
            <p class="bodytext__m--grey">${((product.price / 100).toFixed(2)) +(" €") }</p>
            <img src="../images/icon_kaffee_bohnen.svg" alt="Kaffeebohnen" class="product__icons">
            <img src="../images/icon_frenchpress.svg" alt="Frenchpress" class="product__icons">
            <img src="../images/icon_kaffee_schaufel.svg" alt="Kaffeeschaufel" class="product__icons">
          </article>
    </a>
   `
    )
    .join("");

  console.log(productsHtml);
  appContainer.innerHTML = productsHtml;
}

fetchProducts();