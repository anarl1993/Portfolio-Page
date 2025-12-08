import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, Calendar, Database, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    title: "EXECUTIVE & C-LEVEL SUPPORT",
    headline: "Expert Administrative Assistance",
    description: "Expert Calendar Management, Inbox Management, Travel Planning, and professional Client Communication and Email Correspondence.",
    icon: Calendar,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "REAL ESTATE & PROPERTY MANAGEMENT VA",
    headline: "Property Support & Coordination",
    description: "Full support for Tenant Communication, Lease Scheduling/Renewals, Maintenance Request Tracking, and Application Processing.",
    icon: Building2,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "OPERATIONS & PROJECT MANAGEMENT",
    headline: "Systems & Workflow Optimization",
    description: "SOP Creation, Workflow Organization, VOIP Support, and comprehensive CRM Setup & Administration (e.g., HubSpot, ClickUp, Asana, Monday.com, Odoo, Kustomer).",
    icon: Settings,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "DATA ENTRY & OPTIMIZATION",
    headline: "Data Management & Analysis",
    description: "High-Volume Data Entry, Data Cleanup, Backlog Resolution, Report Preparation, Data Analysis, and creating custom dashboards (Google Sheets, Excel, Data Studio).",
    icon: Database,
    color: "bg-orange-50 text-orange-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-heading font-bold text-3xl md:text-4xl mb-4">
            How I Bring Clarity & Efficiency
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            I specialize in the crucial intersection of Administration, Property Management, and Data Optimization.
          </p>
          <p className="text-lg font-medium text-secondary italic">
            "My focus is on reliability, clear communication, and delivering systems that save you time and eliminate administrative bottlenecks."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="flex flex-col h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden w-full">
                <CardHeader className="flex flex-col gap-4 pb-4">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${service.color} transition-colors group-hover:scale-110 duration-300`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors uppercase">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm font-semibold text-secondary uppercase tracking-wide">
                      {service.headline}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <div className="mt-6 flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
