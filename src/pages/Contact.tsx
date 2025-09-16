/**
 * Contact Page Component
 * Contact information, social media links, and location details
 */

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 px-4 pattern-islamic">
        <div className="container mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Get in touch with our mosque community - we're here to help
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground">
                Get In Touch
              </h2>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Location */}
                <Card className="hover:shadow-islamic transition-smooth">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <span>Visit Us</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-foreground font-semibold">
                      Nagasaki Islamic Center
                    </p>
                    <p className="text-muted-foreground">Nagasaki City</p>
                    <p className="text-muted-foreground">
                      Nagasaki Prefecture, Japan
                    </p>
                    <Button asChild variant="outline" className="mt-3">
                      <a
                        href="https://maps.app.goo.gl/YmuxvoVqAHU5x4kH7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Get Directions
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="hover:shadow-islamic transition-smooth">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="bg-secondary/10 p-2 rounded-lg">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <span>Phone</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground font-semibold">
                      +(81) 070-8338-4137
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Available during office hours
                    </p>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="hover:shadow-islamic transition-smooth">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="bg-accent/10 p-2 rounded-lg">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <span>Email</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground font-semibold">
                      info@nagasakiislamiccenter.com
                    </p>
                    <p className="text-muted-foreground text-sm">
                      We respond within 24 hours
                    </p>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="hover:shadow-islamic transition-smooth">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <span>Office Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold">
                        After Jumu'ah prayer
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8 animate-slide-up">
              <h2 className="text-3xl font-bold text-foreground">
                Send us a Message
              </h2>

              <Card className="shadow-islamic">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <span>Contact Form</span>
                  </CardTitle>
                  <CardDescription>
                    We'd love to hear from you. Send us a message and we'll
                    respond as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form
                    className="space-y-4"
                    action="mailto:info@nagasakiislamiccenter.com"
                    method="POST"
                    encType="text/plain"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-light transition-smooth"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">Follow Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our community through social media for updates,
            events, and Islamic inspiration.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialMediaLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className="group hover:shadow-islamic transition-smooth cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${social.color} p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-smooth`}
                    >
                      <social.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {social.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {social.handle}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Click on any platform to visit our official page
          </p>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-islamic text-white">
            <CardContent className="p-8 text-center space-y-4">
              <Phone className="h-12 w-12 mx-auto text-secondary" />
              <h3 className="text-2xl font-bold">Emergency Contact</h3>
              <p className="text-white/90">
                For urgent matters or emergencies requiring immediate Islamic
                guidance
              </p>
              <div className="space-y-2">
                <p className="text-xl font-bold text-secondary">
                  +(81) 070-8338-4137
                </p>
                <p className="text-sm text-white/80">
                  Available 24/7 for community members
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

// Social Media Data
const socialMediaLinks = [
  {
    name: "Facebook",
    handle: "@NagasakiMosque",
    icon: Facebook,
    color: "bg-blue-600",
    url: "https://www.facebook.com/groups/1406226049644745/",
  },
  {
    name: "YouTube",
    handle: "Nagasaki Center",
    icon: Youtube,
    color: "bg-red-600",
    url: "https://www.youtube.com/@NagasakiIslamicCenter",
  },
  {
    name: "Twitter",
    handle: "@NagasakiIslamic",
    icon: Twitter,
    color: "bg-blue-400",
    url: "https://x.com/NICNagasaki",
  },
  {
    name: "Instagram",
    handle: "@nagasaki_mosque",
    icon: Instagram,
    color: "bg-pink-600",
    url: "https://www.instagram.com/nagasakiislamiccenter?igsh=MWpuYWxpMnowYWZnbw==",
  },
];

export default Contact;
