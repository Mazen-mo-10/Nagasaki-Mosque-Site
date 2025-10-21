export interface PrayerTime {
  name: string;
  time: string;
  arabic: string;
}

export interface DailyPrayerTimes {
  date: string;
  prayers: PrayerTime[];
}

export const getPrayerTimes = (): DailyPrayerTimes => {
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const prayers: PrayerTime[] = [
    {
      name: "Fajr",
      time: "4:42",
      arabic: "الفجر",
    },
    {
      name: "Shuruq",
      time: "5:57",
      arabic: "الشروق",
    },
    {
      name: "Dhuhr",
      time: "12:15",
      arabic: "الظهر",
    },
    {
      name: "Asr",
      time: "15:45",
      arabic: "العصر",
    },
    {
      name: "Maghrib",
      time: "18:25",
      arabic: "المغرب",
    },
    {
      name: "Isha",
      time: "19:43",
      arabic: "العشاء",
    },
  ];

  return {
    date: dateString,
    prayers,
  };
};

/**
 * Get the next upcoming prayer
 */
export const getNextPrayer = (): PrayerTime | null => {
  const prayerTimes = getPrayerTimes();
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  // Convert prayer times to minutes for comparison
  const prayerMinutes = prayerTimes.prayers.map((prayer) => {
    const [time, period] = prayer.time.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
    let totalMinutes = hours * 60 + minutes;

    if (period === "PM" && hours !== 12) {
      totalMinutes += 12 * 60;
    } else if (period === "AM" && hours === 12) {
      totalMinutes = minutes;
    }

    return { ...prayer, totalMinutes };
  });

  // Find next prayer
  const nextPrayer = prayerMinutes.find(
    (prayer) => prayer.totalMinutes > currentTime
  );

  if (nextPrayer) {
    return {
      name: nextPrayer.name,
      time: nextPrayer.time,
      arabic: nextPrayer.arabic,
    };
  }

  // If no prayer found today, return Fajr of next day
  return prayerTimes.prayers[0];
};
