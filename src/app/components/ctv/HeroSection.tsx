import { Button } from "../../components/ui/button";
import { ArrowRight, Play, Zap, Bot, Target } from "lucide-react";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 bg-slate-200"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
                <Bot className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">
                  AI-Powered Platform
                </span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-primary">CTV Advertising</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Revolutionized
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
              Boost RAVA's programmatic ads network powered by complete machine
              learning. Reach your audience with precision targeting and
              real-time optimization.
            </p>

            <p className="text-lg text-foreground/80 mb-8 max-w-2xl font-medium">
              Experience the future of Connected TV advertising with our
              intelligent platform that delivers measurable results through
              advanced AI algorithms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="group">
                Start Campaign
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">CTV Reach</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">45%</div>
                <div className="text-sm text-muted-foreground">Higher ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">
                  AI Optimization
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main CTV Screen */}
              <div className="border border-border rounded-2xl p-8 shadow-2xl bg-slate-100">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">LIVE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-sm">Targeting Active</span>
                    </div>
                  </div>

                  <div className="aspect-video bg-background/50 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Zap className="w-8 h-8 text-primary mx-auto mb-2 animate-bounce-slow" />
                      <p className="text-sm font-medium">Your Ad Here</p>
                      <p className="text-xs text-muted-foreground">
                        Premium CTV Placement
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">2.3M</div>
                      <div className="text-xs text-muted-foreground">
                        Impressions
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">4.2%</div>
                      <div className="text-xs text-muted-foreground">CTR</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">87%</div>
                      <div className="text-xs text-muted-foreground">
                        Completion
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Insights */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Bot className="w-4 h-4 text-primary animate-pulse" />
                    <span className="text-sm font-medium">
                      AI Recommendations
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Optimal bid adjustment
                      </span>
                      <span className="text-xs font-medium text-primary">
                        +15%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Best time to serve
                      </span>
                      <span className="text-xs font-medium text-primary">
                        8-10 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 animate-float">
                <Zap className="w-5 h-5" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-full p-3 animate-float"
                style={{
                  animationDelay: "2s",
                }}
              >
                <Target className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
