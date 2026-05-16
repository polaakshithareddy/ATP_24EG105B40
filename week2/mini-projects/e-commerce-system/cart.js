 // cart.js - Shopping cart operations
import { getProductById, checkStock } from './product.js';

let cartItems = [];

// Add product to cart
export function addToCart(productId, quantity) {
  const product = getProductById(productId);

  if (!product) {
    return { success: false, message: "Product not found." };
  }

  // Check stock availability
  if (!checkStock(productId, quantity)) {
    return { success: false, message: `Only ${product.stock} items available in stock.` };
  }

  // Check if product already in cart
  const existingItem = cartItems.find(item => item.product.id === productId);
  if (existingItem) {
    const newQuantity = existingItem.quantity + quantity;

    if (!checkStock(productId, newQuantity)) {
      return { success: false, message: `Cannot add ${quantity} more. Only ${product.stock - existingItem.quantity} items left.` };
    }

    existingItem.quantity = newQuantity;
  } else {
    cartItems.push({ product, quantity });
  }

  return { success: true, message: `${product.name} added to cart.` };
}

// Remove product from cart
export function removeFromCart(productId) {
  const index = cartItems.findIndex(item => item.product.id === productId);

  if (index === -1) {
    return { success: false, message: "Product not in cart." };
  }

  const removedItem = cartItems.splice(index, 1)[0];
  return { success: true, message: `${removedItem.product.name} removed from cart.` };
}

// Update quantity of a product
export function updateQuantity(productId, newQuantity) {
  const item = cartItems.find(item => item.product.id === productId);

  if (!item) {
    return { success: false, message: "Product not in cart." };
  }

  if (newQuantity <= 0) {
    return removeFromCart(productId);
  }

  if (!checkStock(productId, newQuantity)) {
    return { success: false, message: `Only ${item.product.stock} items available in stock.` };
  }

  item.quantity = newQuantity;
  return { success: true, message: `${item.product.name} quantity updated to ${newQuantity}.` };
}

// Get all cart items with product details
export function getCartItems() {
  return cartItems.map(item => ({
    id: item.product.id,
    name: item.product.name,
    price: item.product.price,
    quantity: item.quantity,
    total: item.product.price * item.quantity,
    category: item.product.category
  }));
}

// Get total price of all items in cart
export function getCartTotal() {
  return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

// Clear the cart
export function clearCart() {
  cartItems = [];
  return { success: true, message: "Cart cleared successfully." };
}