import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Cpu, 
  Monitor, 
  Settings, 
  Factory, 
  Zap, 
  Network 
} from "lucide-react";

export const metadata = {
  title: "Our Services | San Automations",
  description: "PLC Programming, SCADA Development, DCS Systems, Turnkey Automation Projects and more.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "PLC Programming & Automation",
      description: "Custom PLC development, logic programming, troubleshooting, and integration with various brands (Siemens, Allen-Bradley, Schneider, Delta, etc.).",
      icon: Cpu,
      color: "text-blue-600",
    },
    {
      title: "SCADA & HMI Development",
      description: "Design and implementation of advanced SCADA systems, operator interfaces (HMI), real-time monitoring, and data acquisition solutions.",
      icon: Monitor,
      color: "text-green-600",
    },
    {
      title: "DCS & Control Systems",
      description: "Distributed Control Systems engineering, process control optimization, and migration/upgradation of legacy control systems.",
      icon: Network,
      color: "text-purple-600",
    },
    {
      title: "Turnkey Automation Projects",
      description: "End-to-end solutions including design, panel building, installation, commissioning, and after-sales support.",
      icon: Factory,
      color: "text-orange-600",
    },
    {
      title: "Instrumentation & Panel Building",
      description: "Selection, calibration, installation, and integration of field instruments and custom control panels.",
      icon: Settings,
      color: "text-teal-600",
    },
    {
      title: "Industry 4.0 & IoT Solutions",
      description: "Implementation of IIoT, data analytics, predictive maintenance, and smart factory connectivity solutions.",
      icon: Zap,
      color: "text-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive industrial automation solutions tailored to your process requirements
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors ${service.color}`}>
                    <Icon size={32} className={service.color} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Automation Solution?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Our team is ready to help you with your next project
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg text-lg transition-colors shadow-lg"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </div>
  );
}