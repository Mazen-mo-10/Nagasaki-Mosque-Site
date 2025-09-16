/**
 * Prayer Times Modal Component
 * Displays the 5 daily prayer times in an elegant modal
 */

import { Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { getPrayerTimes, getNextPrayer } from '@/utils/prayerTimes';

interface PrayerTimesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrayerTimesModal = ({ isOpen, onClose }: PrayerTimesModalProps) => {
  const prayerTimes = getPrayerTimes();
  const nextPrayer = getNextPrayer();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-gradient-islamic text-primary-foreground">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-xl font-bold text-center">
            <Clock className="h-6 w-6 text-secondary" />
            <span>Prayer Times</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Date */}
          <div className="text-center">
            <p className="text-primary-foreground/80 text-sm">{prayerTimes.date}</p>
            <p className="text-secondary font-semibold">Nagasaki, Japan</p>
          </div>

          {/* Next Prayer Highlight */}
          {nextPrayer && (
            <div className="bg-secondary/20 rounded-lg p-4 border border-secondary/30">
              <h3 className="text-secondary font-semibold text-sm mb-2">Next Prayer:</h3>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-lg">{nextPrayer.name}</span>
                  <span className="block text-secondary text-sm">{nextPrayer.arabic}</span>
                </div>
                <span className="text-2xl font-bold text-secondary animate-glow">
                  {nextPrayer.time}
                </span>
              </div>
            </div>
          )}

          {/* All Prayer Times */}
          <div className="space-y-3">
            <h3 className="font-semibold text-secondary border-b border-secondary/30 pb-2">
              Today's Prayer Times
            </h3>
            
            {prayerTimes.prayers.map((prayer, index) => (
              <div
                key={prayer.name}
                className={`flex justify-between items-center p-3 rounded-lg transition-smooth ${
                  nextPrayer?.name === prayer.name
                    ? 'bg-secondary/10 border border-secondary/30'
                    : 'hover:bg-primary-foreground/10'
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{prayer.name}</span>
                  <span className="text-xs text-primary-foreground/70">{prayer.arabic}</span>
                </div>
                <span className="font-bold text-lg">{prayer.time}</span>
              </div>
            ))}
          </div>

          {/* Islamic Quote */}
          <div className="text-center p-4 bg-primary-foreground/10 rounded-lg">
            <p className="text-sm text-primary-foreground/80 italic">
              "And establish prayer at the two ends of the day and at the approach of the night."
            </p>
            <p className="text-xs text-secondary mt-1">- Quran 11:114</p>
          </div>

          {/* Close Button */}
          <Button
            onClick={onClose}
            variant="secondary"
            className="w-full font-semibold"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrayerTimesModal;