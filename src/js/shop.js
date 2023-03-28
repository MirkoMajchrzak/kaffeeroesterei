

const appContainer = document.querySelector("#app");

async function fetchProducts() {
    const response = await fetch("../shop/shop.json");
    const products = await response.json();
    console.log(products);

    const productsHtml = products
    .map(
      (product) => `
    <a href="shop.html?id=${product.id}">
     <article>
       <h3 class="title--blue">${product.productName}</h3>
       <img src="https://images.unsplash.com/photo-1484994211335-48e240f0d140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
       <div>${product.price}</div>
     </article>
    </a>
   `
    )
    .join("");

  console.log(productsHtml);
  appContainer.innerHTML = productsHtml;
}

fetchProducts();