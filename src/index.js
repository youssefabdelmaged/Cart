const validateUserIsExist = () => {
  if (!localStorage.getItem("email")) {
    window.location.href = "login.html";
  }
};
validateUserIsExist();

const cartButton = document.getElementById("cartButton");
const cart = document.getElementById("cart");
const closeCart = document.getElementById("closeCart");
const list = document.getElementById("list");
const cartList = document.getElementById("cartList");

cartButton.addEventListener("click", () => {
  cart.classList.add("left-[calc(100%-500px)]");
});
closeCart.addEventListener("click", () => {
  cart.classList.remove("left-[calc(100%-500px)]");
});

const products = [
  {
    id: 1,
    name: "Apple Watch Series 10",
    price: 400,
    img: "./images/watch-card-40-s10-202409.jpg",
  },
  {
    id: 2,
    name: "Apple Watch Ultra 2",
    price: 800,
    img: "./images/watch-card-40-ultra2-202409.jpg",
  },
  {
    id: 3,
    name: "Apple Watch Hermès Ultra 2",
    price: 250,
    img: "./images/watch-card-40-se-202409.jpg",
  },
  {
    id: 4,
    name: "Apple Watch Hermès Ultra 2",
    price: 250,
    img: "./images/watch-card-40-se-202409.jpg",
  },
  {
    id: 5,
     name: "Apple Watch Hermès Ultra 2",
    price: 500,
    img: "./images/watch-card-40-hermes-ultra-202409.jpg",
  },
  {
    id: 6,
    name: "Apple Watch Hermès Ultra 2",
    price: 250,
    img: "./images/watch-card-40-se-202409.jpg",
  },
];

let ListCard = [];

const init = () => {
  products.forEach((value, key) => {
    let newli = document.createElement("li");
    newli.innerHTML = `
    <div
            class="w-full max-w-sm bg-white border border-gray-200 rounded-lg drop-shadow-lg   dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                class="p-8 rounded-t-lg"
                src="${value.img}"
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5
                  class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                ${value.name}
                </h5>
              </a>
            
              <div class="flex items-center justify-between mt-4">
                <span class="text-3xl font-bold text-gray-900 dark:text-white"
                  >${value.price.toLocaleString()}$</span
                >
                <button
                onclick = "addtocart(${key})"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >Add to cart</button>
              </div>
            </div>
          </div>
    `;
    list.appendChild(newli);
  });
};
init();

const addtocart = (key) => {
  if (ListCard[key] == null) {
    ListCard[key] = products[key];
    ListCard[key].quantity = 1;
  }
  reloadCard();
  saveData();

};

let totalprice = 0;

const reloadCard = () => {
  totalprice = 0;
  cartList.innerHTML = "";
  ListCard.forEach((value, key) => {
    totalprice += value.price * value.quantity;
    if (value != null) {
      let newcartli = document.createElement("li");
      newcartli.innerHTML = `
   <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 my-3">
        <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
          <a href="#" class="w-20 shrink-0 md:order-1">
            <img class="h-20 w-20 dark:hidden" src="${
              value.img
            }" alt="imac image" />
          </a>

          <label for="counter-input" class="sr-only">Choose quantity:</label>
          <div class="flex items-center justify-between md:order-3 md:justify-end">
            <div class="flex items-center">
              <button onclick="changeQuantity(${key},${
        value.quantity - 1
      })" type="button" id="decrement-button-5" data-input-counter-decrement="counter-input-5" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                </svg>
              </button>
              <input type="text" id="counter-input-5" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value=${
                value.quantity
              } required />
              <button  onclick="changeQuantity(${key},${
        value.quantity + 1
      })" type="button" id="increment-button-5" data-input-counter-increment="counter-input-5" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </button>
            </div>
            <div class="text-end md:order-4 md:w-32">
              <p class="text-base font-bold text-gray-900 dark:text-white">
              $${totalprice.toLocaleString()}</p>
            </div>
          </div>

          <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
            <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">${
              value.name
            }</a>

            <div class="flex items-center gap-4">
             

              <button  onclick="remove(${key})" type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      `;
      cartList.appendChild(newcartli);
    }
  });
};

const remove = (key) => {
  delete ListCard[key];
  reloadCard();
  saveData()
};

const changeQuantity = (key, quantity) => {
  if (quantity < 1) {
    quantity = 1;
  }
  ListCard[key].quantity = quantity;
  reloadCard();
  saveData()
};

const saveData = () => {
  localStorage.setItem("data", JSON.stringify(ListCard));
};

const getData = () => {
  if(!localStorage.getItem('data').length ==0){

    ListCard = JSON.parse(localStorage.getItem("data"));
    reloadCard()
  }
};
getData()