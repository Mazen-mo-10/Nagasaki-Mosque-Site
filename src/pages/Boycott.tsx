import React, { useState, useMemo } from "react";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Search,
  Globe,
  ShoppingBag,
  Coffee,
  Utensils,
  Smartphone,
  Shirt,
  Car,
  Heart,
  Info,
  ExternalLink,
  ArrowRight,
  Filter,
  Calendar,
  Users,
  BookOpen,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Boycott = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter companies based on search term and active category
  const filteredCompanies = useMemo(() => {
    return companiesData.filter((company) => {
      const matchesSearch =
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (company.parentCompany &&
          company.parentCompany
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) ||
        company.popularBrands.some((brand) =>
          brand.toLowerCase().includes(searchTerm.toLowerCase())
        );

      let matchesCategory = true;
      if (activeCategory === "direct") {
        matchesCategory = company.supportType === "direct";
      } else if (activeCategory === "parent") {
        matchesCategory = company.supportType === "parent";
      } else if (activeCategory === "japan") {
        matchesCategory = company.japanPresence;
      }

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-900 to-rose-700 text-white py-20 px-4 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 pattern-islamic opacity-10"></div>

        <div className="container mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <AlertTriangle className="h-5 w-5 text-amber-300" />
            <span className="font-medium">Community Awareness</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
            Ethical Consumerism
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Making a difference through our daily choices - A guide to ethical
            alternatives in Japan
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-slide-up">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-rose-900 font-semibold"
              onClick={() =>
                document.getElementById("companies-list").scrollIntoView()
              }
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              View Companies List
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-rose-900"
              onClick={() =>
                document.getElementById("alternatives").scrollIntoView()
              }
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Ethical Alternatives
            </Button>
          </div>
        </div>
      </section>

      {/* Why Boycott Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Ethical Consumerism Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our spending choices have power. By supporting ethical companies,
              we contribute to a more just world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover-lift animate-slide-in-left">
              <CardHeader>
                <div className="bg-rose-100 dark:bg-rose-950/30 p-3 rounded-full w-fit mx-auto">
                  <Heart className="h-8 w-8 text-rose-600 mx-auto" />
                </div>
                <CardTitle>Moral Responsibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  As Muslims, we have a responsibility to avoid supporting
                  oppression and injustice with our wealth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift animate-fade-in">
              <CardHeader>
                <div className="bg-amber-100 dark:bg-amber-950/30 p-3 rounded-full w-fit mx-auto">
                  <Globe className="h-8 w-8 text-amber-600 mx-auto" />
                </div>
                <CardTitle>Economic Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Collective boycotts have historically proven effective in
                  creating economic pressure for change.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift animate-slide-in-right">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-950/30 p-3 rounded-full w-fit mx-auto">
                  <Users className="h-8 w-8 text-green-600 mx-auto" />
                </div>
                <CardTitle>Community Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Supporting local and ethical businesses strengthens our
                  community and promotes fair practices.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="h-5 w-5 mr-2 text-rose-600" />
                Islamic Perspective on Boycott
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The Prophet Muhammad (peace be upon him) said: "Whoever among
                you sees an evil, let him change it with his hand; if he cannot,
                then with his tongue; if he cannot, then with his heart - and
                that is the weakest of faith." (Sahih Muslim). Our financial
                choices are a powerful way to enact change.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Companies List Section */}
      <section id="companies-list" className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Companies to Avoid
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These companies have documented connections to or support for
              Israeli operations.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 animate-fade-in">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search companies or brands..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge
                variant={activeCategory === "all" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveCategory("all")}
              >
                <Filter className="h-3 w-3 mr-1" />
                All Categories
              </Badge>
              <Badge
                variant={activeCategory === "direct" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveCategory("direct")}
              >
                Direct Support
              </Badge>
              <Badge
                variant={activeCategory === "parent" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveCategory("parent")}
              >
                Parent Companies
              </Badge>
              <Badge
                variant={activeCategory === "japan" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveCategory("japan")}
              >
                In Japan
              </Badge>
            </div>
          </div>

          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="animate-fade-in"
          >
            {/* <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">All Companies</TabsTrigger>
              <TabsTrigger value="direct">Direct Support</TabsTrigger>
              <TabsTrigger value="parent">Parent Companies</TabsTrigger>
              <TabsTrigger value="japan">In Japan</TabsTrigger>
            </TabsList> */}

            <TabsContent value="all" className="space-y-6">
              {filteredCompanies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCompanies.map((company, index) => (
                    <CompanyCard key={index} company={company} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No companies found matching your search.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="direct" className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Companies Providing Direct Support
                </h3>
                <p className="text-muted-foreground">
                  These companies provide direct financial, material, or
                  strategic support to Israeli military operations or illegal
                  settlements.
                </p>
              </div>

              {filteredCompanies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCompanies.map((company, index) => (
                    <CompanyCard key={index} company={company} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No direct support companies found.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="parent" className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Parent Companies with Israeli Ties
                </h3>
                <p className="text-muted-foreground">
                  These parent companies own subsidiaries that operate in
                  illegal settlements or have significant investments in Israel.
                </p>
              </div>

              {filteredCompanies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCompanies.map((company, index) => (
                    <CompanyCard key={index} company={company} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No parent companies found.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="japan" className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Companies Widely Available in Japan
                </h3>
                <p className="text-muted-foreground">
                  These companies have significant presence in Japan, making it
                  important to be aware of their affiliations.
                </p>
              </div>

              {filteredCompanies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCompanies.map((company, index) => (
                    <CompanyCard key={index} company={company} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No companies with Japan presence found.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Alternatives Section */}
      <section
        id="alternatives"
        className="py-16 px-4 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ethical Alternatives in Japan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover local and ethical alternatives available in Japan that
              align with our values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {alternativesData.map((alternative, index) => (
              <Card key={index} className="hover-lift group animate-fade-in">
                <CardHeader>
                  <div
                    className={`p-3 rounded-full w-fit mb-2 ${alternative.categoryColor}`}
                  >
                    <alternative.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{alternative.category}</CardTitle>
                  <CardDescription>{alternative.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alternative.options.map((option, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-muted rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{option.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {option.description}
                          </p>
                        </div>
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      </div>
                    ))}
                  </div>

                  {alternative.localTips && (
                    <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                      <p className="text-sm text-amber-800 dark:text-amber-300 flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        <span>{alternative.localTips}</span>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800 dark:text-green-300">
                <CheckCircle className="h-5 w-5 mr-2" />
                Supporting Local Japanese Businesses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Japan has many wonderful local businesses that produce
                high-quality products. By choosing local alternatives, we not
                only avoid supporting oppression but also contribute to the
                Japanese economy and foster community relationships.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Action Steps Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-800 to-rose-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Take Action Today
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in">
            <div className="space-y-4">
              <div className="bg-white/20 p-4 rounded-full w-fit mx-auto">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold">Educate Yourself</h3>
              <p className="text-white/90">
                Learn about companies and their affiliations to make informed
                choices.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/20 p-4 rounded-full w-fit mx-auto">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold">Choose Alternatives</h3>
              <p className="text-white/90">
                Select ethical alternatives for your daily needs and purchases.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/20 p-4 rounded-full w-fit mx-auto">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold">Spread Awareness</h3>
              <p className="text-white/90">
                Share this knowledge with family, friends, and community
                members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Additional Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Community Initiatives</CardTitle>
                <CardDescription>
                  Local programs and activities in Nagasaki
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Users className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Ethical Consumer Workshop</p>
                      <p className="text-sm text-muted-foreground">
                        Every first Saturday of the month at Nagasaki Mosque
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Local Market Tours</p>
                      <p className="text-sm text-muted-foreground">
                        Guided tours to discover ethical Japanese brands
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Educational Seminars</p>
                      <p className="text-sm text-muted-foreground">
                        Learn about Islamic principles of ethical consumption
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Community Support</CardTitle>
                <CardDescription>
                  Get involved with local initiatives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">
                        Nagasaki Muslim Community Group
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Weekly meetings at the mosque community center
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">
                        Local Halal Business Directory
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Updated directory available at mosque reception
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Contact for Assistance</p>
                      <p className="text-sm text-muted-foreground">
                        Reach out to mosque administration for guidance
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

// Component for company card
const CompanyCard = ({ company }) => (
  <Card
    className={`hover-lift ${
      company.highProfile ? "border-rose-300 dark:border-rose-700" : ""
    }`}
  >
    <CardHeader className="pb-3">
      <div className="flex justify-between items-start">
        <div>
          <CardTitle className="flex items-center">
            {company.name}
            {company.highProfile && (
              <AlertTriangle className="h-4 w-4 text-rose-500 ml-2" />
            )}
          </CardTitle>
          <CardDescription>
            {company.category} •{" "}
            {company.parentCompany
              ? `Owned by: ${company.parentCompany}`
              : "Independent"}
          </CardDescription>
        </div>
        <XCircle className="h-6 w-6 text-rose-500 flex-shrink-0" />
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-3">{company.reason}</p>
      <div className="flex flex-wrap gap-2">
        {company.popularBrands.map((brand, i) => (
          <Badge
            key={i}
            variant="secondary"
            className="bg-rose-100 text-rose-800 dark:bg-rose-950/30 dark:text-rose-300"
          >
            {brand}
          </Badge>
        ))}
      </div>
      {company.japanPresence && (
        <div className="flex items-center mt-3 text-sm text-amber-600">
          <AlertTriangle className="h-4 w-4 mr-1" />
          <span>Widely available in Japan</span>
        </div>
      )}
    </CardContent>
  </Card>
);

// Sample data with additional properties for filtering
const companiesData = [
  {
    name: "McDonald's",
    category: "Fast Food",
    parentCompany: null,
    reason:
      "Provides free meals to Israeli military forces and has donated millions to Israeli causes.",
    popularBrands: ["McDonald's", "McCafé"],
    highProfile: true,
    japanPresence: true,
    supportType: "direct",
  },
  {
    name: "Starbucks",
    category: "Coffee",
    parentCompany: null,
    reason:
      "The founder has been a strong supporter of Israel and the company has been involved in lawsuits against BDS movements.",
    popularBrands: ["Starbucks", "Teavana"],
    highProfile: true,
    japanPresence: true,
    supportType: "direct",
  },
  {
    name: "PepsiCo",
    category: "Food & Beverage",
    parentCompany: null,
    reason:
      "Operates manufacturing plants in illegal settlements and has business partnerships with Israeli military.",
    popularBrands: ["Pepsi", "Lay's", "Gatorade", "Tropicana"],
    highProfile: false,
    japanPresence: true,
    supportType: "parent",
  },
  {
    name: "HP Inc.",
    category: "Technology",
    parentCompany: null,
    reason:
      "Provides technology infrastructure to Israeli military and prison systems.",
    popularBrands: ["HP", "Hewlett-Packard"],
    highProfile: false,
    japanPresence: true,
    supportType: "direct",
  },
  {
    name: "SodaStream",
    category: "Home Appliances",
    parentCompany: "PepsiCo",
    reason:
      "Originally Israeli company with main factory in an illegal settlement.",
    popularBrands: ["SodaStream"],
    highProfile: true,
    japanPresence: true,
    supportType: "direct",
  },
  {
    name: "Sabra",
    category: "Food",
    parentCompany: "PepsiCo & Strauss Group",
    reason:
      "Partially owned by Israeli company that supports Israeli military forces.",
    popularBrands: ["Sabra Hummus"],
    highProfile: false,
    japanPresence: false,
    supportType: "parent",
  },
  {
    name: "Coca-Cola",
    category: "Beverages",
    parentCompany: null,
    reason:
      "Has invested heavily in Israel and operates factories in illegal settlements.",
    popularBrands: ["Coca-Cola", "Sprite", "Fanta"],
    highProfile: true,
    japanPresence: true,
    supportType: "direct",
  },
  {
    name: "AXA",
    category: "Insurance",
    parentCompany: null,
    reason: "Invests in Israeli banks that finance illegal settlements.",
    popularBrands: ["AXA Insurance"],
    highProfile: false,
    japanPresence: true,
    supportType: "parent",
  },
];

// أضف هذا قبل export default Boycott;

const alternativesData = [
  {
    category: "Coffee Shops",
    description: "Local alternatives to international chains",
    icon: Coffee,
    categoryColor: "bg-amber-500",
    options: [
      {
        name: "Local Japanese Cafés",
        description: "Try kissaten (traditional coffee shops)",
      },
      {
        name: "Doutor Coffee",
        description: "Japanese coffee chain",
      },
      {
        name: "Tully's Coffee",
        description: "Alternative international chain",
      },
    ],
    localTips:
      "Japan has excellent local coffee culture - explore kissaten for authentic experience",
  },
  {
    category: "Fast Food",
    description: "Alternatives to boycott targets",
    icon: Utensils,
    categoryColor: "bg-rose-500",
    options: [
      {
        name: "Mos Burger",
        description: "Japanese fast food chain",
      },
      {
        name: "Freshness Burger",
        description: "Japanese burger restaurant",
      },
      {
        name: "Local Ramen Shops",
        description: "Support small businesses",
      },
    ],
    localTips: "Japanese fast food chains often use higher quality ingredients",
  },
  {
    category: "Technology",
    description: "Ethical tech alternatives",
    icon: Smartphone,
    categoryColor: "bg-blue-500",
    options: [
      {
        name: "Japanese Brands",
        description: "Sony, Panasonic, Toshiba",
      },
      {
        name: "Fairphone",
        description: "Ethical smartphone company",
      },
      {
        name: "Dell/Lenovo",
        description: "Alternative computer brands",
      },
    ],
  },
  {
    category: "Fashion",
    description: "Clothing and accessories",
    icon: Shirt,
    categoryColor: "bg-purple-500",
    options: [
      {
        name: "Uniqlo",
        description: "Japanese clothing brand",
      },
      {
        name: "Muji",
        description: "Japanese minimalist brand",
      },
      {
        name: "Local Artisans",
        description: "Support small designers",
      },
    ],
    localTips:
      "Japan has many excellent local fashion brands with high quality",
  },
  {
    category: "Daily Goods",
    description: "Household and personal items",
    icon: ShoppingBag,
    categoryColor: "bg-green-500",
    options: [
      {
        name: "Japanese Brands",
        description: "Shiseido, Kao, Lion",
      },
      {
        name: "Local Markets",
        description: "Farmers markets and specialty stores",
      },
      {
        name: "Ethical Imports",
        description: "From Muslim-majority countries",
      },
    ],
  },
  {
    category: "Financial Services",
    description: "Banking and investment",
    icon: Globe,
    categoryColor: "bg-indigo-500",
    options: [
      {
        name: "Local Japanese Banks",
        description: "MUFG, SMBC, Mizuho",
      },
      {
        name: "Ethical Investment",
        description: "Islamic finance options",
      },
      {
        name: "Credit Unions",
        description: "Community-focused banking",
      },
    ],
  },
];

export default Boycott;
