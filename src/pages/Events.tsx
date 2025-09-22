/**
 * Events Page Component
 * Community events, programs, and Islamic celebrations
 */

import {
  Calendar,
  Users,
  Clock,
  MapPin,
  Star,
  Globe,
  BookOpen,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Events = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 px-4 pattern-islamic">
        <div className="container mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
            Community Events
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Join our vibrant community in Islamic celebrations and educational
            programs
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Upcoming Events */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-foreground">
              Upcoming Events
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className="hover:shadow-islamic transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${event.color}`}>
                          <event.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {event.title}
                          </CardTitle>
                          <CardDescription>{event.category}</CardDescription>
                        </div>
                      </div>
                      <Badge
                        variant={
                          event.priority === "high"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {event.priority === "high" ? "Priority" : "Regular"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      {event.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Regular Programs */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-foreground">
              Regular Programs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPrograms.map((program, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-islamic transition-smooth"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="bg-primary p-2 rounded-lg">
                        <program.icon className="h-6 w-6 text-white" />
                      </div>
                      <span>{program.title}</span>
                    </CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-primary">
                          Schedule:
                        </span>
                        <p className="text-muted-foreground">
                          {program.schedule}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-primary">
                          Duration:
                        </span>
                        <p className="text-muted-foreground">
                          {program.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {program.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:text-white hover:border-primary cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Special Highlights */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-center text-foreground">
              Special Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialHighlights.map((h) => (
                <div
                  key={h.id}
                  className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition hover:-translate-y-2 bg-white dark:bg-gray-900"
                >
                  <img
                    src={h.pic}
                    alt={h.title}
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/800x480?text=" + h.id;
                    }}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-foreground dark:text-white">
                      {h.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-300 mt-2">
                      {h.summary}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground dark:text-gray-400">
                        {h.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact for Events */}
          <Card className="bg-gradient-islamic text-white">
            <CardContent className="text-center p-8 space-y-4">
              <h3 className="text-2xl font-bold">Want to Organize an Event?</h3>
              <p className="text-white/90">
                We welcome community members to propose and organize events.
                Contact us to discuss your ideas and how we can support them.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

// Events Data
const upcomingEvents = [
  {
    title: "Grand Opening — Nagasaki Central Mosque",
    category: "Opening Ceremony",
    description:
      "Ceremonial opening of Nagasaki Central Mosque with Sheikh Adnan Al-Qadri, Sheikh Iyad Al-Obaidan, Sheikh Mohammed Ismail, university and municipal representation, and coverage from local media.",
    date: "April 2024",
    time: "Opening Day & Events",
    location: "Nagasaki Central Mosque",
    icon: Star,
    color: "bg-secondary",
    priority: "high",
  },
  {
    title: "Quran Study Circle",
    category: "Educational",
    description:
      "Weekly Quran study and tajweed sessions using the 'Noorani Qaida' method and Arabic basics for non-native speakers.",
    date: "Every Friday / Saturdays (see schedule)",
    time: "After Dhuhr / Asr sessions (varies)",
    location: "Mosque Study Rooms (Men & Women separate sessions)",
    icon: Users,
    color: "bg-primary",

    priority: "regular",
  },
  {
    title: "Interfaith Dialogue & Peace Ambassadors",
    category: "Community Outreach",
    description:
      "Panel with representatives from Buddhist, Christian and Muslim communities discussing faith, coexistence, and peace in Nagasaki.",
    date: "Dec 17, 2024",
    time: "Public hall event (evening)",
    location: "Nagasaki City Hall - Public Hall",
    icon: Globe,
    color: "bg-accent",

    priority: "high",
  },
  {
    title: "Halal Food Workshop & Demonstration",
    category: "Cultural / Food",
    description:
      "Interactive halal food demo and lecture on the meaning of halal, with live cooking and tasting sessions.",
    date: "Dec 21, 2024",
    time: "Afternoon event",
    location: "Municipal Hall",
    icon: BookOpen,
    color: "bg-secondary",

    priority: "regular",
  },
  {
    title: "Arabic Calligraphy Workshop",
    category: "Arts & Culture",
    description:
      "Learn traditional Arabic calligraphy techniques and modern applications for design.",
    date: "Mar 15, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Community Center",
    icon: Star,
    color: "bg-accent",
    priority: "regular",
  },
  {
    title: "Youth Islamic Education",
    category: "Youth Program",
    description:
      "Interactive classes designed for children and teenagers to learn Quran, morals, and community values.",
    date: "Saturdays (Weekly)",
    time: "10:00 AM - 12:00 PM",
    location: "Youth Learning Center",
    icon: Calendar,
    color: "bg-primary",
    priority: "regular",
  },
];
const regularPrograms = [
  {
    title: "Friday Prayers (Jumu'ah)",
    description:
      "Weekly congregational prayers with Islamic sermons and community gathering.",
    schedule: "Every Friday",
    duration: "1 hour",
    icon: Users,
    tags: ["Prayer", "Weekly", "Community"],
  },
  {
    title: "Arabic Language Classes",
    description:
      "Learn to read and understand Arabic for better Quran comprehension.",
    schedule: "Tuesdays & Thursdays",
    duration: "1.5 hours",
    icon: Users,
    tags: ["Education", "Language", "Beginner-Friendly"],
  },
  {
    title: "Children's Islamic Education",
    description:
      "Age-appropriate Islamic education for children in our community.",
    schedule: "Sundays",
    duration: "2 hours",
    icon: Users,
    tags: ["Children", "Education", "Family"],
  },
  {
    title: "Women's Circle",
    description:
      "Sisters' gathering for Islamic discussions, support, and sisterhood.",
    schedule: "Monthly",
    duration: "2 hours",
    icon: Users,
    tags: ["Women", "Support", "Islamic Studies"],
  },
];
const specialHighlights = [
  {
    id: "h-soji",
    title: "Lecture by Japanese Da'ee Soji Muto",
    summary:
      "A Japanese lecture on Islamic civilization and outreach that led to new interest and a recorded shahada.",
    date: "June 2024",
    pic: "https://github.com/Mazen-mo-10/Nagasaki-Mosque-Site/blob/main/src/assets/WhatsApp%20Image%202025-07-05%20at%2021.00.00.jpeg?raw=true",
  },
  {
    id: "h-yusuf",
    title: "Conversion Story — Yusuf",
    summary:
      "Story of Yusuf, a Japanese academic, who embraced Islam at the mosque — shared publicly as inspiration.",
    date: "June 2024",
    pic: "/path/to/pic8.jpg", // pic8
  },
  {
    id: "h-kuwait-delegation",
    title: "Visit: Kuwaiti Humanitarian Association",
    summary:
      "A delegation visit that supported the mosque opening and community development projects.",
    date: "April 2024",
    pic: "/path/to/pic9.jpg", // pic9
  },
];

export default Events;
