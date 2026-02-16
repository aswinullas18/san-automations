import Link from "next/link";
import { Button } from "@/components/ui/button";
import ClientLogos from "@/components/ClientLogos";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Factory,
  Wrench,
  Settings,
  Cpu,
  Users,
  Award,
  Target,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Preciso Tools and Engineering | Precision Plastic Injection Moulding & Tooling",
  description: "Comprehensive precision engineering solutions for automotive industry – Plastic Injection Moulding, Tooling, Manufacturing, Assembly & Validation since 2022.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section – Bold, clear value prop + CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Precision Engineering Solutions
            <br />
            Under One Roof
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto opacity-90">
            Plastic Injection Moulding • Tooling • Manufacturing • Tryout • Mass Production • Assembly • Validation
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-10 py-6">
              <Link href="/contact">Get a Quote Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-10 py-6">
              <Link href="/services">Explore Our Capabilities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals / Quick Facts */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Clock size={48} className="mx-auto text-blue-600 mb-4" />
              <p className="text-3xl font-bold">2022</p>
              <p className="text-gray-600">Established</p>
            </div>
            <div>
              <Award size={48} className="mx-auto text-blue-600 mb-4" />
              <p className="text-3xl font-bold">6+ Years</p>
              <p className="text-gray-600">Expertise</p>
            </div>
            <div>
              <Target size={48} className="mx-auto text-blue-600 mb-4" />
              <p className="text-3xl font-bold">Automotive Focus</p>
              <p className="text-gray-600">Major OEMs</p>
            </div>
            <div>
              <Users size={48} className="mx-auto text-blue-600 mb-4" />
              <p className="text-3xl font-bold">End-to-End</p>
              <p className="text-gray-600">One-Stop Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services – Card Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Comprehensive Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Plastic Injection Moulding", desc: "Advanced moulding for small to large/complex parts with precision and efficiency.", icon: Factory },
              { title: "Manufacturing & Tooling", desc: "From prototyping to final production – mould plates, tools, pulleys, gears, and more.", icon: Wrench },
              { title: "Tryout & Validation", desc: "Rigorous testing, inspection, and quality validation to meet the highest standards.", icon: ShieldCheck },
              { title: "Mass Production", desc: "High-volume production with optimized processes and on-time delivery.", icon: Cpu },
              { title: "Assembly", desc: "Precise component integration into finished products.", icon: Settings },
              { title: "End-to-End Solutions", desc: "Seamless journey from concept to delivery under one roof.", icon: Target },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <item.icon size={32} className="text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Components Highlight */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            High-Precision Components We Manufacture
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Mould Plates & Mould Tools",
              "Pulleys & Gears",
              "Brass Bushes & Screw Rods",
              "Copper Punching Tools",
              "Heater Plates",
              "Ratchets",
            ].map((comp, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md text-center">
                <p className="text-xl font-semibold">{comp}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-gray-600 text-lg">
            And many more custom precision components tailored to your needs.
          </p>
        </div>
      </section>

      {/* Commitment / Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Preciso Tools and Engineering?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <ShieldCheck size={48} className="text-blue-600 mb-4 mx-auto" />
                <CardTitle className="text-2xl text-center">Uncompromising Quality</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                Precision in every process – from material to final product.
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardHeader>
                <Users size={48} className="text-blue-600 mb-4 mx-auto" />
                <CardTitle className="text-2xl text-center">Client-First Approach</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                On-time delivery, exceptional service, long-term partnerships.
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardHeader>
                <Target size={48} className="text-blue-600 mb-4 mx-auto" />
                <CardTitle className="text-2xl text-center">Automotive Expertise</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                Meeting stringent standards for major automotive industries.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Trusted Customers */}
      <section className="py-20 bg-white">
        <ClientLogos />
      </section>

      {/* Final CTA */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Elevate Your Manufacturing Needs?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Partner with a trusted precision engineering leader in Bengaluru.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-12 py-7">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}