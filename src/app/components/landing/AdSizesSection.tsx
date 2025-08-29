import { Maximize, Eye, MousePointer, Zap } from "lucide-react";

export const AdSizesSection = () => {
  const bannerSizes = [
    { size: "728x90", name: "Leaderboard", type: "Banner" },
    { size: "250x250", name: "Square", type: "Banner" },
    { size: "250x300", name: "Portrait", type: "Banner" },
    { size: "300x600", name: "Half Page", type: "Banner" },
    { size: "480x300", name: "Mobile Banner", type: "Banner" },
    { size: "300x100", name: "Small Banner", type: "Banner" },
    { size: "300x50", name: "Mobile Leaderboard", type: "Banner" }
  ];

  const specialFormats = [
    { name: "Video Ads", icon: Eye, description: "Pre-roll, mid-roll, and post-roll video advertising" },
    { name: "Text Ads", icon: MousePointer, description: "Contextual text-based advertisements" },
    { name: "Footer Ads", icon: Maximize, description: "Bottom-anchored advertising space" },
    { name: "Sticky Ads", icon: Zap, description: "Persistent advertising that follows scroll" },
    { name: "Pop-up Ads", icon: Eye, description: "Overlay advertisements for maximum visibility" },
    { name: "Rich Media", icon: Maximize, description: "Interactive and expandable ad formats" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ad Sizes & Formats
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perfect ad spaces crafted for every publisher platform with programmatic precision
          </p>
        </div>

        {/* Banner Sizes Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Standard Banner Sizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bannerSizes.map((banner, index) => (
              <div
                key={index}
                className="group bg-gradient-card rounded-2xl p-6 border border-border hover:border-accent transition-all duration-300 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-video bg-white rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mb-4 group-hover:border-accent transition-colors">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{banner.size}</div>
                    <div className="text-xs text-muted-foreground">pixels</div>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{banner.name}</h4>
                <p className="text-sm text-muted-foreground">{banner.type} Format</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Formats */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Special Ad Formats</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialFormats.map((format, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-2xl mb-6 group-hover:animate-pulse-glow">
                  <format.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {format.name}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Programmatic Features */}
        <div className="bg-gradient-primary rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-8">Programmatic Ad Space Creation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Maximize className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Dynamic Sizing</h4>
              <p className="text-sm text-white/80">Automatically adjusts to content</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float delay-100">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Viewability</h4>
              <p className="text-sm text-white/80">Ensures maximum visibility</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float delay-200">
                <MousePointer className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Click Tracking</h4>
              <p className="text-sm text-white/80">Precise interaction metrics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float delay-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Fast Loading</h4>
              <p className="text-sm text-white/80">Optimized for speed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};