import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface TimerOption {
  work: number;
  break: number;
  label: string;
}

const timerOptions: TimerOption[] = [
  { work: 25, break: 5, label: "Classic Pomodoro" },
  { work: 45, break: 15, label: "Extended Pomodoro" },
];

export const PomodoroTimer = () => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)]">
      <h2 className="text-xl font-semibold mb-6">PandoDoro</h2>
      <div className="space-y-4">
        {timerOptions.map((option, index) => (
          <button
            key={index}
            className="w-full bg-secondary hover:bg-secondary/80 rounded-xl p-6 text-center transition-colors"
          >
            <div className="text-4xl font-bold mb-1">
              {option.work}:{option.break}
            </div>
            <div className="text-sm text-muted-foreground">{option.label}</div>
          </button>
        ))}
        <Button
          variant="outline"
          className="w-full h-24 text-base border-dashed"
        >
          <Plus className="mr-2 h-5 w-5" />
          New Custom PomoDoro
        </Button>
      </div>
    </div>
  );
};
