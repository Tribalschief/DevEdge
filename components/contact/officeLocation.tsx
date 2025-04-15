

  const offices = [
    {
      country: "UAE",
      flag: "/flags/in.png",
      address: `Al Ruqa Al Hamra - Near Souk Al Haraj Sharjah | United Arab Emirates`,
      phone: " +971 55 781 5698",
    },
    {
      country: "PAK",
      flag: "/flags/gb.png",
      address: `Suit no. 805, Park Avenue Building. Sharah-e-faisal
Karachi, Pakistan`,
      phone: "+92 321 3241944",
    },
    {
      country: "KSA",
      flag: "/flags/gb.png",
      address: `Alia Plaza, Thumamah Road at the Cross Roads with Abi Baker Al-Siddiq Road, Riyadh, Kingdom of Saudi Arabia`,
      phone: "+966 538919034",
    },
  ];
  
  export default function OfficeLocations() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-white space-y-10">
        {offices.map((office, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-700 pb-6">
            <img
              src={office.flag}
              alt={`${office.country} flag`}
              className="w-8 h-6 object-cover"
            />
            <div className="flex-1">
              <p className="whitespace-pre-line text-sm text-gray-300">{office.address}</p>
              <p className="mt-1 text-sm flex items-center gap-2 text-gray-200">
                <i className="fas fa-phone text-white" />
                {office.country} Office {office.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  