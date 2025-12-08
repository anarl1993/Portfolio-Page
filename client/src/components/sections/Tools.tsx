import { Badge } from "@/components/ui/badge";
import bgPattern from "@assets/generated_images/abstract_geometric_background_with_teal_and_blue_gradients.png";

const toolCategories = [
  {
    name: "CRM & Project Management",
    tools: ["HubSpot", "ClickUp", "Asana", "Monday.com", "Odoo", "Kustomer", "Notion", "Zoho", "Zapier"]
  },
  {
    name: "Property Management",
    tools: ["Buildium", "Airtable", "Trello", "Leadsimple"]
  },
  {
    name: "General Operations",
    tools: ["Google Workspace", "Microsoft Office", "Slack", "VOIP", "Zoom", "Teams", "QuickBooks"]
  }
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgPattern})` }}
      ></div>
      <div className="absolute inset-0 bg-primary/95 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 text-white">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Tool Mastery & Tech Stack
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I leverage modern tools including Generative AI and advanced data analysis to build dashboards and deliver actionable KPI tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-secondary/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <Badge 
                    key={tool} 
                    className="bg-white text-primary hover:bg-secondary hover:text-white transition-colors px-3 py-1 text-sm font-medium border-none"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
