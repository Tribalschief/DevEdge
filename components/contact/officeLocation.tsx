import f1 from '@/public/flag/f1.png'
import f2 from '@/public/flag/f2.png'
import f3 from '@/public/flag/f3.png'
import Image from 'next/image';

  const offices = [
    {
      country: "UAE",
      flag: f3,
      address: `Al Ruqa Al Hamra - Near Souk Al Haraj Sharjah | United Arab Emirates`,
      phone: " +971 55 781 5698",
    },
    {
      country: "PAK",
      flag: f2,
      address: `Suit no. 805, Park Avenue Building. Sharah-e-faisal
Karachi, Pakistan`,
      phone: "+92 321 3241944",
    },
    {
      country: "KSA",
      flag: f1,
      address: `Alia Plaza, Thumamah Road at the Cross Roads with Abi Baker Al-Siddiq Road, Riyadh, Kingdom of Saudi Arabia`,
      phone: "+966 538919034",
    },
  ];
  
  export default function OfficeLocations() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-white space-y-10">
        {offices.map((office, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-700 pb-6">
            <Image src={office.flag} alt={`${office.country} flag`} width={40} height={40} />
            <div className="flex-1">
              <p className="whitespace-pre-line text-sm text-gray-700">{office.address}</p>
              <p className="mt-1 text-sm flex items-center gap-2 text-gray-500">
                <i className="fas fa-phone text-gray-800" />
                {office.country} Office {office.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  