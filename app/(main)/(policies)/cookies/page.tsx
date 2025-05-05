import Link from "next/link"


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 my-20 sm:my-16 md:my-20 lg:my-24 max-w-4xl">
            <CookieNotice />
      </div>
    </main>
  )
}



// --- Dev Edge Privacy Notice ---




// --- Dev Edge Terms of Use ---



// --- Dev Edge Cookie Notice ---

function CookieNotice() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Cookie Notice</h1>
        <p className="text-sm text-gray-600">Last revised: January 25, 2025</p>
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
          If you have any questions about our use of cookies, please refer to our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Notice</Link> for contact details or email us at <a href="mailto:privacy@devedge.consulting" className="text-blue-600 hover:underline">privacy@devedge.consulting</a>.
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
