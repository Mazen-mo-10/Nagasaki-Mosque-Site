import { Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getPrayerTimes, getNextPrayer } from "@/utils/prayerTimes";

interface PrayerTimesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrayerTimesModal = ({ isOpen, onClose }: PrayerTimesModalProps) => {
  const prayerTimes = getPrayerTimes();
  const nextPrayer = getNextPrayer();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] sm:max-w-md mx-auto bg-gradient-islamic text-primary-foreground rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <DialogHeader className="pt-2">
          <DialogTitle className="flex items-center justify-center space-x-2 text-lg sm:text-xl font-bold text-center">
            <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
            <span>Prayer Times</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6 max-h-[70vh] sm:max-h-none overflow-y-auto pb-2">
          {/* Date */}
          <div className="text-center">
            <p className="text-primary-foreground/80 text-xs sm:text-sm">
              {prayerTimes.date}
            </p>
            <p className="text-secondary font-semibold text-sm sm:text-base">
              Nagasaki, Japan
            </p>
          </div>

          {/* Next Prayer Highlight */}
          {nextPrayer && (
            <div className="bg-secondary/20 rounded-lg p-3 sm:p-4 border border-secondary/30">
              <h3 className="text-secondary font-semibold text-xs sm:text-sm mb-2">
                Next Prayer:
              </h3>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-base sm:text-lg">
                    {nextPrayer.name}
                  </span>
                  <span className="block text-secondary text-xs sm:text-sm">
                    {nextPrayer.arabic}
                  </span>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-secondary">
                  {nextPrayer.time}
                </span>
              </div>
            </div>
          )}

          {/* All Prayer Times */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="font-semibold text-secondary border-b border-secondary/30 pb-2 text-sm sm:text-base">
              Today's Prayer Times
            </h3>

            {prayerTimes.prayers.map((prayer, index) => (
              <div
                key={prayer.name}
                className={`flex justify-between items-center p-2 sm:p-3 rounded-lg transition-smooth ${
                  nextPrayer?.name === prayer.name
                    ? "bg-secondary/10 border border-secondary/30"
                    : "hover:bg-primary-foreground/10"
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-medium text-sm sm:text-base">
                    {prayer.name}
                  </span>
                  <span className="text-xs text-primary-foreground/70">
                    {prayer.arabic}
                  </span>
                </div>
                <span className="font-bold text-base sm:text-lg">
                  {prayer.time}
                </span>
              </div>
            ))}
          </div>

          {/* Islamic Quote */}
          <div className="text-center p-3 sm:p-4 bg-primary-foreground/10 rounded-lg">
            <p className="text-xs sm:text-sm text-primary-foreground/80 italic">
              "And establish prayer at the two ends of the day and at the
              approach of the night."
            </p>
            <p className="text-xs text-secondary mt-1">- Quran 11:114</p>
          </div>

          <div className="sticky bottom-0 bg-gradient-islamic pt-2 pb-1">
            <Button
              onClick={onClose}
              variant="secondary"
              className="w-full font-semibold py-2.5"
              size="sm"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrayerTimesModal;
