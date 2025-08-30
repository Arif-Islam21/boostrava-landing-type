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
  Smartphone,
  ArrowRight,
  Target,
  Zap,
  BarChart3,
} from "lucide-react";

const CaseStudySection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fashion E-commerce Revolution",
      client: "Premium Fashion Retailer",
      industry: "E-commerce",
      challenge: "Low ROAS and poor audience targeting",
      solution: "AI-powered CTV campaigns with behavioral targeting",
      results: {
        roas: "450%",
        sales: "+320%",
        reach: "2.4M",
        duration: "3 months",
      },
      icon: ShoppingCart,
      color: "from-pink-500 to-purple-500",
      description:
        "Transformed their advertising strategy with precision targeting and creative optimization.",
    },
    {
      id: 2,
      title: "SaaS Platform Growth",
      client: "B2B Software Company",
      industry: "Technology",
      challenge: "High CAC and low-quality leads",
      solution: "Programmatic display and video advertising",
      results: {
        roas: "280%",
        leads: "+180%",
        reach: "1.8M",
        duration: "4 months",
      },
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      description:
        "Achieved remarkable lead quality improvement through strategic campaign optimization.",
    },
    {
      id: 3,
      title: "Healthcare Brand Awareness",
      client: "Medical Device Company",
      industry: "Healthcare",
      challenge: "Limited brand recognition in target market",
      solution: "Cross-platform video campaigns with contextual targeting",
      results: {
        roas: "220%",
        awareness: "+265%",
        reach: "3.1M",
        duration: "6 months",
      },
      icon: Target,
      color: "from-green-500 to-teal-500",
      description:
        "Built substantial brand presence in competitive healthcare market through strategic placement.",
    },
    {
      id: 4,
      title: "Gaming App User Acquisition",
      client: "Mobile Gaming Studio",
      industry: "Gaming",
      challenge: "High user acquisition costs and low retention",
      solution: "Interactive rich media campaigns with lookalike audiences",
      results: {
        roas: "380%",
        users: "+240%",
        reach: "4.2M",
        duration: "2 months",
      },
      icon: Users,
      color: "from-orange-500 to-red-500",
      description:
        "Dramatically reduced acquisition costs while improving user quality and retention rates.",
    },
  ];

  const successMetrics = [
    { label: "Average ROAS Improvement", value: "332%", icon: TrendingUp },
    { label: "Total Reach Generated", value: "11.5M", icon: Users },
    { label: "Client Success Rate", value: "98%", icon: Target },
    { label: "Campaign Optimization", value: "24/7", icon: Zap },
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary">Case Studies</span> & Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Boost RAVA has transformed businesses across industries
            with our innovative programmatic advertising solutions and strategic
            expertise.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {successMetrics.map((metric, index) => (
            <Card
              key={index}
              className="text-center bg-card/50 border-border/50 hover:scale-105 transition-transform"
            >
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card
              key={study.id}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50 hover:shadow-2xl overflow-hidden"
            >
              <CardHeader className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-10`}
                ></div>
                <div className="relative flex items-center justify-between">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center`}
                  >
                    <study.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <CardTitle className="text-xl relative mt-4">
                  {study.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm relative">
                  {study.client}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Challenge</h4>
                  <p className="text-muted-foreground text-sm">
                    {study.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Solution</h4>
                  <p className="text-muted-foreground text-sm">
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-3">Results</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-background/50 rounded-lg">
                      <div className="text-lg font-bold text-primary">
                        {study.results.roas}
                      </div>
                      <div className="text-xs text-muted-foreground">ROAS</div>
                    </div>
                    <div className="text-center p-3 bg-background/50 rounded-lg">
                      <div className="text-lg font-bold text-primary">
                        {study.results.sales ||
                          study.results.leads ||
                          study.results.awareness ||
                          study.results.users}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {study.results.sales
                          ? "Sales"
                          : study.results.leads
                          ? "Leads"
                          : study.results.awareness
                          ? "Awareness"
                          : "Users"}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-background/50 rounded-lg">
                      <div className="text-lg font-bold text-primary">
                        {study.results.reach}
                      </div>
                      <div className="text-xs text-muted-foreground">Reach</div>
                    </div>
                    <div className="text-center p-3 bg-background/50 rounded-lg">
                      <div className="text-lg font-bold text-primary">
                        {study.results.duration}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Duration
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-foreground/80 mb-4">
                    {study.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full group">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Study Process */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Our Proven Success Process
            </h3>
            <p className="text-muted-foreground">
              Every success story follows our strategic methodology for maximum
              impact
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Analysis",
                description:
                  "Deep dive into your business goals and challenges",
                icon: BarChart3,
              },
              {
                step: "02",
                title: "Strategy",
                description: "Custom programmatic strategy development",
                icon: Target,
              },
              {
                step: "03",
                title: "Execution",
                description: "Launch optimized campaigns across channels",
                icon: Zap,
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous AI-powered performance improvement",
                icon: TrendingUp,
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-card border border-border/50 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <process.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    {process.step}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{process.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {process.description}
                </p>

                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="group">
              <Users className="mr-2 h-5 w-5" />
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
