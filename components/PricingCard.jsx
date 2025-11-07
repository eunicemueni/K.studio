import React, { useContext } from "react";
import { UserContext } from "./FirebaseAuthProvider";

export default function PricingCard({ plan }) {
  const { user } = useContext(UserContext);

  const {
    title, price, bullets, paypalLink, paystackLink
  } = plan;

  return (
    <div className="max-w-sm rounded-2xl shadow-lg bg-black border border-gray-800 text-white p-6">
      <div className="text-gold-500 text-2xl font-bold mb-2">{title}</div>
      <div className="text-4xl font-extrabold my-4">${price}</div>
      <ul className="mb-4 text-sm space-y-1">
        {bullets.map((b, i) => <li key={i}>• {b}</li>)}
      </ul>

      <div className="flex flex-col gap-3">
        <a href={paypalLink} target="_blank" rel="noreferrer" className="block text-center py-2 rounded-lg bg-gold-500 text-black font-semibold">
          Pay with PayPal
        </a>
        <a href={paystackLink} target="_blank" rel="noreferrer" className="block text-center py-2 rounded-lg border border-gold-500 text-gold-500 font-semibold">
          Pay with Paystack
        </a>
        <button className="mt-2 text-sm text-gray-300">Or pay via M-Pesa: 0113554446 (Enter tx id after payment)</button>
      </div>
    </div>
  );
}
