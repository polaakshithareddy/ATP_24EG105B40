// discount.js - Coupon and discount logic

// Available coupons
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};


// Validate Coupon
export function validateCoupon(couponCode, cartTotal, cartItems) {

  // 1. Check if coupon exists
  const coupon = coupons[couponCode];
  if (!coupon) {
    return { valid: false, message: "Invalid coupon code." };
  }

  // 2. Check minimum amount requirement
  if (cartTotal < coupon.minAmount) {
    return {
      valid: false,
      message: `Minimum order amount should be ₹${coupon.minAmount} to use this coupon.`
    };
  }

  // 3. Check category requirement (if any)
  if (coupon.category) {
    const hasCategoryItem = cartItems.some(
      item => item.category === coupon.category
    );

    if (!hasCategoryItem) {
      return {
        valid: false,
        message: `This coupon is only valid for ${coupon.category} items.`
      };
    }
  }

  return { valid: true, message: "Coupon applied successfully!" };
}


// Calculate Discount
export function calculateDiscount(couponCode, cartTotal) {
  const coupon = coupons[couponCode];

  if (!coupon) return 0;

  if (coupon.type === "percentage") {
    return (cartTotal * coupon.value) / 100;
  }

  if (coupon.type === "flat") {
    return coupon.value;
  }

  return 0;
}


// Apply Discount
export function applyDiscount(cartTotal, couponCode, cartItems) {

  // 1. Validate coupon
  const validation = validateCoupon(couponCode, cartTotal, cartItems);

  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }

  // 2. Calculate discount
  const discountAmount = calculateDiscount(couponCode, cartTotal);

  // 3. Final total after discount
  const finalTotal = cartTotal - discountAmount;

  return {
    originalTotal: cartTotal,
    discount: discountAmount,
    finalTotal: finalTotal,
    message: "Discount applied successfully!"
  };
}