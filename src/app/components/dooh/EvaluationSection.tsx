import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import { Badge } from "../../components/ui/badge";
import {
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react";

const EvaluationSection = () => {
  const metrics = [
    {
      category: "Market Performance",
      icon: TrendingUp,
      stats: [
        {
          label: "Market Growth Rate",
          value: 92,
          description: "Year-over-year DOOH market expansion",
        },
        {
          label: "Advertiser Adoption",
          value: 78,
          description: "Brands switching to digital displays",
        },
        {
          label: "Revenue Growth",
          value: 85,
          description: "Industry revenue increase annually",
        },
      ],
    },
    {
      category: "Audience Engagement",
      icon: Users,
      stats: [
        {
          label: "Attention Rate",
          value: 83,
          description: "Viewer engagement with DOOH content",
        },
        {
          label: "Message Recall",
          value: 89,
          description: "Brand message retention rate",
        },
        {
          label: "Action Intent",
          value: 76,
          description: "Purchase consideration increase",
        },
      ],
    },
    {
      category: "Targeting Accuracy",
      icon: Target,
      stats: [
        {
          label: "Location Precision",
          value: 94,
          description: "Geographic targeting accuracy",
        },
        {
          label: "Demographic Match",
          value: 87,
          description: "Audience profile alignment",
        },
        {
          label: "Timing Optimization",
          value: 91,
          description: "Peak exposure timing",
        },
      ],
    },
    {
      category: "Technology Innovation",
      icon: Zap,
      stats: [
        {
          label: "Digital Transformation",
          value: 96,
          description: "Traditional to digital conversion",
        },
        {
          label: "Real-time Updates",
          value: 100,
          description: "Instant content deployment capability",
        },
        {
          label: "Interactive Features",
          value: 73,
          description: "Touch and mobile integration",
        },
      ],
    },
  ];

  const industryInsights = [
    {
      icon: BarChart3,
      title: "Market Dominance",
      value: "$8.2B",
      subtitle: "Global DOOH market value in 2024",
      trend: "+15.2% YoY",
    },
    {
      icon: Shield,
      title: "Brand Safety",
      value: "99.8%",
      subtitle: "Content verification accuracy",
      trend: "Premium quality",
    },
    {
      icon: Users,
      title: "Daily Reach",
      value: "500M+",
      subtitle: "People exposed to DOOH daily",
      trend: "Growing audience",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2">
            Market Analysis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Detailed Evaluation of
            <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Digital DOOH Performance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive data analysis reveals why DOOH advertising delivers
            superior results compared to traditional advertising methods.
          </p>
        </div>

        {/* Industry Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {industryInsights.map((insight, index) => (
            <Card
              key={index}
              className="text-center p-6 shadow-card border-0 bg-card/60 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl gradient-accent text-accent-foreground">
                  <insight.icon className="w-8 h-8" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {insight.value}
              </div>
              <div className="text-muted-foreground mb-2">
                {insight.subtitle}
              </div>
              <Badge variant="outline" className="text-xs">
                {insight.trend}
              </Badge>
            </Card>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="shadow-card border-0 bg-card/60 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg gradient-primary text-primary-foreground">
                    <metric.icon className="w-5 h-5" />
                  </div>
                  {metric.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {metric.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{stat.label}</span>
                      <span className="text-2xl font-bold text-primary">
                        {stat.value}%
                      </span>
                    </div>
                    <Progress value={stat.value} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Findings */}
        <div className="mt-16 p-8 rounded-2xl gradient-hero text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Key Market Findings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">92%</div>
              <p className="text-white/90">
                of marketers report higher ROI with DOOH vs traditional outdoor
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15.2%</div>
              <p className="text-white/90">
                annual growth rate outpacing all other advertising mediums
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">85%</div>
              <p className="text-white/90">
                of consumers trust DOOH advertising more than online ads
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaluationSection;
