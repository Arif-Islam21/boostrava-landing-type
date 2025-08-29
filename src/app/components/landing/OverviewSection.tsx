import {
  TrendingUp,
  Users,
  Zap,
  Target,
  Award,
  ShoppingCart,
} from "lucide-react";
import { Button } from "../ui/button";

export const OverviewSection = () => {
  const stats = [
    { number: "500+", label: "Global Brands", icon: Award },
    { number: "98%", label: "Client Retention", icon: Users },
    { number: "2.5B+", label: "Monthly Impressions", icon: TrendingUp },
    { number: "340%", label: "Average ROI", icon: Target },
  ];

  const successStories = [
    {
      company: "TechCorp",
      industry: "SaaS",
      result: "450% ROI increase",
      description:
        "Scaled from startup to market leader with targeted B2B campaigns",
    },
    {
      company: "FashionHub",
      industry: "E-commerce",
      result: "280% sales growth",
      description:
        "Transformed online presence with dynamic product advertising",
    },
    {
      company: "HealthPlus",
      industry: "Healthcare",
      result: "360% lead increase",
      description:
        "Reached health-conscious consumers with precision targeting",
    },
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Main Overview */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Boost RAVA Overview
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            Empowering companies and brands to reach the pinnacle of market
            success through intelligent programmatic advertising and data-driven
            insights.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-foreground mb-2">
                    {story.company}
                  </h4>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {story.industry}
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {story.result}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* E-commerce & Sales Funnel Section */}
        <div className="bg-gradient-primary rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                E-commerce Excellence & Sales Funnel Optimization
              </h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Transform your e-commerce business with our advanced
                programmatic solutions. We create seamless sales funnels that
                guide customers from awareness to conversion, maximizing your
                revenue at every touchpoint.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <ShoppingCart className="w-6 h-6 text-white" />
                  <span>Dynamic Product Retargeting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-white" />
                  <span>Conversion Rate Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-white" />
                  <span>Automated Sales Funnel Creation</span>
                </div>
              </div>
              <Button variant="glass" size="lg">
                Boost Your Sales
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
                <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">280%</h4>
                <p className="text-white/80 text-sm">Average Sales Increase</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">65%</h4>
                <p className="text-white/80 text-sm">Customer Retention</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
                <Award className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">92%</h4>
                <p className="text-white/80 text-sm">Brand Recognition</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
                <ShoppingCart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">4.2x</h4>
                <p className="text-white/80 text-sm">ROAS Improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
