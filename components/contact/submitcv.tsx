import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logoremovebg.png"; // update if needed
import cvBackground from "@/public/CV.png"; 
function JoinSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#e7c2ff] to-[#b88cff] py-20 overflow-hidden">
      
      {/* Left Side Background Image */}
      <div className="absolute top-0 -left-72 w-[500px] h-full opacity-70">
        <Image
          src={cvBackground.src}
          alt="Background Cybersecurity Design"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7209B7] uppercase">
          Join the DevEdge Family
        </h2>
        <p className="mt-6 text-[#5c1470] text-base sm:text-lg max-w-2xl leading-relaxed">
          Become a contributor to making DevEdge one of the premier heritage and cultural destinations.
        </p>

        <Link href="/company/cv" passHref>
          <button className="mt-8 px-8 py-4 bg-[#3C096C] text-white font-semibold text-lg rounded-full hover:bg-[#240046] transition-all shadow-lg hover:scale-105">
            Submit Your CV
          </button>
        </Link>
      </div>

      {/* Logo on the Right */}
      <div className="hidden xl:block absolute top-1/2 right-10 transform -translate-y-1/2 z-10">
 <div className="p-4 bg-white rounded-xl shadow-2xl">
   <Image
     src={Logo}
     alt="DevEdge Logo"
     width={200}
     height={200}
     className="hover:scale-110 transition-transform duration-300 ease-in-out"
   />
 </div>
</div>
      
    </section>
  );
}

export default JoinSection;
