
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CTO",
      bio: "10+ years optimizing high-traffic websites. Former Google performance engineer.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Priya Sharma",
      role: "Lead Performance Engineer",
      bio: "Full-stack performance expert with background in e-commerce optimization.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#" 
      }
    },
    {
      name: "Marcus Wu",
      role: "Frontend Optimization Specialist",
      bio: "JavaScript optimization wizard specializing in React and Next.js applications.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sophia Garcia",
      role: "UX Performance Designer",
      bio: "Combines UX design expertise with deep knowledge of performance best practices.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="team" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our <span className="gradient-text">Team</span></h2>
          <p className="text-lg text-gray-600">
            Meet our team of web performance experts dedicated to optimizing your digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-brand-purple font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={member.social.twitter} className="text-gray-400 hover:text-brand-purple transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-brand-purple transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-brand-purple transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-brand-purple/5 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Our Team's <span className="gradient-text">Strength</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-brand-purple mb-1">15+</div>
              <p className="text-gray-600">Performance Experts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-brand-purple mb-1">10+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-brand-purple mb-1">24</div>
              <p className="text-gray-600">Industry Awards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-brand-purple mb-1">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
