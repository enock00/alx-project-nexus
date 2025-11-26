"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") || 0;

  const [method, setMethod] = useState("mpesa");
  const [phone, setPhone] = useState("");
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  function handleMpesaPay() {
    if (!phone) return alert("Enter phone number");

    alert(`STK push sent to ${phone} for Ksh ${amount}`);
  }

  function handleCardPay() {
    if (!card.number || !card.expiry || !card.cvv)
      return alert("Enter full card details");

    alert(`Card payment of Ksh ${amount} successful`);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Payment</h1>

        <div className="p-4 bg-gray-100 rounded-lg border mb-6">
          <p className="text-lg font-semibold">
            Total Amount: <span className="text-blue-600">Ksh {amount}</span>
          </p>
        </div>

        {/* Payment Method Selection */}
        <h2 className="text-lg font-semibold mb-3">Choose Payment Method</h2>

        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setMethod("mpesa")}
            className={`py-2 px-4 rounded-lg border ${
              method === "mpesa"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            M-Pesa
          </button>

          <button
            onClick={() => setMethod("card")}
            className={`py-2 px-4 rounded-lg border ${
              method === "card"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Card Payment
          </button>
        </div>

        {/* M-Pesa Form */}
        {method === "mpesa" && (
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Pay with M-Pesa</h3>

            <input
              type="text"
              placeholder="Enter M-Pesa phone number"
              className="w-full border rounded-lg p-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              onClick={handleMpesaPay}
              className="w-full bg-green-600 text-white py-3 rounded-lg"
            >
              Pay Ksh {amount}
            </button>
          </div>
        )}

        {/* Card Form */}
        {method === "card" && (
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Card Payment</h3>

            <input
              type="text"
              placeholder="Card Number"
              className="w-full border rounded-lg p-3"
              value={card.number}
              onChange={(e) => setCard({ ...card, number: e.target.value })}
            />

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Expiry (MM/YY)"
                className="w-1/2 border rounded-lg p-3"
                value={card.expiry}
                onChange={(e) => setCard({ ...card, expiry: e.target.value })}
              />

              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 border rounded-lg p-3"
                value={card.cvv}
                onChange={(e) => setCard({ ...card, cvv: e.target.value })}
              />
            </div>

            <button
              onClick={handleCardPay}
              className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
              Pay Ksh {amount}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
