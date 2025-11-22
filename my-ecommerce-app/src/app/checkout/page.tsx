export default function CheckoutPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 border rounded"
        />

        <button className="bg-blue-600 text-white w-full p-3 rounded-lg shadow
                           hover:bg-blue-700 transition">
          Place Order
        </button>
      </form>
    </div>
  );
}
