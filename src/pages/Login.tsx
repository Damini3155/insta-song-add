import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Music } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, navigate to main app
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8">
        {/* Logo */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 instagram-gradient rounded-2xl">
            <div className="flex items-center space-x-1">
              <Camera className="w-8 h-8 text-white" />
              <Music className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">MusicLens</h1>
            <p className="text-muted-foreground text-sm">Discover music through photos</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            {!isLogin && (
              <>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="instagram-input animate-fade-in"
                  required
                />
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="instagram-input animate-fade-in"
                  required
                />
              </>
            )}
            <Input
              type="email"
              placeholder={isLogin ? "Email or username" : "Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="instagram-input transition-all duration-300 focus:scale-[1.02]"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="instagram-input transition-all duration-300 focus:scale-[1.02]"
              required
            />
            {!isLogin && (
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="instagram-input animate-fade-in transition-all duration-300 focus:scale-[1.02]"
                required
              />
            )}
          </div>

          <Button type="submit" className="w-full instagram-button hover-scale transform transition-all duration-200 active:scale-95">
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
        </form>

        {/* Social Login */}
        <div className="space-y-3">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground">OR</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full rounded-2xl border-border hover:bg-secondary hover-scale transform transition-all duration-200 active:scale-95"
            onClick={() => navigate("/app")}
          >
            Continue with Google
          </Button>
          
          <Button
            variant="outline"
            className="w-full rounded-2xl border-border hover:bg-secondary hover-scale transform transition-all duration-200 active:scale-95"
            onClick={() => navigate("/app")}
          >
            Continue with Apple
          </Button>
        </div>

        {/* Toggle */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105 story-link"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;