import { useState } from "react";
import { Camera, ImagePlus, Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HomeTab = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Mock AI music suggestions
  const musicSuggestions = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      preview: "#"
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
      preview: "#"
    },
    {
      id: 3,
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      preview: "#"
    }
  ];

  const handlePhotoUpload = () => {
    // Mock photo upload
    setUploadedPhoto("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop");
    setShowSuggestions(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-foreground">Discover Music</h1>
        <p className="text-muted-foreground">Upload a photo to get AI-powered song recommendations</p>
      </div>

      {/* Photo Upload Section */}
      <div className="space-y-4">
        {!uploadedPhoto ? (
          <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-instagram-gradient-subtle rounded-2xl flex items-center justify-center">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Upload Your Photo</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Take a photo or select from gallery to discover matching music
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={handlePhotoUpload} className="instagram-button hover-scale transform transition-all duration-200 active:scale-95">
                <Camera className="w-4 h-4 mr-2" />
                Take Photo
              </Button>
              <Button
                variant="outline"
                onClick={handlePhotoUpload}
                className="rounded-2xl border-border hover:bg-secondary hover-scale transform transition-all duration-200 active:scale-95"
              >
                <ImagePlus className="w-4 h-4 mr-2" />
                From Gallery
              </Button>
            </div>
          </div>
        ) : (
          <Card className="instagram-card p-0 overflow-hidden">
            <img
              src={uploadedPhoto}
              alt="Uploaded photo"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-muted-foreground">Photo uploaded successfully!</p>
            </div>
          </Card>
        )}
      </div>

      {/* AI Music Suggestions */}
      {showSuggestions && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">AI Music Suggestions</h2>
          <div className="space-y-3">
            {musicSuggestions.map((song) => (
              <Card key={song.id} className="song-card p-4 hover:shadow-md transition-all duration-300 hover-scale">
                <div className="flex items-center space-x-4">
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="w-12 h-12 rounded-lg object-cover hover:scale-110 transition-all duration-200"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{song.title}</h3>
                    <p className="text-sm text-muted-foreground">{song.artist}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" className="rounded-2xl hover-scale transform transition-all duration-200 active:scale-90">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="instagram-button text-xs px-3 hover-scale transform transition-all duration-200 active:scale-90">
                      <Plus className="w-3 h-3 mr-1" />
                      Add to Story
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeTab;