const newsletterButton = document.querySelector('.newsletter__button');
const thankyouButton = document.querySelector('.thankyou__button');

const newsletterCard = document.querySelector('.newsletter');
const thankyouCard = document.querySelector('.thankyou');

const newsletterError = document.querySelector('.newsletter__error');
const newsletterInput = document.querySelector('.newsletter__input');

// Newsletter button click
newsletterButton.addEventListener('click', function (event) {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]');
    if (!email.checkValidity()) {
        newsletterError.classList.remove('is-hidden');
        newsletterInput.classList.add('newsletter__input--error');
        return;
    }
    const emailText = document.querySelector('.thankyou__email');
    
    newsletterCard.classList.add('is-hidden');
    thankyouCard.classList.remove('is-hidden');

    // get value
    emailText.textContent = email.value;
});

// Thankyou button click
thankyouButton.addEventListener('click', function (event) {
    event.preventDefault();
    newsletterCard.classList.remove('is-hidden');
    thankyouCard.classList.add('is-hidden');
    
    newsletterError.classList.add('is-hidden');
    newsletterInput.classList.remove('newsletter__input--error');
});
