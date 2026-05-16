// payment.js - Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// Validate payment method
export function validatePaymentMethod(method) {
  const validMethods = ['card', 'upi', 'cod'];
  return validMethods.includes(method.toLowerCase());
}

// Generate random order ID
function generateOrderId() {
  return 'ORD' + Date.now();
}

// Process Payment
export function processPayment(paymentMethod, couponCode = null) {
  const items = getCartItems();
  if (items.length === 0) {
    return {
      status: 'failed',
      message: 'Cart is empty. Add items before payment.'
    };
  }

  // 1. Get subtotal
  const subtotal = getCartTotal();

  // 2. Apply discount if coupon provided
  let discount = 0;
  let finalTotal = subtotal;
  let discountMessage = '';
  if (couponCode) {
    const discountResult = applyDiscount(subtotal, couponCode, items);
    discount = discountResult.discount;
    finalTotal = discountResult.finalTotal;
    discountMessage = discountResult.message;
  }

  // 3. Validate payment method
  if (!validatePaymentMethod(paymentMethod)) {
    return {
      status: 'failed',
      message: 'Invalid payment method. Use card, UPI, or COD.'
    };
  }

  // 4. Simulate payment processing
  // (Here we just assume payment always succeeds for simulation)
  const paymentStatus = 'success';

  // 5. Reduce stock for all items
  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  // 6. Clear cart
  clearCart();

  // 7. Generate order summary
  const orderSummary = {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount,
    total: finalTotal,
    discountMessage,
    paymentMethod,
    status: paymentStatus,
    message: 'Payment successful! Order placed.'
  };

  return orderSummary;
}