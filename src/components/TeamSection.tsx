
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Zap, Award, Users, TrendingUp } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CTO",
      bio: "15+ years optimizing high-traffic websites. Former Google Core Web Vitals engineer specializing in React performance.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      specialty: "Core Web Vitals"
    },
    {
      name: "Priya Sharma", 
      role: "Lead Performance Engineer",
      bio: "Full-stack performance expert with 12+ years in e-commerce optimization. Reduced load times by 70% for Fortune 500 companies.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#" 
      },
      specialty: "E-commerce Speed"
    },
    {
      name: "Marcus Wu",
      role: "React Optimization Specialist", 
      bio: "JavaScript performance wizard with 10+ years specializing in React, Next.js, and SPA optimization for enterprise applications.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      specialty: "React & SPA"
    },
    {
      name: "Sophia Garcia",
      role: "UX Performance Designer",
      bio: "Combines 8+ years of UX design expertise with deep knowledge of performance psychology and user behavior optimization.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      specialty: "UX Performance"
    }
  ];

  return (
    <section id="team" className="dark-section bg-zinc-900">
      <div className="dark-container">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="dark-badge mb-6 animate-slide-up">
            <Users className="w-4 h-4 mr-2" />
            <span>Performance Experts Team</span>
          </div>
          <h2 className="mb-8 text-white">
            Meet Our <span className="dark-gradient-text">Performance Team</span>
          </h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            15+ years of combined expertise in optimizing every type of website and application. 
            Our team has transformed performance for 2000+ websites across all industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <Card key={index} className="dark-card dark-card-hover border-0 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-square overflow-hidden rounded-t-2xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    <Zap className="w-3 h-3 mr-1" />
                    {member.specialty}
                  </div>
                </div>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={member.social.twitter} className="text-zinc-500 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-zinc-800/50">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href={member.social.linkedin} className="text-zinc-500 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-zinc-800/50">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href={member.social.github} className="text-zinc-500 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-zinc-800/50">
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats & Achievements */}
        <div className="dark-glass rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Team's <span className="dark-gradient-text">Track Record</span>
            </h3>
            <p className="text-zinc-400 text-lg">15+ years of proven performance optimization results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            <div className="animate-slide-up">
              <div className="dark-stat-number">2000+</div>
              <div className="dark-stat-label">Websites Optimized</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="dark-stat-number">15+</div>
              <div className="dark-stat-label">Years Experience</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="dark-stat-number">47</div>
              <div className="dark-stat-label">Industry Awards</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="dark-stat-number">99.8%</div>
              <div className="dark-stat-label">Client Satisfaction</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50">
              <Award className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Industry Recognition</h4>
              <p className="text-zinc-400 text-sm">Google Web Performance Partners & Core Web Vitals certified team</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50">
              <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Proven Results</h4>
              <p className="text-zinc-400 text-sm">Average 340% performance improvement across all client projects</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50">
              <Users className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Team Expertise</h4>
              <p className="text-zinc-400 text-sm">Specialized in React, Next.js, Vue, Angular & all modern frameworks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
