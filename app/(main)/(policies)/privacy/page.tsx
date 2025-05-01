import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 my-20 sm:my-16 md:my-20 lg:my-24 max-w-4xl">
        <Tabs defaultValue="privacy" className="w-full">
          <TabsList className="grid w-full grid-cols-3  mb-16">
            <TabsTrigger value="privacy">
            <span className="block sm:hidden">Privacy</span>
            <span className="hidden sm:block">Privacy Notice</span>
              </TabsTrigger>
            <TabsTrigger value="terms">
              <span className="block sm:hidden">Terms</span>
            <span className="hidden sm:block">Terms of Use</span>
            </TabsTrigger>
            <TabsTrigger value="cookie">Cookies</TabsTrigger>
          </TabsList>

          <TabsContent value="privacy" className="md:border-t lg:border-top  border-gray-300 pt-4">
            <PrivacyNotice />
          </TabsContent>

          <TabsContent value="terms" className="md:border-t lg:border-top  border-gray-300 pt-4">
            <TermsOfUse />
          </TabsContent>

          <TabsContent value="cookie" className="md:border-t lg:border-top  border-gray-300 pt-4">
            <CookieNotice />
          </TabsContent>
        </Tabs>
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
        <p className="text-sm text-gray-600">Last revised: October 26, 2023</p>
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
            Dev Edge (also referred to below as "we", "us" and "our") is committed to protecting your privacy. We operate as a consulting firm with a presence in the Kingdom of Saudi Arabia (KSA), the United Arab Emirates (UAE), and Pakistan.
          </p>
          <p className="mb-4">
            This Privacy Notice explains how we collect, use, disclose, and safeguard your information when you visit our website (e.g., www.devedge.consulting) (the "Website"), use our mobile applications (if any) ("Mobile Apps"), or interact with us through other communications like newsletters or offline events that reference this Notice ("Communications"). By using the Website or Mobile Apps, or continuing to receive Communications, you agree to the collection and use of information in accordance with this Privacy Notice.
          </p>
           <p className="mb-4">
            Our Website may contain links to other websites or services not operated or controlled by Dev Edge ("Third-Party Sites"). The information practices of those Third-Party Sites are not covered by this Privacy Notice. We encourage you to review the privacy policies of any Third-Party Sites you visit.
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
             <li><strong>Within Dev Edge:</strong> Information may be shared among our entities in KSA, UAE, and Pakistan as necessary for operational, administrative, or service delivery purposes.</li>
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
            As Dev Edge operates in KSA, UAE, and Pakistan, your personal information may be processed and stored in any of these countries, or in other locations where our service providers operate. Data protection laws in these countries may differ. We will take appropriate steps to ensure that transfers of personal information are in accordance with applicable law and are adequately protected.
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
          <p>Address: [Placeholder: Dev Edge Regional HQ Address, e.g., Dubai, UAE]</p>
        </section>
      </div>
    </div>
  )
}


// --- Dev Edge Terms of Use ---

function TermsOfUse() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Terms of Use</h1>
        <p className="text-sm text-gray-600">Last updated: October 26, 2023</p>
      </div>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Welcome to the Dev Edge website (e.g., www.devedge.consulting). These Terms of Use ("Terms") govern your access to and use of the website, including any content, functionality, and services offered on or through the website (collectively, the "Website"). The Website is owned and operated by Dev Edge and its affiliated entities operating in the Kingdom of Saudi Arabia (KSA), the United Arab Emirates (UAE), and Pakistan (collectively, "Dev Edge", "we", "us", or "our").
        </p>
        <p>
          <strong>Please read these Terms carefully before you start to use the Website. By accessing or using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <Link href="/privacy-notice" className="text-blue-600 hover:underline">Privacy Notice</Link>. If you do not agree to these Terms or the Privacy Notice, you must not access or use the Website.</strong>
        </p>
        <p>
          We reserve the right to modify these Terms at any time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the Website following the posting of revised Terms means that you accept and agree to the changes.
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Use of Website Content</h2>
        <p>
          The content on this Website, including text, graphics, images, information, and other material ("Content"), is provided for general informational purposes only. It is not intended as, and should not be relied upon as, professional consulting, financial, legal, or tax advice. You should consult with qualified professionals before making any decisions based on the information presented on this Website.
        </p>
         <p>
          We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Website and its Content solely for your personal, non-commercial use, subject to these Terms.
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Intellectual Property Rights</h2>
        <p>
          The Website and its entire Content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Dev Edge, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>
        <p>
          You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website, except as generally and ordinarily permitted through the Website according to these Terms. The Dev Edge name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Dev Edge or its affiliates or licensors. You must not use such marks without the prior written permission of Dev Edge.
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. User Conduct</h2>
        <p>You agree not to use the Website:</p>
         <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
          <li>In any way that violates any applicable federal, state, local, or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from KSA, UAE, Pakistan or other countries).</li>
          <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
          <li>To impersonate or attempt to impersonate Dev Edge, a Dev Edge employee, another user, or any other person or entity.</li>
          <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which, as determined by us, may harm Dev Edge or users of the Website or expose them to liability.</li>
           <li>To introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
           <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer, or database connected to the Website.</li>
        </ul>

         <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. Disclaimers</h2>
         <p>
           THE WEBSITE AND ITS CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER DEV EDGE NOR ANY PERSON ASSOCIATED WITH DEV EDGE MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITE OR ITS CONTENT.
         </p>
         <p>
           WITHOUT LIMITING THE FOREGOING, NEITHER DEV EDGE NOR ANYONE ASSOCIATED WITH DEV EDGE REPRESENTS OR WARRANTS THAT THE WEBSITE OR ITS CONTENT WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
         </p>
          <p>
           TO THE FULLEST EXTENT PROVIDED BY LAW, DEV EDGE HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
         </p>


        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">5. Limitation of Liability</h2>
         <p>
           TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL DEV EDGE, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
         </p>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">6. Governing Law and Jurisdiction</h2>
         <p>
           These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates as applied in the Emirate of Dubai, without giving effect to any choice or conflict of law provision or rule.
         </p>
         <p>
           Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Website shall be instituted exclusively in the courts of Dubai, UAE, although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms in your country of residence or any other relevant country. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
           {/* Alternative: Consider arbitration clause if preferred */}
         </p>

         <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">7. Entire Agreement</h2>
         <p>
          These Terms of Use and our Privacy Notice constitute the sole and entire agreement between you and Dev Edge regarding the Website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Website.
         </p>

         <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">8. Contact Information</h2>
         <p>
           If you have any questions about these Terms of Use, please contact us at: <a href="mailto:legal@devedge.consulting" className="text-blue-600 hover:underline">legal@devedge.consulting</a>.
           {/* Use a different email than privacy if appropriate */}
         </p>
      </div>
    </div>
  )
}


