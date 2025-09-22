import {
  ArrowRight,
  Clock,
  MapPin,
  Users,
  BookOpen,
  Star,
  Heart,
  Sparkles,
  Calendar,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import mosqueInterior from "@/assets/mosque-interior.jpg";
import InteractiveHero from "@/components/features/InteractiveHero";
import HijriCalendar from "@/components/features/HijriCalendar";
import Reveal from "@/components/Reveal";

const Index = () => {
  const galleryImages = [
    "https://github.com/Mazen-mo-10/imgs/blob/main/img1.jpg?raw=true",
    "https://github.com/Mazen-mo-10/imgs/blob/main/img2.jpg?raw=true",
    "https://github.com/Mazen-mo-10/imgs/blob/main/img3.jpg?raw=true",
  ];
  return (
    <div className="min-h-screen">
      {/* Interactive Hero Section with Background Image - UPDATED */}
      <div className="relative">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://github.com/Mazen-mo-10/imgs/blob/main/IMG-20240410-WA0070.jpg?raw=true')`,
            filter: "blur(2px) brightness(0.7)",
          }}
        />
        <div className="relative z-10">
          <InteractiveHero />
        </div>
      </div>

      {/* Enhanced Community Showcase Section */}
      <Reveal>
        <section className="py-20 px-4 bg-background relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-32 -translate-y-32 animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-48 translate-y-48 animate-float" />

          <div className="container mx-auto relative z-10">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Interactive Image Gallery Preview */}
                <div className="space-y-6 animate-slide-in-left">
                  <div className="relative group">
                    <div className="absolute inset-0  opacity-20 rounded-xl blur-sm group-hover:blur-none transition-all duration-500"></div>
                    <img
                      src="https://github.com/Mazen-mo-10/imgs/blob/main/IMG-20240410-WA0070.jpg?raw=true"
                      alt="People praying inside Nagasaki Mosque"
                      className="w-full h-96 object-cover rounded-xl shadow-islamic hover-lift"
                    />

                    {/* Interactive overlay - UPDATED LINK */}
                    <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <Button
                        asChild
                        size="lg"
                        className="bg-white/90 text-primary hover:bg-white"
                      >
                        <Link to="/about" className="inline-flex items-center">
                          <Play className="mr-2 h-5 w-5" />
                          Watch Video
                        </Link>
                      </Button>
                    </div>

                    {/* Floating info badge */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg animate-bounce-gentle">
                      <p className="text-sm font-medium text-primary flex items-center">
                        <Sparkles className="h-4 w-4 mr-2 text-secondary" />
                        Sacred Prayer Space
                      </p>
                    </div>
                  </div>

                  {/* Mini gallery preview */}
                  <div className="grid grid-cols-3 gap-3">
                    {galleryImages.map((url, idx) => (
                      <div
                        key={idx}
                        className="aspect-video rounded-lg hover-lift cursor-pointer relative overflow-hidden"
                      >
                        <img
                          src={url}
                          alt={`Photo ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="space-y-8 animate-slide-in-right">
                  <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span className="text-primary text-sm font-medium">
                        Our Sacred Community
                      </span>
                    </div>

                    <h2 className="text-5xl font-bold text-foreground leading-tight">
                      Where Faith
                      <span className="block text-primary">
                        Meets Community
                      </span>
                    </h2>

                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Experience the tranquility and spiritual atmosphere where
                      Muslims from around the world come together in Nagasaki.
                      Our mosque serves as a bridge between cultures, fostering
                      understanding and spiritual growth.
                    </p>
                  </div>

                  {/* Interactive stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="hover-lift card-interactive bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
                      <CardContent className="p-6 text-center space-y-2">
                        <div className="bg-primary/10 p-3 rounded-full mx-auto w-fit">
                          <Users className="h-6 w-6 text-primary animate-pulse-slow" />
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          300+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Active Members
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover-lift card-interactive bg-gradient-to-br from-secondary/5 to-transparent border-secondary/20">
                      <CardContent className="p-6 text-center space-y-2">
                        <div className="bg-secondary/10 p-3 rounded-full mx-auto w-fit">
                          <BookOpen className="h-6 w-6 text-secondary animate-pulse-slow" />
                        </div>
                        <div className="text-2xl font-bold text-secondary">
                          50+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Weekly Classes
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Action buttons - UPDATED LINK */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary-light transition-smooth hover-lift group"
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
                      className="hover-lift border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground group"
                    >
                      <Link to="/contact" className="inline-flex items-center">
                        <MapPin className="mr-2 h-5 w-5 group-hover:bounce transition-all" />
                        Visit Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </Reveal>

      {/* Interactive Features Grid */}
      <Reveal>
        <section className="py-20 px-4 bg-gradient-to-br from-muted via-background to-muted relative">
          {/* Decorative background */}
          <div className="absolute inset-0 pattern-islamic opacity-30" />

          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16 space-y-6 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
                <Sparkles className="h-5 w-5 text-primary animate-bounce-gentle" />
                <span className="text-primary font-medium">Community Hub</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Your Gateway to
                <span className="block text-shimmer bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                  Islamic Life
                </span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover a world of Islamic resources, prayer times, community
                events, and spiritual growth opportunities
              </p>
            </div>

            {/* Enhanced Grid */}
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* Prayer Times Card - Enhanced */}
                <Reveal>
                  <Card className="group hover-lift card-interactive bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />

                    <CardHeader className="relative z-10">
                      <div className="bg-primary/20 p-4 rounded-xl w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4 hover-rotate">
                        <Clock className="h-8 w-8 text-primary group-hover:text-white" />
                      </div>
                      <CardTitle className="text-xl">Prayer Times</CardTitle>
                      <CardDescription className="text-sm">
                        Never miss a prayer with accurate timings and
                        notifications
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                      >
                        <Link
                          to="/prayer-times"
                          className="inline-flex items-center justify-center"
                        >
                          View Schedule
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </Reveal>
                {/* Events Card - Enhanced */}
                <Reveal>
                  <Card className="group hover-lift card-interactive bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />

                    <CardHeader className="relative z-10">
                      <div className="bg-secondary/20 p-4 rounded-xl w-fit group-hover:bg-secondary group-hover:text-white transition-all duration-300 mb-4 hover-rotate">
                        <Users className="h-8 w-8 text-secondary group-hover:text-white" />
                      </div>
                      <CardTitle className="text-xl">
                        Community Events
                      </CardTitle>
                      <CardDescription className="text-sm">
                        Join cultural celebrations and educational gatherings
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="secondary" className="w-full">
                        <Link
                          to="/events"
                          className="inline-flex items-center justify-center"
                        >
                          Upcoming Events
                          <Calendar className="ml-2 h-4 w-4 group-hover:bounce transition-all" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </Reveal>
                {/* Resources Card - Enhanced */}
                <Reveal>
                  <Card className="group hover-lift card-interactive bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />

                    <CardHeader className="relative z-10">
                      <div className="bg-accent/20 p-4 rounded-xl w-fit group-hover:bg-accent group-hover:text-white transition-all duration-300 mb-4 hover-rotate">
                        <BookOpen className="h-8 w-8 text-accent group-hover:text-white" />
                      </div>
                      <CardTitle className="text-xl">
                        Islamic Resources
                      </CardTitle>
                      <CardDescription className="text-sm">
                        Access Quran, Hadith, apps, and educational materials
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-accent/20 text-accent hover:bg-accent hover:text-accent-foreground"
                      >
                        <Link
                          to="/resources"
                          className="inline-flex items-center justify-center"
                        >
                          Explore Resources
                          <BookOpen className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </Reveal>
                {/* Gallery Card - New */}
                <Reveal>
                  <Card className="group hover-lift card-interactive bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-islamic rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />

                    <CardHeader className="relative z-10">
                      <div className="bg-gradient-islamic p-4 rounded-xl w-fit text-white transition-all duration-300 mb-4 hover-rotate">
                        <Play className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">Photo Gallery</CardTitle>
                      <CardDescription className="text-sm">
                        Explore beautiful moments from our mosque community
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="outline" className="w-full">
                        <Link
                          to="/gallery"
                          className="inline-flex items-center justify-center"
                        >
                          View Gallery
                          <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </Reveal>
              </div>
            </Reveal>
            {/* Islamic Calendar Integration */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Community Highlights */}
                <Reveal>
                  <Card className="hover-lift bg-gradient-to-r from-white to-primary/5 dark:from-card dark:to-primary/10">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Heart className="h-6 w-6 text-secondary animate-pulse-slow" />
                        <span>Community Highlights</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 p-2 rounded-lg">
                              <Users className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">Weekly Gatherings</p>
                              <p className="text-sm text-muted-foreground">
                                Every Friday after Jummah
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="bg-secondary/10 p-2 rounded-lg">
                              <BookOpen className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                              <p className="font-medium">Quran Study Circle</p>
                              <p className="text-sm text-muted-foreground">
                                Sundays 2:00 PM
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="bg-accent/10 p-2 rounded-lg">
                              <Star className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                              <p className="font-medium">Youth Programs</p>
                              <p className="text-sm text-muted-foreground">
                                Saturdays 10:00 AM
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 p-2 rounded-lg">
                              <Heart className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">Community Service</p>
                              <p className="text-sm text-muted-foreground">
                                Monthly initiatives
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              </div>

              {/* Hijri Calendar */}
              <div className="animate-slide-in-right">
                <HijriCalendar />
              </div>
            </div>
          </div>
        </section>
      </Reveal>
      {/* Call to Action Section */}
      <Reveal>
        <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
          {/* Animated background elements */}
          <Reveal>
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full animate-float" />
              <div
                className="absolute bottom-20 right-10 w-24 h-24 bg-primary/20 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              />
              <div className="pattern-islamic opacity-40" />
            </div>
          </Reveal>
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-4xl mx-auto space-y-8 text-white">
              <div className="space-y-4 animate-fade-in">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="text-secondary font-medium">
                    Visit Our Mosque
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  Join Our Sacred
                  <span className="block text-secondary animate-text-glow">
                    Community
                  </span>
                </h2>

                <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                  Experience the warmth of Islamic brotherhood and sisterhood in
                  the heart of Nagasaki. All are welcome to pray, learn, and
                  grow together.
                </p>
              </div>

              <div className="flex items-center justify-center space-x-4 text-white/80 animate-slide-up">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-secondary animate-bounce-gentle" />
                  <span className="font-medium">Nagasaki City, Japan</span>
                </div>
                <div className="w-2 h-2 bg-white/50 rounded-full" />
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-secondary animate-pulse-slow" />
                  <span className="font-medium">Open Daily for Prayers</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold transition-smooth shadow-gold hover-lift group"
                >
                  <Link to="/contact" className="inline-flex items-center">
                    {" "}
                    {/* Updated to /contact */}
                    Get Directions & Contact
                    <MapPin className="ml-2 h-5 w-5 group-hover:bounce transition-all" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-smooth backdrop-blur-sm hover-lift group"
                >
                  <Link to="/about" className="inline-flex items-center">
                    <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Our Story & Mission
                  </Link>
                </Button>
              </div>

              {/* Special welcome message */}
              <Reveal>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto animate-glow">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <Sparkles className="h-6 w-6 text-secondary animate-bounce-gentle" />
                    <span className="text-secondary font-medium text-lg">
                      Special Welcome
                    </span>
                    <Sparkles className="h-6 w-6 text-secondary animate-bounce-gentle" />
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    "And whoever enters it shall be secure" - Whether you're a
                    visitor to Nagasaki, a new Muslim, or seeking to learn about
                    Islam, our doors and hearts are always open.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default Index;
