import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 my-20 sm:my-16 md:my-20 lg:my-24 max-w-4xl">

            <TermsOfUse />
          

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
