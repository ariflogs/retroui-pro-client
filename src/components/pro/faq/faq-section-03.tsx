export default function FAQSectionThree() {
  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Sign up for an account, complete your profile, and follow our quick start guide to begin using all features immediately.",
      icon: "🚀",
      color: "#ffcccb",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can request invoicing options.",
      icon: "💳",
      color: "#c1f0c1",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes! We use bank-level encryption and follow industry best practices to ensure your data is always protected.",
      icon: "🔒",
      color: "#c1e7f0",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. There are no long-term contracts, and you can cancel your subscription at any time with no penalties.",
      icon: "📅",
      color: "#f0e5c1",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee if you're not completely satisfied with our service.",
      icon: "💰",
      color: "#e5c1f0",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! We offer a 14-day free trial on all plans with no credit card required to get started.",
      icon: "🎁",
      color: "#c1f0e5",
    },
    {
      question: "How do I contact support?",
      answer:
        "Our support team is available 24/7 via chat, email, or phone for premium customers.",
      icon: "🎧",
      color: "#f0c1e7",
    },
    {
      question: "Do you offer team accounts?",
      answer:
        "Yes, our Business and Enterprise plans include team collaboration features with role-based permissions.",
      icon: "👥",
      color: "#cccbff",
    },
  ];

  return (
    <section className="w-full py-12 bg-[#f0f0f0]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight mb-2 text-[#333]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto">
            Everything you need to know about our product and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-4 border-black p-6 h-full"
              style={{
                backgroundColor: faq.color,
                boxShadow: "6px 6px 0 #000",
                transform: "rotate(" + (Math.random() * 2 - 1) + "deg)",
              }}
            >
              <div className="text-4xl mb-4">{faq.icon}</div>
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-[#333]">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div
            className="inline-block border-4 border-black bg-white px-8 py-4 font-bold text-lg"
            style={{ boxShadow: "5px 5px 0 #000" }}
          >
            Still have questions?{" "}
            <a href="#" className="underline">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
