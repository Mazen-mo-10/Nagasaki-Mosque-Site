/**
 * Azkar (Morning & Evening Remembrances) Component
 * Displays daily Islamic remembrances and supplications
 */

import { useState } from 'react';
import { Sunrise, Sunset, BookOpen, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

interface AzkarItem {
  arabic: string;
  transliteration: string;
  translation: string;
  repetitions: number;
  benefits: string;
}

const morningAzkar: AzkarItem[] = [
  {
    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ",
    transliteration: "Asbahna wa asbahal-mulku lillahi, walhamdu lillah",
    translation: "We have reached the morning and at this very time unto Allah belongs all sovereignty, and all praise is for Allah.",
    repetitions: 1,
    benefits: "Protection and blessing for the day"
  },
  {
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "Subhanallahi wa bihamdihi",
    translation: "Glorified is Allah and praised is He.",
    repetitions: 100,
    benefits: "Forgiveness of sins and spiritual purification"
  },
  {
    arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ",
    transliteration: "Astaghfirullaha'l-azeem",
    translation: "I seek forgiveness from Allah, the Magnificent.",
    repetitions: 100,
    benefits: "Seeking Allah's forgiveness and mercy"
  }
];

const eveningAzkar: AzkarItem[] = [
  {
    arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ",
    transliteration: "Amseina wa amsal-mulku lillahi, walhamdu lillah",
    translation: "We have reached the evening and at this very time unto Allah belongs all sovereignty, and all praise is for Allah.",
    repetitions: 1,
    benefits: "Protection and blessing for the night"
  },
  {
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
    transliteration: "La ilaha illa Allah, wahdahu la shareeka lah",
    translation: "There is no god but Allah, alone, without partner.",
    repetitions: 10,
    benefits: "Strengthening faith and earning great rewards"
  },
  {
    arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    transliteration: "Allahumma a'inni ala dhikrika wa shukrika wa husni ibadatik",
    translation: "O Allah, help me to remember You, thank You, and worship You in the best manner.",
    repetitions: 1,
    benefits: "Seeking help for righteous worship"
  }
];

const AzkarSection = () => {
  const [activeTab, setActiveTab] = useState('morning');
  const currentHour = new Date().getHours();
  const isMorning = currentHour >= 6 && currentHour < 12;
  const isEvening = currentHour >= 18 && currentHour < 24;

  const AzkarCard = ({ azkar, icon: Icon, timeType }: { 
    azkar: AzkarItem[], 
    icon: any, 
    timeType: string 
  }) => (
    <div className="space-y-4">
      {azkar.map((item, index) => (
        <Card key={index} className="hover-lift transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">
                  {timeType} Dhikr #{index + 1}
                </span>
              </div>
              <Badge variant="outline" className="text-xs">
                {item.repetitions}x
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Arabic Text */}
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-right text-xl font-arabic text-foreground leading-relaxed">
                {item.arabic}
              </p>
            </div>
            
            {/* Transliteration */}
            <div className="space-y-2">
              <p className="text-sm italic text-muted-foreground">
                <strong>Pronunciation:</strong> {item.transliteration}
              </p>
              
              {/* Translation */}
              <p className="text-sm text-foreground">
                <strong>Meaning:</strong> {item.translation}
              </p>
              
              {/* Benefits */}
              <div className="flex items-start space-x-2">
                <Heart className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-xs text-secondary">
                  <strong>Benefits:</strong> {item.benefits}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <span>Daily Azkar (Remembrances)</span>
          {(isMorning || isEvening) && (
            <Badge variant="secondary" className="animate-pulse-slow">
              {isMorning ? 'Morning Time' : 'Evening Time'}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="morning" className="flex items-center space-x-2">
              <Sunrise className="h-4 w-4" />
              <span>Morning</span>
            </TabsTrigger>
            <TabsTrigger value="evening" className="flex items-center space-x-2">
              <Sunset className="h-4 w-4" />
              <span>Evening</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="morning" className="mt-6">
            <AzkarCard azkar={morningAzkar} icon={Sunrise} timeType="Morning" />
          </TabsContent>
          
          <TabsContent value="evening" className="mt-6">
            <AzkarCard azkar={eveningAzkar} icon={Sunset} timeType="Evening" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AzkarSection;