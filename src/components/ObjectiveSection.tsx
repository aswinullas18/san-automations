// src/components/ObjectiveSection.tsx
import { Target, Lightbulb, Rocket } from "lucide-react";

export default function ObjectiveSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Objective
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To deliver cutting-edge industrial automation and engineering solutions that empower businesses with efficiency, reliability, and innovation — driving growth in the manufacturing and process industries.
          </p>
        </div>

        {/* Three-column objectives */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Objective 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Precision & Reliability
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              To provide high-quality automation systems, PLC/SCADA/DCS solutions, and custom engineering that meet the strictest industry standards and minimize downtime.
            </p>
          </div>

          {/* Objective 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Lightbulb className="w-8 h-8 text-green-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Innovation & Efficiency
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              To integrate Industry 4.0 technologies, conveyors, SPM machines, and smart controls that optimize production processes, reduce costs, and enhance overall efficiency.
            </p>
          </div>

          {/* Objective 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Rocket className="w-8 h-8 text-purple-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Customer Success & Partnership
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              To build long-term relationships by delivering on-time solutions, exceptional after-sales support, and continuous improvement tailored to each client's unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}