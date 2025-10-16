"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";

export default function FaqSectionOne() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Sign up for an account, complete your profile, and follow our quick start guide to begin using all features immediately. Our onboarding process is designed to get you up and running in less than 5 minutes.",
      icon: "🚀",
      color: "#ffcccb",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank transfers. Enterprise customers can request invoicing options. All payments are processed securely.",
      icon: "💳",
      color: "#c1f0c1",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes! We use bank-level encryption and follow industry best practices to ensure your data is always protected. Our platform employs 256-bit SSL encryption, regular security audits, and strict access controls.",
      icon: "🔒",
      color: "#c1e7f0",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. There are no long-term contracts, and you can cancel your subscription at any time with no penalties. When you cancel, you'll continue to have access until the end of your current billing period.",
      icon: "📅",
      color: "#f0e5c1",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee if you're not completely satisfied with our service. Simply contact our support team within 30 days of your purchase, and we'll process your refund with no questions asked.",
      icon: "💰",
      color: "#e5c1f0",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! We offer a 14-day free trial on all plans with no credit card required to get started. This gives you full access to all features so you can thoroughly test our platform before making a commitment.",
      icon: "🎁",
      color: "#c1f0e5",
    },
    {
      question: "How do I contact support?",
      answer:
        "Our support team is available 24/7 via chat, email, or phone for premium customers. Standard support hours are Monday through Friday, 9 AM to 8 PM Eastern Time.",
      icon: "🎧",
      color: "#f0c1e7",
    },
    {
      question: "Do you offer team accounts?",
      answer:
        "Yes, our Business and Enterprise plans include team collaboration features with role-based permissions. You can add unlimited team members, assign different access levels, and organize users into groups.",
      icon: "👥",
      color: "#cccbff",
    },
  ];

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <Text as="h2" className="mb-2">
            Frequently Asked Questions
          </Text>
          <Text className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our product and services.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                layout
                onClick={() => handleCardClick(index)}
                className={`border-4 border-black p-6 cursor-pointer relative ${isExpanded ? "shadow-lg" : "shadow-none"}`}
                style={{
                  backgroundColor: faq.color,
                  zIndex: isExpanded ? 10 : 1,
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
                animate={{
                  scale: isExpanded ? 1.1 : 1,
                }}
                transition={{
                  layout: { duration: 0.3, type: "spring" },
                  scale: { duration: 0.3 },
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{faq.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{faq.question}</h3>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: isExpanded ? 1 : 0,
                        height: isExpanded ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 border-t-2 border-dashed border-black pt-4">
                        <Text className="text-muted-foreground">
                          {faq.answer}
                        </Text>
                      </div>
                    </motion.div>
                  </div>

                  {isExpanded ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedIndex(null);
                      }}
                      className="bg-black text-white p-1 rounded-full absolute top-2 right-2 hover:bg-black/80"
                      aria-label="Close"
                    >
                      <X size={20} />
                    </button>
                  ) : (
                    <div className="text-2xl font-bold">+</div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center flex justify-center">
          <Button variant="secondary">
            Still have questions?{" "}
            <a href="#" className="underline ml-2">
              Contact us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
