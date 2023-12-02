import axios from "axios";

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

export class FoodBoutiqueAPI {
    constructor() {}

    // Get categories
    async getProductCategories() {
        const { data } = await axios('/products/categories');
        return data;
    }
    async getProducts(requestParams) {
        const { data } = await axios(`/products`, {
            params: {
                ...requestParams,
            },
        });
        return data;
    }

    // Details
    async getProductDetails(productId) {
        const { data } = await axios(`/products/${productId}`);
        return data;
    }

    // Get popular products
    async getPopularProducts() {
        const { data } = await axios('/products/popular');
        return data;
    }

    // Get discount products
    async getDiscountedProducts() {
        const { data } = await axios('/products/discount');
        return data;
    }

    // Post subscription
    async subscribeToNewsletter(userData) {
        const data = await axios.post('/subscription', userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return data;
    }

    // Post orders
    async placeOrder(orderData) {
        const { data } = await axios.post('/orders', orderData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return data;
    }
}