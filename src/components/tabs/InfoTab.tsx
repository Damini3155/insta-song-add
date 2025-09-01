import { useState } from "react";
import { Camera, Music, Sparkles, Heart, Shield, Mail, ChevronDown, ChevronRight, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const InfoTab = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 instagram-gradient rounded-2xl hover-scale transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center space-x-1">
            <Camera className="w-8 h-8 text-white" />
            <Music className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">MusicLens</h1>
          <p className="text-muted-foreground">Discover music through photos</p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.8</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>10K+ users</span>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works - Expandable */}
      <Card className="instagram-card space-y-4 hover:shadow-md transition-all duration-300">
        <button
          onClick={() => toggleSection('howItWorks')}
          className="w-full flex items-center justify-between text-left"
        >
          <h2 className="text-xl font-bold text-foreground flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            How It Works
          </h2>
          {expandedSection === 'howItWorks' ? 
            <ChevronDown className="w-5 h-5 text-muted-foreground" /> : 
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          }
        </button>
        
        {expandedSection === 'howItWorks' && (
          <div className="space-y-4 animate-fade-in">
            {[
              {
                step: "1",
                title: "Upload Your Photo",
                description: "Take a new photo or select one from your gallery",
                icon: Camera
              },
              {
                step: "2", 
                title: "AI Analysis",
                description: "Our AI analyzes the mood, colors, and vibes of your image",
                icon: Zap
              },
              {
                step: "3",
                title: "Get Recommendations", 
                description: "Receive personalized song suggestions that match your photo's vibe",
                icon: Music
              },
              {
                step: "4",
                title: "Share to Instagram",
                description: "Add your favorite tracks to Instagram Stories with one tap",
                icon: Heart
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-muted/20 transition-all duration-200 hover-scale">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-primary">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <item.icon className="w-5 h-5 text-primary/60" />
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Features - Interactive Grid */}
      <Card className="instagram-card space-y-4 hover:shadow-md transition-all duration-300">
        <h2 className="text-xl font-bold text-foreground">Features</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Sparkles, title: "AI-Powered", desc: "Smart music matching", color: "bg-blue-500" },
            { icon: Heart, title: "Save Favorites", desc: "Build your library", color: "bg-red-500" },
            { icon: Music, title: "Trending", desc: "Discover popular songs", color: "bg-green-500" },
            { icon: Shield, title: "Private", desc: "Your photos stay safe", color: "bg-purple-500" }
          ].map((feature, index) => (
            <div key={index} className="text-center space-y-2 p-4 rounded-xl hover:bg-muted/10 transition-all duration-200 hover-scale cursor-pointer group">
              <div className={`w-12 h-12 mx-auto ${feature.color}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-200`}>
                <feature.icon className={`w-6 h-6 ${feature.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* About - Expandable */}
      <Card className="instagram-card space-y-4 hover:shadow-md transition-all duration-300">
        <button
          onClick={() => toggleSection('about')}
          className="w-full flex items-center justify-between text-left"
        >
          <h2 className="text-xl font-bold text-foreground">About MusicLens</h2>
          {expandedSection === 'about' ? 
            <ChevronDown className="w-5 h-5 text-muted-foreground" /> : 
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          }
        </button>
        
        {expandedSection === 'about' && (
          <div className="animate-fade-in space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              MusicLens uses advanced AI to understand the emotional and visual context of your photos, 
              then suggests music that perfectly matches the mood and atmosphere. Whether it's a sunset, 
              a party, or a quiet moment, we'll help you find the perfect soundtrack.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-xs text-muted-foreground">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-xs text-muted-foreground">Photos Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-xs text-muted-foreground">Accuracy</div>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Contact - Interactive */}
      <Card className="instagram-card space-y-4 hover:shadow-md transition-all duration-300">
        <h2 className="text-xl font-bold text-foreground">Get in Touch</h2>
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-start rounded-2xl border-border hover:bg-secondary hover-scale transform transition-all duration-200 active:scale-95"
          >
            <Mail className="w-4 h-4 mr-3" />
            Contact Support
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-2xl hover-scale transform transition-all duration-200 active:scale-95"
            >
              FAQ
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-2xl hover-scale transform transition-all duration-200 active:scale-95"
            >
              Privacy
            </Button>
          </div>
          
          <div className="text-center space-y-1 pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground">Version 1.0.0</p>
            <p className="text-xs text-muted-foreground">Made with ❤️ for music lovers</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InfoTab;