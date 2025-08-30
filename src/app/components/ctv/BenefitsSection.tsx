import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Crown,
  DollarSign,
  TrendingUp,
  Users,
  Shield,
  Zap,
  BarChart3,
  Rocket,
  Star,
  Gift,
} from "lucide-react";
const BenefitsSection = () => {
  const avatarizerBenefits = [
    {
      icon: Crown,
      title: "Premium Revenue Share",
      description:
        "Industry-leading revenue sharing model with transparent payouts",
      benefit: "Up to 85%",
      highlight: "Revenue Share",
    },
    {
      icon: DollarSign,
      title: "Multiple Monetization",
      description:
        "Diversify income through various ad formats and premium placements",
      benefit: "$2.50+",
      highlight: "Average eCPM",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description:
        "AI-powered optimization automatically maximizes your earnings",
      benefit: "45%",
      highlight: "Revenue Increase",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account manager and priority technical support",
      benefit: "24/7",
      highlight: "Expert Support",
    },
  ];
  const platformAdvantages = [
    {
      icon: Shield,
      title: "Brand Safety First",
      description:
        "Premium advertisers and safe content ensure brand protection",
      features: [
        "Content verification",
        "Advertiser screening",
        "Quality assurance",
      ],
    },
    {
      icon: Zap,
      title: "Real-Time Analytics",
      description:
        "Advanced dashboard with live performance tracking and insights",
      features: ["Live reporting", "Custom metrics", "Export capabilities"],
    },
    {
      icon: BarChart3,
      title: "Smart Optimization",
      description:
        "Machine learning algorithms optimize ad placement automatically",
      features: ["Auto-optimization", "A/B testing", "Performance tuning"],
    },
    {
      icon: Rocket,
      title: "Instant Integration",
      description: "Quick setup with comprehensive API and plugin support",
      features: ["5-minute setup", "Plugin library", "API documentation"],
    },
  ];
  const earningsProjection = [
    {
      month: "Month 1",
      earnings: 1200,
      growth: 0,
    },
    {
      month: "Month 2",
      earnings: 1680,
      growth: 40,
    },
    {
      month: "Month 3",
      earnings: 2350,
      growth: 96,
    },
    {
      month: "Month 4",
      earnings: 3290,
      growth: 174,
    },
    {
      month: "Month 5",
      earnings: 4200,
      growth: 250,
    },
    {
      month: "Month 6",
      earnings: 5100,
      growth: 325,
    },
  ];
  const successStories = [
    {
      name: "TechBlog Pro",
      type: "Technology Blog",
      monthlyEarnings: "$12,400",
      growth: "+340%",
      avatar: "TB",
    },
    {
      name: "Gaming Central",
      type: "Gaming Website",
      monthlyEarnings: "$8,750",
      growth: "+280%",
      avatar: "GC",
    },
    {
      name: "Fashion Forward",
      type: "Lifestyle Site",
      monthlyEarnings: "$15,200",
      growth: "+420%",
      avatar: "FF",
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 bg-purple-500">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-primary">Advertiser Benefits</span> & Rewards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Join the elite community of Boost RAVA C-TV Advertiser and unlock
            premium monetization opportunities with industry-leading revenue
            sharing and professional support.
          </p>
        </div>

        {/* Core Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {avatarizerBenefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50 hover:shadow-xl text-center"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
                <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {benefit.highlight}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-primary mb-2">
                  {benefit.benefit}
                </div>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Advantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platformAdvantages.map((advantage, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-card/50 border-border/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <advantage.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-lg">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm text-center mb-4">
                  {advantage.description}
                </p>
                <div className="space-y-2">
                  {advantage.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-xs text-foreground/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Earnings Projection */}
        <div className="bg-gradient-to-br from-card/30 to-muted/20 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Earnings Projection</span> for New
              Avatarizers
            </h3>
            <p className="text-muted-foreground">
              See how your revenue can grow with our intelligent optimization
              system
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4">
                {earningsProjection.map((data, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium">{data.month}</div>
                        <div className="text-sm text-muted-foreground">
                          Monthly Progress
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">
                        ${data.earnings.toLocaleString()}
                      </div>
                      {data.growth > 0 && (
                        <div className="text-sm text-green-400">
                          +{data.growth}%
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Earnings Chart */}
              <div className="bg-card/50 rounded-2xl p-6 border border-border/50">
                <h4 className="text-lg font-semibold text-center mb-6">
                  Revenue Growth Trajectory
                </h4>

                <div className="relative h-64">
                  <div className="flex items-end justify-between h-full">
                    {earningsProjection.map((data, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center space-y-2"
                      >
                        <div className="text-xs font-medium text-primary">
                          ${data.earnings / 1000}k
                        </div>
                        <div
                          className="w-8 bg-gradient-to-t from-primary to-accent rounded-t-lg transition-all duration-1000"
                          style={{
                            height: `${(data.earnings / 5100) * 200}px`,
                            animationDelay: `${index * 0.2}s`,
                          }}
                        ></div>
                        <div className="text-xs text-muted-foreground">
                          {data.month.replace("Month ", "M")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    $5,100+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projected Monthly by Month 6
                  </div>
                </div>
              </div>

              {/* Floating Success Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 animate-bounce-slow">
                <Star className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-background/50 rounded-3xl p-8 border border-border/50 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Advertiser Success Stories
            </h3>
            <p className="text-muted-foreground">
              Join thousands of successful publishers maximizing their revenue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="text-center bg-card/50 border-border/50 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {story.avatar}
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{story.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {story.type}
                  </p>
                  <div className="border-t border-border/50 pt-4">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {story.monthlyEarnings}
                    </div>
                    <div className="text-sm text-green-400 font-medium">
                      {story.growth} growth
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12">
          <div className="max-w-2xl mx-auto">
            <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Ready to Become an{" "}
              <span className="text-primary">Advertiser?</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join our exclusive network and start maximizing your revenue with
              premium advertising opportunities and industry-leading support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Crown className="mr-2 h-5 w-5" />
                Become an Avatarizer
                <Rocket className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
              <Button variant="outline" size="lg">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Earnings Calculator
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5min</div>
                <div className="text-xs text-muted-foreground">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$0</div>
                <div className="text-xs text-muted-foreground">Setup Cost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BenefitsSection;
