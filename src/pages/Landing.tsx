import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { useNavigate } from "react-router-dom";
import pandoHero from "@/assets/pando-hero.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-warm">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo size="sm" />
          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
            <Button onClick={() => navigate("/auth")} className="gradient-gold border-0">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Logo size="lg" className="justify-center mb-8" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
              Work Alone, Together
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              "Pando is the name of the world's largest tree—it may look like a forest, but underneath, every 'tree' is actually a stem connected to a single root system. That's what this app is about: a space where you can grow alone, but never be alone."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                onClick={() => navigate("/auth")}
                className="gradient-gold border-0 text-base px-8"
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate("/auth")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Image */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <img 
              src={pandoHero} 
              alt="Pando Forest" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </section>

        {/* Value Proposition */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Unique Value Proposition
            </h2>
            <p className="text-xl text-muted-foreground">
              Productivity + Social Accountability
            </p>
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-semibold mb-3">Track Your Progress</h3>
                <p className="text-muted-foreground">
                  Log study sessions, build streaks, and visualize your productivity journey with intuitive tools.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-semibold mb-3">Stay Accountable Together</h3>
                <p className="text-muted-foreground">
                  Join study groups, compete with peers, and keep each other motivated through shared goals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>&copy; 2025 Pando. Work Alone, Together.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
