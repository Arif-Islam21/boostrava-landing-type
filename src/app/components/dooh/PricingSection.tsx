import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Calculator, MapPin, Clock, Users, DollarSign } from "lucide-react";

const PricingSection = () => {
  const [location, setLocation] = useState("");
  const [adType, setAdType] = useState("");
  const [duration, setDuration] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const locationTypes = [
    {
      value: "stadium",
      label: "Stadium Boundary",
      basePrice: 5000,
      multiplier: 1.5,
    },
    {
      value: "airport",
      label: "Airport Terminal",
      basePrice: 8000,
      multiplier: 2.0,
    },
    { value: "rail", label: "Rail Station", basePrice: 3500, multiplier: 1.2 },
    { value: "city", label: "City Center", basePrice: 6000, multiplier: 1.8 },
    { value: "mall", label: "Shopping Mall", basePrice: 4000, multiplier: 1.3 },
    {
      value: "events",
      label: "Event Sponsorship",
      basePrice: 7500,
      multiplier: 2.5,
    },
  ];

  const adTypes = [
    { value: "static", label: "Static Display", multiplier: 1.0 },
    { value: "video", label: "Video Content", multiplier: 1.5 },
    { value: "interactive", label: "Interactive Display", multiplier: 2.0 },
    { value: "3d", label: "3D/AR Experience", multiplier: 3.0 },
  ];

  const durations = [
    { value: "1", label: "1 Week", discount: 0 },
    { value: "2", label: "2 Weeks", discount: 0.05 },
    { value: "4", label: "1 Month", discount: 0.1 },
    { value: "12", label: "3 Months", discount: 0.15 },
    { value: "24", label: "6 Months", discount: 0.2 },
    { value: "52", label: "1 Year", discount: 0.25 },
  ];

  const calculatePrice = () => {
    if (!location || !adType || !duration) return;

    const selectedLocation = locationTypes.find((l) => l.value === location);
    const selectedAdType = adTypes.find((a) => a.value === adType);
    const selectedDuration = durations.find((d) => d.value === duration);

    if (selectedLocation && selectedAdType && selectedDuration) {
      const basePrice =
        selectedLocation.basePrice * selectedLocation.multiplier;
      const typeAdjustedPrice = basePrice * selectedAdType.multiplier;
      const weeklyPrice = typeAdjustedPrice;
      const totalPrice = weeklyPrice * parseInt(duration);
      const discountedPrice = totalPrice * (1 - selectedDuration.discount);

      setEstimatedPrice(Math.round(discountedPrice));
    }
  };

  const profitabilityReasons = [
    {
      icon: Users,
      title: "Massive Audience Reach",
      description:
        "Access to millions of daily viewers across premium locations with guaranteed impressions and measurable engagement rates.",
    },
    {
      icon: MapPin,
      title: "Strategic Location Value",
      description:
        "Premium positioning in high-traffic areas where your target audience naturally congregates, ensuring maximum visibility and impact.",
    },
    {
      icon: Clock,
      title: "24/7 Brand Exposure",
      description:
        "Continuous advertising presence that works around the clock, providing uninterrupted brand visibility and message reinforcement.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective CPM",
      description:
        "Lower cost per thousand impressions compared to traditional media, delivering better value and higher return on advertising spend.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2">
            Pricing Calculator
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate Your
            <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              DOOH Campaign Cost
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant pricing estimates for your digital advertising campaign
            across our premium network locations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calculator */}
          <Card className="shadow-card border-0 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg gradient-primary text-primary-foreground">
                  <Calculator className="w-5 h-5" />
                </div>
                Campaign Price Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="location">Select Location Type</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose advertising location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locationTypes.map((loc) => (
                      <SelectItem key={loc.value} value={loc.value}>
                        {loc.label} - Starting from $
                        {loc.basePrice.toLocaleString()}/week
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="adType">Advertisement Type</Label>
                <Select value={adType} onValueChange={setAdType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose content type" />
                  </SelectTrigger>
                  <SelectContent>
                    {adTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Campaign Duration</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose campaign length" />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((dur) => (
                      <SelectItem key={dur.value} value={dur.value}>
                        {dur.label}{" "}
                        {dur.discount > 0 &&
                          `(${Math.round(dur.discount * 100)}% discount)`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={calculatePrice}
                className="w-full"
                variant="hero"
                disabled={!location || !adType || !duration}
              >
                Calculate Estimated Price
              </Button>

              {estimatedPrice > 0 && (
                <div className="p-6 rounded-xl gradient-hero text-white text-center">
                  <h3 className="text-lg font-semibold mb-2">
                    Estimated Campaign Cost
                  </h3>
                  <div className="text-4xl font-bold mb-2">
                    ${estimatedPrice.toLocaleString()}
                  </div>
                  <p className="text-white/90 text-sm">
                    Based on selected parameters. Final pricing may vary.
                  </p>
                  <Button variant="secondary" className="mt-4">
                    Get Detailed Quote
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Why DOOH is Profitable */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Why DOOH Advertising is
                <span className="gradient-text bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                  Highly Profitable
                </span>
              </h3>
              <p className="text-muted-foreground mb-8">
                Digital Out-of-Home advertising offers unmatched value for
                advertisers seeking maximum impact and measurable returns on
                their marketing investment.
              </p>
            </div>

            <div className="space-y-4">
              {profitabilityReasons.map((reason, index) => (
                <Card
                  key={index}
                  className="p-4 border-0 bg-card/40 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg gradient-success text-success-foreground flex-shrink-0">
                      <reason.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{reason.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* ROI Stats */}
            <Card className="p-6 gradient-accent text-accent-foreground">
              <h4 className="text-xl font-bold mb-4">Average Campaign ROI</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">420%</div>
                  <div className="text-sm opacity-90">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">85%</div>
                  <div className="text-sm opacity-90">Brand Recall</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">$2.40</div>
                  <div className="text-sm opacity-90">Return per $1 spent</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">73%</div>
                  <div className="text-sm opacity-90">Purchase Intent</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
