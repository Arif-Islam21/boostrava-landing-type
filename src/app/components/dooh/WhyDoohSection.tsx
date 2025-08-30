import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Eye, Users, Target, TrendingUp, Clock, MapPin } from "lucide-react";

const WhyDoohSection = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Unmatched Visibility",
      description:
        "Capture attention with high-resolution displays in premium locations where your audience lives, works, and travels.",
      stat: "300% higher",
      statLabel: "visibility than traditional ads",
    },
    {
      icon: Users,
      title: "Massive Reach",
      description:
        "Connect with millions of consumers daily across diverse demographics and geographic locations.",
      stat: "500M+",
      statLabel: "daily impressions nationwide",
    },
    {
      icon: Target,
      title: "Precise Targeting",
      description:
        "Leverage location data and audience analytics to deliver the right message at the perfect moment.",
      stat: "85%",
      statLabel: "targeting accuracy rate",
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description:
        "Measurable results with advanced analytics, real-time performance tracking, and campaign optimization.",
      stat: "4.2x",
      statLabel: "average return on investment",
    },
    {
      icon: Clock,
      title: "24/7 Exposure",
      description:
        "Your brand works around the clock with continuous visibility that never sleeps or takes a break.",
      stat: "168 hours",
      statLabel: "of weekly brand exposure",
    },
    {
      icon: MapPin,
      title: "Strategic Locations",
      description:
        "Premium placements in high-traffic areas including stadiums, airports, shopping centers, and city centers.",
      stat: "1000+",
      statLabel: "strategic locations available",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2">
            Digital Advertising Revolution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why DOOH Advertising is
            <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Essential for Your Brand
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Digital Out-of-Home advertising represents the future of brand
            communication. Here's why leading companies are making the switch to
            DOOH.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl gradient-primary text-primary-foreground group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {benefit.stat}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {benefit.statLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-8 rounded-2xl gradient-hero text-white">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Ready to Transform Your Advertising?
              </h3>
              <p className="text-white/90">
                Join thousands of brands already maximizing their reach with
                DOOH
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDoohSection;
