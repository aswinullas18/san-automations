import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Target, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Us | Preciso Tools and Engineering",
  description: "Leading precision engineering company in Bengaluru specializing in plastic injection moulding, tooling, and automotive components since 2022.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to Preciso Tools and Engineering
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Your trusted partner for comprehensive precision engineering solutions in plastic injection moulding, manufacturing, tooling, and automotive components — all under one roof.
        </p>
      </div>

      {/* Company Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Established in 2022 with 6+ Years of Expertise
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Preciso Tools and Engineering (PTE) commenced operations in 2022, backed by over six years of rich experience in precision engineering. We have quickly established ourselves as one of the prominent precision engineering companies in India.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our primary focus is on the automotive industry, where we deliver high-quality components and services that meet stringent standards and unique client requirements.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <Clock size={48} className="mx-auto text-blue-600 mb-4" />
                <p className="text-2xl font-bold">2022</p>
                <p className="text-gray-600">Established</p>
              </div>
              <div>
                <Award size={48} className="mx-auto text-blue-600 mb-4" />
                <p className="text-2xl font-bold">6+ Years</p>
                <p className="text-gray-600">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Commitment to Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <ShieldCheck size={48} className="text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Precision & Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  From material selection to final manufacturing, we prioritize precision, quality, and adherence to the highest standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <Target size={48} className="text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Client Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We build long-term partnerships by delivering premium components, meeting deadlines, and providing exceptional service.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <Users size={48} className="text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Tailored Automotive Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Specialized in serving major automotive industries with innovative, reliable, and customized engineering solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with a Precision Leader?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let us help you with your next tooling or manufacturing project
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg text-lg transition-colors shadow-lg"
          >
            Contact Us Today →
          </a>
        </div>
      </section>
    </div>
  );
}