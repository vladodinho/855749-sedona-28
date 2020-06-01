let bookingForm = document.querySelector('.booking-form');
let bookingButton = document.querySelector('.booking-button');
bookingForm.style.display = 'none';
bookingButton.onclick = function() {
      if (bookingForm.style.display === 'none') {
      bookingForm.style.display = 'flex';
      bookingForm.style.animationName = 'form';
    }
      else {
        bookingForm.style.display = 'none';
      }
    }
