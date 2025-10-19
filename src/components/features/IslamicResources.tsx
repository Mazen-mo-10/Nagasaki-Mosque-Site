/**
 * Islamic Resources Component
 * Displays recommended apps, books, and resources
 */

import { Book, Smartphone, Download, ExternalLink, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface IslamicApp {
  name: string;
  description: string;
  features: string[];
  platform: "iOS" | "Android" | "Both";
  rating: number;
  downloadUrl: string;
}

interface IslamicBook {
  title: string;
  author: string;
  description: string;
  category: string;
  recommended: boolean;
  arabicTitle?: string;
}

const islamicApps: IslamicApp[] = [
  {
    name: "Muslim Pro",
    description:
      "Complete Islamic companion with prayer times, Quran, and qibla direction",
    features: [
      "Prayer Times",
      "Quran Recitation",
      "Qibla Compass",
      "Hijri Calendar",
    ],
    platform: "Both",
    rating: 4.8,
    downloadUrl: "https://muslimpro.com",
  },
  {
    name: "Quran Majeed",
    description: "Beautiful Quran app with translations and audio recitations",
    features: [
      "Multiple Translations",
      "Audio Recitations",
      "Tafsir",
      "Bookmarks",
    ],
    platform: "Both",
    rating: 4.9,
    downloadUrl: "https://quranmajeed.com",
  },
  {
    name: "Athan Pro",
    description: "Accurate prayer times and beautiful athan sounds worldwide",
    features: [
      "Accurate Prayer Times",
      "Multiple Athan Sounds",
      "Qibla Direction",
      "Mosques Nearby",
    ],
    platform: "Both",
    rating: 4.7,
    downloadUrl: "https://athanpro.com",
  },
  {
    name: "Hisnul Muslim",
    description: "Fortress of the Muslim - comprehensive dua collection",
    features: [
      "Daily Duas",
      "Arabic & Translation",
      "Audio Recitation",
      "Categories",
    ],
    platform: "Both",
    rating: 4.6,
    downloadUrl:
      "https://play.google.com/store/apps/details?id=com.afrodawah.hisnulmuslimenglish",
  },
];

const islamicBooks: IslamicBook[] = [
  {
    title: "The Sealed Nectar",
    author: "Safi-ur-Rahman al-Mubarakpuri",
    description:
      "The most authentic and complete biography of Prophet Muhammad (PBUH)",
    category: "Biography",
    recommended: true,
    arabicTitle: "الرحيق المختوم",
  },
  {
    title: "Fortress of the Muslim",
    author: "Sa'id ibn Wahf al-Qahtani",
    description:
      "Collection of authentic duas and remembrances from Quran and Sunnah",
    category: "Dua & Dhikr",
    recommended: true,
    arabicTitle: "حصن المسلم",
  },
  {
    title: "Tafsir Ibn Kathir",
    author: "Ibn Kathir",
    description:
      "Classical commentary on the Quran, explaining verses with Hadith and scholarly insight",
    category: "Tafsir",
    recommended: true,
    arabicTitle: "تفسير ابن كثير",
  },
  {
    title: "Riyad as-Salihin",
    author: "Imam an-Nawawi",
    description:
      "Gardens of the Righteous - collection of authentic Hadith on Islamic ethics",
    category: "Hadith",
    recommended: true,
    arabicTitle: "رياض الصالحين",
  },
  {
    title: "The Lives of the Prophets",
    author: "Ibn Kathir",
    description:
      "Stories and lessons from the lives of all the Prophets mentioned in Islam",
    category: "History",
    recommended: false,
    arabicTitle: "قصص الأنبياء",
  },
  {
    title: "Islamic Jurisprudence",
    author: "Various Scholars",
    description:
      "Comprehensive guide to Islamic law and its practical applications",
    category: "Fiqh",
    recommended: false,
  },
];

const IslamicResources = () => {
  const AppCard = ({ app }: { app: IslamicApp }) => (
    <Card className="hover-lift card-interactive">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{app.name}</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(app.rating)
                        ? "fill-secondary text-secondary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">
                  {app.rating}
                </span>
              </div>
              <Badge variant="outline" className="text-xs">
                {app.platform}
              </Badge>
            </div>
          </div>
          <Smartphone className="h-6 w-6 text-primary" />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{app.description}</p>

        <div className="space-y-2">
          <p className="text-xs font-medium text-foreground">Features:</p>
          <div className="flex flex-wrap gap-1">
            {app.features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <Button asChild size="sm" className="w-full">
          <a
            href={app.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Download App
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );

  const BookCard = ({ book }: { book: IslamicBook }) => (
    <Card
      className={`hover-lift ${
        book.recommended ? "border-primary/40 bg-primary/5" : ""
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <div className="flex items-center space-x-2">
              <CardTitle className="text-base leading-tight">
                {book.title}
              </CardTitle>
              {book.recommended && (
                <Badge
                  variant="secondary"
                  className="text-xs animate-pulse-slow"
                >
                  Recommended
                </Badge>
              )}
            </div>
            {book.arabicTitle && (
              <p className="text-sm text-right text-primary font-arabic">
                {book.arabicTitle}
              </p>
            )}
            <p className="text-sm text-muted-foreground">{book.author}</p>
            <Badge variant="outline" className="text-xs w-fit">
              {book.category}
            </Badge>
          </div>
          <Book className="h-6 w-6 text-primary flex-shrink-0" />
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {book.description}
        </p>
      </CardContent>
    </Card>
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div className="bg-accent/10 p-2 rounded-lg">
            <Book className="h-6 w-6 text-accent" />
          </div>
          <span>Islamic Resources</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="apps">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="apps" className="flex items-center space-x-2">
              <Smartphone className="h-4 w-4" />
              <span>Islamic Apps</span>
            </TabsTrigger>
            <TabsTrigger value="books" className="flex items-center space-x-2">
              <Book className="h-4 w-4" />
              <span>Recommended Books</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="apps" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {islamicApps.map((app, index) => (
                <AppCard key={index} app={app} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="books" className="mt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {islamicBooks
                  .filter((book) => book.recommended)
                  .map((book, index) => (
                    <BookCard key={index} book={book} />
                  ))}
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium text-foreground mb-4">
                  Additional Reading
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {islamicBooks
                    .filter((book) => !book.recommended)
                    .map((book, index) => (
                      <BookCard key={index} book={book} />
                    ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default IslamicResources;
