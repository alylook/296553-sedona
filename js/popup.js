
  var searchbutton = document.querySelector(".search-button");
  var popup = document.querySelector(".search-form");
  var checkin = popup.querySelector("[name=search-checkindate]");
  var checkout = popup.querySelector("[name=search-checkoutdate]");
  var adults = popup.querySelector("[name=search-adults]");
  var kids = popup.querySelector("[name=search-children]");
  var storage = localStorage.getItem("checkin");
  popup.classList.add("search-form-show");
  searchbutton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("search-form-show");
    checkin.focus();
    if (storage) {
      checkin.value = storage;
      checkout.focus();
    }
    else {
      checkin.focus();
    }
  });
  popup.addEventListener("submit", function (evt) {
    if ((!checkin.value) || (!checkout.value)) {
      evt.preventDefault();
      popup.classList.remove("search-form-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("search-form-error");
    }
    else {
      localStorage.setItem("checkin", checkin.value);
    }
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("search-form-show")) {
        popup.classList.remove("search-form-show");
      }
    }
  });

