/**
 * Enhanced About Page Component for Nagasaki Mosque
 * Features: Mosque history, embedded video, Islamic resources, Hijri calendar, fasting info, and community features
 */

import {
  Play,
  Heart,
  BookOpen,
  Users,
  Star,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Moon,
  Sun,
  Clock,
  BookOpen as BookOpenIcon,
  Badge,
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
import HijriCalendar from "@/components/features/HijriCalendar";
import FastingInfo from "@/components/features/FastingInfo";
import AzkarSection from "@/components/features/AzkarSection";
import IslamicResources from "@/components/features/IslamicResources";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-islamic text-white py-20 px-4 pattern-islamic">
        <div className="container mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
            About Our Mosque
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Discover the history, mission, and community spirit of Nagasaki
            Mosque
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">
          {/* Mosque History */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-foreground">
              Our Story
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nagasaki Mosque stands as a beacon of Islamic faith and
                  community in Japan. Our mosque serves not only as a place of
                  worship but as a cultural bridge, fostering understanding
                  between the Muslim community and Japanese society.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Established to serve the growing Muslim population in
                  Nagasaki, we provide a welcoming space for prayer, education,
                  and community gathering. Our doors are open to all who seek to
                  learn about Islam or find spiritual guidance.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <span className="font-semibold text-foreground">
                      Active Community
                    </span>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <Heart className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <span className="font-semibold text-foreground">
                      Inclusive Welcome
                    </span>
                  </div>
                </div>
              </div>

              {/* Embedded Video Section */}
              <div className="relative group space-y-6">
                {/* Video Player */}
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-islamic hover-lift">
                  <iframe
                    src="https://www.youtube.com/embed/_Q7Gl0cE9ms"
                    title="Nagasaki Mosque Community Video"
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>

                {/* Video Info Card */}
                <Card className="bg-gradient-gold hover-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-white">
                        <h3 className="text-xl font-bold">
                          Experience Our Community
                        </h3>
                        <p className="text-white/90 text-sm">
                          Discover the spiritual atmosphere and brotherhood at
                          Nagasaki Mosque
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <Separator className="my-16" />

          {/* Tips and Advice Section */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-foreground">
              Islamic Guidance & Tips
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {islamicTips.map((tip, index) => (
                <Card
                  key={index}
                  className="hover:shadow-islamic transition-smooth"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <tip.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {tip.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-16" />

          {/* Islamic Calendar & Fasting Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="animate-slide-in-left">
              <HijriCalendar />

              {/* Additional content below Hijri Calendar */}
              <Card className="mt-6 bg-secondary/5 hover-lift bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <BookOpen className="h-5 w-5 mr-2 text-secondary" />
                    About Islamic Months
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Current Month:</span>
                      <Badge className="font-arabic">Ramadan</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sacred Months:</span>
                      <span className="text-sm text-muted-foreground">
                        Dhul-Qa'dah, Dhul-Hijjah, Muharram, Rajab
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Next Occasion:</span>
                      <span className="text-sm text-muted-foreground">
                        Eid al-Fitr: 5 days
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Additional content below Fasting Info */}
              <Card className="mt-6 bg-primary/5 hover-lift bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Heart className="h-5 w-5 mr-2 text-primary" />
                    Virtues of Fasting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-1 rounded-full mt-1">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm">
                        The fasting person experiences two joys: a joy when he
                        breaks his fast and a joy when he meets his Lord
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-1 rounded-full mt-1">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm">
                        The breath of the fasting person is sweeter to Allah
                        than the fragrance of musk
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-1 rounded-full mt-1">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm">
                        Fasting is a shield from the Hellfire
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Daily Duas Section */}
              <Card className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800 hover-lift  border-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                    Fasting Duas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-arabic text-right text-lg mb-2">
                        ذَهَبَ الظَّمَأُ، وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ
                        الأَجْرُ إِنْ شَاءَ اللَّهُ
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Dua for breaking fast: Thirst is gone, the veins are
                        moistened, and the reward is confirmed if Allah wills
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <p className="font-arabic text-right text-lg mb-2">
                        اللَّهُمَّ لَكَ صُمْتُ، وَعَلَى رِزْقِكَ أَفْطَرْتُ
                      </p>
                      <p className="text-sm text-muted-foreground">
                        O Allah, for You I have fasted, and with Your provision
                        I break my fast
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-slide-in-right">
              <FastingInfo />
            </div>
          </div>

          <Separator className="my-16" />

          {/* Contact Information */}

          {/* Daily Azkar Section */}
          <div className="animate-fade-in">
            <AzkarSection />
          </div>

          <Separator className="my-16" />

          {/* Islamic Resources Section */}
          <div className="animate-fade-in">
            <IslamicResources />
          </div>

          <Separator className="my-16" />

          {/* Important Duas Section */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-foreground">
              Essential Duas (Supplications)
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Beautiful prayers and supplications from the Quran and Sunnah
            </p>

            <div className="space-y-6">
              {importantDuas.map((dua, index) => (
                <Card
                  key={index}
                  className="hover-lift bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="bg-secondary/10 p-2 rounded-lg">
                        <BookOpen className="h-5 w-5 text-secondary" />
                      </div>
                      <span>{dua.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg">
                      <p className="text-right text-2xl font-arabic text-foreground leading-relaxed">
                        {dua.arabic}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground italic">
                        <strong>Transliteration:</strong> {dua.transliteration}
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Translation:</strong> {dua.translation}
                      </p>
                      <p className="text-sm text-primary">
                        <strong>When to recite:</strong> {dua.when}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Islamic Tips Data
const islamicTips = [
  {
    icon: Heart,
    title: "Maintain Regular Prayer",
    description:
      "Establish the five daily prayers as they are the pillar of faith and provide spiritual strength throughout the day.",
  },
  {
    icon: BookOpen,
    title: "Read Quran Daily",
    description:
      "Make time for daily Quran recitation, even if just a few verses. It brings peace and guidance to the heart.",
  },
  {
    icon: Users,
    title: "Connect with Community",
    description:
      "Participate in mosque activities and build relationships with fellow Muslims for mutual support and growth.",
  },
  {
    icon: Star,
    title: "Practice Good Character",
    description:
      "Islam emphasizes beautiful character. Be kind, honest, and patient in all your interactions.",
  },
];

// Important Duas Data
const importantDuas = [
  {
    title: "Opening Supplication (Al-Fatihah)",
    arabic:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    transliteration:
      "Bismillahi'r-Rahmani'r-Rahim. Alhamdu lillahi rabbil alameen.",
    translation:
      "In the name of Allah, the Most Gracious, the Most Merciful. All praise is due to Allah, Lord of all the worlds.",
    when: "Beginning of every prayer and before important tasks",
  },
  {
    title: "Seeking Forgiveness",
    arabic:
      "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
    transliteration:
      "Astaghfirullaha'l-ladhi la ilaha illa huwa'l-hayyu'l-qayyumu wa atubu ilayh.",
    translation:
      "I seek forgiveness from Allah, besides whom there is no god, the Living, the Sustainer, and I repent to Him.",
    when: "When seeking Allah's forgiveness for sins",
  },
  {
    title: "Protection from Evil",
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "A'udhu billahi mina'sh-shaytani'r-rajim.",
    translation: "I seek refuge in Allah from Satan, the accursed.",
    when: "Before reciting Quran and when feeling negative thoughts",
  },
];

export default About;
