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
import { useEffect, useState } from "react";
import { getIslamicInfo } from "@/utils/hijriDate";

type IslamicInfo = Awaited<ReturnType<typeof getIslamicInfo>>;

const About = () => {
  const [islamicInfo, setIslamicInfo] = useState<IslamicInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const info = await getIslamicInfo();
      setIslamicInfo(info);
    };
    fetchData();
  }, []);

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
                  <div className="text-center p-4 bg-primary/5 rounded-lg hover-lift card-interactive">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <span className="font-semibold text-foreground">
                      Active Community
                    </span>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg hover-lift card-interactive">
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
                <a
                  href="https://www.youtube.com/@NagasakiIslamicCenter"
                  target="_blank"
                  className="inline-flex items-center"
                >
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
                </a>
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
                    {islamicInfo?.upcomingEvent ? (
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Next Occasion:</span>
                        <span className="text-sm text-muted-foreground">
                          {islamicInfo.upcomingEvent.name}:{" "}
                          {islamicInfo.upcomingEvent.inDays} days
                        </span>
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground">
                        Loading events...
                      </div>
                    )}
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
    title: "دعاء إبراهيم وإسماعيل ببناء الكعبة",
    arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
    transliteration: "Rabbana taqabbal minna innaka anta as-sami‘u al-‘alim.",
    translation:
      "Our Lord, accept [this] from us. Indeed, You are the Hearing, the Knowing. (Quran 2:127)",
    when: "عند القيام بالأعمال الصالحة وطلب قبولها من الله.",
  },
  {
    title: "دعاء موسى عليه السلام",
    arabic:
      "رَبِّ اشْرَحْ لِي صَدْرِي • وَيَسِّرْ لِي أَمْرِي • وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي • يَفْقَهُوا قَوْلِي",
    transliteration:
      "Rabbi ishrah li sadri, wa yassir li amri, wahlul ‘uqdatan min lisani, yafqahu qawli.",
    translation:
      "My Lord, expand for me my breast, ease for me my task, and untie the knot from my tongue, that they may understand my speech. (Quran 20:25-28)",
    when: "عند مواجهة الصعوبات أو الحاجة للفصاحة والوضوح.",
  },
  {
    title: "دعاء نوح عليه السلام",
    arabic:
      "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
    transliteration:
      "Rabbi ighfir li wa liwalidayya wa liman dakhala baytiya mu’minan walilmu’minina walmu’minat.",
    translation:
      "My Lord, forgive me and my parents and whoever enters my house a believer and the believing men and believing women. (Quran 71:28)",
    when: "للدعاء بالمغفرة للنفس، الوالدين، وجميع المؤمنين.",
  },
  {
    title: "دعاء أيوب عليه السلام",
    arabic: "رَبِّ إِنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
    transliteration: "Rabbi inni massaniya ad-durru wa anta arhamur-rahimin.",
    translation:
      "My Lord, indeed adversity has touched me, and You are the Most Merciful of the merciful. (Quran 21:83)",
    when: "عند الشدة والمرض والابتلاء.",
  },
  {
    title: "دعاء يونس عليه السلام",
    arabic:
      "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin.",
    translation:
      "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers. (Quran 21:87)",
    when: "عند الضيق، التوبة، وطلب النجاة من الكرب.",
  },
];
export default About;
