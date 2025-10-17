import { Clock, Calendar, MapPin, Compass } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPrayerTimes, getNextPrayer } from "@/utils/prayerTimes";

const PrayerTimes = () => {
  const prayerTimes = getPrayerTimes();
  const nextPrayer = getNextPrayer();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-islamic text-white py-20 px-4 pattern-islamic">
        <div className="container mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
            Prayer Times
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Stay connected with Allah through timely prayers
          </p>
          <div className="flex items-center justify-center space-x-2 text-secondary">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">Nagasaki, Japan</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          {/* Current Date and Next Prayer */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {prayerTimes.date}
              </h2>
              {nextPrayer && (
                <div className="flex items-center justify-center space-x-4">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    Next Prayer: {nextPrayer.name} at {nextPrayer.time}
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Prayer Times Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prayerTimes.prayers.map((prayer, index) => (
              <Card
                key={prayer.name}
                className={`hover:shadow-islamic transition-smooth animate-fade-in ${
                  nextPrayer?.name === prayer.name
                    ? "ring-2 ring-primary bg-primary/5"
                    : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-3">
                    <div
                      className={`p-3 rounded-full ${
                        nextPrayer?.name === prayer.name
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{prayer.name}</CardTitle>
                  <CardDescription className="text-lg font-arabic">
                    {prayer.arabic}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div
                    className={`text-3xl font-bold ${
                      nextPrayer?.name === prayer.name
                        ? "text-primary animate-glow"
                        : "text-foreground"
                    }`}
                  >
                    {prayer.time}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* Qibla Direction */}
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Compass className="h-6 w-6 text-accent" />
                  <span>Qibla Direction</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  From Nagasaki, Japan, the Qibla direction (towards Mecca) is:
                </p>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent">292°</div>
                  <p className="text-sm text-muted-foreground">
                    West-Northwest
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Prayer Reminders */}
            <Card className="bg-gradient-to-br from-secondary/10 to-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-secondary" />
                  <span>Prayer Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Fajr</span>
                    <span className="text-xs text-muted-foreground">
                      Before sunrise
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Dhuhr</span>
                    <span className="text-xs text-muted-foreground">
                      After midday
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Asr</span>
                    <span className="text-xs text-muted-foreground">
                      Late afternoon
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Maghrib</span>
                    <span className="text-xs text-muted-foreground">
                      After sunset
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Isha</span>
                    <span className="text-xs text-muted-foreground">
                      Night prayer
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Islamic Quote */}
          <Card className="bg-gradient-islamic text-white">
            <CardContent className="text-center p-8">
              {/* Arabic Verse with Tashkeel */}
              <div className="mb-6">
                <p className="text-2xl font-arabic leading-loose mb-4">
                  {`وَأَقِمِ ٱلصَّلَاةَ طَرَفَىِ ٱلنَّهَارِ وَزُلَفٗا مِّنَ ٱلَّيۡلِۚ إِنَّ ٱلۡحَسَنَٰتِ يُذۡهِبۡنَ ٱلسَّيِّـَٔاتِۚ ذَٰلِكَ ذِكۡرَىٰ لِلذَّٰكِرِينَ`}
                </p>
              </div>

              {/* English Translation */}
              <p className="text-lg italic mb-4">
                "And establish prayer at the two ends of the day and at the
                approach of the night. Indeed, good deeds do away with
                misdeeds."
              </p>

              {/* Reference */}
              <div className="flex flex-col items-center">
                <p className="text-secondary font-semibold">- هود 114</p>
                <p className="text-secondary font-semibold">- Hood 114</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PrayerTimes;
