import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { useNavigate } from "react-router-dom";
import forestPainting from "@/assets/forest-painting.png";
import { BookOpen, Users } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 bg-background/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Logo size="sm" />
          <Button 
            variant="ghost" 
            onClick={() => navigate("/auth")}
            className="text-foreground/70 hover:text-foreground font-light"
          >
            enter
          </Button>
        </div>
      </header>

      {/* Hero Section with Painting Background */}
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Subtle Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${forestPainting})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 py-32 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-6xl font-serif font-normal tracking-wide text-foreground/90 leading-tight">
                a place to work,<br />
                alone together
              </h1>
              <p className="text-base md:text-lg text-foreground/60 max-w-xl mx-auto leading-relaxed font-light">
                like the pando grove—what looks like many trees is really one organism,<br />
                connected beneath the surface
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-card/50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light text-center">
                we learn best when we feel both independent and connected. this is a space 
                to track your work, share your journey, and find quiet companionship in others 
                doing the same.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-3">
                  <BookOpen className="w-8 h-8 text-primary/60 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-serif font-normal text-foreground/90">your own pace</h3>
                  <p className="text-foreground/60 leading-relaxed font-light">
                    keep a record of your sessions. notice patterns. build something sustainable, 
                    not rushed.
                  </p>
                </div>

                <div className="space-y-3">
                  <Users className="w-8 h-8 text-accent/60 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-serif font-normal text-foreground/90">shared ground</h3>
                  <p className="text-foreground/60 leading-relaxed font-light">
                    join small groups. stay accountable without pressure. witness each other's 
                    progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-xl mx-auto space-y-6">
              <p className="text-lg text-foreground/70 font-light italic">
                ready when you are
              </p>
              <Button 
                onClick={() => navigate("/auth")}
                variant="outline"
                className="border-foreground/20 text-foreground/70 hover:bg-foreground/5 font-light px-8"
              >
                begin
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30">
        <div className="container mx-auto px-6 py-10 text-center">
          <Logo size="sm" className="justify-center mb-3" />
          <p className="text-sm text-muted-foreground/60 font-light">© 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
