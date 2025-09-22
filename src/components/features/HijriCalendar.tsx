import { useEffect, useState } from "react";
import { Calendar, Moon, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HijriDate {
  day: string;
  month: string;
  year: string;
  weekday: string;
  gregorianDate: string;
}

const HijriCalendar = () => {
  const [hijri, setHijri] = useState<HijriDate | null>(null);
  const [isRamadan, setIsRamadan] = useState(false);
  const [isHajjSeason, setIsHajjSeason] = useState(false);
  const [isSacredMonth, setIsSacredMonth] = useState(false);
  const [specialNote, setSpecialNote] = useState<string | null>(null);

  useEffect(() => {
    const fetchHijriDate = async () => {
      try {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const year = today.getFullYear();

        const res = await fetch(
          `https://api.aladhan.com/v1/gToH?date=${day}-${month}-${year}`
        );
        const data = await res.json();

        if (data.data) {
          const hijriDate = data.data.hijri;
          const gregorianDate = data.data.gregorian;

          const hijriObj: HijriDate = {
            day: hijriDate.day,
            month: hijriDate.month.en,
            year: hijriDate.year,
            weekday: hijriDate.weekday.en,
            gregorianDate: `${gregorianDate.weekday.en}, ${gregorianDate.day} ${gregorianDate.month.en} ${gregorianDate.year}`,
          };

          setHijri(hijriObj);

          // Special month flags
          const sacredMonths = [
            "Muharram",
            "Rajab",
            "Dhu al-Qi'dah",
            "Dhu al-Hijjah",
          ];
          const isRamadan = hijriObj.month === "Ramadan";
          const isHajjSeason = hijriObj.month === "Dhu al-Hijjah";
          const isSacred = sacredMonths.includes(hijriObj.month);

          setIsRamadan(isRamadan);
          setIsHajjSeason(isHajjSeason);
          setIsSacredMonth(isSacred);

          if (isRamadan) setSpecialNote("Month of Fasting");
          else if (isHajjSeason) setSpecialNote("Month of Hajj");
          else if (isSacred) setSpecialNote("Sacred Month");
          else setSpecialNote(null);
        }
      } catch (err) {
        console.error("Failed to fetch Hijri date", err);
      }
    };

    fetchHijriDate();
  }, []);

  return (
    <Card className="hover-lift bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <span>Islamic Calendar</span>
          {(isRamadan || isHajjSeason) && (
            <div className="animate-pulse-slow">
              <Star className="h-5 w-5 text-secondary" />
            </div>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {hijri ? (
          <>
            {/* Hijri Date Display */}
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary animate-text-glow">
                {hijri.day} {hijri.month} {hijri.year}
              </div>
              <div className="text-sm text-muted-foreground">
                {hijri.weekday}
              </div>
              <div className="text-xs text-muted-foreground">
                {hijri.gregorianDate}
              </div>
            </div>

            {/* Special Month Indicator */}
            {specialNote && (
              <div className="text-center">
                <Badge
                  variant="secondary"
                  className="animate-glow text-secondary-foreground"
                >
                  <Moon className="h-3 w-3 mr-1" />
                  {specialNote}
                </Badge>
              </div>
            )}

            {/* Sacred Month Indicator */}
            {isSacredMonth && (
              <div className="text-center">
                <div className="text-xs text-primary font-medium">
                  ✦ Sacred Month ✦
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-sm text-muted-foreground">
            Loading Islamic date...
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default HijriCalendar;
