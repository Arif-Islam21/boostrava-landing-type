import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  BarChart3,
  TrendingUp,
  Clock,
  Zap,
  Eye,
  Users,
  Target,
  DollarSign,
  Activity,
  Globe,
} from "lucide-react";

const ReportingSection = () => {
  const reportFeatures = [
    {
      icon: Clock,
      title: "Real-Time Dashboard",
      description: "Live campaign performance data updated every second",
      highlight: "100% Real-Time",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive metrics and KPI tracking across all channels",
      highlight: "50+ Metrics",
    },
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description: "AI-powered recommendations for campaign optimization",
      highlight: "Smart Insights",
    },
    {
      icon: Globe,
      title: "Cross-Platform Reports",
      description:
        "Unified reporting across all advertising channels and formats",
      highlight: "Unified View",
    },
  ];

  const liveMetrics = [
    {
      label: "Active Campaigns",
      value: "247",
      change: "+12",
      icon: Activity,
      color: "text-green-400",
    },
    {
      label: "Total Impressions",
      value: "12.4M",
      change: "+2.3M",
      icon: Eye,
      color: "text-blue-400",
    },
    {
      label: "Click Rate",
      value: "4.7%",
      change: "+0.8%",
      icon: Target,
      color: "text-purple-400",
    },
    {
      label: "Revenue Today",
      value: "$47.2K",
      change: "+$8.1K",
      icon: DollarSign,
      color: "text-green-400",
    },
  ];

  const chartData = [
    { time: "00:00", impressions: 45, clicks: 3.2, conversions: 0.8 },
    { time: "04:00", impressions: 32, clicks: 2.1, conversions: 0.5 },
    { time: "08:00", impressions: 78, clicks: 5.8, conversions: 1.4 },
    { time: "12:00", impressions: 95, clicks: 7.2, conversions: 1.9 },
    { time: "16:00", impressions: 87, clicks: 6.5, conversions: 1.7 },
    { time: "20:00", impressions: 112, clicks: 8.9, conversions: 2.3 },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-card/30 to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary">Reporting System</span> Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Boost RAVA's unique reporting system provides complete real-time
            visibility into your campaigns with intuitive dashboards and
            actionable insights from the Avatarize panel.
          </p>
        </div>

        {/* Report Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reportFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50 hover:shadow-xl"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {feature.highlight}
                </div>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Dashboard Preview */}
        <div className="bg-background/50 rounded-3xl p-8 border border-border/50 mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Live Dashboard Preview
              </h3>
              <p className="text-muted-foreground">
                Real-time performance monitoring
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live Data</span>
            </div>
          </div>

          {/* Live Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {liveMetrics.map((metric, index) => (
              <Card key={index} className="bg-card/70 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    <span className="text-xs font-medium text-green-400">
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Chart */}
          <div className="bg-card/50 rounded-2xl p-6 border border-border/50">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-semibold">24-Hour Performance</h4>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Impressions (K)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Clicks (%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Conversions (%)</span>
                </div>
              </div>
            </div>

            <div className="relative h-64">
              <div className="flex items-end justify-between h-full space-x-2">
                {chartData.map((data, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center space-y-1"
                  >
                    {/* Conversions */}
                    <div
                      className="w-full bg-green-400 rounded-t-sm transition-all duration-1000"
                      style={{
                        height: `${data.conversions * 30}px`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    ></div>
                    {/* Clicks */}
                    <div
                      className="w-full bg-accent rounded-t-sm transition-all duration-1000"
                      style={{
                        height: `${data.clicks * 15}px`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    ></div>
                    {/* Impressions */}
                    <div
                      className="w-full bg-primary rounded-t-sm transition-all duration-1000"
                      style={{
                        height: `${data.impressions * 2}px`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    ></div>
                    <span className="text-xs text-muted-foreground mt-2">
                      {data.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Avatarize Panel Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Avatarize <span className="text-primary">Control Panel</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Our intuitive control panel gives you complete visibility and
              control over all your advertising campaigns with advanced
              filtering and customization options.
            </p>

            <div className="space-y-4 mb-6">
              {[
                "Real-time campaign monitoring and alerts",
                "Custom dashboard creation and sharing",
                "Advanced filtering and data segmentation",
                "Automated report generation and scheduling",
                "Multi-user access with role-based permissions",
                "White-label reporting for client presentations",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="group">
              <BarChart3 className="mr-2 h-5 w-5" />
              Access Dashboard
              <TrendingUp className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </div>

          <div className="relative">
            {/* Dashboard Preview */}
            <div className="bg-card/50 rounded-2xl p-6 border border-border/50 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Campaign Overview</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs">Real-time</span>
                </div>
              </div>

              {/* Mini Charts */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-background/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">
                      Performance
                    </span>
                    <TrendingUp className="w-3 h-3 text-green-400" />
                  </div>
                  <div className="text-lg font-bold text-primary">847%</div>
                </div>
                <div className="bg-background/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Reach</span>
                    <Users className="w-3 h-3 text-blue-400" />
                  </div>
                  <div className="text-lg font-bold text-primary">2.4M</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>CTV Campaigns</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div
                      className="bg-primary h-1.5 rounded-full transition-all duration-1000"
                      style={{ width: "87%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Display Ads</span>
                    <span>64%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div
                      className="bg-accent h-1.5 rounded-full transition-all duration-1000"
                      style={{ width: "64%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Video Ads</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div
                      className="bg-green-400 h-1.5 rounded-full transition-all duration-1000"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full p-2 animate-bounce-slow">
              <Zap className="w-4 h-4" />
            </div>
            <div className="absolute -bottom-3 -left-3 bg-accent text-accent-foreground rounded-full p-2 animate-float">
              <BarChart3 className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportingSection;
