import { Badge } from "@/components/ui/badge";
import bgPattern from "@assets/generated_images/abstract_geometric_background_with_teal_and_blue_gradients.png";
import { Phone } from "lucide-react";

// Helper to get Simple Icons URL
const getIconUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}/white`;

const toolCategories = [
  {
    name: "CRM/PM",
    tools: [
      { name: "HubSpot", icon: getIconUrl("hubspot") },
      { name: "ClickUp", icon: getIconUrl("clickup") },
      { name: "Asana", icon: getIconUrl("asana") },
      { name: "Monday.com", icon: getIconUrl("mondaydotcom") },
      { name: "Odoo", icon: getIconUrl("odoo") },
      { name: "Kustomer", icon: getIconUrl("kustomer") }, // Might not exist, will handle error or use fallback visually if needed
      { name: "Notion", icon: getIconUrl("notion") },
      { name: "Zoho", icon: getIconUrl("zoho") },
      { name: "Zapier", icon: getIconUrl("zapier") }
    ]
  },
  {
    name: "Property",
    tools: [
      { name: "Buildium", icon: null }, // Buildium doesn't have a simple icon usually
      { name: "Airtable", icon: getIconUrl("airtable") },
      { name: "Trello", icon: getIconUrl("trello") },
      { name: "Leadsimple", icon: null } // Leadsimple doesn't have a simple icon usually
    ]
  },
  {
    name: "General",
    tools: [
      { name: "Google Workspace", icon: getIconUrl("google") },
      { name: "Microsoft Office", icon: getIconUrl("microsoft") },
      { name: "Slack", icon: getIconUrl("slack") },
      { name: "VOIP", icon: "phone" }, // Special case for Lucide icon
      { name: "Zoom", icon: getIconUrl("zoom") },
      { name: "Teams", icon: getIconUrl("microsoftteams") },
      { name: "QuickBooks", icon: getIconUrl("quickbooks") }
    ]
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-white">
            Key Tools Mastery
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
                    key={tool.name} 
                    className="bg-white text-primary hover:bg-secondary hover:text-white transition-colors pl-2 pr-3 py-1 text-sm font-medium border-none flex items-center gap-2"
                  >
                    {tool.icon === "phone" ? (
                      <Phone className="w-4 h-4 text-primary" />
                    ) : tool.icon ? (
                      <img 
                        src={tool.icon} 
                        alt={`${tool.name} logo`} 
                        className="w-4 h-4 object-contain brightness-0 invert filter group-hover:brightness-0 group-hover:invert-0"
                        style={{ filter: "invert(0%)" }} // Force black initially (since badge is white)
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : null}
                    {tool.name}
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
