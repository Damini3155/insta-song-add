const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

// Mock data
const mockSongs = [
    {
        id: 1,
        title: "Blinding Lights",
        artist: "The Weeknd",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        genre: "pop",
        mood: "energetic"
    },
    {
        id: 2,
        title: "Levitating",
        artist: "Dua Lipa",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
        genre: "dance",
        mood: "uplifting"
    },
    {
        id: 3,
        title: "Midnight City",
        artist: "M83",
        cover: "https://images.unsplash.com/photo-1485278537138-4e8911a13c05?w=300&h=300&fit=crop",
        genre: "electronic",
        mood: "nostalgic"
    },
    {
        id: 4,
        title: "Bohemian Rhapsody",
        artist: "Queen",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        genre: "rock",
        mood: "dramatic"
    },
    {
        id: 5,
        title: "Clair de Lune",
        artist: "Claude Debussy",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
        genre: "classical",
        mood: "peaceful"
    }
];

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
    }
];

// Routes

// Serve main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Upload photo endpoint
app.post('/api/upload', upload.single('photo'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Simulate AI analysis delay
        setTimeout(() => {
            res.json({
                photoId: req.file.filename,
                message: 'Photo uploaded successfully',
                filename: req.file.filename,
                path: `/uploads/${req.file.filename}`
            });
        }, 1000);
    } catch (error) {
        res.status(500).json({ error: 'Upload failed' });
    }
});

// Get music recommendations based on photo
app.get('/api/recommendations/:photoId', (req, res) => {
    const { photoId } = req.params;
    
    // Simulate AI analysis - in reality, this would analyze the photo
    // and return matching songs based on mood, colors, etc.
    
    // For demo, return random songs from different moods
    const moods = ['energetic', 'peaceful', 'uplifting', 'nostalgic', 'dramatic'];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    
    const recommendations = mockSongs
        .filter(song => song.mood === randomMood || Math.random() > 0.5)
        .slice(0, 3)
        .map(song => ({
            ...song,
            confidence: Math.floor(Math.random() * 20) + 80, // 80-99% confidence
            matchReason: `Matches the ${randomMood} vibe of your photo`
        }));
    
    res.json({
        photoId,
        mood: randomMood,
        recommendations
    });
});

// Get trending songs
app.get('/api/trending', (req, res) => {
    res.json({
        songs: trendingSongs,
        lastUpdated: new Date().toISOString()
    });
});

// User authentication (simplified)
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    
    // Mock authentication
    if (email && password) {
        res.json({
            success: true,
            user: {
                id: 1,
                email: email,
                name: 'Alex Johnson',
                username: '@alexj_music'
            },
            token: 'mock-jwt-token'
        });
    } else {
        res.status(400).json({ error: 'Invalid credentials' });
    }
});

app.post('/api/auth/signup', (req, res) => {
    const { email, password, fullName, username } = req.body;
    
    // Mock user creation
    if (email && password && fullName && username) {
        res.json({
            success: true,
            user: {
                id: Date.now(),
                email: email,
                name: fullName,
                username: username
            },
            token: 'mock-jwt-token'
        });
    } else {
        res.status(400).json({ error: 'Missing required fields' });
    }
});

// Save song to user library
app.post('/api/user/save-song', (req, res) => {
    const { songId, photoId } = req.body;
    
    // Mock saving to user library
    res.json({
        success: true,
        message: 'Song saved to your library'
    });
});

// Get user's saved songs
app.get('/api/user/saved-songs', (req, res) => {
    const savedSongs = [
        {
            id: 1,
            title: "Blinding Lights",
            artist: "The Weeknd",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
            matchedPhoto: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
            dateSaved: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() // 2 days ago
        },
        {
            id: 2,
            title: "Levitating",
            artist: "Dua Lipa",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
            matchedPhoto: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=100&h=100&fit=crop",
            dateSaved: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString() // 1 week ago
        }
    ];
    
    res.json({ songs: savedSongs });
});

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

// Error handling middleware
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: 'File too large' });
        }
    }
    
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🎵 MusicLens server running on http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${path.join(__dirname, 'public')}`);
});

module.exports = app;