// --- Dev Edge Cookie Notice ---

function CookieNotice() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Cookie Notice</h1>
        <p className="text-sm text-gray-600">Last revised: October 26, 2023</p>
      </div>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          This Cookie Notice explains how Dev Edge ("we", "us", "our") uses cookies and similar tracking technologies on our website (e.g., www.devedge.consulting) (the "Website"). This notice should be read alongside our <Link href="/privacy-notice" className="text-blue-600 hover:underline">Privacy Notice</Link>, which provides more detail on how we process personal information.
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. What are Cookies?</h2>
        <p>
          A "cookie" is a small text file that a website stores on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.
        </p>
        <p>
          Cookies can be "session" cookies (which expire once you close your web browser) or "persistent" cookies (which stay on your device for a set period or until you delete them). Technologies similar to cookies, like web beacons, pixels, and local storage, are also covered by this notice.
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. How We Use Cookies</h2>
        <p>We use cookies and similar technologies for several purposes, including:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
          <li><strong>Strictly Necessary Cookies:</strong> Essential for you to browse the Website and use its features, such as accessing secure areas. The Website cannot function properly without these cookies.</li>
          <li><strong>Performance and Analytics Cookies:</strong> Collect information about how you use our Website, like which pages you visit most often, and if you get error messages. This helps us improve how the Website works. We may use third-party analytics tools (e.g., Google Analytics) for this purpose.</li>
          <li><strong>Functionality Cookies:</strong> Allow the Website to remember choices you make (like your user name, language, or the region you are in) and provide enhanced, more personal features.</li>
          <li><strong>Targeting or Advertising Cookies (If Applicable):</strong> These cookies may be set through our site by us or advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device. (Note: Mention this only if Dev Edge actually uses advertising cookies).</li>
        </ul>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Third-Party Cookies</h2>
        <p>
          Some cookies may be set by third parties when you visit our Website. These third parties (such as analytics providers or social media platforms) may collect information about your online activities over time and across different websites. The use of cookies by third parties is subject to their own privacy policies, not this Cookie Notice.
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. Your Choices and Managing Cookies</h2>
        <p>
          You have choices regarding the use of cookies. Most web browsers allow you to control cookies through their settings preferences. You can usually set your browser to:
        </p>
         <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
            <li>Notify you when you receive a cookie, allowing you to decide whether to accept it.</li>
            <li>Disable existing cookies.</li>
            <li>Set your browser to automatically reject cookies.</li>
         </ul>
        <p>
          Please note that if you choose to block or delete cookies, some parts of our Website may not function properly or be accessible.
        </p>
        <p>
          We may also provide a cookie consent management tool on our Website, allowing you to customize your cookie preferences (other than strictly necessary cookies).
        </p>
        <p>
          For more general information about cookies and how to manage them, you can visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.allaboutcookies.org</a>.
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">5. Changes to this Cookie Notice</h2>
        <p>
          We may update this Cookie Notice from time to time. We will post any changes on this page and update the "Last revised" date.
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">6. Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please refer to our <Link href="/privacy-notice#contact-information" className="text-blue-600 hover:underline">Privacy Notice</Link> for contact details or email us at <a href="mailto:privacy@devedge.consulting" className="text-blue-600 hover:underline">privacy@devedge.consulting</a>.
        </p>
      </div>
    </div>
  )
}

// function SocialIcons() {
//   return (
//     <>
//       <Link href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white">
//         <span className="sr-only">LinkedIn</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-linkedin"
//         >
//           <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//           <rect width="4" height="12" x="2" y="9" />
//           <circle cx="4" cy="4" r="2" />
//         </svg>
//       </Link>
//       <Link href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-400 text-white">
//         <span className="sr-only">Twitter</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-twitter"
//         >
//           <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//         </svg>
//       </Link>
//       <Link href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white">
//         <span className="sr-only">YouTube</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-youtube"
//         >
//           <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
//           <path d="m10 15 5-3-5-3z" />
//         </svg>
//       </Link>
//       <Link href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-800 text-white">
//         <span className="sr-only">Facebook</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-facebook"
//         >
//           <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//         </svg>
//       </Link>
//     </>
//   )
// }
