import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  MessageCircle,
  Clock,
  Users,
  Shield,
  Phone,
  Mail,
  Video,
  BookOpen,
  Headphones,
  Zap,
} from "lucide-react";
const SupportSection = () => {
  const supportChannels = [
    {
      icon: MessageCircle,
      title: "24/7 Live Chat",
      description: "Instant support through our intelligent chat system",
      response: "< 2 min",
      availability: "Always Available",
    },
    {
      icon: Phone,
      title: "Priority Phone Support",
      description: "Direct line to our expert support specialists",
      response: "< 5 min",
      availability: "Business Hours",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed technical assistance via email",
      response: "< 2 hours",
      availability: "24/7 Monitoring",
    },
    {
      icon: Video,
      title: "Screen Share Sessions",
      description: "One-on-one guided assistance with screen sharing",
      response: "Scheduled",
      availability: "By Appointment",
    },
  ];
  const supportFeatures = [
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Personal point of contact for enterprise clients",
      highlight: "Premium Feature",
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Comprehensive documentation and tutorials",
      highlight: "500+ Articles",
    },
    {
      icon: Shield,
      title: "Priority Escalation",
      description: "Fast-track critical issues to senior engineers",
      highlight: "Enterprise SLA",
    },
    {
      icon: Headphones,
      title: "Training & Onboarding",
      description: "Complete platform training for your team",
      highlight: "Certification Program",
    },
  ];
  const satisfactionMetrics = [
    {
      label: "Customer Satisfaction",
      value: "98.7%",
      icon: Users,
      color: "text-green-400",
    },
    {
      label: "First Response Time",
      value: "< 90 sec",
      icon: Clock,
      color: "text-blue-400",
    },
    {
      label: "Resolution Rate",
      value: "99.2%",
      icon: Shield,
      color: "text-purple-400",
    },
    {
      label: "Support Team",
      value: "24/7",
      icon: Headphones,
      color: "text-orange-400",
    },
  ];
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary">Customer Support</span> Excellence
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-slate-950">
            Boost RAVA provides exceptional customer support to ensure your
            success. Our expert team is available around the clock with multiple
            support channels and personalized assistance.
          </p>
        </div>

        {/* Support Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {satisfactionMetrics.map((metric, index) => (
            <Card
              key={index}
              className="text-center bg-card/50 border-border/50 hover:scale-105 transition-transform"
            >
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
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

        {/* Support Channels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50 hover:shadow-xl"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <channel.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{channel.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm text-center mb-4">
                  {channel.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Response Time:
                    </span>
                    <span className="text-xs font-medium text-primary">
                      {channel.response}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Availability:
                    </span>
                    <span className="text-xs font-medium text-primary">
                      {channel.availability}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Features */}
        <div className="bg-gradient-to-br from-card/30 to-muted/20 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Premium Support Features
            </h3>
            <p className="text-muted-foreground">
              Comprehensive support ecosystem designed to accelerate your
              success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center bg-card/50 border-border/50 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {feature.highlight}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Team Preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Meet Your <span className="text-primary">Support Team</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Our world-class support team consists of advertising experts,
              technical specialists, and customer success managers dedicated to
              your growth and success.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  role: "Technical Specialists",
                  count: "25+",
                  expertise: "Platform & Integration",
                },
                {
                  role: "Campaign Managers",
                  count: "15+",
                  expertise: "Strategy & Optimization",
                },
                {
                  role: "Customer Success",
                  count: "10+",
                  expertise: "Account Management",
                },
                {
                  role: "Solutions Engineers",
                  count: "8+",
                  expertise: "Custom Development",
                },
              ].map((team, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-card/30 rounded-lg border border-border/50"
                >
                  <div>
                    <div className="font-medium">{team.role}</div>
                    <div className="text-sm text-muted-foreground">
                      {team.expertise}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">
                      {team.count}
                    </div>
                    <div className="text-xs text-muted-foreground">Experts</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Live Chat
                <Zap className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Call
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Support Dashboard */}
            <div className="bg-card/50 rounded-2xl p-6 border border-border/50 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold">Support Center</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs">24/7 Available</span>
                </div>
              </div>

              {/* Recent Tickets */}
              <div className="space-y-3 mb-6">
                {[
                  {
                    id: "#2847",
                    status: "Resolved",
                    time: "2 min ago",
                    type: "Technical",
                  },
                  {
                    id: "#2846",
                    status: "In Progress",
                    time: "5 min ago",
                    type: "Campaign",
                  },
                  {
                    id: "#2845",
                    status: "Resolved",
                    time: "12 min ago",
                    type: "Billing",
                  },
                ].map((ticket, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-background/50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          ticket.status === "Resolved"
                            ? "bg-green-400"
                            : "bg-yellow-400"
                        }`}
                      ></div>
                      <div>
                        <div className="text-sm font-medium">{ticket.id}</div>
                        <div className="text-xs text-muted-foreground">
                          {ticket.type}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium">{ticket.status}</div>
                      <div className="text-xs text-muted-foreground">
                        {ticket.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 bg-primary/10 rounded-lg text-sm font-medium text-primary hover:bg-primary/20 transition-colors">
                  New Ticket
                </button>
                <button className="p-3 bg-accent/10 rounded-lg text-sm font-medium text-accent hover:bg-accent/20 transition-colors">
                  Live Chat
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 animate-bounce-slow">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-full p-3 animate-float">
              <Shield className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SupportSection;
