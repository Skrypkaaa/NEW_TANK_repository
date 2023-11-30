export function cartProductMarkup(arr) {
    return arr
        .map(({ category, img, name, price, size, _id }) => {
            return `<li class="cart-item" data-id="${_id}">
                        <img class="cart-img-product" src="${img}" alt="${name}" />
                        <div class="cart-product-description">
                            <p class="cart-product-name">${name}</p>
                            <p class="cart-product-text">Category: <span class="cart-text-black gap">${category}</span>  Size: <span class="cart-text-black">${size}</span></p>
                            <p class="cart-product-price">$${price}</p>
                        </div>
                        <button type="button" class="cart-product-close-btn">
                            <svg class="cart-icon-close">
                                <use href="./icons-tank.svg#icon-close"></use>
                            </svg>
                    </button>
                    </li>`;
        })
    .join('');
}