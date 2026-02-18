"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Target, Lightbulb, Rocket } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServiceSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
// Carousel slides (replace with your local images later)
const slides = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Industrial Automation Excellence",
    description: "PLC • SCADA • DCS • Conveyors • SPM Machines",
  },
  {
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Precision Engineering Solutions",
    description: "Custom Control Panels & Turnkey Projects",
  },
  {
    image: "https://images.unsplash.com/photo-1581092160560-9f924a6d4b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Reliable Process Control",
    description: "Instrumentation • Robotics • Industry 4.0 Integration",
  },
];

// Objective Section with Framer Motion animations
function ObjectiveSection() {
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

  const cards = [
    {
      icon: Target,
      color: "blue",
      title: "Precision & Reliability",
      desc: "To build robust automation systems, PLC/SCADA/DCS integrations, and custom engineering solutions that operate flawlessly under demanding industrial conditions.",
    },
    {
      icon: Lightbulb,
      color: "green",
      title: "Innovation & Efficiency",
      desc: "To integrate cutting-edge technologies like conveyors, SPM machines, robotics, and Industry 4.0 solutions that optimize processes and reduce operational costs.",
    },
    {
      icon: Rocket,
      color: "purple",
      title: "Customer Success & Partnership",
      desc: "To become a trusted long-term partner by delivering on-time, high-quality solutions with excellent support and continuous improvement tailored to client needs.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Objective
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To deliver world-class industrial automation and engineering solutions that empower manufacturers with unmatched efficiency, precision, reliability, and innovation.
          </p>
        </motion.div>

        {/* Animated Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-${card.color}-100 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <Icon className={`w-8 h-8 text-${card.color}-900`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Carousel */}
      <section className="relative min-h-[90vh] md:min-h-[100vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
              className="object-cover brightness-75"
              priority={currentIndex === 0}
              quality={85}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Text & CTA */}
        <div className="relative z-20 container mx-auto px-6 text-center text-white flex flex-col items-center justify-center h-full">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            {slides[currentIndex].title}
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-xl lg:text-2xl mb-10 max-w-4xl mx-auto"
          >
            {slides[currentIndex].description}
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-lg px-10 py-6 md:px-12 md:py-7">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>

        {/* Dots navigation */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-white scale-125 shadow-lg" : "bg-white/60 hover:bg-white/90"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Objective Section */}
      <ObjectiveSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection/>
      <ProjectsSection />
      <ContactSection/>
    </div>
  );
}