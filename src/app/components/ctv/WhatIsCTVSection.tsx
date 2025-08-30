import { Card, CardContent } from "../../components/ui/card";
import {
  TrendingUp,
  Target,
  Shield,
  Zap,
  Tv,
  Users,
  BarChart3,
  Globe,
} from "lucide-react";
const WhatIsCTVSection = () => {
  const ctvBenefits = [
    {
      icon: TrendingUp,
      title: "CTV is Growing",
      description:
        "98% of US households own CTV devices with 66% of advertisers increasing budgets",
      stat: "42.5B",
      statLabel: "Market by 2027",
    },
    {
      icon: Globe,
      title: "Extend Your Reach",
      description:
        "Access premium inventory across all major streaming platforms and devices",
      stat: "85%",
      statLabel: "Household penetration",
    },
    {
      icon: Target,
      title: "Contextual Targeting",
      description:
        "Advanced audience targeting based on viewing behavior and preferences",
      stat: "45%",
      statLabel: "Better targeting accuracy",
    },
    {
      icon: Shield,
      title: "Brand Safe & Suitable",
      description:
        "Premium, curated inventory ensures your brand appears in safe environments",
      stat: "99.9%",
      statLabel: "Brand safety score",
    },
  ];
  const videoFormats = [
    {
      name: "Spark",
      description: "Short-form engaging video ads",
      duration: "6-15 seconds",
      placement: "Pre-roll optimal",
    },
    {
      name: "Squeezeback",
      description: "Non-intrusive overlay format",
      duration: "10-30 seconds",
      placement: "During content",
    },
    {
      name: "Spotlight",
      description: "Premium full-screen experience",
      duration: "15-30 seconds",
      placement: "Mid-roll premium",
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What is <span className="text-primary">CTV Advertising?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Connected TV (CTV) advertising represents the future of television
            marketing, delivering targeted video ads through internet-connected
            television devices with unprecedented precision and measurability.
          </p>
        </div>

        {/* CTV Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ctvBenefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50 hover:shadow-2xl"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {benefit.description}
                </p>
                <div className="border-t border-border/50 pt-4">
                  <div className="text-2xl font-bold text-primary">
                    {benefit.stat}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {benefit.statLabel}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Ad Formats */}
        <div className="bg-gradient-to-br from-card/50 to-muted/20 rounded-3xl p-8 border border-border/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Boost RAVA C-Tv Ad Formats
            </h3>
            <p className="text-muted-foreground">
              Choose from our optimized video formats designed for maximum
              engagement and performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {videoFormats.map((format, index) => (
              <div
                key={index}
                className="bg-card/80 rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-primary">
                    {format.name}
                  </h4>
                  <Tv className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {format.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{format.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Best for:</span>
                    <span className="font-medium">{format.placement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTV Ecosystem Visualization */}
          <div className="bg-background/50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-center mb-6">
              CTV Advertising Ecosystem
            </h4>

            <div className="relative">
              {/* Central Hub */}
              <div className="flex justify-center mb-8">
                <div className="bg-primary text-primary-foreground rounded-full p-6 relative">
                  <Zap className="w-8 h-8" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Connected Elements */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    icon: Users,
                    label: "Audiences",
                    color: "text-blue-400",
                  },
                  {
                    icon: Tv,
                    label: "Devices",
                    color: "text-purple-400",
                  },
                  {
                    icon: BarChart3,
                    label: "Analytics",
                    color: "text-green-400",
                  },
                  {
                    icon: Target,
                    label: "Targeting",
                    color: "text-orange-400",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="w-12 h-12 bg-card border border-border/50 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-20">
                  <defs>
                    <linearGradient
                      id="connectionGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{
                          stopColor: "hsl(var(--primary))",
                          stopOpacity: 0.5,
                        }}
                      />
                      <stop
                        offset="100%"
                        style={{
                          stopColor: "hsl(var(--accent))",
                          stopOpacity: 0.5,
                        }}
                      />
                    </linearGradient>
                  </defs>
                  <line
                    x1="50%"
                    y1="20%"
                    x2="25%"
                    y2="80%"
                    stroke="url(#connectionGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                  />
                  <line
                    x1="50%"
                    y1="20%"
                    x2="75%"
                    y2="80%"
                    stroke="url(#connectionGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{
                      animationDelay: "1s",
                    }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatIsCTVSection;
