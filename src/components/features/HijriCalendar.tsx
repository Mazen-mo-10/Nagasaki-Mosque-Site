/**
 * Hijri Calendar Component
 * Displays current Islamic date with beautiful styling
 */

import { Calendar, Moon, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getIslamicInfo } from '@/utils/hijriDate';

const HijriCalendar = () => {
  const { hijri, isRamadan, isHajjSeason, isSacredMonth, specialNote } = getIslamicInfo();

  return (
    <Card className="hover-lift bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <span>Islamic Calendar</span>
          {(isRamadan || isHajjSeason) && (
            <div className="animate-pulse-slow">
              <Star className="h-5 w-5 text-secondary" />
            </div>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Hijri Date Display */}
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-primary animate-text-glow">
            {hijri.day} {hijri.month} {hijri.year} AH
          </div>
          <div className="text-sm text-muted-foreground">
            {hijri.weekday}
          </div>
          <div className="text-xs text-muted-foreground">
            {hijri.gregorianDate}
          </div>
        </div>

        {/* Special Month Indicator */}
        {specialNote && (
          <div className="text-center">
            <Badge 
              variant="secondary" 
              className="animate-glow text-secondary-foreground"
            >
              <Moon className="h-3 w-3 mr-1" />
              {specialNote}
            </Badge>
          </div>
        )}

        {/* Sacred Month Indicator */}
        {isSacredMonth && (
          <div className="text-center">
            <div className="text-xs text-primary font-medium">
              ✦ Sacred Month ✦
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default HijriCalendar;