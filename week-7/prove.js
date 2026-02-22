const theForm = document.querySelector('form');
const cardNumberInput = document.querySelector('#card-number');
const expMonthInput = document.querySelector('#expiration-month');
const expYearInput = document.querySelector('#expiration-year');

//validations and errors

function displayError(msg) {
    // display error message
    const errorContainer = document.querySelector('.error');
    const errorHeading = document.querySelector('.error h1');
    
    errorHeading.textContent = msg;

    if (msg !== '') {
        errorContainer.classList.add('active');
    } else {
        errorContainer.classList.remove('active');
    }
}

function isCardNumberValid(number) {
    // normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
    return number === '1234123412341234'
}

function submitHandler(event) {
    event.preventDefault();
  let errorMsg = '';
    displayError('');

  let cardNumber = document.querySelector('#card-number');
  const cardNum = cardNumber.value.replace(/\s+/g, '').trim();
  
  // Check if it's numeric and valid in one go
    
      if (!/^\d{16}$/.test(cardNum)) {
      errorMsg += 'Card number must be 16 digits\n';
      } else if (!isCardNumberValid(cardNum)) {
        errorMsg += 'Card number is not valid\n';
      }
    
    //check date
    const expYear = Number(document.querySelector('#expiration-year').value);   
    const expMonth = Number(document.querySelector('#expiration-month').value);
    const currentDate = new Date()

    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth() + 1))
    ) {
        errorMsg += 'Card is expired\n';
    }

    if (errorMsg !== '') {
        // there was an error. stop the form and display the errors.
        displayError(errorMsg)
        return;
    }
    // Success: show a confirmation message
    const formContainer = document.querySelector('form');
    formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';
}
  
document.querySelector('form').addEventListener('submit', submitHandler)