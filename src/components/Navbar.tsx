
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between glass-morphism">
      <Link to="/" className="text-2xl font-bold text-gradient-primary">
        TL;DR AI
      </Link>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link to="/app">App</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to="/about">About</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
