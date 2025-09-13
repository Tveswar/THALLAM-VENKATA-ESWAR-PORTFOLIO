import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "LeadSquared",
      location: "Bangalore, India",
      period: "2025 - Present",
      description: [
        "Working on full-stack development using React.js and .NET frameworks",
        "Implementing GraphQL and REST APIs for efficient data management",
        "Collaborating with cross-functional teams using Agile methodologies",
        "Contributing to code reviews and maintaining high code quality standards"
      ],
      current: true,
    },
    {
      title: "Software Development Engineer Intern",
      company: "LeadSquared",
      location: "Bangalore, India",
      period: "Jan'25- July'25 (6 months)",
      description: [
        "Gained hands-on experience in enterprise software development",
        "Worked with React.js, HTML, CSS, and SASS for frontend development",
        "Utilized JIRA, Bitbucket, and Confluence for project management",
        "Learned industry best practices and collaborative development workflows"
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center gap-2">
                    {exp.title}
                    {exp.current && (
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center gap-4 text-muted-foreground mb-2">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;