import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  color: "success" | "warning" | "muted";
}

const mockTasks: Task[] = [
  { id: "1", title: "Finish Math Homework", completed: true, color: "success" },
  { id: "2", title: "Submit Final Proposal", completed: false, color: "warning" },
  { id: "3", title: "Lab #5 Comp", completed: false, color: "warning" },
];

export const TaskManager = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)]">
      <h2 className="text-xl font-semibold mb-6">Task Management</h2>
      <div className="space-y-6">
        <div>
          <div className="text-center font-medium mb-4">{today}</div>
          <div className="space-y-2">
            {mockTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                  {task.title}
                </span>
                <div
                  className={`w-3 h-3 rounded-full ${
                    task.color === "success"
                      ? "bg-success"
                      : task.color === "warning"
                      ? "bg-warning"
                      : "bg-muted"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <Button variant="outline" className="w-full">
          View Calendar
        </Button>

        <Button
          variant="outline"
          className="w-full h-24 text-base border-dashed"
        >
          <Plus className="mr-2 h-5 w-5" />
          Create a new task for the day
        </Button>
      </div>
    </div>
  );
};
