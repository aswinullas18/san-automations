import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Preciso Tools and Engineering",
  description: "Get in touch with Preciso Tools and Engineering for precision tooling, plastic injection moulding, manufacturing, and automotive component needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're ready to assist with your precision engineering and manufacturing requirements. Reach out today!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

            <div className="space-y-8">
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-2xl">Phone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-medium">+91 9741482809</p>
                  <p className="text-gray-600 mt-2">G Navin</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-2xl">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:precisote2022@gmail.com" 
                    className="text-xl font-medium text-blue-600 hover:underline"
                  >
                    precisote2022@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-2xl">Address</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Preciso Tools and Engineering<br />
                    NO 322, AECS Layout B Block,<br />
                    20th Cross, 3rd Main,<br />
                    Bengaluru, 560068
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="mt-10">
              <Button 
                asChild 
                size="lg" 
                className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white gap-3"
              >
                <Link 
                  href="https://wa.me/919741482809?text=Hello%20Preciso%20Tools%20and%20Engineering%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-6 w-6" />
                  Message us on WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Note: This is a frontend-only form for now */}
                {/* Later we can connect it to Formspree, EmailJS, or a backend */}
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input id="name" type="text" placeholder="Your name" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+91 ..." required />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project or requirements..." 
                      rows={6} 
                      required 
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 gap-2">
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>
                </form>

                <p className="text-sm text-gray-500 mt-6 text-center">
                  We typically respond within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Location
          </h2>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.217!2d77.648!3d12.978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzQwLjgiTiA3N8KwMzgnNTIuOCJF!5e0!3m2!1sen!2sin!4v1690000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-4">
            NO 322, AECS Layout B Block, 20th Cross, 3rd Main, Bengaluru, 560068
          </p>
        </div>
      </div>
    </div>
  );
}