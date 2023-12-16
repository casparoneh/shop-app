"use client";

import React, { useState } from "react";

const FaqAccordion = () => {
  const [faqData, setFaqData] = useState([
    {
      id: 1,
      title: "What is the average price of homes in this area?",
      content:
        "The average price of homes in this area varies depending on location and other factors. It's best to consult with a local real estate agent for current market trends.",
    },
    {
      id: 2,
      title: "How do I find a real estate agent?",
      content:
        "You can find a real estate agent by searching online, asking for recommendations from friends and family, or contacting a local real estate agency.",
    },
    {
      id: 3,
      title: "What is a down payment?",
      content:
        "A down payment is an upfront payment made when purchasing a home. It's a percentage of the total purchase price and is typically required by lenders.",
    },
    {
      id: 4,
      title: "How do I get pre-approved for a mortgage?",
      content:
        "To get pre-approved for a mortgage, you'll need to provide financial information to a lender. They will evaluate your creditworthiness and determine how much you can borrow.",
    },
    {
      id: 5,
      title: "What is a home inspection?",
      content:
        "A home inspection is a thorough examination of a property's condition. It helps identify any potential issues or needed repairs before buying a home.",
    },
    {
      id: 6,
      title:
        "What is the difference between a fixed-rate and adjustable-rate mortgage?",
      content:
        "A fixed-rate mortgage has a stable interest rate throughout the loan term, while an adjustable-rate mortgage may have a variable interest rate that can change over time.",
    },
    {
      id: 7,
      title: "How long does the home buying process take?",
      content:
        "The home buying process's duration can vary, but it typically takes several weeks to a few months, depending on factors like market conditions and loan approval.",
    },
    {
      id: 8,
      title: "What is a closing cost?",
      content:
        "Closing costs are fees associated with the final stages of the home purchase, including legal fees, taxes, and other expenses. Buyers and sellers may share these costs.",
    },
    {
      id: 9,
      title: "What is a real estate appraisal?",
      content:
        "A real estate appraisal is an evaluation of a property's value conducted by a licensed appraiser. It helps determine the property's worth in the market.",
    },
    {
      id: 10,
      title: "How can I negotiate the price of a home?",
      content:
        "Negotiating the price of a home involves making an offer, considering market conditions, and working with your real estate agent to reach an agreement with the seller.",
    },
  ]);

  const [openItem, setOpenItem] = useState(-1);

  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(-1);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4  py-20">
      
      <h1 className="text-3xl text-black font-bold text-center mb-12">
        QA
      </h1>
      {faqData.map((item, index) => {
        return (
          <div key={item.id} className="mb-4">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between bg-white p-4 rounded-md shadow-md focus:outline-none"
              aria-expanded={openItem === index}
              aria-controls={`faq-content-${index}`}
            >
              <div className="font-semibold">{item.title}</div>
              <div className="text-slate-700 text-xl">
                {openItem === index ? "-" : "+"}
              </div>
            </button>
            {openItem === index && (
              <div
                className="bg-white p-4 rounded-md shadow-md mt-4 text-gray-600"
                id={`faq-content-${index}`}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;

