
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Zap, Award, Users, TrendingUp } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Aashi Singh",
      role: "Founder & CTO",
      bio: "15+ years optimizing high-traffic websites. Former Google Core Web Vitals engineer specializing in application performance.",
      image: "data:image/jpeg;base64,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",
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
    <section id="team" className="light-section bg-white">
      <div className="light-container">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="light-badge mb-6 animate-slide-up">
            <Users className="w-4 h-4 mr-2" />
            <span>Performance Experts Team</span>
          </div>
          <h2 className="mb-8 text-slate-900">
            Meet Our <span className="light-gradient-text">Performance Team</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            15+ years of combined expertise in optimizing every type of website and application. 
            Our team has transformed performance for 2000+ websites across all industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <Card key={index} className="light-card light-card-hover border-0 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-square overflow-hidden rounded-t-2xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200">
                    <Zap className="w-3 h-3 mr-1" />
                    {member.specialty}
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={member.social.twitter} className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href={member.social.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href={member.social.github} className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50">
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats & Achievements */}
        <div className="light-glass rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Our Team's <span className="light-gradient-text">Track Record</span>
            </h3>
            <p className="text-slate-600 text-lg">15+ years of proven performance optimization results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            <div className="animate-slide-up">
              <div className="light-stat-number">2000+</div>
              <div className="light-stat-label">Websites Optimized</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="light-stat-number">15+</div>
              <div className="light-stat-label">Years Experience</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="light-stat-number">47</div>
              <div className="light-stat-label">Industry Awards</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="light-stat-number">99.8%</div>
              <div className="light-stat-label">Client Satisfaction</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-blue-50 border border-blue-200">
              <Award className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
              <h4 className="text-slate-900 font-semibold mb-2">Industry Recognition</h4>
              <p className="text-slate-600 text-sm">Google Web Performance Partners & Core Web Vitals certified team</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-green-50 border border-green-200">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h4 className="text-slate-900 font-semibold mb-2">Proven Results</h4>
              <p className="text-slate-600 text-sm">Average 340% performance improvement across all client projects</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-purple-50 border border-purple-200">
              <Users className="h-8 w-8 text-purple-500 mx-auto mb-4" />
              <h4 className="text-slate-900 font-semibold mb-2">Team Expertise</h4>
              <p className="text-slate-600 text-sm">Specialized in React, Next.js, Vue, Angular & all modern frameworks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
