import { motion } from "framer-motion";
import { CheckCircle2, Clock, Globe, Zap } from "lucide-react";

const reasons = [
  {
    title: "7+ Years Experience",
    description: "International experience supporting executives and teams across the US, UK, and Australia.",
    icon: Globe,
  },
  {
    title: "Process-Obsessed",
    description: "Expert in backlog cleanup, workflow optimization, and turning chaos into organized systems.",
    icon: Zap,
  },
  {
    title: "Tool Stack Mastery",
    description: "Deep expertise in Buildium, HubSpot, Airtable, ClickUp, Google Workspace, and more.",
    icon: CheckCircle2,
  },
  {
    title: "Aligned Availability",
    description: "Full-time (40 hours/week) support operating on Eastern Standard Time.",
    icon: Clock,
  },
];

export default function WhyChooseMe() {
  return (
    <section id="expertise" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Why Partner With Me?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I don't just complete tasks; I build the streamlined operations your business needs to scale with confidence. My focus is on reliability, clear communication, and eliminating administrative bottlenecks.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-secondary/20 p-2 rounded-lg mt-1">
                    <reason.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                    <p className="text-gray-300">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Ready to Move Beyond Administrative Overload?</h3>
              <p className="text-gray-300 mb-8 text-lg">
                Stop spending your valuable time on logistics, backlog, and repetitive tasks. Let's discuss how I can help you reclaim your time.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  SOP Creation & Documentation
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  CRM Setup & Optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Backlog Cleanup & Resolution
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
