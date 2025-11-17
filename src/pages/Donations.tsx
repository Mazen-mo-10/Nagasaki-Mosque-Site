import React, { useState, useEffect } from "react";
import {
  Heart,
  Building,
  Users,
  BookOpen,
  Star,
  CheckCircle,
  Target,
  Calendar,
  Clock,
  Mail,
  Phone,
  MapPin,
  Shield,
  Leaf,
  Sparkles,
  Play,
  ArrowRight,
  Globe,
  Share,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
const Donations = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pattern-islamic opacity-10"></div>

        <div className="container mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Heart className="h-5 w-5 text-amber-300" />
            <span className="font-medium">Support Our Mosque</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
            Help Us Hire an Imam
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Support Nagasaki's first and only mosque in bringing a full-time
            imam to serve our growing community
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-slide-up">
            {/* <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-emerald-900 font-semibold"
              onClick={() =>
                document.getElementById("contact-section").scrollIntoView()
              }
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-emerald-900"
              onClick={() => document.getElementById("story").scrollIntoView()}
            >
              <Play className="mr-2 h-5 w-5" />
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* The Need Section */}
      <section id="need" className="py-16 px-4  bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why We Urgently Need Your Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our community is growing rapidly, and we need your help to sustain
              our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800 dark:text-amber-300">
                  <Users className="h-5 w-5 mr-2" />
                  Critical Need for an Imam
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <Clock className="h-4 w-4 text-amber-600" />
                    </div>
                    <span>
                      Currently relying on volunteer leadership which is
                      unsustainable
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <BookOpen className="h-4 w-4 text-amber-600" />
                    </div>
                    <span>
                      Limited Islamic education programs without a dedicated
                      scholar
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <Heart className="h-4 w-4 text-amber-600" />
                    </div>
                    <span>
                      New Muslims need consistent guidance and mentorship
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <Shield className="h-4 w-4 text-amber-600" />
                    </div>
                    <span>
                      Essential to preserve Islamic identity in a non-Muslim
                      majority society
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-800 dark:text-emerald-300">
                  <Building className="h-5 w-5 mr-2" />
                  Mosque Improvements Needed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <ArrowRight className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span>
                      Renovate unused spaces for classrooms and activities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <ArrowRight className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span>Adding some basic items to the mosque</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <ArrowRight className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span>
                      Establishing a halal market for Muslims in Nagasaki
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover-lift">
              <CardHeader>
                <CardTitle className="text-white">
                  Your Impact: Transforming Lives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold mb-2">280+</div>
                    <p>Muslims currently benefiting from our mosque</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold mb-2">2+</div>
                    <p>New Muslims guided to Islam in the past year</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold mb-2">8+</div>
                    <p>
                      Years needed to establish this mosque against all odds
                    </p>
                  </div>
                </div>

                <Separator className="my-6 bg-white/20" />

                <div className="text-center">
                  <p className="italic">
                    "The example of those who spend their wealth in the way of
                    Allah is like a seed which grows seven spikes, in each spike
                    is a hundred grains..."
                  </p>
                  <p className="mt-4 text-xl font-arabic leading-loose">
                    ﴿مَّثَلُ ٱلَّذِينَ يُنفِقُونَ أَمۡوَٰلَهُمۡ فِي سَبِيلِ
                    ٱللَّهِ كَمَثَلِ حَبَّةٍ أَنۢبَتَتۡ سَبۡعَ سَنَابِلَ فِي
                    كُلِّ سُنۢبُلَةٖ مِّاْئَةُ حَبَّةٖۗ وَٱللَّهُ يُضَٰعِفُ
                    لِمَن يَشَآءُۚ وَٱللَّهُ وَٰسِعٌ عَلِيمٌ﴾
                  </p>
                  <p className="mt-2 text-sm opacity-80">
                    Surah Al-Baqarah (2:261)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Goal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We aim to bring a full-time imam before Ramadan 2026
            </p>
          </div>

          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center text-emerald-800 dark:text-emerald-300">
                <Target className="h-5 w-5 mr-2" />
                Our Goal: Hire a Full-Time Imam
              </CardTitle>
              <CardDescription>
                We aim to raise funds to support our mosque and hire a full-time
                imam
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-4">
                  <p className="text-lg text-muted-foreground">
                    We welcome your generous contributions to support our mosque
                    and appoint an imam to serve our community
                  </p>
                </div>

                <Separator className="my-6" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full w-fit mx-auto">
                      <Users className="h-6 w-6 text-emerald-600 mx-auto" />
                    </div>
                    <h3 className="font-semibold mt-2">10+ Nationalities</h3>
                    <p className="text-sm text-muted-foreground">
                      Served by our mosque
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full w-fit mx-auto">
                      <Calendar className="h-6 w-6 text-amber-600 mx-auto" />
                    </div>
                    <h3 className="font-semibold mt-2">Before Ramadan 2026</h3>
                    <p className="text-sm text-muted-foreground">
                      Target for imam arrival
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-fit mx-auto">
                      <BookOpen className="h-6 w-6 text-blue-600 mx-auto" />
                    </div>
                    <h3 className="font-semibold mt-2">Weekly Programs</h3>
                    <p className="text-sm text-muted-foreground">
                      Quran classes, halaqahs, more
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The journey of Nagasaki's first mosque
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-amber-500" />
                  Three Years of Perseverance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Thanks to the generous support of Muslims around the world, an
                  old building was transformed into a beautiful mosque. Praise
                  be to God, our dream came true in April 2025.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-emerald-500" />
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We've hosted interfaith dialogues, halal awareness workshops,
                  and lectures by scholars. Our outreach has led to new
                  Shahadas—proof that dawah is making a real impact in Nagasaki.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-blue-500" />
                  Yusuf's Transformation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yusuf's Transformation In June 2024, Yusuf, a Japanese
                  professor , embraced Islam at our mosque after decades of
                  searching for truth. His journey reminds us why this mosque
                  matters—it's a place where hearts are guided and lives are
                  changed. "Just like the life of Prophet Yusuf was in God's
                  plan, so too is mine, insha Allah." — Yusuf
                </p>
                <blockquote className="mt-4 pl-4 border-l-4 border-emerald-500 italic text-emerald-700 dark:text-emerald-300">
                  "Just like the life of Prophet Yusuf was in God's plan, so too
                  is mine, insha Allah." — Yusuf
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-section"
        className="py-16 px-4 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Make a Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your donation helps us bring a full-time imam to Nagasaki
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
            <Card className="hover-lift flex flex-col justify-center items-center text-center p-6">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-bold">
                  Support Our Mission
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  To make a donation, please contact us directly to arrange your
                  contribution
                </CardDescription>
              </CardHeader>

              <CardContent className="w-full space-y-4">
                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-lg"
                  asChild // <-- 2. دي هي الإضافة السحرية
                >
                  <Link to="/contact">
                    {" "}
                    {/* 3. استخدم Link هنا وشيل الـ onClick */}
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us to Donate
                  </Link>
                </Button>

                <p className="text-xs text-muted-foreground">
                  We'll be happy to guide you through the available donation
                  methods to support our mosque
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white hover-lift">
              <CardHeader>
                <CardTitle className="text-white">
                  Why Your Support Matters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-amber-300 flex-shrink-0" />
                    <span>
                      Provide consistent leadership for our growing community
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-amber-300 flex-shrink-0" />
                    <span>Guide prayers and teach Islamic knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-amber-300 flex-shrink-0" />
                    <span>Support Muslims of all ages and backgrounds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-amber-300 flex-shrink-0" />
                    <span>Foster interfaith understanding in Nagasaki</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-amber-300 flex-shrink-0" />
                    <span>Ensure the light of Islam continues to shine</span>
                  </li>
                </ul>

                <Separator className="my-6 bg-white/20" />

                <div className="text-center">
                  <p className="text-sm mb-4">
                    "Whoever relieves a hardship from his brother, Allah will
                    relieve a hardship from him on the Day of Judgment."
                  </p>
                  <p className="text-xs opacity-80">Sahih Muslim</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Mosque Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your donation supports these ongoing programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-fit mx-auto">
                  <BookOpen className="h-6 w-6 text-blue-600 mx-auto" />
                </div>
                <CardTitle>Friday Prayers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Bilingual sermons every week for our diverse community
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-fit mx-auto">
                  <Users className="h-6 w-6 text-green-600 mx-auto" />
                </div>
                <CardTitle>Education Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Quran and Arabic classes for men, women, and children
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full w-fit mx-auto">
                  <Sparkles className="h-6 w-6 text-amber-600 mx-auto" />
                </div>
                <CardTitle>Community Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ramadan programs, Eid celebrations, and interfaith dialogues
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Join Our Mission
          </h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Help us ensure that the light of Islam continues to shine in
            Nagasaki—for today and for generations to come.
          </p>

          {/* <div className="animate-fade-in">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-emerald-900 font-semibold mr-4"
              onClick={() => (window.location.href = "/contact")}
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
          </div> */}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            {/* <div className="space-y-2">
              <Globe className="h-8 w-8 text-amber-300 mx-auto" />
              <h3 className="font-semibold">Visit Our Website</h3>
              <p className="text-sm text-white/90">nagasakiislamiccenter.com</p>
            </div> */}

            <div className="space-y-2">
              <Mail className="h-8 w-8 text-amber-300 mx-auto" />
              <h3 className="font-semibold">Contact Us</h3>
              <p className="text-sm text-white/90">nagasakiislamiccenter.com</p>
            </div>

            <div className="space-y-2">
              <MapPin className="h-8 w-8 text-amber-300 mx-auto" />
              <h3 className="font-semibold">Visit In Person</h3>
              <p className="text-sm text-white/90">Nagasaki, Japan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;
