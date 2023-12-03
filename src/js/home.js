import { FoodBoutiqueAPI } from './bourique-api';
import { Storage, ShopStorage } from './local-storage';
import { renderProductList } from './render-product-list';
import { renderPopularProd, renderDiscountProd } from './aside';
import { initPagination } from './pagination';
import {
  initKeywordInFilter,
  initCategoryInFilter,
  initSelectedCtgOption,
  initSortInFilter,
  initSelectedSortOption,
} from './filters';
import debounce from 'debounce';

const FILTER_STORAGE = 'filter-storage';
const CATEGORY_STORAGE = 'category-storage';
const PRODUCT_STORAGE = 'product-storage';
const POPULARITY_STORAGE = 'popularity-storage';
const DISCOUNT_STORAGE = 'discount-storage';
const SHOP_STORAGE = 'shop-storage';

const INIT_FILTER_PARAMS = {
  keyword: null,
  category: null,
  byABC: true,
  page: 1,
  limit: getPageLimit(),
};

const productListRef = document.querySelector('.product-card-list');
const popularProductListRef = document.querySelector('.popular-list');
const discountProductListRef = document.querySelector('.discount-list');
const contentWrapperRef = document.querySelector('.content-wrapper');
const spanCartRef = document.querySelector('#number-of-products');

const foodBoutique = new FoodBoutiqueAPI();
const filterStorage = new Storage(FILTER_STORAGE);
const categoryStorage = new Storage(CATEGORY_STORAGE);
const productStorage = new Storage(PRODUCT_STORAGE);
const popularityStorage = new Storage(POPULARITY_STORAGE);
const discountStorage = new Storage(DISCOUNT_STORAGE);
const shopStorage = new ShopStorage(SHOP_STORAGE);

contentWrapperRef.addEventListener('click', onButtonCartClick);
window.addEventListener('resize', debounce(onWindowResize, 250));

if (!filterStorage.getValue()) {
  filterStorage.setValue(INIT_FILTER_PARAMS);
} else {
  if (filterStorage.getValue().limit !== getPageLimit()) {
    setPageLimit();
  }
}

const filterParams = filterStorage.getValue();
initLoad(filterParams);

async function onWindowResize() {
  if (filterStorage.getValue().limit === getPageLimit()) {
    return;
  }
  setPageLimit();
  await getProducts(filterStorage.getValue());
  initPagination();
}

function getPageLimit() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    return 6;
  }

  if (
    window.matchMedia('(min-width: 768px)' && '(max-width: 1439px)').matches
  ) {
    return 8;
  }

  if (window.matchMedia('(min-width: 1440px)').matches) {
    return 9;
  }
}

function setPageLimit() {
  filterStorage.setValue({
    ...filterStorage.getValue(),
    page: 1,
    limit: getPageLimit(),
  });
}

async function initLoad(filterParams) {
  await Promise.allSettled([
    getCategories(),
    getProducts(filterParams),
    getPopularProducts(),
    getDiscountedProducts(),
  ]);
  initKeywordInFilter();
  initCategoryInFilter();
  initSelectedCtgOption();
  initSortInFilter();
  initSelectedSortOption();
  initPagination();
  setCartStateForAllProducts();
}

changeQuantityOrderedInBasket(shopStorage.getAllProducts());

