import Link from "next/link";

// app/components/JoinSection.tsx
export default function JoinSection() {
    return (
      <section className="bg-[#c1e6d6] py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Text */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#183b2d]">
              Join the Diriyah Family
            </h2>
            <p className="mt-2 text-[#2f5748] max-w-xl">
              To become a contributor to making Diriyah one of the premier heritage and cultural destinations
            </p>
            <button className="mt-4 px-5 py-2 bg-[#2f5748] text-white rounded hover:bg-[#24493a] transition">
             <Link href={`/company/cv`}> Submit your CV </Link>
            </button>
          </div>
  
          {/* Right Icon – Triangle Grid */}
          <div className="grid grid-cols-4 gap-2 place-items-center">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4"
                style={{
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  backgroundColor: '#2f5748',
                }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  