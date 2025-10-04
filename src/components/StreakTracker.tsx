interface StreakTrackerProps {
  currentStreak: number;
  streakData: boolean[];
}

export const StreakTracker = ({ currentStreak, streakData }: StreakTrackerProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)]">
      <h2 className="text-xl font-semibold mb-6">Focus Streak</h2>
      <div className="flex items-start gap-6">
        <div className="bg-background rounded-2xl p-6 text-center min-w-[120px]">
          <div className="text-5xl font-bold mb-1">{currentStreak}</div>
          <div className="text-sm text-muted-foreground">Day Streak</div>
        </div>
        <div className="flex-1 grid grid-cols-12 gap-1.5">
          {streakData.map((active, index) => (
            <div
              key={index}
              className={`aspect-square rounded ${
                active ? "bg-primary" : "bg-muted"
              } transition-colors`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
