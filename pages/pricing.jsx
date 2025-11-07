import PricingCard from "../components/PricingCard";

export default function PricingPage() {
  const plans = [
    {
      title: "Entry",
      price: 19,
      bullets: ["3–6 sec videos", "Basic templates", "Lifetime single-tier access"],
      paypalLink: "https://www.paypal.com/ncp/payment/2X583XDXBYUPN",
      paystackLink: "https://paystack.shop/pay/ge2324r8fu"
    },
    {
      title: "Pro",
      price: 49,
      bullets: ["30 sec – 1 min", "Priority queue", "More templates"],
      paypalLink: "https://www.paypal.com/ncp/payment/DVSZY7GB2QCYW",
      paystackLink: "https://paystack.shop/pay/uli4nrj8xq"
    },
    {
      title: "Diamond",
      price: 449,
      bullets: ["1–3 min", "Faster processing", "Commercial license"],
      paypalLink: "https://www.paypal.com/ncp/payment/S77ESJWSU79JU",
      paystackLink: "https://paystack.shop/pay/4u6jdu7eft"
    },
    {
      title: "Lifetime",
      price: 999,
      bullets: ["Unlimited generation", "VIP support", "Future updates"],
      paypalLink: "https://www.paypal.com/ncp/payment/K4Y9SVNW76XYU",
      paystackLink: "https://paystack.shop/pay/-cdm6oobkz"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-extrabold text-gold-500 mb-6">Kairah Studio — Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((p) => <PricingCard key={p.title} plan={p} />)}
      </div>
    </div>
  );
}
