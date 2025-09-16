/**
 * Prayer Times Utility for Nagasaki Mosque
 * Calculates the 5 daily prayer times for Nagasaki, Japan
 */

export interface PrayerTime {
  name: string;
  time: string;
  arabic: string;
}

export interface DailyPrayerTimes {
  date: string;
  prayers: PrayerTime[];
}

/**
 * Get approximate prayer times for Nagasaki, Japan
 * Note: In a real application, you would use a proper Islamic calendar API
 * like Aladhan API or Islamic Finder API for accurate calculations
 */
export const getPrayerTimes = (): DailyPrayerTimes => {
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Approximate prayer times for Nagasaki (these should be calculated based on sun position)
  // In production, use proper Islamic calculation methods
  const prayers: PrayerTime[] = [
    {
      name: 'Fajr',
      time: '5:30 AM',
      arabic: 'الفجر'
    },
    {
      name: 'Dhuhr',
      time: '12:15 PM',
      arabic: 'الظهر'
    },
    {
      name: 'Asr',
      time: '3:45 PM',
      arabic: 'العصر'
    },
    {
      name: 'Maghrib',
      time: '6:20 PM',
      arabic: 'المغرب'
    },
    {
      name: 'Isha',
      time: '8:00 PM',
      arabic: 'العشاء'
    }
  ];

  return {
    date: dateString,
    prayers
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
  const prayerMinutes = prayerTimes.prayers.map(prayer => {
    const [time, period] = prayer.time.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;
    
    if (period === 'PM' && hours !== 12) {
      totalMinutes += 12 * 60;
    } else if (period === 'AM' && hours === 12) {
      totalMinutes = minutes;
    }
    
    return { ...prayer, totalMinutes };
  });

  // Find next prayer
  const nextPrayer = prayerMinutes.find(prayer => prayer.totalMinutes > currentTime);
  
  if (nextPrayer) {
    return {
      name: nextPrayer.name,
      time: nextPrayer.time,
      arabic: nextPrayer.arabic
    };
  }

  // If no prayer found today, return Fajr of next day
  return prayerTimes.prayers[0];
};