import { ArrowRight, Bot, Target, TrendingUp } from "lucide-react";
import heroImage from "../../assets/hero-bg.jpg";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-ping" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-primary-glow rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Bot className="w-5 h-5 text-accent" />
            <span className="text-white font-medium">
              Powered by Advanced Machine Learning
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-in-up">
            <span className="block">Boost Your</span>
            <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Programmatic
            </span>
            <span className="block">Advertising</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            The worlds most advanced programmatic advertising network. Leverage
            machine learning to reach your perfect audience with precision
            targeting and real-time optimization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up delay-400">
            <Button variant="glass" size="xl" className="group">
              Start Advertising
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-600">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-xl mb-4 mx-auto">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">99.2%</h3>
              <p className="text-white/70">Targeting Accuracy</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-glow/20 rounded-xl mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-primary-glow" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">340%</h3>
              <p className="text-white/70">Average ROI Increase</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-xl mb-4 mx-auto">
                <Bot className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">50K+</h3>
              <p className="text-white/70">Active Campaigns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1 h-3 bg-white rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};
