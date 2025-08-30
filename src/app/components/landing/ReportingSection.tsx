import {
  BarChart3,
  PieChart,
  TrendingUp,
  Activity,
  Eye,
  Clock,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "../ui/button";

export const ReportingSection = () => {
  const reportingFeatures = [
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive campaign performance metrics and insights",
      metrics: ["CTR", "CPC", "Conversions", "ROAS"],
    },
    {
      icon: PieChart,
      title: "Audience Analytics",
      description: "Deep dive into your audience demographics and behavior",
      metrics: ["Demographics", "Interests", "Behavior", "Engagement"],
    },
    {
      icon: TrendingUp,
      title: "Revenue Tracking",
      description: "Track revenue attribution and ROI across all channels",
      metrics: ["Revenue", "Profit", "LTV", "Acquisition Cost"],
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Live campaign monitoring with instant alerts and updates",
      metrics: ["Live Data", "Alerts", "Optimization", "Bidding"],
    },
  ];

  const dashboardFeatures = [
    "Real-time campaign performance",
    "Custom dashboard creation",
    "Automated report scheduling",
    "White-label reporting",
    "Data export capabilities",
    "Mobile-responsive interface",
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Advanced Reporting System
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Boost RAVAs unique reporting system provides complete real-time
            visibility into your campaign performance with actionable insights
            and beautiful visualizations.
          </p>
        </div>

        {/* Reporting Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reportingFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 animate-pulse-glow">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {feature.metrics.map((metric, metricIndex) => (
                  <span
                    key={metricIndex}
                    className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gradient-primary rounded-3xl p-12 text-white mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Beautiful Dashboard Interface
              </h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Access all your campaign data through our intuitive, real-time
                dashboard. Monitor performance, track KPIs, and optimize
                campaigns with ease.
              </p>

              <div className="space-y-4 mb-8">
                {dashboardFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="glass" size="lg">
                View Dashboard Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <Eye className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Real-Time</h4>
                <p className="text-white/80 text-sm">
                  Live data updates every second
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <Clock className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">24/7</h4>
                <p className="text-white/80 text-sm">
                  Always available monitoring
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <Target className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">100+</h4>
                <p className="text-white/80 text-sm">Key performance metrics</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <Zap className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Instant</h4>
                <p className="text-white/80 text-sm">
                  Automated optimization alerts
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-card text-center">
            <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Custom Reports
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Create personalized reports with drag-and-drop widgets and custom
              metrics tailored to your business needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Predictive Analytics
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              AI-powered forecasting helps predict campaign performance and
              recommend optimization strategies.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card text-center">
            <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Attribution Modeling
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Advanced multi-touch attribution to understand the complete
              customer journey and optimize touchpoints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
