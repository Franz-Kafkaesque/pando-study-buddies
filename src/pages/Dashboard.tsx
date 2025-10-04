import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { StreakTracker } from "@/components/StreakTracker";
import { PomodoroTimer } from "@/components/PomodoroTimer";
import { TaskManager } from "@/components/TaskManager";

// Mock data for streak
const generateStreakData = () => {
  return Array.from({ length: 365 }, () => Math.random() > 0.5);
};

const Dashboard = () => {
  const streakData = generateStreakData();
  const currentStreak = 20;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <header className="h-14 border-b border-border bg-card/50 backdrop-blur-sm flex items-center px-4">
            <SidebarTrigger />
          </header>
          <div className="p-8 gradient-warm min-h-[calc(100vh-3.5rem)]">
            <div className="max-w-7xl mx-auto space-y-6">
              <StreakTracker currentStreak={currentStreak} streakData={streakData} />
              <div className="grid md:grid-cols-2 gap-6">
                <PomodoroTimer />
                <TaskManager />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
