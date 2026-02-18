// src/components/ProjectsSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Automotive Welding Line Automation",
      description: "Designed and commissioned a robotic welding fixture system for Tier-1 automotive supplier, reducing cycle time by 35% and improving weld consistency.",
      image: "/images/projects/welding-automation.jpg", // replace with your real image path
      client: "Major Automotive OEM",
      year: "2024",
      tags: ["Robotics", "Welding Fixtures", "Automotive"],
    },
    {
      title: "Conveyor System for Assembly Line",
      description: "Installed a durable PVC belt + chain conveyor network for high-volume component assembly, increasing throughput by 40% with zero downtime during integration.",
      image: "/images/projects/conveyor-assembly.jpg",
      client: "Electronics Manufacturer",
      year: "2025",
      tags: ["Conveyors", "Assembly", "Mass Production"],
    },
    {
      title: "SPM for Precision Drilling & Tapping",
      description: "Custom-built multi-spindle special purpose machine for high-precision drilling/tapping operations, achieving tolerance of ±0.01 mm and 98% uptime.",
      image: "/images/projects/spm-drilling.jpg",
      client: "Auto Components Supplier",
      year: "2024",
      tags: ["SPM", "Precision Machining", "Automotive"],
    },
    {
      title: "SCADA & PLC Retrofit Project",
      description: "Upgraded legacy control system to modern SCADA + PLC setup for a manufacturing plant, improving monitoring, data logging, and remote diagnostics.",
      image: "/images/projects/scada-plc.jpg",
      client: "Industrial Plant",
      year: "2025",
      tags: ["PLC/SCADA", "Retrofit", "Process Control"],
    },
    // Add more projects as needed
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

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
            Our Projects & Portfolio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Delivering proven results across automotive, manufacturing, and industrial sectors with custom automation and engineering excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 line-clamp-3">
                  {project.desc}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-6 group-hover:bg-blue-50"
                  asChild
                >
                  <Link href={`/projects/${index + 1}`}>
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}