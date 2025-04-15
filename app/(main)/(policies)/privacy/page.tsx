import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 my-10 max-w-4xl">
        <Tabs defaultValue="privacy">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="privacy">Privacy Notice</TabsTrigger>
            <TabsTrigger value="terms">Terms of Use</TabsTrigger>
            <TabsTrigger value="cookie">Cookies</TabsTrigger>
          </TabsList>

          <TabsContent value="privacy" className="border-t border-gray-300 pt-4">
            <PrivacyNotice />
          </TabsContent>

          <TabsContent value="terms" className="border-t border-gray-300 pt-4">
            <TermsOfUse />
          </TabsContent>

          <TabsContent value="cookie" className="border-t border-gray-300 pt-4">
            <CookieNotice />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

function PrivacyNotice() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Privacy Notice</h1>
        <p className="text-sm text-gray-600">Last revised: 11/19/24</p>

        <div className="flex space-x-2 mt-4">
          <SocialIcons />
        </div>

        <div className="mt-4 flex justify-between items-center">
          <Button variant="outline" className="text-sm">
            Printer-friendly PDF
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <TableOfContents />

        <section id="introduction">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Introduction</h2>
          <p className="mb-4">
            Deloitte<sup>1</sup> (also referred to below as "we", "us" and "our") is a privacy conscious organization.
            This Privacy Notice explains how we process your information collected from (1) the web pages of the
            Deloitte.com website that are designated as United States in the upper right hand corner or web pages of any
            other website with respect to which this Privacy Notice is posted or linked (such web pages are collectively
            referred to as the "Website"), (2) downloadable applications accessed from mobile devices with respect to
            which this Privacy Notice is posted or linked ("Mobile Apps") or (3) any other mode of interacting with you
            relating to Deloitte communications, such as online or offline newsletters and magazines, that reference
            this Privacy Notice ("Communications"). By using the Website or Mobile Apps, or continuing to receive
            Communications, you agree to the use of such information in accordance with this Privacy Notice. This
            Privacy Notice also applies to your personal information that we may have collected from data brokers in
            connection with our marketing activities.
          </p>
          <p className="mb-4">
            The Deloitte.com website also includes web pages provided by Deloitte Touche Tohmatsu Limited ("DTTL"),
            which are designated as "Global," and web pages provided by other DTTL member firms or their related
            entities, which are designated according to the location identified in the upper right-hand corner next to
            "Location." These web pages are provided by the designated entities and are not the responsibility of
            Deloitte. Such web pages, as well as other websites that may be linked to the Website, are not governed by
            this Privacy Notice. We encourage you to review the applicable privacy statements before disclosing any
            personal information.
          </p>
          <p className="mb-4">
            As used in this Privacy Notice, "Deloitte Network" means DTTL and its member firms and their affiliates and
            related entities.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <sup>1</sup> In this notice, "Deloitte" refers to Deloitte LLP, Deloitte Consulting LLP, Deloitte Financial
            Advisory Services LLP, Deloitte Tax LLP, Deloitte Transactions and Business Analytics LLP, Deloitte & Touche
            LLP, Deloitte Services LP, and Deloitte Corporate Finance LLC and their respective affiliates.
          </p>
        </section>

        <section id="information-collection">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Information collection</h2>
          <p className="mb-4">
            We may collect personal information when you interact with the Website or Mobile Apps, such as if you choose
            to register or create a user profile on the Website or a Mobile App (e.g., to gain access to specific
            content, attend a hosted event, respond to a survey or request Communications about specific areas of
            interest), or otherwise provide it to us. Depending on the specific Communication you are receiving, or the
            web page of the Website or Mobile App you are using, such information may consist of your name, current job
            title, company address, email address, telephone and fax numbers, correspondence with you, which newsletters
            you subscribe to, and other information you provide to us.
          </p>
          <p className="mb-4">
            When using a Mobile App, in addition to contact information, we or our service providers (such as mobile
            operating system and platform providers) may also collect information relating to your device, including
            your device model, operating system, browser type, unique device identifier, IP address, mobile phone
            number, mobile network carrier, location, and the way you are using the Mobile App. The information
            collected will depend on the functionality of the specific Mobile App you are using. If any other
            information is collected relating to your use of a Mobile App, such information will be specified in the
            Mobile App.
          </p>
          <p className="mb-4">
            We may also collect personal information if you register for the Website using a third-party social network
            account (e.g., LinkedIn, Facebook, and Twitter). For example, the Website or a Mobile App may allow you to
            login using your social network account credentials. We may collect the user name associated with that
            social media account and any information or content you have permitted the social media network to share
            with us, such as your profile picture, email address, and birthday. The information we collect may depend on
            the privacy settings you have with the social network site, so please review the privacy statement or policy
            of the applicable social network site. When you access the Website through your social network account, you
            are authorizing us to collect and use your information in accordance with this Privacy Notice.
          </p>
          <p className="mb-4">
            The Website may also collect content that you provide, including postings on blogs, forums, wikis and other
            social media applications and services that we may provide.
          </p>
          <p className="mb-4">
            We may also collect similar personal information about you from data brokers in connection with our
            marketing activities.
          </p>
          <p className="mb-4">
            We do not usually seek to collect your sensitive personal information (i.e., data relating to your social
            security, driver's license, state identification card, or passport numbers; non-Deloitte account username or
            number or financial account, debit card, or credit card number in combination with credentials allowing
            access to such accounts; racial or ethnic origin; national origin; immigration or citizenship status;
            religious or philosophical beliefs; trade union membership; genetic or biometric data; precise geolocation;
            political opinions; status as victim of a crime; medical or health conditions/status (including data related
            to pregnancy, abortion, or reproductive or sexual health); researching, obtaining, or seeking gender
            affirming health care or reproductive or sexual health services; status as transgender or non-binary; or sex
            life or sexual orientation. Sensitive personal information also includes the contents of your personal mail,
            email, or text messages unless we are the intended recipient). We will obtain your explicit consent to
            collect and use such information where required by law.
          </p>
        </section>

        

        <section id="contact-information">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Contact information</h2>
          <p className="mb-4">
            If you have any questions or concerns regarding your privacy while using the Website or a Mobile App, or
            upon receipt of a Communication, please contact us at USPrivacyQuestions@deloitte.com or call us at
            +1.844.919.0711.
          </p>
        </section>
      </div>
    </div>
  )
}

