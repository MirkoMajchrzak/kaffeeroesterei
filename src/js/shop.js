async function fetchProducts() {
    const response = await fetch("../shop/shop.json");
    const products = await response.json();
    console.log(products);