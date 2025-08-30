"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  Brain,
  Target,
  BarChart3,
  Zap,
  Globe,
  Monitor,
  Smartphone,
  Video,
  MousePointer,
  TrendingUp,
  Users,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Rocket,
  Eye,
  Layers,
  Settings,
  HeadphonesIcon,
  MessageCircle,
  PieChart,
  Pin,
  Maximize,
  Play,
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  console.log(activeSection);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scrollPos = window.scrollY + 200;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        if (
          scrollPos >= element.offsetTop &&
          scrollPos < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const adSizes = [
    { width: "728", height: "90", name: "Leaderboard" },
    { width: "250", height: "250", name: "Square" },
    { width: "250", height: "300", name: "Medium Rectangle" },
    { width: "300", height: "600", name: "Half Page" },
    { width: "480", height: "300", name: "Mobile Banner" },
    { width: "300", height: "100", name: "Mobile Medium" },
    { width: "300", height: "50", name: "Mobile Small" },
  ];

  const adTypes = [
    {
      icon: Monitor,
      name: "Banner Display",
      description: "High-impact banner advertisements",
    },
    {
      icon: Eye,
      name: "Native Ads",
      description: "Seamlessly integrated content",
    },
    {
      icon: MousePointer,
      name: "Text Ads",
      description: "Targeted text-based advertising",
    },
    { icon: Video, name: "Video Ads", description: "Engaging video content" },
    {
      icon: Smartphone,
      name: "CTV Ads",
      description: "Connected TV advertising",
    },
    {
      icon: Layers,
      name: "Rich Media",
      description: "Interactive rich media experiences",
    },
  ];

  const caseStudies = [
    {
      company: "TechCorp",
      increase: "340%",
      metric: "Revenue Increase",
      description:
        "Achieved 340% revenue growth through optimized programmatic campaigns",
      avatar: "🚀",
    },
    {
      company: "E-Commerce Plus",
      increase: "280%",
      metric: "ROAS Improvement",
      description:
        "Improved return on ad spend by 280% with ML-driven optimization",
      avatar: "📈",
    },
    {
      company: "Mobile Games Co",
      increase: "450%",
      metric: "User Acquisition",
      description:
        "Boosted user acquisition by 450% with targeted mobile campaigns",
      avatar: "🎮",
    },
    {
      company: "Fashion Brand",
      increase: "220%",
      metric: "Conversion Rate",
      description:
        "Enhanced conversion rates by 220% through precise audience targeting",
      avatar: "👗",
    },
  ];

  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered Optimization",
      description:
        "Machine learning algorithms optimize your campaigns in real-time",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description:
        "Reach your exact audience with advanced targeting capabilities",
    },
    {
      icon: TrendingUp,
      title: "Maximum Revenue",
      description:
        "Increase your ad revenue with our programmatic optimization",
    },
    {
      icon: Shield,
      title: "Premium Inventory",
      description: "Access to high-quality, brand-safe advertising inventory",
    },
    {
      icon: Clock,
      title: "Real-Time Analytics",
      description: "Monitor performance with instant reporting and analytics",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description:
        "Get started in minutes with our streamlined onboarding process",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Boost RAVA
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#targeting"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Solutins
              </a>
              <a
                href="#reporting"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                DSP
              </a>
              <a
                href="#case-studies"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                SSP
              </a>
              <a
                href="#case-studies"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                C-TV
              </a>
              <a
                href="#case-studies"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Dooh
              </a>
              <a
                href="#case-studies"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
              <a
                href="#case-studies"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Agency
              </a>
              <Button className="bg-gradient-primary hover:opacity-90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="section relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full animate-pulse-glow"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-primary-glow rounded-full animate-float"></div>
          <div className="absolute bottom-32 left-16 w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
          <div className="absolute top-60 left-1/3 w-2 h-2 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-primary-glow rounded-full animate-pulse-glow"></div>

          {/* Connected lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line
              x1="20%"
              y1="20%"
              x2="30%"
              y2="40%"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
            <line
              x1="70%"
              y1="30%"
              x2="80%"
              y2="60%"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
            <line
              x1="10%"
              y1="70%"
              x2="40%"
              y2="80%"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🚀 Powered by Machine Learning
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Programmatic Ads Network
              <span className="block bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                That Actually Works
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Boost RAVA leverages advanced machine learning algorithms to
              deliver precisely targeted, high-converting programmatic
              advertising campaigns that maximize your revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
              >
                Start Monetizing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 animate-float">
          <div className="w-16 h-16 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Brain className="w-8 h-8 text-white" />
          </div>
        </div>
        <div
          className="absolute bottom-20 left-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-12 h-12 bg-accent/20 rounded-lg backdrop-blur-sm border border-accent/30 flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>

      {/* Avtarizer Method Section */}
      <section id="features" className="section py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4">🎯 Advanced Advertising Platform</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              The Avtarizer Method
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the power of our comprehensive programmatic advertising
              ecosystem, designed to maximize engagement and drive unprecedented
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adTypes.map((type, index) => (
              <Card
                key={type.name}
                className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/30 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Banner and Ad Size Section */}
      <section className="section py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4">📏 Flexible Ad Formats</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perfect Ad Sizes for Every Space
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From banner displays to video ads, we support all standard sizes
              plus custom formats including Footer Ads, Sticky Ads, and Pop-Up
              Ads for maximum monetization.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {adSizes.map((size, index) => (
              <Card
                key={`${size.width}x${size.height}`}
                className="group hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-full h-20 bg-gradient-accent rounded-lg mb-4 flex items-center justify-center group-hover:animate-pulse-glow">
                    <span className="text-white font-mono text-sm">
                      {size.width}×{size.height}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm mb-2">{size.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {size.width} × {size.height}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Premium Formats Section */}
          <div className="mt-16 relative">
            <div className="text-center mb-12 animate-slide-up">
              <Badge className="mb-4">⭐ Premium Ad Formats</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Advanced Engagement Formats
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Maximize your revenue with our premium ad formats designed for
                higher engagement and conversion rates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: MousePointer,
                  title: "Footer Ads",
                  description:
                    "Non-intrusive ads that stay visible at the bottom of the page",
                  gradient: "from-purple-500 to-blue-500",
                },
                {
                  icon: Pin,
                  title: "Sticky Ads",
                  description:
                    "Persistent ads that follow users as they scroll for maximum visibility",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Maximize,
                  title: "Pop-Up Ads",
                  description:
                    "Strategic overlay ads with high conversion potential",
                  gradient: "from-cyan-500 to-green-500",
                },
                {
                  icon: Layers,
                  title: "Interstitial",
                  description:
                    "Full-screen ads that appear between content transitions",
                  gradient: "from-green-500 to-yellow-500",
                },
                {
                  icon: Play,
                  title: "In-Stream Video",
                  description:
                    "Video ads that play within existing video content",
                  gradient: "from-yellow-500 to-orange-500",
                },
                {
                  icon: Video,
                  title: "Out-Stream Video",
                  description:
                    "Standalone video ads that play outside of video content",
                  gradient: "from-orange-500 to-red-500",
                },
              ].map((format, index) => (
                <Card
                  key={format.title}
                  className="group hover:shadow-xl transition-all duration-300 animate-scale-in overflow-hidden border-0 bg-gradient-to-br from-background to-muted/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 relative">
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${format.gradient} opacity-10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500`}
                    ></div>

                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${format.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                    >
                      <format.icon className="w-8 h-8 text-white" />
                    </div>

                    <h4 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                      {format.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {format.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        High Performance Format
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Animated Background Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/5 rounded-full animate-pulse-glow"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-accent/5 rounded-full animate-float"></div>
          </div>
        </div>
      </section>

      {/* Boost RAVA Overview Section */}
      <section className="section py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <Badge className="mb-4">🌟 Success Stories</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powering Growth for Leading Brands
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From e-commerce giants to emerging startups, Boost RAVA has
                helped thousands of companies achieve unprecedented growth
                through our AI-powered programmatic advertising platform.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Revenue Optimization</h4>
                    <p className="text-muted-foreground">
                      Average 300% increase in ad revenue
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sales Funnel Creation</h4>
                    <p className="text-muted-foreground">
                      Streamlined conversion paths for e-commerce
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-glow/10 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-primary-glow" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Market Leadership</h4>
                    <p className="text-muted-foreground">
                      Helping brands dominate their markets
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="bg-gradient-hero rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">
                    Platform Performance
                  </h3>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-glow">
                        $2.5B+
                      </div>
                      <div className="text-sm opacity-90">Ad Spend Managed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent">10K+</div>
                      <div className="text-sm opacity-90">
                        Active Publishers
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-glow">
                        95%
                      </div>
                      <div className="text-sm opacity-90">Client Retention</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent">24/7</div>
                      <div className="text-sm opacity-90">
                        Support Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target and Rese Section */}
      <section id="targeting" className="section py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4">🎯 Precision Targeting</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Machine Learning-Powered Targeting
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advanced AI algorithms analyze user behavior, location,
              interests, and demographics to deliver laser-focused targeting
              that maximizes engagement and conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Geo-Location",
                description: "Country, state, city, and radius targeting",
              },
              {
                icon: Brain,
                title: "Behavioral",
                description: "AI-powered behavior pattern analysis",
              },
              {
                icon: Users,
                title: "Demographic",
                description: "Age, gender, income, and lifestyle targeting",
              },
              {
                icon: Eye,
                title: "Interest-Based",
                description: "Category and keyword interest targeting",
              },
            ].map((item, index) => (
              <Card
                key={item.title}
                className="group hover:shadow-xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-hero rounded-3xl p-12 text-white relative overflow-hidden animate-scale-in">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full"></div>
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-6">
                Real-Time Optimization
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Our machine learning algorithms continuously optimize targeting
                parameters in real-time, ensuring maximum performance and ROI
                for every campaign.
              </p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-glow">
                    +340%
                  </div>
                  <div className="text-sm opacity-80">Targeting Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">-65%</div>
                  <div className="text-sm opacity-80">Wasted Ad Spend</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-glow">
                    +280%
                  </div>
                  <div className="text-sm opacity-80">Conversion Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting System Section */}
      <section id="reporting" className="section py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4">📊 Advanced Analytics</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real-Time Reporting Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monitor your campaigns with precision through our comprehensive
              analytics platform. Get instant insights and actionable data to
              optimize performance continuously.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: BarChart3,
                title: "Performance Metrics",
                description: "CTR, CPC, conversions, and revenue tracking",
              },
              {
                icon: PieChart,
                title: "Audience Insights",
                description: "Detailed demographic and behavioral analysis",
              },
              {
                icon: TrendingUp,
                title: "Trend Analysis",
                description: "Historical data and predictive modeling",
              },
            ].map((item, index) => (
              <Card
                key={item.title}
                className="group hover:shadow-xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 animate-scale-in">
            <h3 className="text-2xl font-bold text-center mb-8">
              Avtarizer Panel Features
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Real-time Campaign Monitoring",
                "Revenue Optimization Suggestions",
                "A/B Testing Dashboard",
                "Custom Report Generation",
                "API Access & Integration",
                "Mobile App Analytics",
                "Competitor Analysis",
                "Fraud Detection Alerts",
              ].map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="section py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4">🤝 24/7 Support</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Exceptional Customer Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedicated support team is available around the clock to ensure
              your success. From onboarding to optimization, were here to help
              you maximize your results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HeadphonesIcon,
                title: "24/7 Live Chat",
                description: "Instant support whenever you need it",
              },
              {
                icon: MessageCircle,
                title: "Dedicated Account Manager",
                description: "Personal guidance for enterprise clients",
              },
              {
                icon: Settings,
                title: "Technical Integration",
                description: "Expert help with setup and optimization",
              },
            ].map((item, index) => (
              <Card
                key={item.title}
                className="group hover:shadow-xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-studies" className="section py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4">📈 Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies That Speak for Themselves
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how leading companies have transformed their advertising
              performance with Boost RAVAs programmatic platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={study.company}
                className="group hover:shadow-xl transition-all duration-500 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{study.avatar}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {study.company}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {study.increase}
                  </div>
                  <div className="text-sm text-accent font-medium mb-4">
                    {study.metric}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {study.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avtarizer Benefits Section */}
      <section className="section py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              ✨ Publisher Benefits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Publishers Choose Boost RAVA
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of successful publishers who trust Boost RAVA to
              maximize their advertising revenue with cutting-edge technology
              and unparalleled support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-slide-up">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-12 py-4 text-lg"
            >
              Start Your Success Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Boost RAVA
                </span>
              </div>
              <p className="text-muted-foreground">
                Revolutionizing programmatic advertising with AI-powered
                optimization.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Publishers</div>
                <div>Advertisers</div>
                <div>Analytics</div>
                <div>API</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Help Center</div>
                <div>Documentation</div>
                <div>Contact Us</div>
                <div>Status</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>About</div>
                <div>Careers</div>
                <div>Privacy</div>
                <div>Terms</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Boost RAVA. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Index;