function TermsOfUse() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Terms of Use</h1>
        <p className="text-sm text-gray-600">Last updated: 23 January 2017</p>

        <div className="flex space-x-2 mt-4">
          <SocialIcons />
        </div>
      </div>

      <div className="space-y-4">
        <p>
          Deloitte refers to one or more of Deloitte Touche Tohmatsu Limited, a UK private company limited by guarantee
          ("DTTL"), its network of member firms, and their related entities. DTTL and each of its member firms are
          legally separate and independent entities. DTTL (also referred to as "Deloitte Global") does not provide
          services to clients. Please see www.deloitte.com/about for a more detailed description of DTTL and its member
          firms.
        </p>

        <p>
          These Terms of Use apply to the Deloitte.com website, content, services, or features (collectively, the
          "Website") owned or controlled by Deloitte LLP and/or its subsidiaries and affiliates (collectively, "Deloitte
          US").
        </p>

        <p>
          By accessing and using the Website, you acknowledge and agree that you have read and agree to these Terms of
          Use. Deloitte US reserves the right to modify these Terms of Use at any time without notice.
        </p>

        <h2 className="text-lg font-bold text-gray-800 mt-6 mb-2">The "Deloitte Network" and the Website</h2>
        <p>
          The "Deloitte Network" refers to Deloitte Touche Tohmatsu Limited (DTTL), its member firms, DTTL and each
          related entities. Each member firm in the DTTL network is a legally separate and independent entity and should
          be referred to as such. Deloitte US is not responsible for the content, services, or features offered on other
          websites operated by other member firms of DTTL.
        </p>

        <p>
          Deloitte US and/or other member firms of DTTL may have a presence on the website of the operating entities
          that perform certain services of the Deloitte Network. Such presence is solely for the purpose of providing
          access to information about the Deloitte Network. In some instances, this may include information about
          services that are not available in certain jurisdictions according to local law or regulation.
        </p>

        {/* Additional terms would continue here */}
      </div>
    </div>
  )
}

