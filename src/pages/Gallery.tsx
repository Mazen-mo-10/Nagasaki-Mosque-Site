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
              {filteredImages.map((image, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-islamic transition-smooth animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    <div className="absolute bottom-2 right-2">
                      <Badge variant="secondary" className="text-xs">
                        {image.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {image.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {image.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {image.date}
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
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/pic1.jpg?raw=true",
    title: "Prayer Time at Nagasaki Mosque",
    description:
      "Community members gathering for daily prayers in our main prayer hall",
    category: "prayers",
    date: "March 2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/pic2.JPG?raw=true",
    title: "Eid Celebration 2025",
    description:
      "Joyous Eid al-Fitr celebration with traditional food and community bonding",
    category: "celebrations",
    date: "April 2025",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/pic3.JPG?raw=true",
    title: "Mosque Architecture",
    description: "Beautiful Islamic architectural details of our prayer hall",
    category: "architecture",
    date: "February 2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/pic4.JPG?raw=true",
    title: "Youth Education Program",
    description: "Young Muslims learning Arabic and Islamic studies",
    category: "community",
    date: "January 2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/pic5.JPG?raw=true",
    title: "Iftar Gathering",
    description: "Community coming together to break fast during Ramadan",
    category: "events",
    date: "March 2024",
  },
  {
    src: "https://github.com/Mazen-mo-10/imgs/blob/main/pic6.jpeg?raw=true",
    title: "Friday Congregation",
    description: "Weekly Jumu'ah prayers with the community",
    category: "prayers",
    date: "Every Friday",
  },
];

export default Gallery;
