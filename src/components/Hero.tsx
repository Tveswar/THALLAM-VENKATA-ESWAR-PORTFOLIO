import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profilePhoto from "@/assets/Eswarimage.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-white/90">
                Thallam Venkata Eswar
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Software Engineer | Full-Stack & AI-ML Enthusiast
            </p>
            <p className="text-lg text-white/70 mb-10 max-w-lg mx-auto lg:mx-0">
              Passionate about creating innovative solutions with modern technologies.
              Currently working as an Associate Software Engineer at LeadSquared.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300"
                asChild
              >
                <a href="/Thallam Venkata Eswar.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <a href="mailto:tveswar530@gmail.com">
                <Button
                  size="lg"
                  variant="outline"
                 className="bg-white text-primary hover:bg-white/90 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Thallam Venkata Eswar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;