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
    <section class="detail-main">
      <div class="detail-image">
            <img src="../images/FEND_Coffee_Costa-Rica-2.png" alt="Kaffee aus Costa Rica" class="detail-image__img">
      </div>

      <div class="detail-textblock">    
          <div class="detail-info">
            <div class="detail-info__text">
              <h2 class="h2__m">${product.productName}</h2>
              <p class="subhead__m--black">${((product.price / 100).toFixed(2)) +(" €") }</p>
            </div>
            <div class="short-desc">
              <p class="body-text-m">${product.short}</p>
            </div>
          </div>

          <div class="dd-btn">
            <div class="dd-shop">
              <select id="amount" required name="amount" placeholder="wie viel Kaffee brauchst Du?">
                <option value="250g">250 g gemahlen</option>
                <option value="500g">500 g gemahlen</option>
                <option value="250b">250 g Bohnen</option>
                <option value="500b">500 g Bohnen</option>
            </select>
            </div>
            <div class="btn-shop">
              <input type="submit" id="sendbutton"  value="In den Warenkorb">
            </div>
          </div>

          <div class="icons-shop">
            <div class="beans">
            <img src="../images/beans-shop.svg" alt="Kaffeebohnen" class="svg-shop">
            <p class="body-text__m">Mild geröstet</p>
            </div>
            <div class="press">
              <img src="../images/press-shop.svg" alt="French Press" class="svg-shop">
              <p class="body-text__m">Für French Press</p>
            </div>
            <div class="shovel">
              <img src="../images/shovel-shop.svg" alt="Kaffeeschaufel" class="svg-shop">
              <p class="body-text__m">gemahlen oder als Bohne</p>
            </div>
          </div>
      </div>
    </section>

        <section class="description-detail">
          <h3 class="h3__m">Beschreibung</h3>
          <p class="body-text__m">${product.description}</p>
        </section>
    `;
  console.log(products);
  appContainer.innerHTML = productHTML;
};

getProductFromUrl();