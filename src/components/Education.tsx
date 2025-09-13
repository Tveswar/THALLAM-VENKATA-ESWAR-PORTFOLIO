import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-section">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-lg text-muted-foreground font-medium mb-2">
                  GITAM (Deemed to be University)
                </p>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">2020 - 2024</span>
                </div>
                <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                  CGPA: 9.44
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Key Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming",
                    "Database Management Systems",
                    "Software Engineering",
                    "Web Technologies",
                    "Computer Networks",
                    "Operating Systems",
                    "Machine Learning"
                  ].map((course, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-l-primary">
            <div className="flex items-center gap-4 mb-4">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">Krusma Award 🏆</h3>
                <p className="text-muted-foreground">Academic Excellence Recognition</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Awarded for securing 10 CGPA in Class 10 (2019). This recognition highlights 
              consistent academic excellence and dedication to learning from an early age.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;