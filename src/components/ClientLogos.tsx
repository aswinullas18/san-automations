import Image from "next/image";

interface Client {
  name: string;
  logo?: string; // path to logo in /public
}

const clients: Client[] = [
  {
    name: "Sansera Engineering Limited",
    logo: "/images/clients/sansera.png", // add your image here
  },
  {
    name: "Precision Compaid Mouldings Private Limited",
    logo: "/images/clients/precision-compaid.png",
  },
  {
    name: "Sahney Commutators Private Limited",
    logo: "/images/clients/sahney.png",
  },
  // Add more if you have other clients
];

export default function ClientLogos() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Our Valuable Customers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            {client.logo ? (
              <div className="relative w-40 h-24 md:w-48 md:h-28 mb-4">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 768px) 160px, 192px"
                />
              </div>
            ) : (
              <div className="w-40 h-24 md:w-48 md:h-28 bg-gray-100 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <span className="text-gray-500 font-medium text-sm md:text-base px-4">
                  {client.name}
                </span>
              </div>
            )}
            <p className="text-gray-700 font-medium text-sm md:text-base">
              {client.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}