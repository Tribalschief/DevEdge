import Link from "next/link"


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 my-20 sm:my-16 md:my-20 lg:my-24 max-w-4xl">

            <PrivacyNotice />

      </div>
    </main>
  )
}

function TableOfContents() {
  return (
    <nav className="p-4 border rounded bg-gray-50 mb-6">
      <h3 className="font-semibold mb-2 text-gray-700">Table of Contents</h3>
      <ul className="space-y-1 list-disc list-inside text-blue-600">
        <li><a href="#introduction" className="hover:underline">Introduction</a></li>
        <li><a href="#information-collection" className="hover:underline">Information Collection</a></li>
        <li><a href="#use-of-information" className="hover:underline">Use of Information</a></li>
        <li><a href="#information-sharing" className="hover:underline">Information Sharing</a></li>
        <li><a href="#data-security" className="hover:underline">Data Security & Retention</a></li>
        <li><a href="#your-rights" className="hover:underline">Your Rights</a></li>
        <li><a href="#international-transfers" className="hover:underline">International Transfers</a></li>
        <li><a href="#changes-notice" className="hover:underline">Changes to this Notice</a></li>
        <li><a href="#contact-information" className="hover:underline">Contact Information</a></li>
      </ul>
    </nav>
  );
}


// --- Dev Edge Privacy Notice ---

