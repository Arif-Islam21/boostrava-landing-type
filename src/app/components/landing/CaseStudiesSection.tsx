import {
  TrendingUp,
  Users,
  Target,
  Award,
  ArrowRight,
  Building,
} from "lucide-react";
import { Button } from "../ui/button";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      company: "TechNova Solutions",
      industry: "B2B SaaS",
      challenge: "Low quality leads and high customer acquisition costs",
      solution:
        "Implemented AI-driven lookalike audiences and behavioral targeting",
      results: {
        leadQuality: "+450%",
        cac: "-65%",
        roas: "8.2x",
        timeframe: "6 months",
      },
      icon: Building,
      color: "from-blue-500 to-purple-600",
    },
    {
      company: "FashionForward",
      industry: "E-commerce",
      challenge: "Seasonal fluctuations and inventory optimization",
      solution:
        "Dynamic product retargeting with real-time inventory integration",
      results: {
        sales: "+280%",
        inventory: "+95%",
        roas: "6.8x",
        timeframe: "4 months",
      },
      icon: Building,
      color: "from-pink-500 to-rose-600",
    },
    {
      company: "HealthPlus Medical",
      industry: "Healthcare",
      challenge: "Reaching qualified patients while maintaining compliance",
      solution: "Geo-targeted campaigns with HIPAA-compliant tracking",
      results: {
        patients: "+360%",
        compliance: "100%",
        roas: "5.4x",
        timeframe: "8 months",
      },
      icon: Building,
      color: "from-green-500 to-emerald-600",
    },
    {
      company: "EduTech Academy",
      industry: "Education",
      challenge: "Low enrollment rates and high cost per acquisition",
      solution: "Video-first campaigns targeting educational content consumers",
      results: {
        enrollment: "+520%",
        cpa: "-70%",
        roas: "9.1x",
        timeframe: "5 months",
      },
      icon: Building,
      color: "from-orange-500 to-red-600",
    },
  ];

  const successMetrics = [
    { number: "500+", label: "Successful Campaigns", icon: Target },
    { number: "98%", label: "Client Satisfaction", icon: Users },
    { number: "340%", label: "Average ROI Increase", icon: TrendingUp },
    { number: "50+", label: "Industry Awards", icon: Award },
  ];

  return (
    <section id="case-studies" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Discover how leading brands achieved remarkable growth with Boost
            RAVAs programmatic advertising platform. Real results from real
            businesses.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {successMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">
                {metric.number}
              </h3>
              <p className="text-muted-foreground font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-102 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center`}
                >
                  <study.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {study.company}
                  </h3>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2">
                  Challenge
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Results in {study.results.timeframe}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(study.results)
                    .filter(([key]) => key !== "timeframe")
                    .map(([key, value], resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key === "cac"
                            ? "CAC Reduction"
                            : key === "roas"
                            ? "ROAS"
                            : key === "leadQuality"
                            ? "Lead Quality"
                            : key === "sales"
                            ? "Sales Increase"
                            : key === "inventory"
                            ? "Inventory Turnover"
                            : key === "patients"
                            ? "Patient Acquisition"
                            : key === "compliance"
                            ? "Compliance Rate"
                            : key === "enrollment"
                            ? "Enrollment Increase"
                            : key === "cpa"
                            ? "CPA Reduction"
                            : key}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful brands that have transformed their
            advertising performance with Boost RAVAs programmatic platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="glass" size="lg" className="group">
              Start Your Success Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
