import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Plus, Trophy } from "lucide-react";

const mockGroups = [
  { id: "1", name: "CS Study Squad", members: 12, rank: 3 },
  { id: "2", name: "Math Masters", members: 8, rank: 1 },
  { id: "3", name: "Finals Prep Team", members: 15, rank: 5 },
];

const StudyGroups = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <header className="h-14 border-b border-border bg-card/50 backdrop-blur-sm flex items-center px-4">
            <SidebarTrigger />
          </header>
          <div className="p-8 gradient-warm min-h-[calc(100vh-3.5rem)]">
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Study Groups</h1>
                <Button className="gradient-gold border-0">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Group
                </Button>
              </div>

              <div className="grid gap-4">
                {mockGroups.map((group) => (
                  <Card key={group.id} className="p-6 hover:shadow-[var(--shadow-soft)] transition-shadow cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 rounded-full p-3">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{group.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {group.members} members
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Trophy className="h-5 w-5" />
                        <span className="font-medium">Rank #{group.rank}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-8 text-center bg-card/50">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Join More Groups</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with other students and stay accountable together
                </p>
                <Button variant="outline">Browse All Groups</Button>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default StudyGroups;
