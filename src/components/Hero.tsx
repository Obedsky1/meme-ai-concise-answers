
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
        Straight to the Point
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl mb-8 text-muted-foreground">
        Ultra-concise AI answers. No fluff. Just what you need to know.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link to="/app">Try Now — No Login</Link>
        </Button>
        <Button variant="outline" size="lg">
          <Link to="/signup">Sign Up</Link>
        </Button>
      </div>
      
      <div className="absolute bottom-8 w-full flex flex-col items-center">
        <p className="text-muted-foreground mb-2">Available formats:</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="bg-secondary/50 px-3 py-1 rounded-full text-sm">Key Points</div>
          <div className="bg-secondary/50 px-3 py-1 rounded-full text-sm">One-Word</div>
          <div className="bg-secondary/50 px-3 py-1 rounded-full text-sm">Concise Paragraph</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
