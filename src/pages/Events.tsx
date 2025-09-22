/**
 * Events Page Component
 * Community events, programs, and Islamic celebrations
 */

import { Calendar, Users, Clock, MapPin, Star } from "lucide-react";
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
    title: "Eid al-Fitr Celebration",
    category: "Religious Festival",
    description:
      "Join us for the joyous celebration of Eid al-Fitr with community prayers, traditional food, and cultural activities.",
    date: "April 10, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Nagasaki Mosque Main Hall",
    icon: Star,
    color: "bg-secondary",
    priority: "high",
  },
  {
    title: "Quran Study Circle",
    category: "Educational",
    description:
      "Weekly Quran study and discussion group for deeper understanding of Islamic teachings.",
    date: "Every Friday",
    time: "7:30 PM - 9:00 PM",
    location: "Mosque Study Room",
    icon: Users,
    color: "bg-primary",
    priority: "regular",
  },
  {
    title: "Islamic Calligraphy Workshop",
    category: "Cultural",
    description:
      "Learn the beautiful art of Arabic calligraphy with traditional techniques and modern applications.",
    date: "March 15, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Community Center",
    icon: Calendar,
    color: "bg-accent",
    priority: "regular",
  },
  {
    title: "Interfaith Dialogue",
    category: "Community Outreach",
    description:
      "Building bridges between communities through respectful dialogue and understanding.",
    date: "March 22, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Nagasaki Community Hall",
    icon: Users,
    color: "bg-primary",
    priority: "high",
  },
  {
    title: "Youth Islamic Education",
    category: "Youth Program",
    description:
      "Interactive Islamic education sessions designed specifically for young Muslims in Japan.",
    date: "Every Saturday",
    time: "10:00 AM - 12:00 PM",
    location: "Youth Learning Center",
    icon: Users,
    color: "bg-secondary",
    priority: "regular",
  },
  {
    title: "Community Iftar",
    category: "Ramadan Special",
    description:
      "Breaking fast together during the holy month of Ramadan, fostering unity and brotherhood.",
    date: "During Ramadan",
    time: "Maghrib Time",
    location: "Mosque Main Hall",
    icon: Star,
    color: "bg-accent",
    priority: "high",
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

export default Events;
