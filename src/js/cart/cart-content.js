import { ShopStorage } from '../local-storage';

const SHOP_STORAGE = 'shop-storage';
const Storageshop = new ShopStorage(SHOP_STORAGE);
const ContentcartWrap = document.querySelector('.cart-content-container');
const Cartempty = document.querySelector('.empty-cart');

cartVisibillity();

export function cartVisibillity() {
  if (Storageshop.getAllProducts().length) {
    ContentcartWrap.classList.remove('is-hidden');
    Cartempty.classList.add('is-hidden');
  } else {
    ContentcartWrap.classList.add('is-hidden');
    Cartempty.classList.remove('is-hidden');
  }
}