// src/components/AboutSection.tsx
import { Calendar, Award, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand repeated title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 tracking-wider uppercase opacity-90">
            San Automations and Engineering
          </h2>
        </div>

        {/* Establishment & Highlights – animated cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <Calendar className="w-10 h-10 text-blue-900" />
              <h3 className="text-2xl font-bold text-gray-900">Established 2025</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              San Automations and Engineering commenced its operations in 2025, bringing with it a wealth of experience spanning over 10 years.
            </p>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-10 h-10 text-blue-900" />
              <h3 className="text-2xl font-bold text-gray-900">Leading Automation Company</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We have established ourselves as one of the prominent automation and engineering companies in the country. Our commitment to delivering high-quality solutions and services has earned us a reputation for excellence in the industry.
            </p>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-10 h-10 text-blue-900" />
              <h3 className="text-2xl font-bold text-gray-900">Automotive & Industrial Focus</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We primarily cater to major automotive and industrial sectors, recognizing the unique requirements and demands of these industries. Our expertise enables us to meet stringent standards and deliver tailored automation and engineering solutions to our clients.
            </p>
          </motion.div>
        </div>

        {/* Welcome & Commitment */}
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          >
            Welcome to Our Company
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12"
          >
            At San Automations and Engineering, our commitment to excellence, precision, and customer satisfaction sets us apart. We strive to exceed expectations, delivering innovative automation solutions that drive success for our clients across industries.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Our Commitment */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9 }}
              className="bg-blue-50 p-8 rounded-2xl border border-blue-100"
            >
              <div className="flex items-center justify-center mb-6">
                <Star className="w-12 h-12 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Commitment</h3>
              <p className="text-gray-700 leading-relaxed">
                We are committed to delivering excellence in every aspect of our operations. From design and component selection to manufacturing and integration, we prioritize precision, quality, and innovation. Our goal is to exceed client expectations with reliable, high-performance automation solutions.
              </p>
            </motion.div>

            {/* Client Satisfaction */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="bg-green-50 p-8 rounded-2xl border border-green-100"
            >
              <div className="flex items-center justify-center mb-6">
                <Users className="w-12 h-12 text-green-900" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">Client Satisfaction</h3>
              <p className="text-gray-700 leading-relaxed">
                We understand the importance of customer satisfaction and strive to build long-lasting partnerships. By delivering premium quality solutions, adhering to strict timelines, and providing exceptional support, we aim to become a trusted partner in our clients' success.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}