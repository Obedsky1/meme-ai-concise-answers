
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import MemeBackground from "../components/MemeBackground";
import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MemeBackground className="opacity-20" />
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md glass-morphism">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Create Account</CardTitle>
            <CardDescription className="text-center">
              Sign up to save your settings and unlock premium features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">Create Account</Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline text-primary">
                Login
              </Link>
            </div>
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Button variant="outline">Google</Button>
              <Button variant="outline">GitHub</Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default Signup;
