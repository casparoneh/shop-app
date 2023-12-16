"use client";

import { useState } from "react";

const TermsCondition = () => {
  const [termsCondition, setTermsCondition] = useState([
    {
      id: 1,
      title: "Introduction and Acceptance of Terms",
      content:
        "Begin by introducing your terms and conditions and clearly state that by using your website, users agree to comply with these terms. Explain that these terms are legally binding and govern the user's relationship with your website.",
    },
    {
      id: 2,
      title: "User Responsibilities",
      content:
        "Define the responsibilities and obligations of users while using your website. This can include rules about user-generated content, prohibited activities, and compliance with applicable laws and regulations.",
    },
    {
      id: 3,
      title: "Intellectual Property Rights",
      content:
        "Specify who owns the intellectual property (e.g., trademarks, copyrights) associated with your website's content, and explain how users are allowed to use or share this content. Make it clear that unauthorized use or reproduction is prohibited.",
    },
    {
      id: 4,
      title: "Payment Terms (if applicable)",
      content:
        "If your website offers products or services for purchase, detail the payment terms, including pricing, payment methods, billing cycles, and any applicable taxes or fees. Also, clarify your refund or cancellation policy if applicable.",
    },
    {
      id: 5,
      title: "Privacy Policy Reference",
      content:
        "Include a reference to your privacy policy and make it clear that users should review it to understand how their personal information is collected, used, and protected.",
    },
    {
      id: 6,
      title: "Limitations of Liability",
      content:
        "Describe any disclaimers or limitations of liability, such as the exclusion of certain warranties or the extent of your liability for any damages incurred while using the website.        ",
    },
    {
      id: 7,
      title: "Termination of Services",
      content:
        "Explain the circumstances under which you can terminate a user's access to your website, including violations of your terms and conditions or for any other legitimate reason.",
    },
    {
      id: 8,
      title: "Governing Law and Dispute Resolution",
      content:
        "Specify the jurisdiction and laws that govern your terms and conditions. Outline the process for resolving disputes, which may include arbitration, mediation, or litigation.",
    },
  ]);

  return (
    <section className="container mx-auto px-2  py-20">
      <h1 className="text-3xl text-black font-bold text-center mb-12">
        TERMS AND CONDITIONS
      </h1>

      <div className="flex flex-col gap-6">
        {termsCondition.map((tc, index) => {
          return (
            <div key={index} className="flex">
              <h1 className="text-black font-bold text-2xl">{tc.id}.</h1>
              <div className="ml-2 md:ml-4">
                <h1 className="text-black font-bold text-2xl">
                  {tc.title}
                </h1>
                <p className="text-gray-600 mt-2">{tc.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default TermsCondition;