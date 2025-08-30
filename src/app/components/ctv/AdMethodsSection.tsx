import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Monitor,
  FileText,
  Video,
  Smartphone,
  Tv,
  Image,
  MousePointer,
  Eye,
  Layers,
} from "lucide-react";
const AdMethodsSection = () => {
  const adTypes = [
    {
      icon: Monitor,
      title: "Banner Display Ads",
      description: "High-impact visual advertisements across premium inventory",
      features: [
        "Multiple sizes",
        "Rich media support",
        "Interactive elements",
      ],
    },
    {
      icon: Layers,
      title: "Native Ads",
      description: "Seamlessly integrated content that matches platform design",
      features: ["Non-intrusive", "High engagement", "Brand safe"],
    },
    {
      icon: FileText,
      title: "Text Ads",
      description: "Clean, effective text-based advertising solutions",
      features: ["Fast loading", "High CTR", "Cost effective"],
    },
    {
      icon: Video,
      title: "Video Ads",
      description: "Engaging video content across all connected devices",
      features: ["HD quality", "Skip options", "Analytics tracking"],
    },
    {
      icon: Tv,
      title: "CTV Ads",
      description: "Premium Connected TV advertising placements",
      features: ["Big screen impact", "Household targeting", "Brand awareness"],
    },
    {
      icon: Image,
      title: "Rich Media Ads",
      description: "Interactive multimedia advertising experiences",
      features: ["Expandable units", "Video integration", "Touch interaction"],
    },
  ];
  const programmaticFeatures = [
    {
      icon: MousePointer,
      title: "Real-Time Bidding",
      desc: "Instant auction-based ad placement",
    },
    {
      icon: Eye,
      title: "Audience Targeting",
      desc: "Precision demographic and behavioral targeting",
    },
    {
      icon: Smartphone,
      title: "Cross-Device",
      desc: "Seamless campaigns across all devices",
    },
  ];
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary">Our Advertisement Methods</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Boost RAVA offers a comprehensive suite of advertising formats
            powered by our intelligent programmatic network with beautiful
            design and seamless integration.
          </p>
        </div>

        {/* Ad Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {adTypes.map((type, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-transform duration-300 hover:shadow-xl border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <div className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programmatic Features */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Programmatic Network Intelligence
            </h3>
            <p className="text-muted-foreground">
              Advanced machine learning algorithms optimize your campaigns in
              real-time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programmaticFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-20 h-20 bg-card border border-border/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Animated Graph */}
          <div className="mt-12 bg-card/50 rounded-2xl p-6 border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Real-Time Performance</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Live Data</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 h-32">
              {[65, 80, 45, 90].map((height, idx) => (
                <div key={idx} className="flex flex-col justify-end">
                  <div
                    className="bg-gradient-to-t from-primary to-accent rounded-t-lg transition-all duration-1000 animate-pulse-slow"
                    style={{
                      height: `${height}%`,
                      animationDelay: `${idx * 0.5}s`,
                    }}
                  ></div>
                  <div className="text-center mt-2">
                    <div className="text-sm font-medium">{height}%</div>
                    <div className="text-xs text-muted-foreground">
                      {["Display", "Video", "Native", "CTV"][idx]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdMethodsSection;
