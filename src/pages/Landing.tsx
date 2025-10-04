import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { useNavigate } from "react-router-dom";
import forestPainting from "@/assets/forest-painting.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 border-b border-border/50 bg-card/30 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo size="sm" />
          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => navigate("/auth")} className="text-foreground">
              Sign In
            </Button>
            <Button onClick={() => navigate("/auth")} className="gradient-gold border-0">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Painting Background */}
      <main>
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${forestPainting})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-32 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <Logo size="lg" className="justify-center mb-6 animate-fade-in" />
              <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-foreground animate-fade-in [animation-delay:100ms]">
                Work Alone, Together
              </h1>
              <p className="text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in [animation-delay:200ms]">
                Like the Pando forest—many stems, one root. Grow in your own space, while staying connected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in [animation-delay:300ms]">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/auth")}
                  className="gradient-gold border-0 text-base px-8 shadow-[var(--shadow-soft)]"
                >
                  Begin Your Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Warm & Human */}
        <section className="bg-card py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                A Space to Grow
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Pando is the name of the world's largest tree. It may look like a forest, but underneath, 
                every stem is connected to a single root system. That's what this space is about: growing 
                in your own way, at your own pace, but never truly alone.
              </p>
            </div>
          </div>
        </section>

        {/* Features - Simple & Warm */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground">Your Own Rhythm</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Log your sessions, build your streaks, and watch your progress unfold. 
                    No pressure, just presence.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground">Connected Roots</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Join study groups where you can share your journey, stay accountable, 
                    and grow alongside others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                Ready to Begin?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join a community of learners who work alone, together.
              </p>
              <Button 
                size="lg" 
                onClick={() => navigate("/auth")}
                className="gradient-gold border-0 text-base px-8 shadow-[var(--shadow-soft)]"
              >
                Start Today
              </Button>
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
