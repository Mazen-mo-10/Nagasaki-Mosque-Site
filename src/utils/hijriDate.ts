/**
 * Hijri Date Utilities for Nagasaki Mosque
 * Converts Gregorian dates to Islamic (Hijri) calendar
 */

export interface HijriDate {
  day: number;
  month: string;
  year: number;
  weekday: string;
  gregorianDate: string;
}

// Hijri month names
const hijriMonths = [
  'Muharram', 'Safar', 'Rabi\' al-awwal', 'Rabi\' al-thani',
  'Jumada al-awwal', 'Jumada al-thani', 'Rajab', 'Sha\'ban',
  'Ramadan', 'Shawwal', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'
];

// Islamic weekday names
const islamicWeekdays = [
  'Yawm al-Ahad', 'Yawm al-Ithnayn', 'Yawm al-Thulatha',
  'Yawm al-Arba\'a', 'Yawm al-Khamis', 'Yawm al-Jum\'ah', 'Yawm as-Sabt'
];

/**
 * Convert Gregorian date to approximate Hijri date
 * Note: This is a simplified calculation. For precise dates, use an Islamic calendar API
 */
export const getHijriDate = (gregorianDate: Date = new Date()): HijriDate => {
  // Simplified conversion (actual Islamic calendar is lunar and more complex)
  // This is an approximation for demonstration purposes
  const gregorianYear = gregorianDate.getFullYear();
  const gregorianMonth = gregorianDate.getMonth();
  const gregorianDay = gregorianDate.getDate();
  
  // Approximate conversion (Islamic calendar started in 622 CE)
  // This is a rough estimate - real calculations are much more complex
  const hijriYear = Math.floor((gregorianYear - 622) * 1.030684) + 1;
  
  // Simple month calculation (this is very approximate)
  const dayOfYear = Math.floor((gregorianMonth * 30.44) + gregorianDay);
  const hijriMonth = Math.floor((dayOfYear / 29.53) % 12);
  const hijriDay = Math.floor(dayOfYear % 29.53) + 1;
  
  const weekday = gregorianDate.getDay();
  
  return {
    day: hijriDay > 29 ? hijriDay - 29 : hijriDay,
    month: hijriMonths[hijriMonth],
    year: hijriYear,
    weekday: islamicWeekdays[weekday],
    gregorianDate: gregorianDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  };
};

/**
 * Get special Islamic days and months
 */
export const getIslamicInfo = () => {
  const hijri = getHijriDate();
  const isRamadan = hijri.month === 'Ramadan';
  const isHajjSeason = hijri.month === 'Dhu al-Hijjah';
  const isSacredMonth = ['Muharram', 'Rajab', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'].includes(hijri.month);
  
  return {
    hijri,
    isRamadan,
    isHajjSeason,
    isSacredMonth,
    specialNote: isRamadan ? 'Month of Fasting' : 
                 isHajjSeason ? 'Month of Hajj' : 
                 isSacredMonth ? 'Sacred Month' : null
  };
};