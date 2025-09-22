import { islamicEvents } from "./islamicEvents";

export async function getIslamicInfo() {
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-GB").split("/").join("-"); // DD-MM-YYYY

  const res = await fetch(`https://api.aladhan.com/v1/gToH?date=${dateStr}`);
  const data = await res.json();

  const hijri = data.data.hijri;
  const day = parseInt(hijri.day);
  const month = parseInt(hijri.month.number);
  const year = parseInt(hijri.year);

  const upcoming =
    islamicEvents.find(
      (e) => e.month > month || (e.month === month && e.day > day)
    ) || islamicEvents[0];

  let eventHijriDate = `${upcoming.day}-${upcoming.month}-${year}`;
  if (
    upcoming.month < month ||
    (upcoming.month === month && upcoming.day <= day)
  ) {
    eventHijriDate = `${upcoming.day}-${upcoming.month}-${year + 1}`;
  }

  const res2 = await fetch(
    `https://api.aladhan.com/v1/hToG?date=${eventHijriDate}`
  );
  const data2 = await res2.json();
  const eventGregorian = new Date(
    data2.data.gregorian.date.split("-").reverse().join("-")
  );

  const diffDays = Math.ceil(
    (eventGregorian.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  const sacredMonths = ["Muharram", "Rajab", "Dhu al-Qi'dah", "Dhu al-Hijjah"];
  const isRamadan = hijri.month.en === "Ramadan";
  const isHajjSeason = hijri.month.en === "Dhu al-Hijjah";
  const isSacredMonth = sacredMonths.includes(hijri.month.en);

  return {
    hijri: {
      day: hijri.day,
      month: hijri.month.en,
      year: hijri.year,
      weekday: hijri.weekday.en,
    },
    upcomingEvent: {
      name: upcoming.name,
      inDays: diffDays,
    },
    isRamadan,
    isHajjSeason,
    isSacredMonth,
  };
}