async function getCategories() {
  try {
    const productCategories = await foodBoutique.getProductCategories();
    categoryStorage.setValue(productCategories);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export async function getProducts(filterParams) {
  try {
    productListRef.classList.add('js-loader');
    const products = await foodBoutique.getProducts(filterParams);
    productStorage.setValue(products);
    renderProductList(productListRef, productStorage.getValue().results);
    setCartStateForAllProducts();
  } catch (error) {
    console.log(error);
  } finally {
    productListRef.classList.remove('js-loader');
  }
}

async function getPopularProducts() {
  try {
    popularProductListRef.classList.add('js-loader');
    const popularProducts = await foodBoutique.getPopularProducts();
    popularityStorage.setValue(popularProducts);
    renderPopularProd(popularProductListRef, popularityStorage.getValue());
  } catch (error) {
    console.log(error);
  } finally {
    popularProductListRef.classList.remove('js-loader');
  }
}

async function getDiscountedProducts() {
  try {
    discountProductListRef.classList.add('js-loader');
    const discountedProducts = await foodBoutique.getDiscountedProducts();
    discountStorage.setValue(discountedProducts);
    renderDiscountProd(discountProductListRef, discountStorage.getValue());
  } catch (error) {
    console.log(error);
  } finally {
    discountProductListRef.classList.remove('js-loader');
  }
}

const LISTS_TO_INSPECT = [
  productListRef,
  popularProductListRef,
  discountProductListRef,
];

const PRODUCT_STORAGE_LIST_ID = 'product';
const POPULARITY_STORAGE_LIST_ID = 'popular';
const DISCOUNT_STORAGE_LIST_ID = 'discount';

const IN_CART = true;

const IS_ADDED_CLASS = 'is-added';
const BTN_CART_CLASS = 'js-add-btn';
const CARD_LI_CLASS = 'js-card-item';

export function setCartStateForAllProducts() {
  if (!shopStorage || !shopStorage.getAllProducts().length) {
    return;
  }
  shopStorage
    .getAllProducts()
    .map(({ _id }) => setCartStateForOneProduct(_id, IN_CART));
}

export function setCartStateForOneProduct(prodId, state) {
  const buttons = LISTS_TO_INSPECT.map(list => getButtonById(list, prodId));
  changeButtonsState(buttons, state);
}

function getButtonById(list, prodId) {
  return list.querySelector(`[data-id="${prodId}"]`)
    ? list.querySelector(`[data-id="${prodId}"]`).querySelector('.js-add-btn')
    : null;
}

function changeButtonsState(buttons, state) {
  buttons.map(btn => {
    if (!btn) {
      return;
    }
    if (state === IN_CART) {
      btn.classList.add(IS_ADDED_CLASS);
      return;
    }
    if (!state) {
      btn.classList.remove(IS_ADDED_CLASS);
      return;
    }
  });
}

function onButtonCartClick(event) {
  const { target } = event;
  if (
    !(
      target.classList.contains(BTN_CART_CLASS) ||
      target.parentNode.classList.contains(BTN_CART_CLASS) ||
      target.closest(`.${BTN_CART_CLASS}`)
    ) ||
    target.classList.contains(IS_ADDED_CLASS) ||
    target.parentNode.classList.contains(IS_ADDED_CLASS) ||
    target.closest(`.${IS_ADDED_CLASS}`)
  ) {
    return;
  }

  const prodId = target.closest(`.${CARD_LI_CLASS}`).dataset.id;
  const localStorageDataId = target.closest(`ul`).dataset.lsName;

  setCartStateForOneProduct(prodId, IN_CART);
  addProductToStorage(localStorageDataId, prodId);
}

function getProductFromStorageArr(prodDataArr, prodId) {
  const obj = prodDataArr.find(el => el._id === prodId);
  return obj;
}

function addProductToStorage(localStorageDataId, prodId) {
  let product = {};

  switch (localStorageDataId) {
    case PRODUCT_STORAGE_LIST_ID: {
      product = getProductFromStorageArr(
        productStorage.getValue().results,
        prodId
      );
      break;
    }
    case POPULARITY_STORAGE_LIST_ID: {
      product = getProductFromStorageArr(popularityStorage.getValue(), prodId);
      break;
    }
    case DISCOUNT_STORAGE_LIST_ID: {
      product = getProductFromStorageArr(discountStorage.getValue(), prodId);
      break;
    }
    default: {
      product = {};
    }
  }

  shopStorage.setProduct(product);
  changeQuantityOrderedInBasket(shopStorage.getAllProducts());
}

export function changeQuantityOrderedInBasket(arrFromLocStor) {
  let quantityOrdered = arrFromLocStor.length;
  spanCartRef.textContent = quantityOrdered;
}