function CookieNotice() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Cookie Notice</h1>
        <p className="text-sm text-gray-600">Last revised: February 24th, 2021</p>

        <div className="flex space-x-2 mt-4">
          <SocialIcons />
        </div>

        <Button variant="outline" className="text-sm mt-4">
          Manage cookie preferences
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-gray-800">What is a cookie?</h2>
        <p>
          A "cookie" is a text file placed on the device you use to view our website. Cookies often include a unique
          identifier (e.g., cookie #123). "Cookies" also include technologies that are similar to cookies. Cookies are
          widely used to make websites work more efficiently, as well as to provide information to website owners and
          their partners about users' experiences on those websites. Cookies may be set either by the website you are
          visiting ("first-party cookies") or by a third party, such as those who provide analytics or advertising
          services or interactive content on the website ("third-party cookies"). For more information about cookies,
          including how to see what cookies have been set on your device and how to manage and delete them, please visit
          www.allaboutcookies.org.
        </p>

        <p>
          Please note that this Cookie Notice is part of our{" "}
          <Link href="/privacy-policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        {/* Additional cookie notice content would continue here */}
      </div>
    </div>
  )
}

function TableOfContents() {
  return (
    <div className="space-y-2 border-b border-gray-300 pb-6">
      <ul className="list-none space-y-1">
        <li>
          <Link href="#introduction" className="text-blue-600 hover:underline">
            Introduction
          </Link>
        </li>
        <li>
          <Link href="#information-collection" className="text-blue-600 hover:underline">
            Information collection
          </Link>
        </li>
        <li>
          <Link href="#log-information" className="text-blue-600 hover:underline">
            Log information, cookies and web beacons
          </Link>
        </li>
        <li>
          <Link href="#information-use" className="text-blue-600 hover:underline">
            Information use
          </Link>
        </li>
        <li>
          <Link href="#selling-information" className="text-blue-600 hover:underline">
            Selling of information
          </Link>
        </li>
        <li>
          <Link href="#information-retention" className="text-blue-600 hover:underline">
            Information retention
          </Link>
        </li>
        <li>
          <Link href="#disclosure" className="text-blue-600 hover:underline">
            Disclosure of information to third parties
          </Link>
        </li>
        <li>
          <Link href="#personal-information-rights" className="text-blue-600 hover:underline">
            Your personal information rights
          </Link>
        </li>
        <li>
          <Link href="#verification" className="text-blue-600 hover:underline">
            Verification of personal information requests
          </Link>
        </li>
        <li>
          <Link href="#third-party-requests" className="text-blue-600 hover:underline">
            Third party requests
          </Link>
        </li>
        <li>
          <Link href="#data-privacy-framework" className="text-blue-600 hover:underline">
            Data Privacy Framework notice
          </Link>
        </li>
        <li>
          <Link href="#california-residents" className="text-blue-600 hover:underline">
            Special notices to California residents
          </Link>
        </li>
        <li>
          <Link href="#washington-state" className="text-blue-600 hover:underline">
            Washington State Consumer Health Data Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="#opt-out" className="text-blue-600 hover:underline">
            Opt-out preference signals and Do Not Track
          </Link>
        </li>
        <li>
          <Link href="#information-security" className="text-blue-600 hover:underline">
            Information security
          </Link>
        </li>
        <li>
          <Link href="#childrens-privacy" className="text-blue-600 hover:underline">
            Children's privacy protection
          </Link>
        </li>
        <li>
          <Link href="#social-media" className="text-blue-600 hover:underline">
            Blogs, forums, wikis and other social media
          </Link>
        </li>
        <li>
          <Link href="#third-party-privacy" className="text-blue-600 hover:underline">
            Privacy practices of third parties
          </Link>
        </li>
        <li>
          <Link href="#changes" className="text-blue-600 hover:underline">
            Changes to our Privacy Notice
          </Link>
        </li>
        <li>
          <Link href="#contact-information" className="text-blue-600 hover:underline">
            Contact information
          </Link>
        </li>
      </ul>
    </div>
  )
}

function SocialIcons() {
  return (
    <>
      <Link href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white">
        <span className="sr-only">LinkedIn</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </Link>
      <Link href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-400 text-white">
        <span className="sr-only">Twitter</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-twitter"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      </Link>
      <Link href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white">
        <span className="sr-only">YouTube</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-youtube"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      </Link>
      <Link href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-800 text-white">
        <span className="sr-only">Facebook</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </Link>
    </>
  )
}
