import { markupProductsList } from './product-list';

export function renderProductList(elemRef, products) {
    elemRef.innerHTML = markupProductsList(products);
}