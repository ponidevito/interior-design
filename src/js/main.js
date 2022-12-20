// Custom scripts

//burger js
let burgerMenu = document.querySelector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);

// scroll

window.onscroll = function () {
  scrollFunctionTop();
  scrollFunction();
};

function scrollFunctionTop() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    document.querySelector(".topBox").classList.add("_active");
  } else {
    document.querySelector(".topBox").classList.remove("_active");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let html = document.querySelector("html");
//  search
function changeItem() {
  document.getElementById("search").classList.toggle("_active");
  document.querySelector(".img-zoom").classList.toggle("_active");
  event.stopPropagation();
}

// swiper

const swiperChair = document.querySelector(".swiper__chair");
if (swiperChair) {
  const swiper = new Swiper(".swiper__chair", {
    // If we need pagination
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },

    //   // Responsive breakpoints
    breakpoints: {
      //   // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      //   // when window width is >= 480px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

// swiper articles

const swiperArticles = document.querySelector(".swiper__articles");
if (swiperArticles) {
  const swiper = new Swiper(".swiper__articles", {
    // If we need pagination

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },

    //   // Responsive breakpoints
    breakpoints: {
      //   // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      //   // when window width is >= 480px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

// tabs

function tabs(
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "block"
) {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);
  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  function showTabContent(i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();
  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains(tabSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

tabs(".tabs__header", ".tabs__header-item", ".tabs__content-item", "active");

// window.onscroll = function () {
//   scrollFunction();
// };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header").classList.add("_active");
    document.body.classList.add("_top");
  } else {
    document.querySelector(".header").classList.remove("_active");
    document.body.classList.remove("_top");
  }
}

// open cart modal
const cart = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");
let cartEmpty = document.getElementsByClassName("product-row");

cart.addEventListener("click", () => {
  if (cartModalOverlay) {
    cartModalOverlay.style.transform = "translateX(0)";
    if (cartEmpty.length === 0) {
      document.querySelector(".cart-is-empty").style.display = "block";
    } else {
      document.querySelector(".cart-is-empty").style.display = "none";
    }
  } else {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});

// end of open cart modal

// close cart modal
const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click", () => {
  cartModalOverlay.style.transform = "translateX(-200%)";
});

cartModalOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart-modal-overlay")) {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});
// end of close cart modal

// add products to cart
const addToCart = document.getElementsByClassName("add-to-cart");
const productRow = document.getElementsByClassName("product-row");

let price = document.querySelectorAll(".add-to-cart");
price.forEach((item) => {
  let productPrice = document.querySelectorAll(".product-price");
  let productImage = document.querySelectorAll(".product-image");
  productPrice =
    item.parentElement.parentElement.parentElement.lastElementChild
      .firstElementChild.lastElementChild;
  productImage =
    item.parentElement.parentElement.parentElement.firstElementChild
      .firstElementChild;
  item.addEventListener("click", () => {
    addItemToCart(productPrice.innerHTML, productImage.src);
    updateCartPrice();
  });
});

let productRows = document.getElementsByClassName("product-rows")[0];

function addItemToCart(price, imageSrc) {
  let productRow = document.createElement("div");
  productRow.classList.add("product-row");
  let cartImage = document.getElementsByClassName("cart-image");

  for (let i = 0; i < cartImage.length; i++) {
    if (cartImage[i].src == imageSrc) {
      alert("This item has already been added to the cart");
      return;
    }
  }

  let cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <div class="product-box">
        <span class ="cart-add "> <img class="cart-minus" src="img/header/minus.svg" alt="minus"></span>
        <input class="product-quantity" type="number" value="1">
        <span class ="cart-add "><img class="cart-plus" src="img/header/plus.svg" alt="minus"></span>
        </div>
        <button class="remove-btn">Remove</button>
        </div>
        
      `;

  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow
    .getElementsByClassName("remove-btn")[0]
    .addEventListener("click", removeItem);
  productRow
    .getElementsByClassName("product-quantity")[0]
    .addEventListener("input", changeQuantity);
  updateCartPrice();
  
 
}
productRows.addEventListener("click", (event) => {
  if (event.target.classList.contains("cart-minus")) {
    let a = event.target.parentElement.parentElement.firstElementChild.nextElementSibling;
    console.log(a);
    if (parseInt(a.value) > 1) a.value = parseInt(a.value) - +1;
    updateCartPrice()

  }
  if (event.target.classList.contains("cart-plus")) {
    let b = event.target.parentElement.parentElement.firstElementChild.nextElementSibling;
    console.log(b);
    b.value = parseInt(b.value) +1;
    updateCartPrice()
  }
});


// end of add products to cart

// Remove products from cart
const removeBtn = document.getElementsByClassName("remove-btn");
for (let i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i];
  button.addEventListener("click", removeItem);
}

function removeItem(event) {
  btnClicked = event.target;
  btnClicked.parentElement.parentElement.remove();
  updateCartPrice();
}

// update quantity input
let quantityInput = document.getElementsByClassName("product-quantity")[0];

for (let i = 0; i < quantityInput; i++) {
  input = quantityInput[i];
  input.addEventListener("change", changeQuantity);
}

function changeQuantity(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartPrice();
}
// end of update quantity input

// update total price


function updateCartPrice() {
  let total = 0;
  let i = "";
  for (i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName("product-quantity")[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }

  document.getElementsByClassName("total-price")[0].innerText = "$" + total;

  document.getElementsByClassName("cart-quantity")[0].textContent = i /= 2;
}
// end of update total price

// purchase items
const purchaseBtn = document.querySelector(".purchase-btn");
const closeCartModal = document.querySelector(".cart-modal");

purchaseBtn.addEventListener("click", purchaseBtnClicked);

function purchaseBtnClicked() {
  alert("Thank you for your purchase");
  cartModalOverlay.style.transform = "translateX(-100%)";
  let cartItems = document.getElementsByClassName("product-rows")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartPrice();
}
// end of purchase items

// Menu Close

const hideMenu = (event) => {
  document.getElementById("search").classList.remove("_active");
  document.querySelector(".img-zoom").classList.remove("_active");
};

const close = (event) =>
  !document.getElementById("search").contains(event.target) && hideMenu(event);
window.addEventListener("click", close);
