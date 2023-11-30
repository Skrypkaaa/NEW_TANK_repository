import { FoodBoutiqueApi } from './food-api';
import  Sweet from 'sweetalert2';

const FoodAp = new FoodBoutiqueApi();

const form = document.querySelector('form[name="E-mail"]');


form.addEventListener('submit', async function (event) {
    event.preventDefault();


    const email= event.currentTarget.elements['email'];
    const EmailValue = email.value;

    try { 
    const resp = await FoodAp.subscribeToNewsletter({ email : EmailValue});
    email.value = '';
    
    let Messag = 'Thanks for subscribing!'
    if (resp && resp.data && resp.data.message) {
        Messag = resp.data.message;
    }

    Sweet.fire({
        icon: 'good',
        title: Messag,
        showConfirmButton: true,
        confirmButtonColor: '#6D8434',
        showCanceButton: false,
        usuallyClass: {
            popup: 'small-popup',
            title: 'usually-title',
            icon: 'usually-icon',
            },
            });
    } catch (error) {
        console.error('Error:', error);
        error;

        let Messagerror = 'Error. Try again.';

        if (error.resp && error.resp.data && error.resp.data.message) {
            Messagerror = error.resp.data.message;
}

Sweet.fire({
    icon: 'error',
    title: 'Error',
    showConfirmButton: true,
    confirmButtonColor: '#6D8434',
    showCanceButton: false,
    text: Messagerror,
    usuallyClass: {
        popup: 'small-popup',
        title: 'usually-title',
        icon: 'usually-icon',
        },
    });
    }
});