import { Calendar, Moon, Sun, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getIslamicInfo } from "@/utils/hijriDate"; // تأكد من المسار الصحيح
import { useEffect, useState } from "react";

interface FastingDay {
  name: string;
  date: string;
  type: "obligatory" | "recommended" | "special";
  description: string;
  arabicName: string;
}

const FastingInfo = () => {
  const [islamicInfo, setIslamicInfo] = useState<Awaited<
    ReturnType<typeof getIslamicInfo>
  > | null>(null);

  useEffect(() => {
    getIslamicInfo().then(setIslamicInfo);
  }, []);

  // Use optional chaining or fallback values
  const hijri = islamicInfo?.hijri;
  const isRamadan = islamicInfo?.isRamadan ?? false;

  // Calculate if today is Monday or Thursday (Gregorian weekday)
  const today = new Date();
  const weekday = today.toLocaleString("en-US", { weekday: "long" });
  const isMonday = weekday === "Monday";
  const isThursday = weekday === "Thursday";

  // Calculate if today is a White Day (13th, 14th, or 15th of Hijri month)
  const isWhiteDay = hijri && [13, 14, 15].includes(Number(hijri.day));

  // Upcoming fasting days (example data)
  const upcomingFastingDays: FastingDay[] = [
    {
      name: "Day of Arafah",
      date: "9th Dhu al-Hijjah",
      type: "recommended",
      description: "One of the most blessed days of the year",
      arabicName: "يوم عرفة",
    },
    {
      name: "Day of Ashura",
      date: "10th Muharram",
      type: "recommended",
      description: "Commemorating the salvation of Moses and the Israelites",
      arabicName: "يوم عاشوراء",
    },
    {
      name: "White Days",
      date: "13th, 14th, 15th of every lunar month",
      type: "recommended",
      description: "Three blessed days of each Islamic month",
      arabicName: "الأيام البيض",
    },
  ];

  const getCurrentFastingStatus = () => {
    if (isRamadan) {
      return {
        status: "Ramadan Fasting",
        description: "Obligatory fasting month",
        color: "primary",
        icon: Moon,
      };
    } else if (isMonday || isThursday) {
      return {
        status: "Sunnah Fasting Day",
        description: `Prophet's recommended fasting on ${
          isMonday ? "Monday" : "Thursday"
        }`,
        color: "secondary",
        icon: Sun,
      };
    } else if (isWhiteDay) {
      return {
        status: "White Days",
        description: "Recommended fasting on the 13th, 14th, or 15th",
        color: "accent",
        icon: Star,
      };
    } else {
      return {
        status: "Regular Day",
        description: "No special fasting today",
        color: "muted",
        icon: Calendar,
      };
    }
  };

  const currentStatus = getCurrentFastingStatus();
  const StatusIcon = currentStatus.icon;

  return (
    <Card className="hover-lift">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Moon className="h-6 w-6 text-primary" />
          </div>
          <span>Fasting Information</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Current Fasting Status */}
        <div className="space-y-4">
          <h4 className="font-medium text-foreground">Today's Status</h4>

          <Card
            className={`bg-${currentStatus.color}/5 border-${currentStatus.color}/20`}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className={`bg-${currentStatus.color}/10 p-2 rounded-lg`}>
                  <StatusIcon
                    className={`h-5 w-5 text-${currentStatus.color}`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-foreground">
                      {currentStatus.status}
                    </span>
                    {(isRamadan || isMonday || isThursday || isWhiteDay) && (
                      <Badge
                        variant="secondary"
                        className="text-xs animate-pulse-slow"
                      >
                        {isRamadan ? "Obligatory" : "Recommended"}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {currentStatus.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator />

        {/* Fasting Times (if applicable) */}
        {(isRamadan || isMonday || isThursday || isWhiteDay) && (
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Fasting Times</h4>

            <div className="grid grid-cols-2 gap-3">
              <Card className="bg-muted/30">
                <CardContent className="p-3 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Sun className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium">Suhur Ends</span>
                  </div>
                  <div className="text-lg font-bold text-primary">4:42</div>
                  <div className="text-xs text-muted-foreground">Fajr Time</div>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="p-3 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Moon className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Iftar Time</span>
                  </div>
                  <div className="text-lg font-bold text-primary">6:20 PM</div>
                  <div className="text-xs text-muted-foreground">
                    Maghrib Time
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        <Separator />

        {/* Upcoming Special Fasting Days */}
        <div className="space-y-4">
          <h4 className="font-medium text-foreground">Upcoming Special Days</h4>

          <div className="space-y-3">
            {upcomingFastingDays.map((day, index) => (
              <Card
                key={index}
                className="hover-glow transition-all duration-300"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-foreground">
                          {day.name}
                        </span>
                        <Badge
                          variant={
                            day.type === "obligatory" ? "default" : "secondary"
                          }
                          className="text-xs"
                        >
                          {day.type}
                        </Badge>
                      </div>
                      <p className="text-lg text-primary font-arabic">
                        {day.arabicName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {day.date}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {day.description}
                      </p>
                    </div>
                    <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fasting Etiquette Reminder */}
        <div className="bg-primary/5 p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <Star className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                Fasting Etiquette Reminder
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Remember to have the intention (niyyah) for fasting before Fajr,
                eat suhur (pre-dawn meal), break fast at Maghrib time, and
                increase in dhikr, Quran recitation, and charitable acts during
                fasting days.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FastingInfo;
