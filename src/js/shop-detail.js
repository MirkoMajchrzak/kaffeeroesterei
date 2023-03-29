const appContainer = document.querySelector(".shop-detail");
// load everything into this classnamed container
async function getProductFromUrl() {
    // fetch all products from json
    const response = await fetch("../shop/shop.json");
    const products = await response.json();
    // fetch specific product id from url
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    // filter all products for product from id
    const product = products.filter(product => {
        if(product.id==productId) {
            return product;
        }
    })[0];
    console.log(product);
    // render product in detail page
    const productHTML = `
    <div class="detail-image">
          <img src="../images/FEND_Coffee_Costa-Rica-2.png" alt="Kaffee aus Costa Rica" class="detail-image__img">
        </div>
        
        <section class="detail-info">
          <div class="detail-info__text">
            <h2 class="h2__m">${product.productName}</h2>
            <p class="subhead__m--black">${product.price}</p>
            <p class="body-text__m">${product.description}</p>

          </div>
          </section>
    `;
  console.log(products);
  appContainer.innerHTML = productHTML;
};

getProductFromUrl();