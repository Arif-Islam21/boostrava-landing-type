import {
  Zap,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Users,
  Target,
  BarChart3,
} from "lucide-react";
import { Button } from "../ui/button";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Campaign Launch",
      description:
        "Get your campaigns live in minutes with our streamlined setup process",
      highlight: "5 min setup",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description:
        "AI-powered optimization ensures maximum ROI and campaign performance",
      highlight: "340% avg ROI",
    },
    {
      icon: Shield,
      title: "Brand Safety Guaranteed",
      description:
        "Advanced fraud detection and brand safety measures protect your reputation",
      highlight: "99.9% safe",
    },
    {
      icon: Clock,
      title: "Real-Time Insights",
      description:
        "Monitor and adjust campaigns with live performance data and analytics",
      highlight: "Real-time data",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions",
      description:
        "Maximize your advertising budget with intelligent bidding strategies",
      highlight: "Save 40%",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description:
        "Expert account managers and 24/7 support ensure your success",
      highlight: "24/7 support",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description:
        "Reach your exact audience with advanced demographic and behavioral filters",
      highlight: "99.2% accuracy",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Comprehensive reporting and attribution modeling for data-driven decisions",
      highlight: "100+ metrics",
    },
  ];

  const platformFeatures = [
    "Self-serve platform with intuitive interface",
    "White-label solutions for agencies",
    "API integration for enterprise clients",
    "Custom reporting and dashboard creation",
    "Multi-currency and multi-language support",
    "Fraud detection and traffic verification",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Advertiser Benefits
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Discover why thousands of advertisers choose Boost RAVA for their
            programmatic advertising needs. Professional solutions that drive
            real results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:animate-pulse-glow">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              <div className="mb-4">
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {benefit.highlight}
                </span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Platform Features */}
        <div className="bg-gradient-primary rounded-3xl p-12 text-white mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Professional Platform Features
              </h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Our enterprise-grade platform provides everything you need to
                succeed in programmatic advertising, from campaign management to
                advanced analytics.
              </p>

              <div className="space-y-4 mb-8">
                {platformFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="ghost" size="lg">
                Explore Platform
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <Zap className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Lightning Fast</h4>
                <p className="text-white/80 text-sm">
                  Instant campaign deployment
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <Shield className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Secure</h4>
                <p className="text-white/80 text-sm">
                  Enterprise-grade security
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Scalable</h4>
                <p className="text-white/80 text-sm">
                  Grows with your business
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <BarChart3 className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Intelligent</h4>
                <p className="text-white/80 text-sm">AI-powered optimization</p>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-white rounded-3xl p-12 shadow-card text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Calculate Your Potential ROI
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            See how much you could save and earn with Boost RAVA&rsquo;s
            programmatic platform. Our clients typically see 340% ROI increase
            within the first 6 months.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <p className="text-muted-foreground">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">340%</div>
              <p className="text-muted-foreground">ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6x</div>
              <p className="text-muted-foreground">Faster Results</p>
            </div>
          </div>

          <Button variant="ghost" size="lg">
            Calculate My ROI
          </Button>
        </div>
      </div>
    </section>
  );
};
