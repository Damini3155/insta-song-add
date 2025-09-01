import { Play, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TrendingTab = () => {
  // Mock trending songs data
  const trendingSongs = [
    {
      id: 1,
      title: "As It Was",
      artist: "Harry Styles",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      plays: "2.1M",
      trend: "+15%"
    },
    {
      id: 2,
      title: "Heat Waves",
      artist: "Glass Animals",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
      plays: "1.8M",
      trend: "+8%"
    },
    {
      id: 3,
      title: "Stay",
      artist: "The Kid LAROI & Justin Bieber",
      cover: "https://images.unsplash.com/photo-1485278537138-4e8911a13c05?w=300&h=300&fit=crop",
      plays: "1.5M",
      trend: "+12%"
    },
    {
      id: 4,
      title: "Bad Habit",
      artist: "Steve Lacy",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      plays: "1.3M",
      trend: "+20%"
    },
    {
      id: 5,
      title: "Anti-Hero",
      artist: "Taylor Swift",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
      plays: "1.2M",
      trend: "+25%"
    },
    {
      id: 6,
      title: "Unholy",
      artist: "Sam Smith ft. Kim Petras",
      cover: "https://images.unsplash.com/photo-1485278537138-4e8911a13c05?w=300&h=300&fit=crop",
      plays: "1.1M",
      trend: "+18%"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2">
          <div className="w-8 h-8 instagram-gradient rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Trending Now</h1>
        </div>
        <p className="text-muted-foreground">Popular songs from Instagram Reels & Spotify</p>
      </div>

      {/* Trending Stats */}
      <Card className="instagram-card">
        <div className="text-center space-y-2">
          <h3 className="font-semibold text-foreground">This Week's Top Growth</h3>
          <div className="flex justify-center items-center space-x-1">
            <span className="text-2xl font-bold instagram-gradient bg-clip-text text-transparent">+18.5%</span>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-sm text-muted-foreground">Average plays increase</p>
        </div>
      </Card>

      {/* Trending Songs Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Top Trending Songs</h2>
        <div className="grid grid-cols-1 gap-3">
          {trendingSongs.map((song, index) => (
            <Card key={song.id} className="song-card p-4">
              <div className="flex items-center space-x-4">
                {/* Rank */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <span className="text-sm font-bold text-primary">#{index + 1}</span>
                </div>
                
                {/* Cover */}
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-14 h-14 rounded-xl object-cover shadow-sm"
                />
                
                {/* Song Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{song.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-muted-foreground">{song.plays} plays</span>
                    <span className="text-xs text-green-500 font-medium">{song.trend}</span>
                  </div>
                </div>
                
                {/* Action Button */}
                <Button size="sm" variant="outline" className="rounded-2xl shrink-0">
                  <Play className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* View More */}
      <div className="text-center pt-4">
        <Button variant="outline" className="rounded-2xl border-border hover:bg-secondary">
          Load More Trending Songs
        </Button>
      </div>
    </div>
  );
};

export default TrendingTab;