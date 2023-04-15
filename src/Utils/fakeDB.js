//  common function id set in local function

const addToDb = (id) => {
  // localStorage.setItem('shoppingCart', id)
  let shoppingCart = {};

  // get Previous data From local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  // add local storage
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// get stored from cart

const getStoredCart = () => {
  let shoppingCart = {};

  // get Previous data From local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

// Remove a specific element from local storage
const removeFromDb = (id) => {
  // get Previous data From local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};


// clear data found local storage
const deleteShoppingCart =() => localStorage.removeItem('shopping-cart')

export { addToDb, getStoredCart,removeFromDb, deleteShoppingCart };
