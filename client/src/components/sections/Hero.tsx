import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/professional_modern_home_office_workspace_desk_with_laptop_and_plants.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-white via-accent/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <span className="text-secondary font-semibold text-sm tracking-wide uppercase">
                Available for new clients
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight mb-6">
              Streamline Your <span className="text-secondary">Operations</span> & Scale Your Business
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Highly experienced Executive Virtual Assistant helping founders and real estate investors achieve focus through operations support and CRM automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 h-14">
                View Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 font-semibold text-lg px-8 h-14">
                Contact Me
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="text-secondary h-5 w-5 mr-2" />
                <span>CRM Implementation Expert</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-secondary h-5 w-5 mr-2" />
                <span>Property Management Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={heroImage} 
                alt="Professional Workspace" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-10 blur-2xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
