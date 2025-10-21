/**
 * Gallery Page Component
 * Photo gallery of mosque events, architecture, and community
 */

import { useState } from "react";
import { Camera, Grid, List, Search, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "all",
    "prayers",
    "events",
    "architecture",
    "community",
    "celebrations",
  ];

  const filteredImages = galleryImages.filter((image) => {
    const matchesCategory =
      selectedCategory === "all" || image.category === selectedCategory;
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 px-4 pattern-islamic">
        <div className="container mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
            Photo Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Capturing moments of faith, community, and spiritual growth
          </p>
        </div>
      </section>
      {/* Controls Section */}
      <section className="py-8 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full md:w-80"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => setViewMode("grid")}
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => setViewMode("list")}
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Results Info */}
          <div className="mb-8 text-center">
            <p className="text-muted-foreground">
              Showing {filteredImages.length} of {galleryImages.length} photos
              {selectedCategory !== "all" && ` in "${selectedCategory}"`}
            </p>
          </div>

          {/* Grid View */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-islamic transition-smooth animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                    />

                    {item.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth">
                        <a
                          href={item.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-smooth"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.498 6.186a2.979 2.979 0 0 0-2.1-2.11C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.398.576a2.979 2.979 0 0 0-2.1 2.11C0 8.095 0 12 0 12s0 3.905.502 5.814a2.979 2.979 0 0 0 2.1 2.11C4.495 20.5 12 20.5 12 20.5s7.505 0 9.398-.576a2.979 2.979 0 0 0 2.1-2.11C24 15.905 24 12 24 12s0-3.905-.502-5.814ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
                          </svg>
                          <span>Watch</span>
                        </a>
                      </div>
                    )}

                    <div className="absolute bottom-2 right-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {item.date}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === "list" && (
            <div className="space-y-4">
              {filteredImages.map((image, index) => (
                <Card
                  key={index}
                  className="hover:shadow-islamic transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full md:w-48 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-xl">
                            {image.title}
                          </h3>
                          <Badge variant="outline">{image.category}</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          {image.description}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {image.date}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No photos found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-gradient-islamic text-white">
            <CardContent className="p-8 space-y-4">
              <Camera className="h-12 w-12 mx-auto text-secondary" />
              <h3 className="text-2xl font-bold">Share Your Memories</h3>
              <p className="text-white/90">
                Have photos from mosque events or community gatherings? We'd
                love to feature them in our gallery!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

// Gallery Images Data (In a real app, this would come from a database)
const galleryImages = [
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/NagImgBen.jpg?raw=true",
    title: "Our Journey — The Beginning of Nagasaki Mosque",
    description:
      "This is our story from the very beginning — how we came together, founded the mosque, and made the key decisions that shaped our community.",
    category: "videos",
    date: "2024",
    videoUrl: "https://www.youtube.com/watch?v=0L9neQ0AJhY",
  },
  {
    src: "https://img.youtube.com/vi/K047EPySyMA/hqdefault.jpg",
    title:
      "Visit of the Kuwaiti Humanitarian Association Delegation to Nagasaki Central Mosque – Japan",
    description:
      "A delegation from the Kuwaiti Association for Humanitarian Work visited the Nagasaki Central Mosque in Japan to strengthen cultural and humanitarian ties and explore joint initiatives. :contentReference[oaicite:2]{index=2}",
    category: "videos",
    date: "2024",
    videoUrl: "https://youtu.be/K047EPySyMA",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/NagImgJoe.jpg?raw=true",
    title: "Yusuf — The First Muslim in Nagasaki",
    description:
      "A touching story of Yusuf, the first Muslim in Nagasaki, sharing his inspiring journey of faith, discovery, and perseverance. From his first encounter with Islam to becoming a guiding light for others, Yusuf’s story reflects courage, sincerity, and the beauty of embracing truth in a new land.",
    category: "videos",
    date: "2024",
    videoUrl:
      "https://www.instagram.com/reel/DIlT2u2tVKf/?igsh=a2dvcHoxcDBsbW1l",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/NagImgoff.jpeg?raw=true",
    title: "photo with Japanese Government — Nagasaki Mosque",
    description:
      "A memorable moment at our mosque in Nagasaki, where our multicultural community gathered together with Japanese government representatives to celebrate unity and faith.",
    category: "community",
    date: "March 2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/NagImggor.jpeg?raw=true",
    title: "Featured in a Japanese Newspaper — Nagasaki Mosque",
    description:
      "A proud moment for our community as our story and efforts were featured in a Japanese newspaper, highlighting our growth and cultural connection.",
    category: "news",
    date: "March 2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/pic2.JPG?raw=true",
    title: "Community Gathering before we had our beloved mosque now",
    description:
      "A special day where mosque members come together for prayer, discussions, and strengthening brotherhood.",
    category: "community",
    date: "April 2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/nag4.jpeg?raw=true",
    title: "Mosque Community before we have our mosque",
    description:
      "Complete mosque community members standing together in a memorable group photo before we have our mosque.",
    category: "community",
    date: "March 2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/NagImgfetr.jpeg?raw=true",
    title: "Community Iftar Gathering",
    description:
      "Mosque members sharing a blessed iftar meal together during Ramadan.",
    category: "celebrations",
    date: "January 2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/pic6.jpeg?raw=true",
    title: "Special Visit",
    description:
      "Honored gathering with a respected Sheikh and distinguished guests at the mosque.",
    category: "events",
    date: "January 2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/Nagasaki-Mosque-Site/blob/main/src/assets/PicTM.png?raw=true",
    title: "Participation in the 27th Nagasaki International Festival",
    description:
      "Our team from Nagasaki Mosque joined the 27th Nagasaki International Festival — an opportunity to connect, learn, and share with a diverse global community.",
    category: "events",
    date: "2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/Nagasaki-Mosque-Site/blob/main/src/assets/PicYE.png?raw=true",
    title:
      "Cultural Activities and Halal Food — 27th Nagasaki International Festival",
    description:
      "A vibrant scene from the 27th Nagasaki International Festival, showcasing halal food, cultural exchange, and the joyful spirit of unity among people from different backgrounds.",
    category: "events",
    date: "2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/Nagasaki-Mosque-Site/blob/main/src/assets/PictwoSandH.jpg?raw=true",
    title: "Young Visitors in Hijab in 27th Nagasaki International Festival",
    description:
      "Two young girls wearing hijab experiencing the beauty of Japanese Muslim traditions at the 27th Nagasaki International Festival.",
    category: "events",
    date: "2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/NagImgLec.jpeg?raw=true",
    title: "Introducing Islam — Open Lecture at Nagasaki Mosque",
    description:
      "An open lecture held at Nagasaki Mosque, where non-Muslim guests learned about Islam alongside our mosque members — a day of sharing, understanding, and meaningful dialogue.",
    category: "community",
    date: "February 2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/Nagasaki-Mosque-Site/blob/main/src/assets/Picture%202.jpg?raw=true",
    title: "Mosque Architecture",
    description: "Beautiful Islamic architectural details of our prayer hall",
    category: "architecture",
    date: "February 2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/nag6.jpeg?raw=true",
    title: "Friday Sermon",
    description:
      "The Imam delivering the weekly Friday Khutbah to the congregation, sharing Islamic knowledge and guidance.",
    category: "prayers",
    date: "April 2024",
  },
];

export default Gallery;
