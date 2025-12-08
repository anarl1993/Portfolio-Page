import { motion } from "framer-motion";
import { AlertTriangle, XCircle } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-heading font-bold text-3xl md:text-4xl mb-4">
            Is Your Business Held Back By...
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Identify the bottlenecks slowing down your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Problem 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 hover:shadow-md transition-shadow"
          >
            <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <XCircle className="text-red-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Administrative Overload?</h3>
            <p className="text-gray-600 leading-relaxed">
              Overbooked calendars, unanswered emails, travel logistics piling up, and no time left to actually lead your business?
            </p>
          </motion.div>

          {/* Problem 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 hover:shadow-md transition-shadow"
          >
            <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="text-red-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Messy Systems & Backlog?</h3>
            <p className="text-gray-600 leading-relaxed">
              Data scattered across spreadsheets, outdated workflows slowing your operations, reports bottlenecked, and tasks slipping through the cracks?
            </p>
          </motion.div>

          {/* Problem 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 hover:shadow-md transition-shadow"
          >
            <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <XCircle className="text-red-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Property Management Chaos?</h3>
            <p className="text-gray-600 leading-relaxed">
              Maintenance requests, tenant communication, lease renewals, and compliance tasks consuming your entire day?
            </p>
          </motion.div>
        </div>

        {/* The Solution */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-50"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">The Solution?</h3>
            <p className="text-xl md:text-2xl font-light mb-0">
              A Strategic VA Partner—<span className="font-bold text-secondary">Not Just a Task-Taker.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
