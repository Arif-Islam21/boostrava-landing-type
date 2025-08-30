import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  TrendingUp,
  Users,
  ShoppingCart,
  Zap,
  Building2,
  Crown,
  Rocket,
  Target,
} from "lucide-react";

const OverviewSection = () => {
  const successMetrics = [
    { value: "500+", label: "Brands Elevated", icon: Building2 },
    { value: "250%", label: "Average ROI Increase", icon: TrendingUp },
    { value: "10M+", label: "Daily Impressions", icon: Users },
    { value: "98%", label: "Client Satisfaction", icon: Crown },
  ];

  const successStories = [
    {
      industry: "E-commerce",
      brandType: "Fashion Retailer",
      improvement: "340% sales increase",
      description:
        "Leveraged CTV advertising during peak shopping seasons with precise demographic targeting",
      icon: ShoppingCart,
    },
    {
      industry: "Technology",
      brandType: "SaaS Platform",
      improvement: "180% lead generation",
      description:
        "Used programmatic display and video ads to reach decision-makers across multiple touchpoints",
      icon: Zap,
    },
    {
      industry: "Healthcare",
      brandType: "Wellness Brand",
      improvement: "220% brand awareness",
      description:
        "Built trust through contextually relevant placements in premium health and lifestyle content",
      icon: Target,
    },
  ];

  const salesFunnelSteps = [
    { step: "Awareness", description: "Reach new audiences", percentage: 100 },
    { step: "Interest", description: "Engage prospects", percentage: 75 },
    { step: "Consideration", description: "Nurture leads", percentage: 50 },
    { step: "Conversion", description: "Drive sales", percentage: 25 },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-card/30 to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary">Boost RAVA</span> Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how leading companies and brands have achieved market
            dominance through our intelligent advertising solutions and
            strategic partnerships.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {successMetrics.map((metric, index) => (
            <Card
              key={index}
              className="text-center bg-card/50 border-border/50 hover:scale-105 transition-transform"
            >
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {successStories.map((story, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-card/70 border-border/50"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <story.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                    {story.industry}
                  </span>
                </div>
                <CardTitle className="text-lg">{story.brandType}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">
                  {story.improvement}
                </div>
                <p className="text-muted-foreground text-sm">
                  {story.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sales Funnel Visualization */}
        <div className="bg-background/50 rounded-3xl p-8 border border-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                E-commerce <span className="text-primary">Sales Funnel</span>{" "}
                Optimization
              </h3>
              <p className="text-muted-foreground mb-6">
                Boost RAVA's intelligent platform creates seamless sales funnels
                that guide customers from initial awareness to final conversion,
                maximizing your ROI at every stage.
              </p>

              <div className="space-y-4 mb-6">
                {salesFunnelSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{step.step}</span>
                        <span className="text-sm text-muted-foreground">
                          {step.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${step.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="group">
                <Rocket className="mr-2 h-4 w-4" />
                Build Your Funnel
                <TrendingUp className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </Button>
            </div>

            <div className="relative">
              {/* Funnel Visualization */}
              <div className="relative">
                <div className="space-y-3">
                  {salesFunnelSteps.map((step, index) => (
                    <div key={index} className="relative">
                      <div
                        className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-4 border border-border/50"
                        style={{
                          width: `${100 - index * 15}%`,
                          marginLeft: `${index * 7.5}%`,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">
                            {step.step}
                          </span>
                          <span className="text-primary font-bold">
                            {step.percentage}%
                          </span>
                        </div>
                      </div>

                      {/* Connection Arrow */}
                      {index < salesFunnelSteps.length - 1 && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary/50"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Floating Success Indicator */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 animate-bounce-slow">
                  <Crown className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
