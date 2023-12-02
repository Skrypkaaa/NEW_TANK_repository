import { cartProductMarkup } from './cart-product-markup';
import { ShopStorage } from '../local-storage';
import { cartVisibillity } from './cart-content';

let arrCarts = [];
const cartNumberProduct = document.querySelector('.number-of-product');
const navSpan = document.querySelector('.nav-span');
const totalAmount = document.querySelector('.total-amount');
const cardListOrder = document.querySelector('.cart-list');
const shopStorage = new ShopStorage('shop-storage');

cardListOrder.addEventListener('click', cartRemoveOrder);

export function changeNumberInCart(number) {
    cartNumberProduct.textContent = number;
    navSpan.textContent = number;
}

export function updateTotalPrice(total) {
  totalAmount.textContent = total.toFixed(2); 
}

const deleteAll = document.querySelector('.js-delete-all-btn');
deleteAll.addEventListener('click', () => {
  cardListOrder.innerHTML = '';
  shopStorage.removeAllProducts();
  changeNumberInCart(0);
  updateTotalPrice(0);
  cartVisibillity(); 
});

function storageChecked() {
  const getLocalCart = shopStorage.getAllProducts() ?? [];
  arrCarts = getLocalCart;
  cardListOrder.innerHTML = cartProductMarkup(arrCarts);
  changeNumberInCart(arrCarts.length);
  updateTotalPrice(arrCarts.reduce((acc, item) => acc + item.price, 0)); 
}

storageChecked();

function cartRemoveOrder(e) {
  if (!e.target.closest('.cart-product-close-btn')) return;
  const objFromLi = e.target.closest('li');
  const dataIdItem = objFromLi.dataset.id;
  const findElement = shopStorage
    .getAllProducts()
    .filter(item => item._id !== dataIdItem);
  shopStorage.setAllProduct(findElement);
  storageChecked();
  updateTotalPrice(
    findElement.reduce((acc, item) => acc + item.price, 0)
  ); 
  if (!shopStorage.getAllProducts.length) cartVisibillity();
}
