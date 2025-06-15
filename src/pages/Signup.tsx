
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Signup = () => (
  <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
    <div className="w-full max-w-md p-8 rounded-lg bg-card shadow">
      <h2 className="text-2xl font-black mb-6 text-center uppercase">Sign Up</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
          <Input id="email" type="email" placeholder="you@email.com" required autoFocus />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
          <Input id="password" type="password" placeholder="********" required />
        </div>
        <Button type="submit" className="w-full mt-3 font-bold uppercase">
          Sign Up
        </Button>
      </form>
      <div className="text-center text-sm text-muted-foreground mt-5">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline font-semibold">Sign In</Link>
      </div>
    </div>
  </div>
);

export default Signup;
