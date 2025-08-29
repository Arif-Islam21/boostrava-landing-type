import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Users,
  BookOpen,
  Video,
  Headphones,
} from "lucide-react";
import { Button } from "../ui/button";

export const SupportSection = () => {
  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      description: "Instant help when you need it most",
      availability: "24/7 Available",
      responseTime: "< 2 minutes",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct line to our expert team",
      availability: "Business Hours",
      responseTime: "Immediate",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed assistance for complex issues",
      availability: "24/7 Available",
      responseTime: "< 4 hours",
    },
    {
      icon: Video,
      title: "Video Calls",
      description: "Screen sharing and personalized demos",
      availability: "Scheduled",
      responseTime: "Same day",
    },
  ];

  const supportFeatures = [
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Your personal success partner",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Documentation",
      description: "Detailed guides and tutorials",
    },
    {
      icon: Video,
      title: "Video Training Sessions",
      description: "Live and recorded training content",
    },
    {
      icon: Headphones,
      title: "Technical Onboarding",
      description: "Expert setup and configuration",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              World-Class Customer Support
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Experience exceptional support that ensures your success. Our expert
            team is here to help you maximize your advertising performance every
            step of the way.
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 animate-pulse-glow">
                <channel.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {channel.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {channel.description}
              </p>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Availability:
                  </span>
                  <span className="text-sm font-semibold text-accent">
                    {channel.availability}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Response:
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {channel.responseTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Promise */}
        <div className="bg-gradient-primary rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">Our Support Promise</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Were committed to your success. Our support team consists of
              advertising experts, technical specialists, and customer success
              managers dedicated to your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">99.9% Uptime</h4>
              <p className="text-white/80">Reliable platform performance</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Expert Team</h4>
              <p className="text-white/80">
                Certified advertising professionals
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">24/7 Availability</h4>
              <p className="text-white/80">Round-the-clock assistance</p>
            </div>
          </div>
        </div>

        {/* Additional Support Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-2xl p-6 text-center shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-secondary rounded-xl mb-4 mx-auto">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-card">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is standing by to help you launch your first
            campaign and achieve your advertising goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="hero" size="lg">
              Get Support Now
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
