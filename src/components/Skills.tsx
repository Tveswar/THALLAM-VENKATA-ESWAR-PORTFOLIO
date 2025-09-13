import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: Code,
      skills: ["React.js", "HTML", "CSS", "JavaScript", "Python", ".NET (C#)", "Java", "SQL", "SASS", "GraphQL", "REST APIs"]
    },
    {
      title: "Cloud & Database",
      icon: Cloud,
      skills: ["AWS (S3, EC2, EMR)", "MySQL", "MongoDB", "Docker"]
    },
    {
      title: "Tools & Design",
      icon: Wrench,
      skills: ["Git", "Figma", "Adobe XD", "JIRA", "Bitbucket", "Confluence"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-6">
                <category.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-skill text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;