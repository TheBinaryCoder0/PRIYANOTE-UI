const toggle = document.getElementById('email-toggle');
toggle.addEventListener('change', function () {
  if (this.checked) {
    console.log('Email notifications enabled');
  } else {
    console.log('Email notifications disabled');
  }
});
