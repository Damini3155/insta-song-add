# MusicLens - Discover Music Through Photos 🎵📸

An Instagram-inspired mobile web app that uses AI to recommend music based on the mood and atmosphere of your photos.

## 📱 Available Versions

This project includes two versions:

### 1. React Version (Original)
- Built with React, TypeScript, and Vite
- Located in `src/` folder
- Uses shadcn-ui components

### 2. HTML/CSS/JS Version (Standalone)
- Simple HTML, Tailwind CSS, and vanilla JavaScript
- Located in `public/` folder
- Includes Node.js backend (`server.js`)
- **Ready to run independently!**

## 🚀 Quick Start (HTML Version)

### Prerequisites
- Node.js 14+ installed
- Modern web browser

### Installation & Setup

1. **Install backend dependencies**
   ```bash
   # Copy the package.json file
   cp backend-package.json package.json
   
   # Install dependencies
   npm install
   ```

2. **Start the server**
   ```bash
   npm start
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

### For Development
```bash
npm run dev  # Uses nodemon for auto-reload
```

## 🎨 Features

- 📸 **Photo Upload**: Take photos or select from gallery
- 🤖 **AI Analysis**: Smart music matching based on photo mood
- 🎵 **Music Recommendations**: Personalized song suggestions  
- 📈 **Trending Music**: Discover popular songs
- 💾 **Personal Library**: Save and organize favorite matches
- 📱 **Mobile-First**: Instagram-inspired responsive design
- 🔐 **Authentication**: Login/signup with social options

## 🛠 Tech Stack (HTML Version)

### Frontend
- **HTML5** - Semantic structure
- **Tailwind CSS** - Utility-first styling with Instagram theme
- **Vanilla JavaScript** - Interactive functionality
- **Lucide Icons** - Beautiful SVG icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure (HTML Version)

```
musiclens-app/
├── public/
│   ├── index.html          # Main HTML file
│   └── script.js           # Frontend JavaScript
├── uploads/                # Photo upload directory (created automatically)
├── server.js              # Express server
├── backend-package.json   # Backend dependencies
└── README.md             # This file
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration

### Photos & Music
- `POST /api/upload` - Upload photo for AI analysis
- `GET /api/recommendations/:photoId` - Get music recommendations
- `GET /api/trending` - Get trending songs

### User Library
- `POST /api/user/save-song` - Save song to library
- `GET /api/user/saved-songs` - Get user's saved songs

## 🎯 App Walkthrough

### 1. **Login/Signup Page**
- Instagram-style authentication interface
- Toggle between login and signup modes
- Social login options (Google, Apple)
- Form validation and smooth transitions

### 2. **Home Tab** 
- Photo upload with camera/gallery options
- AI music recommendation display
- Song cards with play and "Add to Story" buttons
- Smooth photo upload and suggestion animations

### 3. **Trending Tab**
- Popular songs with play counts and growth indicators
- Ranked list format (#1, #2, #3...)
- Real-time trending statistics

### 4. **Profile Tab**
- User profile with avatar and stats
- Personal music library with photo matches
- Settings and preferences
- Logout functionality

### 5. **Info Tab**
- App information and feature explanations
- Interactive expandable sections
- Contact and support options
- Usage statistics

## 🎨 Design System

The app uses a custom Instagram-inspired design:

- **Colors**: Pink-orange-purple gradient theme
- **Typography**: Clean, minimal fonts
- **Components**: Rounded corners, subtle shadows
- **Animations**: Hover effects, smooth transitions
- **Icons**: Lucide icon library

## 🚀 Deployment Options

### Local Development
```bash
npm start  # Production mode
npm run dev  # Development with auto-reload
```

### Cloud Platforms
- **Heroku**: Ready to deploy with Procfile
- **Vercel**: Node.js support
- **DigitalOcean**: VPS deployment
- **Railway**: Simple Node.js deployment
- **Render**: Free tier available

## 🔧 Customization

### Adding Real AI Analysis
1. Replace mock analysis in `server.js`
2. Integrate image analysis library (TensorFlow.js, OpenCV)
3. Add mood detection algorithms
4. Connect to music APIs (Spotify, Apple Music)

### Database Integration
- Add MongoDB for user data and song libraries
- Implement user sessions with JWT tokens
- Store photo analysis results

### Social Features
- Instagram API integration for Stories
- User following and sharing
- Community playlists

## 📱 React Version (Original)

To run the original React version:

```bash
# Install React dependencies
npm i

# Start React development server
npm run dev
```

Visit the [Lovable Project](https://lovable.dev/projects/73757a54-6d30-46ef-9d91-476ad95b2dd0) for more React development options.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both versions
5. Submit a pull request

## 📄 License

MIT License - feel free to use and modify!

## 💬 Support

For questions or issues:
- Create a GitHub issue
- Check the FAQ in the app
- Contact through the Info tab

---

Made with ❤️ for music lovers everywhere! 🎵✨
