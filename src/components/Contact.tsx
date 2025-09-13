import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/thallam-venkata-eswar-a28ba4237/",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Tveswar",
      color: "text-gray-700 hover:text-gray-900"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:tveswar530@gmail.com",
      color: "text-red-500 hover:text-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 max-w-3xl mx-auto">

          {/* Contact Form */}
          {/* <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or just say hello..."
                  required
                  className="mt-2 min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card> */}

          {/* Contact Info */}
          <div className="flex flex-col items-center justify-center gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently based in Bangalore, India, and I'm always excited to connect with 
                fellow developers, potential collaborators, and anyone interested in technology 
                and innovation.
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition-all duration-300 ${link.color}`}
                  >
                    <link.icon className="h-6 w-6" />
                    <div>
                      <span className="font-medium text-foreground">{link.name}</span>
                      <p className="text-sm text-muted-foreground">
                        {link.name === "Email" ? "tveswar530@gmail.com" : `Thallam Venkata Eswar`}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Open to Opportunities</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm currently exploring new opportunities in full-stack development, 
                cloud computing, and innovative technology projects. If you have an 
                exciting project or opportunity, I'd love to hear from you!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;