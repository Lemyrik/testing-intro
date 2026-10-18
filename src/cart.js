function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) throw new RangeError();
  const item = cart.find((p) => p.id === product.id);
  const newQuantity = item ? item.quantity + quantity : quantity;

  if (newQuantity > product.stock) throw new RangeError();

  if (item) {
    return cart.map((p) =>
      p.id === product.id ? { ...p, quantity: newQuantity } : p,
    );
  } else {
    return [...cart, { ...product, quantity: quantity }];
  }
}
function changeQuantity(cart, id, quantity) {
  if (quantity <= 0 || quantity > cart.find((p) => p.id === id)?.stock)
    throw new RangeError();
  return cart.map((p) => (p.id === id ? { ...p, quantity } : p));
}
function removeFromCart(cart, id) {
  return cart.filter((p) => p.id !== id);
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
