const openCart = () => {
    const cartDiv = document.createElement ("div");
    cartDiv.classList.add("cartdiv");
    document.body.append(cartDiv);
    const templateCart = `
    <h2>Test</h2>
    <span class"span">Dies ist ein Test</span>
    <button class="closeBtn" id="closeCart">X</button>`;
    const closeCart = () => {
        cartDiv.remove("cartdiv");
    };

    cartDiv.innerHTML = templateCart;
    const closeBtn = document.querySelector(".closeBtn");
    closeBtn.addEventListener("click", closeCart)
}


//Warenkorb ansprechen
const cartBtn = document.querySelector(".cartBtn");
cartBtn.addEventListener("click", openCart);

