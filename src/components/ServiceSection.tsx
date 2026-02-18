// src/components/ServicesSection.tsx (or embed directly in page.tsx)
import { motion } from "framer-motion";
import { Factory, Wrench, Settings, Cpu, Zap, Package } from "lucide-react";

export default function ServicesSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const services = [
    {
      icon: Factory,
      title: "Plastic Injection Moulding",
      desc: "Advanced moulding services for small to large and complex parts, using cutting-edge technology and precision techniques.",
      color: "blue",
    },
    {
      icon: Wrench,
      title: "Manufacturing",
      desc: "Comprehensive manufacturing from prototyping to final production — mould plates, pulleys, gears, bushes, screw rods, and more.",
      color: "green",
    },
    {
      icon: Settings,
      title: "Tryout and Validation",
      desc: "Rigorous testing, inspection, and validation to ensure moulds and components meet the highest quality and performance standards.",
      color: "purple",
    },
    {
      icon: Cpu,
      title: "Mass Production",
      desc: "High-volume production capabilities with optimized processes, state-of-the-art machinery, and on-time delivery within budget.",
      color: "orange",
    },
    {
      icon: Zap,
      title: "Assembly",
      desc: "Precise integration of components into finished products — skilled technicians ensure quality and adherence to specifications.",
      color: "teal",
    },
    {
      icon: Package,
      title: "Comprehensive Solutions",
      desc: "End-to-end seamless experience from concept to final product — guiding clients through the complete production journey.",
      color: "indigo",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Delivering end-to-end precision engineering and manufacturing solutions under one roof — from concept to mass production.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
                className={`bg-${service.color}-50 p-8 rounded-2xl shadow-lg border border-${service.color}-100 hover:shadow-2xl transition-all duration-300`}
              >
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <Icon className={`w-8 h-8 text-${service.color}-900`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}