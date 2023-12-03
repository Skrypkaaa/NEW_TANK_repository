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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15.625 5.6832L14.3168 4.375L10 8.6918L5.6832 4.375L4.375 5.6832L8.6918 10L4.375 14.3168L5.6832 15.625L10 11.3082L14.3168 15.625L15.625 14.3168L11.3082 10L15.625 5.6832Z" fill="#010101"/>
</svg>
                           
                    </button>
                    </li>`;
    })
    .join('');
}

// <svg class="cart-icon-close">
//     <use href="../img/icons-tank.svg#icon-close"></use>
// </svg>
