import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, Calendar, Database, Settings } from "lucide-react";

const services = [
  {
    title: "Executive Assistance & Support",
    description: "Expert Executive Assistance, Transcription, Executive Travel Planning, Calendar Management, and Inbox Management.",
    icon: Calendar,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Real Estate & Property VA",
    description: "Tenant Communication, Lease Scheduling/Renewals, Maintenance Request Tracking, and Application Processing.",
    icon: Building2,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Operations & Project Mgmt",
    description: "SOP Creation, Workflow Organization, VOIP Support, and comprehensive CRM Setup & Administration.",
    icon: Settings,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Data Entry & Optimization",
    description: "High-Volume Data Entry, Data Cleanup, Backlog Resolution, Report Preparation, and custom dashboards.",
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
            Specialized Expertise
          </h2>
          <p className="text-lg text-gray-600">
            I specialize in the crucial intersection of Administration, Property Management, and Data Optimization to help you scale efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
                  <div className={`p-3 rounded-xl ${service.color} transition-colors group-hover:scale-110 duration-300`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed mt-2">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
