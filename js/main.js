let bookingForm = document.querySelector('.booking-form');
let bookingButton = document.querySelector('.booking-button');
let dateIn = document.querySelector('#date-in');
let dateOut = document.querySelector('#date-out')
let adults = document.querySelector('#adults');
let children = document.querySelector('#children');
let submitFormButton = document.querySelector('.booking-form button[type="submit"]');

let isStorageSupport = true;
let storage = "";
let storage2 = "";

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage2 = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

bookingForm.classList.add('booking-form-hidden');
bookingButton.onclick = function() {
      bookingForm.classList.toggle('booking-form-hidden');
      bookingForm.classList.toggle('booking-form-animation');
      dateIn.focus();
  if (storage) {
    adults.value = storage;
  }
  if (storage2) {
    children.value = storage2;
  }
}

bookingForm.addEventListener('submit', function(evt) {
  if (!dateIn.value || !dateOut.value || !adults.value || !children.value) {
    evt.preventDefault();
  }
  if (isStorageSupport) {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }
});
