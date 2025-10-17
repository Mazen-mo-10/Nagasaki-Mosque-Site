import { useState, useEffect } from "react";
import {
  ArrowRight,
  Clock,
  MapPin,
  Play,
  Sparkles,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { getNextPrayer } from "@/utils/prayerTimes";
import { getIslamicInfo } from "@/utils/hijriDate";

const InteractiveHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [islamicInfo, setIslamicInfo] = useState<Awaited<
    ReturnType<typeof getIslamicInfo>
  > | null>(null);
  const nextPrayer = getNextPrayer();

  useEffect(() => {
    setIsVisible(true);

    getIslamicInfo().then(setIslamicInfo);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.02}px, ${
      mousePosition.y * 0.02
    }px)`,
  };

  const reverseParallaxStyle = {
    transform: `translate(${-mousePosition.x * 0.01}px, ${
      -mousePosition.y * 0.01
    }px)`,
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full animate-float"
          style={parallaxStyle}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full animate-float"
          style={{ ...reverseParallaxStyle, animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-20 w-20 h-20 bg-accent/10 rounded-full animate-float"
          style={{ ...parallaxStyle, animationDelay: "2s" }}
        />

        {/* Islamic pattern overlay */}
        <div className="absolute inset-0 pattern-islamic opacity-30" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Main Content */}
          <div
            className={`space-y-8 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            {/* Greeting with Current Islamic Date */}
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm hover-lift card-interactive rounded-full px-4 py-2 animate-glow">
                <Calendar className="h-4 w-4 text-secondary" />
                {islamicInfo && islamicInfo.hijri ? (
                  <span className="text-secondary text-sm font-medium">
                    {islamicInfo.hijri.day} {islamicInfo.hijri.month}{" "}
                    {islamicInfo.hijri.year}
                  </span>
                ) : (
                  <span>Loading...</span>
                )}
              </div>

              <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white">
                Welcome to
                <span className="block text-shimmer animate-gradient bg-gradient-to-r from-secondary via-white to-secondary bg-clip-text text-transparent">
                  Nagasaki Mosque
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-white/90 font-medium">
                長崎モスクへようこそ
              </p>

              <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                A sacred sanctuary where faith meets community in the heart of
                Nagasaki, Japan. Join us in worship, learning, and spiritual
                growth.
              </p>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
                <div className="p-4 text-center">
                  <div className="text-2xl font-bold text-white">5</div>
                  <div className="text-sm text-white/80">Daily Prayers</div>
                </div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
                <div className="p-4 text-center">
                  <div className="text-2xl font-bold text-white">300+</div>
                  <div className="text-sm text-white/80">Community Members</div>
                </div>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold transition-smooth shadow-gold hover-lift group"
              >
                <Link to="/about" className="inline-flex items-center">
                  Discover Our Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-smooth backdrop-blur-sm hover-lift group"
              >
                <Link to="/prayer-times" className="inline-flex items-center">
                  <Clock className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Prayer Times
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Interactive Cards */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            {/* Next Prayer Card */}
            {nextPrayer && (
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-lift card-interactive transition-all duration-300 group">
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-2 rounded-lg group-hover:bg-secondary/30 transition-colors">
                      <Clock className="h-6 w-6 text-secondary animate-pulse-slow" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Next Prayer</h3>
                      <p className="text-white/80 text-sm">
                        Stay connected with Allah
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-secondary font-medium">
                        {nextPrayer.name}
                      </span>
                      <span className="text-white text-lg font-bold">
                        {nextPrayer.time}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-white/70 font-arabic text-lg">
                        {nextPrayer.arabic}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Link to="/contact">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-lift card-interactive group">
                  <div className="p-4 text-center space-y-2">
                    <div className="bg-primary/20 p-3 rounded-lg mx-auto w-fit group-hover:scale-110 transition-transform">
                      <MapPin className="h-8 w-8 text-primary-dark drop-shadow-md" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Visit Us</p>
                      <p className="text-white/70 text-xs">Nagasaki City</p>
                    </div>
                  </div>
                </Card>
              </Link>
              <Link to="/about">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-lift card-interactive group">
                  <div className="p-4 text-center space-y-2">
                    <div className="bg-accent/20 p-3 rounded-lg mx-auto w-fit group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-accent-dark drop-shadow-md" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Watch Video</p>
                      <p className="text-white/70 text-xs">Our Story</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>

            {/* Special Announcement */}
            <Card
              className="bg-gradient-to-r 
                 from-secondary/10 to-primary/10 
                 dark:from-secondary/20 dark:to-primary/20 
                 backdrop-blur-md 
                 border border-secondary/20 dark:border-secondary/30 
                 animate-glow bg-white/10"
            >
              <div className="p-6 text-center space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <Sparkles className="h-5 w-5 text-secondary animate-bounce-gentle" />
                  <span className="text-secondary font-medium">
                    Special Events
                  </span>
                  <Sparkles className="h-5 w-5 text-secondary animate-bounce-gentle" />
                </div>
                <p className="text-gray-800 dark:text-white text-sm">
                  A market will be opened at the mosque to sell halal and
                  non-boycotted products.
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="secondary"
                  className="hover-scale-hover"
                >
                  <Link to="/events">Learn More</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHero;
