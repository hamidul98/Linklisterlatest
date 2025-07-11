import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Linklister work?",
      answer: "Linklister scans your WordPress site to identify all internal and external links, then provides analytics and insights through an intuitive dashboard. It connects via API to sync data and offer real-time monitoring."
    },
    {
      question: "Does it work on any WordPress site?",
      answer: "Yes, Linklister works on any WordPress site regardless of theme or hosting provider. It integrates seamlessly with your existing WordPress admin dashboard."
    },
    {
      question: "What can I do with the free trial?",
      answer: "The free trial gives you full access to all features including link scanning, analytics dashboard, broken link detection, and CSV export for 7 days."
    },
    {
      question: "Can I use Linklister on a large website?",
      answer: "Absolutely! Linklister is designed to handle websites of all sizes, from small blogs to large enterprise sites with thousands of pages and links."
    },
    {
      question: "Will it work on sites built with page builders?",
      answer: "Yes, Linklister works with all popular page builders including Elementor, Divi, Beaver Builder, and others. It analyzes the final rendered content."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 7-day free trial with full access to all features. No credit card required to start."
    },
    {
      question: "What makes Linklister different?",
      answer: "Linklister is specifically designed for WordPress with automatic link detection, real-time sync, broken link alerts, and a modern admin interface that integrates perfectly with your WordPress dashboard."
    },
    {
      question: "How is pricing structured?",
      answer: "We offer flexible pricing based on the number of sites and features you need. All plans include the core link analysis features with different limits and advanced options."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Got Questions?
          </h2>
          <p className="text-xl text-gray-600">
            In our FAQ section, you can find answers to all the pressing questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-600" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;