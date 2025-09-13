import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground">B.Tech in CSE from GITAM University with 9.44 CGPA</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-muted-foreground">Associate Software Engineer at LeadSquared</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Achievement</h3>
            <p className="text-muted-foreground">Krusma Award for 10 CGPA in Class 10</p>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            I'm Thallam Venkata Eswar, a recent graduate from GITAM (Deemed to be University) with a CGPA of 9.44, 
            currently working as an Associate Software Engineer at LeadSquared. I previously completed a 6-month 
            internship at the same company as a Software Development Engineer (SDE), where I gained valuable industry experience.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            As an aspiring Full Stack Developer, I have hands-on knowledge of React.js, HTML, CSS, SASS, GraphQL APIs, 
            REST APIs, and .NET frameworks using C#. I am also familiar with Python and Java, giving me a strong 
            foundation across both frontend and backend development.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            I've worked with UI/UX design tools like Figma and Adobe XD to interpret and implement modern interfaces, 
            and I'm experienced with Atlassian tools such as JIRA, Bitbucket, and Confluence. Additionally, I use Git 
            for version control and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;