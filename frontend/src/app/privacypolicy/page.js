"use client";

import { useState } from "react";

const PrivacyPolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState([
    {
      id: 1,
      title: "Introduction and Scope",
      content:
        "Begin by introducing your privacy policy and clearly state its purpose. Explain that it outlines how you collect, use, and protect personal information gathered from visitors to your website.",
    },
    {
      id: 2,
      title: "Information Collection",
      content:
        "Describe the types of information you collect, including personal data (such as names, email addresses, and phone numbers) and non-personal data (like IP addresses and cookies). Specify whether you collect this information directly from users or through third-party services.",
    },
    {
      id: 3,
      title: "Purpose of Data Collection",
      content:
        "Explain why you collect this data. Is it for account creation, order processing, analytics, or marketing? Be transparent about your intentions and how this data benefits both you and the user.",
    },
    {
      id: 4,
      title: "User Consent",
      content:
        "Describe how users can provide consent to data collection. Explain that by using your website, users agree to your privacy policy. Include information on how users can withdraw their consent or opt-out of certain data collection practices.",
    },

    {
      id: 5,
      title: "Data Security",
      content:
        "Highlight the security measures you have in place to protect user data. Mention encryption protocols, access controls, and any other security practices that safeguard the information you collect.",
    },
    {
      id: 6,
      title: "Data Retention and Deletion",
      content:
        "Clarify how long you retain user data and the criteria for determining data retention periods. Also, describe how users can request the deletion of their personal information.",
    },
    {
      id: 7,
      title: "Contact Information",
      content:
        "Provide a way for users to contact you or your organization regarding privacy concerns or questions. Include an email address or a contact form for inquiries related to the privacy policy.",
    },
  ]);

  return (
    <section className="container mx-auto px-2 py-20">
      <h1 className="text-3xl text-black font-bold text-center mb-12">
        PRIVACY POLICY
      </h1>

      <div className="flex flex-col gap-6">
        {privacyPolicy.map((pp, index) => {
          return (
            <div key={index} className="flex">
              <h1 className="text-black font-bold text-2xl">{pp.id}.</h1>
              <div className="ml-2 md:ml-4">
                <h1 className="text-black font-bold text-2xl">
                  {pp.title}
                </h1>
                <p className="text-gray-600 mt-2">{pp.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default PrivacyPolicy;
