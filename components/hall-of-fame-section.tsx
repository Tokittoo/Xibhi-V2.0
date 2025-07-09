import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function HallOfFameSection() {
  const companies = [
    {
      name: "NASA",
      logo: "/nasa.png",
    },
    {
      name: "Cisco",
      logo: "/cisco.png",
    },
    {
      name: "Lenovo",
      logo: "/lenovo.png",
    },
    {
      name: "United Airlines",
      logo: "/united-airlines.png",
    },
    {
      name: "OYO",
      logo: "/oyo.png",
    },
    {
      name: "Citi",
      logo: "/citi.png",
    },
  ];

  return (
    <section id="HallofFames" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hall of Fames</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {companies.map((company, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:scale-105 hover:border-primary/50 cursor-pointer"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-lg">{company.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
