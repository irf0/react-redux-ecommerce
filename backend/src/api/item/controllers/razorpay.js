const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = {
  async createOrder(ctx) {
    const { amount, currency, notes } = ctx.request.body;

    const options = {
      amount: amount * 100,
      currency,
      notes,
    };

    const order = await razorpay.orders.create(options);

    return { orderId: order.id };
  },

  async verifyPayment(ctx) {
    const { paymentId, orderId } = ctx.request.body;

    const payment = await razorpay.payments.fetch(paymentId);

    if (payment.order_id !== orderId) {
      ctx.throw(400, "Order ID and payment ID mismatch");
    }

    if (payment.status !== "captured") {
      ctx.throw(400, "Payment not successful");
    }

    return { message: "Payment successful" };
  },
};
