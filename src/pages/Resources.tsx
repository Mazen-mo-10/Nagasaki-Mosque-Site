import {
  BookOpen,
  Download,
  ExternalLink,
  Search,
  Heart,
  Star,
  Globe,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { link } from "fs";

const Resources = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-islamic text-white py-20 px-4 pattern-islamic">
        <div className="container mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
            Islamic Resources
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Access authentic Islamic knowledge and spiritual guidance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Resource Tabs */}
          <Tabs defaultValue="quran" className="space-y-8">
            {/* Tab Navigation */}
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-auto p-1">
              <TabsTrigger value="quran" className="text-center p-3">
                <div className="flex flex-col items-center space-y-1">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-xs">Quran</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="hadith" className="text-center p-3">
                <div className="flex flex-col items-center space-y-1">
                  <Heart className="h-4 w-4" />
                  <span className="text-xs">Hadith</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="duas" className="text-center p-3">
                <div className="flex flex-col items-center space-y-1">
                  <Star className="h-4 w-4" />
                  <span className="text-xs">Duas</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="learning" className="text-center p-3">
                <div className="flex flex-col items-center space-y-1">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-xs">Learning</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="audio" className="text-center p-3">
                <div className="flex flex-col items-center space-y-1">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs">Audio</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="apps" className="text-center p-3">
                <div className="flex flex-col items-center space-y-1">
                  <Download className="h-4 w-4" />
                  <span className="text-xs">Apps</span>
                </div>
              </TabsTrigger>
            </TabsList>

            {/* Quran Resources */}
            <TabsContent value="quran" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Quran Resources
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Access the Holy Quran in Arabic, with translations and
                  recitations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quranResources.map((resource, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-islamic transition-smooth"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <resource.icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="outline">{resource.language}</Badge>
                      </div>
                      <CardTitle>{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full" variant="outline">
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Access Resource
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Hadith Resources */}
            <TabsContent value="hadith" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Hadith Collections
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Authentic sayings and traditions of Prophet Muhammad (peace be
                  upon him)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hadithCollections.map((collection, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-islamic transition-smooth"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Heart className="h-6 w-6 text-secondary" />
                        <span>{collection.title}</span>
                      </CardTitle>
                      <CardDescription>
                        {collection.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Compiler:</span>
                        <span className="font-semibold">
                          {collection.compiler}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Hadith Count:</span>
                        <span className="font-semibold">
                          {collection.count}
                        </span>
                      </div>
                      <Button
                        className="w-full"
                        variant="outline"
                        onClick={() => window.open(collection.link, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Browse Collection
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Verses Content */}
            <TabsContent value="duas" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Essential Quranic Verses
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Inspiring and profound verses from the Holy Quran
                </p>
              </div>

              <div className="space-y-6">
                {essentialVerses.map((verse, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-r from-primary/5 to-secondary/5"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Star className="h-6 w-6 text-secondary" />
                        <span>{verse.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg">
                        <p className="text-right text-xl font-arabic text-foreground leading-relaxed">
                          {verse.arabic}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground italic">
                          <strong>Transliteration:</strong>{" "}
                          {verse.transliteration}
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Translation:</strong> {verse.translation}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Reference:</strong> {verse.reference}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Learning Resources */}
            <TabsContent value="learning" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Learning Materials
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Educational resources for Islamic knowledge and spiritual
                  growth
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {learningResources.map((resource, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-islamic transition-smooth"
                  >
                    <CardHeader>
                      <div className="bg-accent/10 p-2 rounded-lg w-fit">
                        <BookOpen className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle>{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2 ">
                        {resource.topics.map((topic, topicIndex) => (
                          <Badge
                            key={topicIndex}
                            variant="outline"
                            className="text-xs transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:text-white hover:border-primary cursor-pointer"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild className="w-full" variant="outline">
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Start Learning
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Audio Resources */}
            <TabsContent value="audio" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Audio Resources
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Quran recitations and Islamic lectures
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {audioResources.map((audio, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-islamic transition-smooth"
                  >
                    <CardHeader>
                      <CardTitle>{audio.title}</CardTitle>
                      <CardDescription>{audio.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full" variant="outline">
                        <a
                          href={audio.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Listen
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Apps Resources */}
            <TabsContent value="apps" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Mobile Apps
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Recommended Islamic apps for daily life
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appsResources.map((app, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-islamic transition-smooth"
                  >
                    <CardHeader>
                      <CardTitle>{app.title}</CardTitle>
                      <CardDescription>{app.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full" variant="outline">
                        <a
                          href={app.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

// Resource Data
const quranResources = [
  {
    title: "Quran.com",
    description:
      "Complete Quran with multiple translations and audio recitations",
    language: "Multi-language",
    icon: BookOpen,
    link: "https://quran.com",
  },
  {
    title: "Japanese Translation",
    description: "Quran translated into Japanese for local understanding",
    language: "Japanese",
    icon: Globe,
    link: "https://tanzil.net",
  },
  {
    title: "Audio Recitations",
    description: "Beautiful Quran recitations by renowned Qaris",
    language: "Arabic",
    icon: Heart,
    link: "https://everyayah.com",
  },
];

const hadithCollections = [
  {
    title: "Sahih al-Bukhari",
    description: "The most authentic collection of hadith",
    compiler: "Imam al-Bukhari",
    count: "7,563 hadith",
    link: "https://sunnah.com/bukhari",
  },
  {
    title: "Sahih Muslim",
    description: "Second most authentic hadith collection",
    compiler: "Imam Muslim",
    count: "7,500 hadith",
    link: "https://sunnah.com/muslim",
  },
  {
    title: "Sunan an-Nasa'i",
    description: "Collection focusing on Islamic jurisprudence",
    compiler: "Imam an-Nasa'i",
    count: "5,761 hadith",
    link: "https://sunnah.com/nasai",
  },
  {
    title: "Jami' at-Tirmidhi",
    description: "Comprehensive hadith collection with commentary",
    compiler: "Imam at-Tirmidhi",
    count: "3,956 hadith",
    link: "https://kalamullah.com/Books/Hadith/Jami%20at-Tirmidhi%20Vol.%201%20-%201-543.pdf",
  },
];

const essentialVerses = [
  {
    title: "Reliance on Allah",
    arabic: "وَمَن يَتَوَكَّلْ عَلَى ٱللَّهِ فَهُوَ حَسْبُهُ",
    transliteration: "Wa man yatawakkal `ala Allahi fahuwa hasbuhu",
    translation:
      "And whoever relies upon Allah – then He is sufficient for him.",
    reference: "Surah At-Talaq (65:3)",
  },
  {
    title: "Ease After Hardship",
    arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا * إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
    transliteration: "Fa inna ma`al-`usri yusra * Inna ma`al-`usri yusra",
    translation:
      "For indeed, with hardship comes ease. Indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:5-6)",
  },
  {
    title: "Peace of Hearts",
    arabic: "أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ",
    transliteration: "Ala bidhikri Allahi tatma'innu al-qulub",
    translation: "Verily, in the remembrance of Allah do hearts find rest.",
    reference: "Surah Ar-Ra'd (13:28)",
  },
  {
    title: "Allah’s Nearness",
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
    transliteration: "Wa idha sa'alaka `ibadi `annee fa-innee qareeb",
    translation:
      "And when My servants ask you concerning Me – indeed I am near.",
    reference: "Surah Al-Baqarah (2:186)",
  },
  {
    title: "No Burden Beyond Capacity",
    arabic: "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    transliteration: "La yukallifu Allahu nafsan illa wus`aha",
    translation: "Allah does not burden a soul beyond what it can bear.",
    reference: "Surah Al-Baqarah (2:286)",
  },
  {
    title: "Guidance & Light",
    arabic: "قَدْ جَاءَكُم مِّنَ ٱللَّهِ نُورٌ وَكِتَابٌ مُّبِينٌ",
    transliteration: "Qad ja'akum mina Allahi noorun wa kitabun mubeen",
    translation: "There has come to you from Allah a light and a clear Book.",
    reference: "Surah Al-Ma'idah (5:15)",
  },
  {
    title: "Allah’s Mercy",
    arabic: "إِنَّ رَحْمَتَ ٱللَّهِ قَرِيبٌ مِّنَ ٱلْمُحْسِنِينَ",
    transliteration: "Inna rahmata Allahi qareebun minal-muhsineen",
    translation: "Indeed, the mercy of Allah is near to the doers of good.",
    reference: "Surah Al-A'raf (7:56)",
  },
  {
    title: "Hope in Allah",
    arabic: "لَا تَقْنَطُوا مِن رَّحْمَةِ ٱللَّهِ",
    transliteration: "La taqnatu min rahmatillah",
    translation: "Do not despair of the mercy of Allah.",
    reference: "Surah Az-Zumar (39:53)",
  },
];

const learningResources = [
  {
    title: "Quran Studies",
    description: "In-depth study of Quranic verses and interpretation",
    topics: ["Tafsir", "Themes", "Stories", "Guidance"],
    link: "https://quran.com/",
  },
  {
    title: "Hadith Sciences",
    description: "Understanding the traditions of Prophet Muhammad",
    topics: ["Authentication", "Classification", "Application", "Context"],
    link: "https://sunnah.com/",
  },
  {
    title: "Islamic History",
    description: "Learn about the rich history of Islam",
    topics: ["Prophets", "Companions", "Caliphates", "Civilization"],
    link: "https://www.seerah.net/",
  },
  {
    title: "Islamic Basics",
    description: "Fundamental concepts of Islam for beginners",
    topics: ["Five Pillars", "Six Beliefs", "Worship", "Ethics"],
    link: "https://www.learnislam.org/",
  },
  {
    title: "Arabic Language",
    description: "Learn Arabic to better understand Islamic texts",
    topics: ["Grammar", "Vocabulary", "Reading", "Writing"],
    link: "https://madinaharabic.com/",
  },
  {
    title: "Islamic Jurisprudence",
    description: "Understanding Islamic law and its applications",
    topics: ["Worship", "Transactions", "Family", "Criminal"],
    link: "https://islamqa.info/en/subjects/1",
  },
];

// Audio Resources Data
const audioResources = [
  {
    title: "Yasser Al Dossari",
    description:
      "Yasser Al Dossari is a Saudi imam and Qur’an reciter, known for his emotional voice and precise recitation at the Grand Mosque in Makkah.",
    link: "https://qurancentral.com/audio/yasser-al-dossari?gad_source=1&gad_campaignid=9450340727&gbraid=0AAAAADGzcYqiliigMnZB7yscOUulnkkd_&gclid=CjwKCAjwmNLHBhA4EiwA3ts3mdmuigHRMfM1tilNNQ7cbBmZJ1jOwQB5hfrq08CxBuMeRqBZPOrbERoCafAQAvD_BwE",
  },
  {
    title: "Muhammad Al-Minshawy",
    description:
      "Muhammad Al-Minshawy was an Egyptian Qur’an reciter, known for his deep, soulful voice and mastery of Tajweed.",
    link: "https://www.mp3quran.net/ar/minsh",
  },
  {
    title: "Mahmoud Khalil Al-Hosary",
    description:
      "Mahmoud Khalil Al-Hosary was an Egyptian Qur’an reciter, known for his precise Tajweed and clear, balanced recitation style.",
    link: "https://surahquran.com/mp3/Al-Hussary/",
  },
];

// Apps Resources Data
const appsResources = [
  {
    title: "Quran.com App",
    description: "Read and listen to the Quran with tafsir",
    link: "https://previous.quran.com/apps",
  },
  {
    title: "Muslim Pro",
    description: "Prayer times, Quran, Qibla, and daily duas",
    link: "https://www.muslimpro.com/",
  },
  {
    title: "Athan by IslamicFinder",
    description: "Accurate prayer times, Quran, and duas",
    link: "https://www.islamicfinder.org/",
  },
];
export default Resources;
