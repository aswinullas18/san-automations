// src/components/ContactSection.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import Link from "next/link";

// Zod schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^\+?\d{10,15}$/, { message: "Invalid phone number format" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message is too long (max 1000 characters)" }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Simulate form submission (replace with real API call later)
    console.log("Form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // fake delay
    alert("Thank you! Your message has been sent.");
    reset();
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
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
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your automation, manufacturing, or engineering needs? We're here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info – slide from left */}
          <div className="space-y-8">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-8 h-8 text-blue-900" />
                <h3 className="text-xl font-bold text-gray-900">Phone</h3>
              </div>
              <p className="text-lg text-gray-700">+91 97414 82809</p>
              <p className="text-gray-600 mt-1">Available 9 AM – 7 PM IST</p>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-8 h-8 text-blue-900" />
                <h3 className="text-xl font-bold text-gray-900">Email</h3>
              </div>
              <a
                href="mailto:info@sanautomations.com"
                className="text-lg text-blue-900 hover:underline"
              >
                info@sanautomations.com
              </a>
              <p className="text-gray-600 mt-1">We usually reply within 24 hours</p>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-blue-900" />
                <h3 className="text-xl font-bold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-700">
                San Automations and Engineering<br />
                [Your Full Address – Mumbai, Maharashtra, India]
              </p>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="mt-6"
            >
              <Button
                asChild
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white gap-3"
              >
                <Link
                  href="https://wa.me/919741482809?text=Hello%20San%20Automations%20and%20Engineering%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Contact Form – slide from right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 ..."
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or requirements..."
                  rows={5}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-900 hover:bg-blue-950 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-6 text-center">
              We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Our Location
          </h3>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d72.834!3d19.123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI4LjQiTiA3MsKwNTAnMDIuNCJF!5e0!3m2!1sen!2sin!4v1690000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-4">
            [Your Full Address – Mumbai, Maharashtra, India]
          </p>
        </motion.div>
      </div>
    </section>
  );
}