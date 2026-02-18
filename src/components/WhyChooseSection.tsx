// src/components/WhyChooseSection.tsx (or embed directly in page.tsx)
import { motion } from "framer-motion";
import { ShieldCheck, Users, Target } from "lucide-react";

export default function WhyChooseSection() {
  // Animation variants for sliding from sides
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -80 },
    hiddenRight: { opacity: 0, x: 80 },
    hiddenCenter: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose San Automations and Engineering?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            We combine uncompromising quality, a true client-first mindset, and deep domain expertise to deliver results that last.
          </p>
        </motion.div>

        {/* Three animated cards sliding from sides */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1 - Slides from left */}
          <motion.div
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <ShieldCheck className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Uncompromising Quality
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Precision in every process – from material selection to final product delivery.
            </p>
          </motion.div>

          {/* Card 2 - Fades & slides up (center) */}
          <motion.div
            initial="hiddenCenter"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8 text-green-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Client-First Approach
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              On-time delivery, exceptional service, long-term partnerships.
            </p>
          </motion.div>

          {/* Card 3 - Slides from right */}
          <motion.div
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="w-8 h-8 text-purple-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Automotive Expertise
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Meeting stringent standards for major automotive industries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}