import { MapPin, Brain, Users, Clock, Smartphone, Globe } from "lucide-react";

export const TargetingSection = () => {
  const targetingFeatures = [
    {
      icon: MapPin,
      title: "Geographic Targeting",
      description: "Precise location-based targeting from country level to specific zip codes",
      capabilities: ["Country/Region", "City/Metro", "Zip Code", "Radius Targeting"]
    },
    {
      icon: Users,
      title: "Demographic Targeting",
      description: "Reach your ideal audience based on age, gender, income, and lifestyle",
      capabilities: ["Age Groups", "Gender", "Income Levels", "Education"]
    },
    {
      icon: Brain,
      title: "Behavioral Targeting",
      description: "Target users based on their online behavior and purchase patterns",
      capabilities: ["Purchase History", "Website Behavior", "App Usage", "Engagement Patterns"]
    },
    {
      icon: Globe,
      title: "Interest Targeting",
      description: "Connect with users based on their interests and preferences",
      capabilities: ["Hobby Categories", "Brand Affinity", "Content Preferences", "Social Interests"]
    },
    {
      icon: Smartphone,
      title: "Device Targeting",
      description: "Optimize campaigns for specific devices and platforms",
      capabilities: ["Device Type", "Operating System", "Browser", "Connection Speed"]
    },
    {
      icon: Clock,
      title: "Temporal Targeting",
      description: "Schedule ads for optimal times and days",
      capabilities: ["Time of Day", "Day of Week", "Seasonal", "Real-time Events"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Precision Targeting & Research
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Harness the power of machine learning for programmatic audience targeting. 
            Reach the right people at the right time with unprecedented precision.
          </p>
        </div>

        {/* Main Targeting Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {targetingFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:animate-pulse-glow">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.capabilities.map((capability, capIndex) => (
                  <li key={capIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 animate-pulse" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Machine Learning Showcase */}
        <div className="bg-gradient-primary rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">
              AI-Powered Programmatic Intelligence
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our machine learning algorithms continuously optimize your targeting 
              for maximum performance and ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Real-Time Learning</h4>
              <p className="text-white/80">Algorithms adapt to user behavior in real-time</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow delay-100">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Lookalike Audiences</h4>
              <p className="text-white/80">Find new customers similar to your best ones</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow delay-200">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Predictive Modeling</h4>
              <p className="text-white/80">Forecast user behavior and optimize bids</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow delay-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Auto-Optimization</h4>
              <p className="text-white/80">Continuous campaign improvement 24/7</p>
            </div>
          </div>
        </div>

        {/* Targeting Accuracy Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Unmatched Targeting Accuracy
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our programmatic platform combines first-party, second-party, and third-party data 
              sources to create the most comprehensive audience profiles in the industry.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location Intelligence</h4>
                  <p className="text-muted-foreground">GPS-level precision targeting</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Behavioral Analysis</h4>
                  <p className="text-muted-foreground">Deep learning behavior patterns</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Audience Segmentation</h4>
                  <p className="text-muted-foreground">Micro-targeting capabilities</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-card rounded-2xl p-6 text-center shadow-card">
              <h4 className="text-3xl font-bold text-primary mb-2">99.2%</h4>
              <p className="text-muted-foreground">Targeting Accuracy</p>
            </div>
            <div className="bg-gradient-card rounded-2xl p-6 text-center shadow-card">
              <h4 className="text-3xl font-bold text-accent mb-2">50M+</h4>
              <p className="text-muted-foreground">Data Points</p>
            </div>
            <div className="bg-gradient-card rounded-2xl p-6 text-center shadow-card">
              <h4 className="text-3xl font-bold text-primary mb-2">120+</h4>
              <p className="text-muted-foreground">Countries</p>
            </div>
            <div className="bg-gradient-card rounded-2xl p-6 text-center shadow-card">
              <h4 className="text-3xl font-bold text-accent mb-2">2.5B+</h4>
              <p className="text-muted-foreground">Monthly Reach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};