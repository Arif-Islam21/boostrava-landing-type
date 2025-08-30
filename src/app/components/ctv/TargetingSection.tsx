import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  MapPin,
  Users,
  Activity,
  Brain,
  Target,
  Zap,
  Globe,
  Clock,
  Smartphone,
  Eye,
} from "lucide-react";
const TargetingSection = () => {
  const targetingOptions = [
    {
      icon: MapPin,
      title: "Location Targeting",
      description:
        "Precise geographic targeting from global to hyper-local levels",
      features: [
        "Country & Region",
        "City & Postal Code",
        "Custom Radius",
        "DMA Targeting",
      ],
    },
    {
      icon: Users,
      title: "Interest Targeting",
      description:
        "Reach audiences based on their interests and online behavior",
      features: [
        "Category Interests",
        "Brand Affinity",
        "Purchase Intent",
        "Content Consumption",
      ],
    },
    {
      icon: Activity,
      title: "Behavioral Targeting",
      description:
        "Target users based on their past actions and engagement patterns",
      features: [
        "Website Visitors",
        "App Usage",
        "Purchase History",
        "Engagement Level",
      ],
    },
    {
      icon: Smartphone,
      title: "Device Targeting",
      description: "Optimize campaigns for specific devices and platforms",
      features: [
        "Device Type",
        "Operating System",
        "Browser",
        "Connection Speed",
      ],
    },
  ];
  const mlFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Optimization",
      description:
        "Machine learning algorithms continuously improve targeting accuracy",
      stat: "45%",
      statLabel: "Better performance",
    },
    {
      icon: Zap,
      title: "Real-Time Adjustments",
      description: "Dynamic bid adjustments based on performance data",
      stat: "3.2x",
      statLabel: "Faster optimization",
    },
    {
      icon: Eye,
      title: "Predictive Analytics",
      description: "Forecast campaign performance and audience behavior",
      stat: "89%",
      statLabel: "Prediction accuracy",
    },
  ];
  const audienceSegments = [
    {
      name: "High-Value Shoppers",
      size: "2.3M",
      engagement: "8.4%",
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Tech Enthusiasts",
      size: "1.7M",
      engagement: "12.1%",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Fitness & Wellness",
      size: "3.1M",
      engagement: "9.7%",
      color: "from-green-500 to-blue-500",
    },
    {
      name: "Travel & Lifestyle",
      size: "2.8M",
      engagement: "11.3%",
      color: "from-orange-500 to-red-500",
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary">Target & Reach</span> with Precision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Boost RAVA's programmatic machine learning network enables
            sophisticated audience targeting with real-time optimization,
            ensuring your message reaches the right people at the right moment.
          </p>
        </div>

        {/* Targeting Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {targetingOptions.map((option, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50 hover:shadow-xl"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {option.description}
                </p>
                <div className="space-y-2">
                  {option.features.map((feature, idx) => (
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

        {/* Machine Learning Features */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Machine Learning</span>{" "}
              Programmatic Intelligence
            </h3>
            <p className="text-muted-foreground">
              Our AI-powered targeting system learns and adapts in real-time to
              maximize your campaign effectiveness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {mlFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center bg-card/50 border-border/50"
              >
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {feature.description}
                  </p>
                  <div className="border-t border-border/50 pt-4">
                    <div className="text-2xl font-bold text-primary">
                      {feature.stat}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {feature.statLabel}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Targeting Visualization */}
          <div className="bg-card/50 rounded-2xl p-6 border border-border/50">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold mb-2">
                AI Targeting in Action
              </h4>
              <p className="text-muted-foreground text-sm">
                Boost RAVA Ads Real-time audience analysis and optimization
              </p>
            </div>

            <div className="relative">
              {/* Central AI Brain */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Targeting Factors */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "NY, LA, SF",
                  },
                  {
                    icon: Clock,
                    label: "Time",
                    value: "Prime Hours",
                  },
                  {
                    icon: Globe,
                    label: "Context",
                    value: "Premium Sites",
                  },
                  {
                    icon: Target,
                    label: "Intent",
                    value: "High Purchase",
                  },
                ].map((factor, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="w-12 h-12 bg-muted/50 border border-border/50 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/10 transition-colors">
                      <factor.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <div className="text-sm font-medium">{factor.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {factor.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Connection Lines Animation */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="w-full h-full">
                  <defs>
                    <linearGradient id="pulseGradient">
                      <stop
                        offset="0%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity="0"
                      />
                      <stop
                        offset="50%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity="0.6"
                      />
                      <stop
                        offset="100%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                  {[0, 1, 2, 3].map((i) => (
                    <line
                      key={i}
                      x1="50%"
                      y1="35%"
                      x2={`${25 + i * 16.67}%`}
                      y2="85%"
                      stroke="url(#pulseGradient)"
                      strokeWidth="2"
                      className="animate-pulse"
                      style={{
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Audience Segments */}
        <div className="bg-card/30 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Premium Audience Segments
            </h3>
            <p className="text-muted-foreground">
              Access high-value audience segments with detailed insights and
              engagement metrics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {audienceSegments.map((segment, index) => (
              <div
                key={index}
                className="bg-card/50 rounded-2xl p-6 border border-border/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">{segment.name}</h4>
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${segment.color}`}
                  ></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Audience Size
                    </div>
                    <div className="text-xl font-bold text-primary">
                      {segment.size}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Avg. Engagement
                    </div>
                    <div className="text-xl font-bold text-primary">
                      {segment.engagement}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${segment.color} transition-all duration-1000`}
                      style={{
                        width: `${parseFloat(segment.engagement) * 8}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="group">
              <Target className="mr-2 h-5 w-5" />
              Explore Targeting Options
              <Zap className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TargetingSection;
