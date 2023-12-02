import { ShopStorage } from '../local-storage';
import { FoodBoutiqueAPI } from '../bourique-api';
import Swal from 'sweetalert2';
import { openSuccessModal } from '../modal-succces'
import { updateTotalPrice } from './cart-product-list';
import { changeNumberInCart } from './cart-product-list';
import { cartVisibillity } from './cart-content';

const shopStorage = new ShopStorage('shop-storage');
const foodAPI = new FoodBoutiqueAPI();

const FormOrder = document.getElementById('subscription-form');
const cardListOrder = document.querySelector('.cart-list');
const emailInput = document.getElementById('email');



function MessageSuccessformat(message) {
  const Textsuccess = 'Order Success! ';
  const index = message.indexOf(Textsuccess);
  if (index !== -1) {
    return message.slice(index + Textsuccessxt.length);
  }
  return message;
}


FormOrder.addEventListener('submit', async (event) => {
  event.preventDefault();

  const cartItems = shopStorage.getAllProducts();
  const email = document.getElementById('email').value;

  if (cartItems && cartItems.length > 0) {
    const orderData = {
      email: email,
      products: cartItems.map(item => ({ productId: item._id, amount: 1 })),
    };

    try {
      const response = await foodAPI.placeOrder(orderData);

      if (response && response.message) {
        shopStorage.removeAllProducts();
        openSuccessModal();
        const Titlemodal = document.querySelector('.modal-success-title');
        const Messagemodal = document.querySelector('.modal-success-message');

        Titlemodal.textContent = 'Order success';

        Messagemodal.textContent = MessageSuccessformat(response.message);

        cardListOrder.innerHTML = '';
        emailInput.value = ''; 
        updateTotalPrice(0);
        changeNumberInCart(shopStorage.getAllProducts().length);
        cartVisibillity();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response.data.message,
        showConfirmButton: true,
        confirmButtonColor: '#6D8434',
        showCancelButton: false,
        customClass: {
          popup: 'small-popup',
          title: 'custom-title',
          icon: 'custom-icon',
        },
      });
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'The cart is empty. Please add products to the cart!',
      showConfirmButton: true,
      confirmButtonColor: '#6D8434',
      showCancelButton: false,
      customClass: {
        popup: 'small-popup',
        title: 'custom-title',
        icon: 'custom-icon',
      },
    });
  }
});
