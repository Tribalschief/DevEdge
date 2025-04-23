import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logoremovebg.png"; // update if needed
const JoinSection = () => {
  return (
    <section className="bg-[#ecc7ff] w-full py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a219c9]">
            Join the DevEdge Family
          </h2>
          <p className="mt-4 text-[#7c2191] text-base md:text-lg leading-relaxed">
            Become a contributor to making DevEdge one of the premier heritage and cultural destinations.
          </p>
          <Link href="/company/cv" passHref>
            <button className="mt-6 px-6 py-3 bg-[#6208CA] text-white font-medium rounded-md hover:bg-[#460b5e] transition-all shadow-md hover:shadow-lg">
              Submit your CV
            </button>
          </Link>
        </div>

        {/* Right Logo/Image */}
        <div className="flex-shrink-0">
          <Image
            src={Logo}
            alt="DevEdge Logo"
            width={220}
            height={220}
            className="rounded-md shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