function PrivacyNotice() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Privacy Notice</h1>
        <p className="text-sm text-gray-600">Last revised: January 23, 2025</p>
        {/* Optional: Add logo or other elements here if needed */}
         <div className="mt-4 flex justify-between items-center">
          {/* Content for the flex container if needed, e.g., version number */}
        </div>
      </div>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <TableOfContents />

        <section id="introduction">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Introduction</h2>
          <p className="mb-4">
            DevEdge-Consulting (also referred to below as "we", "us" and "our") is committed to protecting your privacy. We operate as a consulting firm with a presence in the Kingdom of Saudi Arabia (KSA), the United Arab Emirates (UAE), and Pakistan.
          </p>
          <p className="mb-4">
            This Privacy Notice explains how we collect, use, disclose, and safeguard your information when you visit our website (e.g., www.devedge.consulting) (the "Website"), use our mobile applications (if any) ("Mobile Apps"), or interact with us through other communications like newsletters or offline events that reference this Notice ("Communications"). By using the Website or Mobile Apps, or continuing to receive Communications, you agree to the collection and use of information in accordance with this Privacy Notice.
          </p>
           <p className="mb-4">
            Our Website may contain links to other websites or services not operated or controlled by DevEdge ("Third-Party Sites"). The information practices of those Third-Party Sites are not covered by this Privacy Notice. We encourage you to review the privacy policies of any Third-Party Sites you visit.
          </p>
        </section>

        <section id="information-collection">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Information Collection</h2>
          <p className="mb-4">
            We may collect personal information directly from you when you interact with our Website, Mobile Apps, or Communications. This happens, for example, when you:
          </p>
          <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
            <li>Register for an account or create a user profile.</li>
            <li>Sign up for newsletters or request information.</li>
            <li>Register for events or webinars.</li>
            <li>Respond to surveys or provide feedback.</li>
            <li>Contact us with inquiries.</li>
            <li>Apply for a job.</li>
          </ul>
          <p className="mb-4">
            The types of personal information we may collect include your name, job title, company name, email address, phone number, country/location, correspondence records, and any other information you voluntarily provide.
          </p>
          <p className="mb-4">
            If you use our Mobile Apps (where applicable), we or our service providers might also collect device-related information such as device model, operating system, unique device identifier, IP address, mobile carrier, general location, and app usage patterns. Specific data collection will depend on the app's functionality.
          </p>
          <p className="mb-4">
            We may also automatically collect certain information when you visit our Website, such as your IP address, browser type, operating system, referring URLs, pages viewed, and dates/times of visits, often using cookies and similar technologies (see our <Link href="/cookie-notice" className="text-blue-600 hover:underline">Cookie Notice</Link> for details).
          </p>
           <p className="mb-4">
             We generally do not seek to collect sensitive personal information (e.g., data related to race, religion, health, political opinions, detailed financial account information unless necessary for service payment, or biometric data) unless required by law or with your explicit consent for a specific purpose.
          </p>
        </section>

         <section id="use-of-information">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Use of Information</h2>
          <p className="mb-4">We use the information we collect for various purposes, including:</p>
          <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
             <li>To provide, operate, and maintain our Website, Mobile Apps, and services.</li>
             <li>To improve, personalize, and expand our offerings.</li>
             <li>To understand and analyze how you use our Website and services.</li>
             <li>To develop new products, services, features, and functionality.</li>
             <li>To communicate with you, including for customer service, updates, marketing, and promotional purposes (where permitted by law and subject to your preferences).</li>
             <li>To process your transactions or requests (e.g., event registrations).</li>
             <li>To find and prevent fraud.</li>
             <li>For compliance purposes, including enforcing our Terms of Use or other legal rights.</li>
          </ul>
        </section>

        <section id="information-sharing">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Information Sharing</h2>
           <p className="mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
           <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
             <li><strong>With Service Providers:</strong> We may share information with third-party vendors and service providers who perform services on our behalf (e.g., hosting, email delivery, analytics, payment processing, event management). These providers are typically obligated to protect your information.</li>
             <li><strong>Within DevEdge:</strong> Information may be shared among our entities in KSA, UAE, and Pakistan as necessary for operational, administrative, or service delivery purposes.</li>
             <li><strong>For Legal Reasons:</strong> We may disclose information if required by law, subpoena, or other legal process, or if we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.</li>
             <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization, bankruptcy, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
             <li><strong>With Your Consent:</strong> We may share your information for other purposes with your explicit consent.</li>
           </ul>
        </section>

        <section id="data-security">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Data Security & Retention</h2>
          <p className="mb-4">
            We implement reasonable administrative, technical, and physical security measures designed to protect your personal information from unauthorized access, use, alteration, or disclosure. However, no internet transmission or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>
           <p className="mb-4">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Notice, unless a longer retention period is required or permitted by law (e.g., for tax, legal, or accounting reasons).
          </p>
        </section>

         <section id="your-rights">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Your Rights</h2>
          <p className="mb-4">
            Depending on your location (KSA, UAE, Pakistan) and applicable data protection laws, you may have certain rights regarding your personal information. These rights might include:
          </p>
           <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
              <li>The right to access the personal information we hold about you.</li>
              <li>The right to request correction of inaccurate information.</li>
              <li>The right to request deletion of your personal information (subject to certain exceptions).</li>
              <li>The right to object to or restrict certain processing activities.</li>
              <li>The right to withdraw consent (where processing is based on consent).</li>
              <li>The right to data portability (in some circumstances).</li>
            </ul>
            <p className="mb-4">
             To exercise any applicable rights, please contact us using the details provided in the "Contact Information" section below. We will respond to your request in accordance with applicable laws. We will not discriminate against you for exercising your privacy rights.
            </p>
        </section>

        <section id="international-transfers">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">7. International Transfers</h2>
          <p className="mb-4">
            As DevEdge operates in KSA, UAE, and Pakistan, your personal information may be processed and stored in any of these countries, or in other locations where our service providers operate. Data protection laws in these countries may differ. We will take appropriate steps to ensure that transfers of personal information are in accordance with applicable law and are adequately protected.
          </p>
        </section>

        <section id="changes-notice">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Changes to this Privacy Notice</h2>
          <p className="mb-4">
            We may update this Privacy Notice from time to time. We will notify you of any significant changes by posting the new Privacy Notice on the Website and updating the "Last revised" date. We encourage you to review this Privacy Notice periodically for any changes.
          </p>
        </section>

        <section id="contact-information">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Contact Information</h2>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Notice or our privacy practices, please contact us at:
          </p>
          <p className="mb-1">Email: <a href="mailto:privacy@devedge.consulting" className="text-blue-600 hover:underline">privacy@devedge.consulting</a></p>
          {/* Add physical address or phone if appropriate */}
          <p>Address: [Placeholder: DevEdge Regional HQ Address, e.g., Dubai, UAE]</p>
        </section>
      </div>
    </div>
  )
}


// --- Dev Edge Terms of Use ---

