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
    // render product in detail page
};

fetchProducts();