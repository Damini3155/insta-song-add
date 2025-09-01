import { useState } from "react";
import { Home, TrendingUp, User, Info } from "lucide-react";
import HomeTab from "@/components/tabs/HomeTab";
import TrendingTab from "@/components/tabs/TrendingTab";
import ProfileTab from "@/components/tabs/ProfileTab";
import InfoTab from "@/components/tabs/InfoTab";

const MainApp = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home", icon: Home, component: HomeTab },
    { id: "trending", label: "Trending", icon: TrendingUp, component: TrendingTab },
    { id: "profile", label: "Profile", icon: User, component: ProfileTab },
    { id: "info", label: "Info", icon: Info, component: InfoTab },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HomeTab;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <div className="flex-1 overflow-auto pb-20">
        <ActiveComponent />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="flex justify-around items-center py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`bottom-nav-tab hover-scale transform transition-all duration-200 active:scale-90 ${isActive ? 'active' : 'text-muted-foreground'}`}
              >
                <Icon className={`w-6 h-6 transition-all duration-200 ${isActive ? 'instagram-gradient text-transparent bg-clip-text scale-110' : ''}`} />
                <span className={`text-xs mt-1 transition-all duration-200 ${isActive ? 'font-medium' : ''}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainApp;