/**
 * Islamic Resources Page Component
 * Quran, Hadith, educational materials, and spiritual guidance
 */

import { BookOpen, Download, ExternalLink, Search, Heart, Star, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
                <h2 className="text-3xl font-bold text-foreground">Quran Resources</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Access the Holy Quran in Arabic, with translations and recitations
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quranResources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-islamic transition-smooth">
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
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
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
                <h2 className="text-3xl font-bold text-foreground">Hadith Collections</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Authentic sayings and traditions of Prophet Muhammad (peace be upon him)
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hadithCollections.map((collection, index) => (
                  <Card key={index} className="hover:shadow-islamic transition-smooth">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Heart className="h-6 w-6 text-secondary" />
                        <span>{collection.title}</span>
                      </CardTitle>
                      <CardDescription>{collection.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Compiler:</span>
                        <span className="font-semibold">{collection.compiler}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Hadith Count:</span>
                        <span className="font-semibold">{collection.count}</span>
                      </div>
                      <Button className="w-full" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Browse Collection
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Duas Content */}
            <TabsContent value="duas" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Essential Duas</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Important supplications for daily life and special occasions
                </p>
              </div>
              
              <div className="space-y-6">
                {essentialDuas.map((dua, index) => (
                  <Card key={index} className="bg-gradient-to-r from-primary/5 to-secondary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Star className="h-6 w-6 text-secondary" />
                        <span>{dua.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg">
                        <p className="text-right text-xl font-arabic text-foreground leading-relaxed">
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
                        <Badge variant="outline">{dua.category}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Learning Resources */}
            <TabsContent value="learning" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Learning Materials</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Educational resources for Islamic knowledge and spiritual growth
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {learningResources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-islamic transition-smooth">
                    <CardHeader>
                      <div className="bg-accent/10 p-2 rounded-lg w-fit">
                        <BookOpen className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle>{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {resource.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full" variant="outline">
                        Start Learning
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Audio Resources */}
            <TabsContent value="audio">
              <div className="text-center py-16">
                <Globe className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Audio Resources</h3>
                <p className="text-muted-foreground">
                  Quran recitations, Islamic lectures, and spiritual content coming soon
                </p>
              </div>
            </TabsContent>

            {/* Apps Resources */}
            <TabsContent value="apps">
              <div className="text-center py-16">
                <Download className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Mobile Apps</h3>
                <p className="text-muted-foreground">
                  Recommended Islamic mobile applications for daily practice
                </p>
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
    description: "Complete Quran with multiple translations and audio recitations",
    language: "Multi-language",
    icon: BookOpen,
    link: "https://quran.com"
  },
  {
    title: "Japanese Translation",
    description: "Quran translated into Japanese for local understanding",
    language: "Japanese",
    icon: Globe,
    link: "https://tanzil.net"
  },
  {
    title: "Audio Recitations",
    description: "Beautiful Quran recitations by renowned Qaris",
    language: "Arabic",
    icon: Heart,
    link: "https://everyayah.com"
  }
];

const hadithCollections = [
  {
    title: "Sahih al-Bukhari",
    description: "The most authentic collection of hadith",
    compiler: "Imam al-Bukhari",
    count: "7,563 hadith"
  },
  {
    title: "Sahih Muslim",
    description: "Second most authentic hadith collection",
    compiler: "Imam Muslim",
    count: "7,500 hadith"
  },
  {
    title: "Sunan an-Nasa'i",
    description: "Collection focusing on Islamic jurisprudence",
    compiler: "Imam an-Nasa'i",
    count: "5,761 hadith"
  },
  {
    title: "Jami' at-Tirmidhi",
    description: "Comprehensive hadith collection with commentary",
    compiler: "Imam at-Tirmidhi",
    count: "3,956 hadith"
  }
];

const essentialDuas = [
  {
    title: "Morning Remembrance",
    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",
    transliteration: "Asbahna wa asbahal-mulku lillah",
    translation: "We have entered the morning and the kingdom belongs to Allah",
    category: "Morning"
  },
  {
    title: "Before Eating",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translation: "In the name of Allah",
    category: "Meals"
  },
  {
    title: "Seeking Protection",
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "A'udhu billahi mina'sh-shaytani'r-rajim",
    translation: "I seek refuge in Allah from Satan, the accursed",
    category: "Protection"
  }
];

const learningResources = [
  {
    title: "Islamic Basics",
    description: "Fundamental concepts of Islam for beginners",
    topics: ["Five Pillars", "Six Beliefs", "Worship", "Ethics"]
  },
  {
    title: "Quran Studies",
    description: "In-depth study of Quranic verses and interpretation",
    topics: ["Tafsir", "Themes", "Stories", "Guidance"]
  },
  {
    title: "Hadith Sciences",
    description: "Understanding the traditions of Prophet Muhammad",
    topics: ["Authentication", "Classification", "Application", "Context"]
  },
  {
    title: "Islamic History",
    description: "Learn about the rich history of Islam",
    topics: ["Prophets", "Companions", "Caliphates", "Civilization"]
  },
  {
    title: "Arabic Language",
    description: "Learn Arabic to better understand Islamic texts",
    topics: ["Grammar", "Vocabulary", "Reading", "Writing"]
  },
  {
    title: "Islamic Jurisprudence",
    description: "Understanding Islamic law and its applications",
    topics: ["Worship", "Transactions", "Family", "Criminal"]
  }
];

export default Resources;