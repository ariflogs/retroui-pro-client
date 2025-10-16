"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Text } from "@/components/retroui/Text";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSectionThree() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click the 'Sign Up' button in the top right corner of our homepage. Fill out the required information and follow the verification steps sent to your email.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoicing options.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll continue to have access until the end of your billing period.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial on all our plans. No credit card is required to start your trial, and you can upgrade to a paid plan at any time.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "Our customer support team is available 24/7. You can reach us through live chat on our website, email at support@example.com, or call us at (555) 123-4567.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 bg-[#f5f3e8]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <Text as="h2" className="mb-2">
            Frequently Asked Questions
          </Text>
          <Text className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products and services.
          </Text>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 border-4 border-black transition-all duration-200 ease-in bg-white ${openIndex === index ? "shadow-lg" : "shadow-md"}`}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left font-bold text-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                  size={24}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-5 border-t-2 border-dashed border-black pt-4">
                  <Text className="text-muted-foreground">{faq.answer}</Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
