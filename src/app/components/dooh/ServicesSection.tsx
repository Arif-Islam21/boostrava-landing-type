import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { ArrowRight, Users, MapPin } from "lucide-react";

// Import service icons
import stadiumIcon from "../../assets/dooh/stadium-icon.jpg";
import railIcon from "../../assets/dooh/rail-icon.jpg";
import airportIcon from "../../assets/dooh/airport-icon.jpg";
import cityIcon from "../../assets/dooh/city-icon.jpg";
import mallIcon from "../../assets/dooh/mall-icon.jpg";
import eventsIcon from "../../assets/dooh/events-icon.jpg";
import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      title: "Stadium Boundary Ads",
      image: stadiumIcon,
      description:
        "Capture the excitement of live sports with premium LED displays around stadium perimeters. Reach passionate fans during peak emotional moments.",
      features: [
        "LED perimeter displays",
        "Live audience engagement",
        "Sports event targeting",
        "Premium visibility",
      ],
      audience: "2M+ per event",
      coverage: "50+ major stadiums",
      pricing: "Premium",
    },
    {
      title: "Rail Station Networks",
      image: railIcon,
      description:
        "Connect with daily commuters through strategic placement in train stations, subway platforms, and transit hubs across major metropolitan areas.",
      features: [
        "Platform displays",
        "Concourse networks",
        "Digital wayfinding",
        "Dwell time optimization",
      ],
      audience: "10M+ daily commuters",
      coverage: "200+ stations",
      pricing: "High Volume",
    },
    {
      title: "Airport Advertising",
      image: airportIcon,
      description:
        "Reach international travelers and business professionals with premium displays in departure lounges, baggage claims, and terminal corridors.",
      features: [
        "Terminal displays",
        "Gate area screens",
        "Baggage claim ads",
        "International reach",
      ],
      audience: "5M+ monthly travelers",
      coverage: "75+ airports",
      pricing: "Premium",
    },
    {
      title: "Smart City Networks",
      image: cityIcon,
      description:
        "Transform urban landscapes with intelligent displays on buildings, street furniture, and public spaces for maximum city-wide visibility.",
      features: [
        "Building facades",
        "Street furniture",
        "Public squares",
        "Smart integration",
      ],
      audience: "50M+ urban population",
      coverage: "25+ major cities",
      pricing: "Scalable",
    },
    {
      title: "Shopping Mall Displays",
      image: mallIcon,
      description:
        "Engage shoppers at the point of purchase with interactive displays in food courts, main corridors, and retail anchor points.",
      features: [
        "Food court displays",
        "Escalator networks",
        "Anchor store adjacency",
        "Interactive touchpoints",
      ],
      audience: "15M+ monthly shoppers",
      coverage: "150+ shopping centers",
      pricing: "Retail Focused",
    },
    {
      title: "Event Sponsorships",
      image: eventsIcon,
      description:
        "Maximize brand exposure at concerts, conferences, festivals, and special events with custom LED installations and branded content.",
      features: [
        "Stage LED walls",
        "Entrance displays",
        "VIP area screens",
        "Custom installations",
      ],
      audience: "Variable per event",
      coverage: "500+ annual events",
      pricing: "Event-based",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium DOOH
            <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Advertising Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From sports venues to urban landscapes, we offer comprehensive
            digital advertising solutions across the most impactful locations
            where your audience spends their time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 gradient-hero opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <Badge className="absolute top-4 right-4 bg-background/90 text-foreground">
                  {service.pricing}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-medium">Audience:</span>
                    <span className="text-muted-foreground">
                      {service.audience}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-medium">Coverage:</span>
                    <span className="text-muted-foreground">
                      {service.coverage}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, featureIndex) => (
                      <Badge
                        key={featureIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group/btn hover:gradient-primary hover:text-primary-foreground border-primary/20"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl gradient-hero text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Launch Your Campaign?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl">
              Our expert team will help you select the perfect locations and
              create compelling content that drives results across our premium
              DOOH network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Get Custom Quote
              </Button>
              <Button variant="glass" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
