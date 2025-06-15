
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => (
  <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
    <div className="w-full max-w-md p-8 rounded-lg bg-card shadow">
      <h2 className="text-2xl font-black mb-6 text-center uppercase">Sign In</h2>
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
          Log In
        </Button>
      </form>
      <div className="text-center text-sm text-muted-foreground mt-5">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="text-primary hover:underline font-semibold">Sign Up</Link>
      </div>
    </div>
  </div>
);

export default Login;
