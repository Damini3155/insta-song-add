import { useState } from "react";
import { Settings, Heart, Music, Camera, LogOut, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ProfileTab = () => {
  const navigate = useNavigate();
  const [user] = useState({
    name: "Alex Johnson",
    username: "@alexj_music",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    followersCount: "1.2K",
    followingCount: "893"
  });

  // Mock saved songs
  const savedSongs = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      matchedPhoto: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
      dateSaved: "2 days ago"
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
      matchedPhoto: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=100&h=100&fit=crop",
      dateSaved: "1 week ago"
    },
    {
      id: 3,
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      cover: "https://images.unsplash.com/photo-1485278537138-4e8911a13c05?w=300&h=300&fit=crop",
      matchedPhoto: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop",
      dateSaved: "2 weeks ago"
    }
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Profile Header */}
      <div className="text-center space-y-4">
        <div className="relative inline-block">
          <div className="instagram-avatar w-24 h-24">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <Button
            size="sm"
            className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full instagram-button p-0"
          >
            <Edit className="w-4 h-4" />
          </Button>
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
          <p className="text-muted-foreground">{user.username}</p>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <div className="text-xl font-bold text-foreground">{savedSongs.length}</div>
            <div className="text-sm text-muted-foreground">Songs Saved</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-foreground">{user.followersCount}</div>
            <div className="text-sm text-muted-foreground">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-foreground">{user.followingCount}</div>
            <div className="text-sm text-muted-foreground">Following</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <Button className="flex-1 instagram-button">
          <Heart className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
        <Button variant="outline" className="rounded-2xl border-border hover:bg-secondary">
          <Settings className="w-4 h-4" />
        </Button>
      </div>

      {/* Saved Songs */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground flex items-center">
          <Music className="w-5 h-5 mr-2" />
          Your Music Library
        </h2>
        
        {savedSongs.length === 0 ? (
          <Card className="instagram-card text-center py-8">
            <Music className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-semibold text-foreground mb-2">No saved songs yet</h3>
            <p className="text-sm text-muted-foreground">
              Upload photos to discover and save your favorite music matches!
            </p>
          </Card>
        ) : (
          <div className="space-y-3">
            {savedSongs.map((song) => (
              <Card key={song.id} className="song-card p-4">
                <div className="flex items-center space-x-4">
                  {/* Song Cover */}
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  
                  {/* Song Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{song.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                    <p className="text-xs text-muted-foreground">{song.dateSaved}</p>
                  </div>
                  
                  {/* Matched Photo */}
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <img
                        src={song.matchedPhoto}
                        alt="Matched photo"
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <Camera className="absolute -top-1 -right-1 w-4 h-4 text-primary bg-background rounded-full p-0.5" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Settings */}
      <Card className="instagram-card space-y-4">
        <h3 className="font-semibold text-foreground">Settings</h3>
        <div className="space-y-3">
          <Button
            variant="ghost"
            className="w-full justify-start text-left rounded-2xl hover:bg-secondary"
          >
            <Settings className="w-4 h-4 mr-3" />
            Preferences
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-left rounded-2xl hover:bg-secondary"
          >
            <Music className="w-4 h-4 mr-3" />
            Music Genres
          </Button>
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-left rounded-2xl hover:bg-destructive/10 text-destructive hover:text-destructive"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProfileTab;