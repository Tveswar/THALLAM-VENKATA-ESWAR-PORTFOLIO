import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hospital Booking System",
      description: "A comprehensive healthcare management system allowing patients to book appointments, manage medical records, and connect with healthcare providers seamlessly.",
      techStack: ["React.js", "Node.js", "MySQL", "REST APIs", "CSS"],
      githubUrl: "https://github.com/Tveswar/Hospital-appointment-booking-system",
      // demoUrl: "#",
    },
    {
      title: "Mango Quality Assessment using ML",
      description: "Machine learning solution for automated mango quality detection using computer vision techniques to classify fruit quality based on visual characteristics.",
      techStack: ["Python", "TensorFlow", "OpenCV", "scikit-learn", "Flask"],
      githubUrl: "https://github.com/Tveswar/Quality-Assessment-of-mangoes-",
      // demoUrl: "#",
    },
    {
      title: "Job Application",
      description: "Built a responsive and visually appealing job application form using Hack and CSS, focusing on usability and clean design. Implemented interactive form validations and styled components for an enhanced user experience.",
      techStack: ["Hack", "CSS"],
      githubUrl: "https://github.com/Tveswar/JOPAPPLICATION",
    },
    {
      title: "Cucumber Moisture Analysis",
      description: "Agricultural technology solution for analyzing cucumber moisture content using IoT sensors and data analytics to optimize farming conditions.",
      techStack: ["Python", "IoT", "Data Analytics", "Django", "PostgreSQL"],
      githubUrl: "#",
      // demoUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-section">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills in full-stack development, 
            machine learning, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-project transition-all duration-300 hover:-translate-y-2 bg-card">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;