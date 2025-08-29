import { Monitor, Smartphone, Video, Type, Tv, Image } from "lucide-react";

export const AdMethodsSection = () => {
  const adMethods = [
    {
      icon: Monitor,
      title: "Banner Display Ads",
      description: "High-impact visual advertisements across premium publisher networks",
      features: ["Rich Media Support", "Dynamic Creative", "A/B Testing"]
    },
    {
      icon: Smartphone,
      title: "Native Ads",
      description: "Seamlessly integrated content that matches the user experience",
      features: ["Content Matching", "Native Placement", "High Engagement"]
    },
    {
      icon: Type,
      title: "Text Ads",
      description: "Clean, effective text-based advertisements with precise targeting",
      features: ["Keyword Targeting", "Contextual Placement", "High CTR"]
    },
    {
      icon: Video,
      title: "Video Ads",
      description: "Engaging video content delivered across streaming platforms",
      features: ["HD Quality", "Skip Options", "Viewability Tracking"]
    },
    {
      icon: Tv,
      title: "CTV Ads",
      description: "Connected TV advertising for premium streaming environments",
      features: ["Premium Inventory", "Household Targeting", "Brand Safety"]
    },
    {
      icon: Image,
      title: "Rich Media Ads",
      description: "Interactive and immersive advertising experiences",
      features: ["Interactive Elements", "Animation Support", "Engagement Metrics"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Premium Ad Formats
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deliver your message through multiple high-performing ad formats, 
            each optimized for maximum engagement and conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adMethods.map((method, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:animate-pulse-glow">
                <method.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {method.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {method.description}
              </p>
              
              <ul className="space-y-2">
                {method.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Programmatic Network Visualization */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-card mx-auto max-w-4xl">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Programmatic Network Intelligence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <span className="text-2xl font-bold text-white">AI</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Machine Learning</h4>
                <p className="text-sm text-muted-foreground">Real-time optimization and bidding</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow delay-200">
                  <span className="text-2xl font-bold text-white">RT</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Real-Time Bidding</h4>
                <p className="text-sm text-muted-foreground">Instant auction participation</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow delay-400">
                  <span className="text-2xl font-bold text-white">DA</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Data Analytics</h4>
                <p className="text-sm text-muted-foreground">Advanced performance insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};