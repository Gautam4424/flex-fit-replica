
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, LogIn } from "lucide-react";

const Login = () => (
  <div className="flex min-h-screen">
    {/* Left Branding/Visual Section - hides on mobile */}
    <div className="hidden lg:flex flex-col justify-between bg-background border-r border-border w-1/2 p-12 min-h-screen relative">
      <div>
        <a href="/" className="block mb-10">
          <span className="font-black text-3xl uppercase tracking-widest text-primary">
            GYMSHARK
          </span>
        </a>
        <h2 className="text-3xl font-bold mb-3">Sign in to your account</h2>
        <p className="text-muted-foreground text-base">
          Welcome back! Log in to continue your fitness journey with Gymshark.
        </p>
      </div>
      <footer className="text-xs text-muted-foreground absolute bottom-6 left-12">
        By signing in, you agree to our <a href="#" className="underline hover:text-primary">Terms & Conditions</a> and <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
      </footer>
    </div>

    {/* Login form section */}
    <div className="flex-1 flex items-center justify-center bg-card">
      <div className="w-full max-w-md px-8 md:px-12 py-14 rounded-none md:rounded-lg shadow-lg bg-card">
        <h3 className="font-bold text-2xl mb-6 lg:hidden text-center">Sign in to your account</h3>
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Email address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <Input
                id="email"
                type="email"
                placeholder="you@email.com"
                required
                className="pl-10"
                autoFocus
              />
            </div>
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <Input
                id="password"
                type="password"
                placeholder="********"
                required
                className="pl-10"
              />
            </div>
            <div className="flex justify-end mt-1 text-xs">
              <a href="#" className="text-primary hover:underline">Forgot password?</a>
            </div>
          </div>
          {/* Submit */}
          <Button type="submit" className="w-full mt-2 font-bold uppercase tracking-wider py-3">
            <LogIn className="mr-2" size={18}/> Log In
          </Button>
        </form>
        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <span className="flex-1 h-px bg-border" />
          <span className="text-muted-foreground text-xs">or continue with</span>
          <span className="flex-1 h-px bg-border" />
        </div>
        {/* Socials */}
        <div className="flex gap-2 mb-6">
          <button
            type="button"
            className="flex-1 inline-flex items-center justify-center py-2 rounded border bg-background border-border hover:bg-muted transition-colors"
            disabled
          >
            <img
              className="w-5 h-5 mr-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
            />
            Google
          </button>
          <button
            type="button"
            className="flex-1 inline-flex items-center justify-center py-2 rounded border bg-background border-border hover:bg-muted transition-colors"
            disabled
          >
            <img
              className="w-5 h-5 mr-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              alt="Facebook"
            />
            Facebook
          </button>
        </div>
        {/* Don't have account */}
        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline font-semibold">
            Sign Up
          </Link>
        </div>
        <div className="mt-4 text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Gymshark. All rights reserved.
        </div>
      </div>
    </div>
  </div>
);

export default Login;
