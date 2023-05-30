import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">PRIVACY POLICY</h2>
      <h3 className="text-xl font-bold mb-2">PRIVACY STATEMENT</h3>
      <section className="mb-6">
        <h4 className="text-lg font-bold mb-2">
          SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
        </h4>
        <p className="mb-2">
          When you purchase something from our website, as part of the buying
          and selling process, we collect the personal information you give us
          such as your name, address, and email address.
        </p>
        <p className="mb-2">
          When you browse our website, we also automatically receive your
          computer’s internet protocol (IP) address in order to provide us with
          information that helps us learn about your browser and operating
          system.
        </p>
        <p className="mb-2">
          Email marketing (if applicable): With your permission, we may send you
          emails about our affiliated brands, new products, and other updates.
        </p>
      </section>
      <section className="mb-6">
        <h4 className="text-lg font-bold mb-2">
          SECTION 9 - CHANGES TO THIS PRIVACY POLICY
        </h4>
        <p className="mb-2">
          We reserve the right to modify this privacy policy at any time, so
          please review it frequently. Changes and clarifications will take
          effect immediately upon their posting on the website. If we make
          material changes to this policy, we will notify you here that it has
          been updated, so that you are aware of what information we collect,
          how we use it, and under what circumstances, if any, we use and/or
          disclose it.
        </p>
        <p className="mb-2">
          If our website is acquired or merged with another company, your
          information may be transferred to the new owners so that we may
          continue to sell products to you.
        </p>
      </section>
      <section>
        <h4 className="text-lg font-bold mb-2">
          QUESTIONS AND CONTACT INFORMATION
        </h4>
        <p className="mb-2">
          If you would like to: access, correct, amend or delete any personal
          information we have about you, register a complaint, or simply want
          more information, contact our Privacy Compliance Officer at{" "}
          <a href="help@soloto.com">help@soloto.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
