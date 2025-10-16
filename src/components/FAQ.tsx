"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Text } from "@/components/retroui/Text";

interface FAQItem {
  question: string;
  answer: string[];
}

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What's included in RetroUI Pro?",
      answer: [
        "→ A growing collection of premium React components",
        "→ Pre-built marketing & dashboard templates",
        "→ A Figma UI kit for designers",
        "→ Lifetime access to all current and future Pro components.",
      ],
    },
    {
      question: "Who is RetroUI Pro for?",
      answer: [
        "→ Developers building React-based web apps.",
        "→ Designers looking for a unique, bold aesthetic for their projects.",
        "→ Product managers who need to build beautiful, functional dashboards.",
        "→ Anyone who loves the neo-brutalism design style!",
      ],
    },
    {
      question: "Is there a subscription fee?",
      answer: [
        "No, RetroUI Pro is a one-time purchase. Once you buy it, you’ll have lifetime access to all current and future Pro components.",
      ],
    },
    {
      question: "Do you offer refunds?",
      answer: [
        "No, we do not offer refunds. But if you have any issues with the product, please contact us at arif@retroui.dev and we'll do our best to help you.",
      ],
    },
    {
      question: "Can I customize the components?",
      answer: [
        "Absolutely! All components are built with React and TailwindCSS, making them highly customizable. You can easily adjust colors, spacing, typography, and more to match your project’s design.",
      ],
    },
    {
      question: "Can I suggest new components or features?",
      answer: ["Yes, We take feature requests and suggestions from our users."],
    },
    {
      question: "Do you offer support?",
      answer: [
        "Yes, We have a private Discord community where you can ask questions and get help from the team and other users.",
      ],
    },
    {
      question: "Do you offer PPP discounts?",
      answer: [
        "Yes, If your are from a developing country, send us an email at arif@retroui.dev with your email and country of residence. We will send you a discount code for and extra (20-50) % off.",
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Text as="h2" className="mb-2">
            Frequently Asked Questions
          </Text>
          <Text className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products and services.
          </Text>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 border-2 rounded-md transition-all duration-200 ease-in bg-white ${openIndex === index ? "shadow-lg" : "shadow-md"}`}
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
                <div className="px-5 border-t-2 border-dashed border-black pt-4 font-medium">
                  <div className="space-y-2">
                    {faq.answer.map((line, lineIndex) => (
                      <Text key={lineIndex} className="text-muted-foreground">
                        {line}
                      </Text>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
