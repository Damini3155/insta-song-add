// App State
let isLogin = true;
let currentTab = 'home';
let uploadedPhoto = null;

// Mock Data
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
    }
];

// DOM Elements
const loginPage = document.getElementById('loginPage');
const mainApp = document.getElementById('mainApp');
const toggleAuthButton = document.getElementById('toggleAuth');
const authForm = document.getElementById('authForm');
const authSubmit = document.getElementById('authSubmit');
const signupFields = document.getElementById('signupFields');
const confirmPasswordField = document.getElementById('confirmPasswordField');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    populateContent();
    lucide.createIcons();
});

// Event Listeners
function setupEventListeners() {
    // Auth Toggle
    toggleAuthButton.addEventListener('click', toggleAuthMode);
    
    // Form Submit
    authForm.addEventListener('submit', handleAuthSubmit);
}

// Auth Functions
function toggleAuthMode() {
    isLogin = !isLogin;
    
    if (isLogin) {
        toggleAuthButton.textContent = "Don't have an account? Sign up";
        authSubmit.textContent = "Log In";
        signupFields.classList.add('hidden');
        confirmPasswordField.classList.add('hidden');
        document.getElementById('email').placeholder = "Email or username";
    } else {
        toggleAuthButton.textContent = "Already have an account? Log in";
        authSubmit.textContent = "Sign Up";
        signupFields.classList.remove('hidden');
        confirmPasswordField.classList.remove('hidden');
        document.getElementById('email').placeholder = "Email";
    }
}

function handleAuthSubmit(e) {
    e.preventDefault();
    
    if (!isLogin) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
    }
    
    goToApp();
}

function goToApp() {
    loginPage.classList.add('hidden');
    mainApp.classList.remove('hidden');
    switchTab('home');
}

function logout() {
    mainApp.classList.add('hidden');
    loginPage.classList.remove('hidden');
    resetForm();
}

function resetForm() {
    authForm.reset();
    isLogin = true;
    toggleAuthButton.textContent = "Don't have an account? Sign up";
    authSubmit.textContent = "Log In";
    signupFields.classList.add('hidden');
    confirmPasswordField.classList.add('hidden');
    document.getElementById('email').placeholder = "Email or username";
}

// Tab Navigation
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.remove('hidden');
    
    // Update navigation
    document.querySelectorAll('.bottom-nav-tab').forEach(nav => {
        nav.classList.remove('active');
        nav.classList.add('text-muted-foreground');
    });
    
    document.getElementById('nav-' + tabName).classList.add('active');
    document.getElementById('nav-' + tabName).classList.remove('text-muted-foreground');
    
    currentTab = tabName;
}

// Photo Upload
function uploadPhoto() {
    // Simulate photo upload
    uploadedPhoto = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop";
    
    // Hide upload section
    document.getElementById('uploadSection').classList.add('hidden');
    
    // Show photo preview
    const photoPreview = document.getElementById('photoPreview');
    const uploadedImage = document.getElementById('uploadedImage');
    uploadedImage.src = uploadedPhoto;
    photoPreview.classList.remove('hidden');
    photoPreview.classList.add('fade-in');
    
    // Show suggestions after a short delay
    setTimeout(() => {
        document.getElementById('suggestions').classList.remove('hidden');
        document.getElementById('suggestions').classList.add('fade-in');
    }, 1000);
}

// Content Population
function populateContent() {
    populateMusicSuggestions();
    populateTrendingSongs();
    populateSavedSongs();
}

function populateMusicSuggestions() {
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = '';
    
    musicSuggestions.forEach(song => {
        const songElement = document.createElement('div');
        songElement.className = 'song-card instagram-card';
        songElement.innerHTML = `
            <div class="flex items-center space-x-4">
                <img src="${song.cover}" alt="${song.title}" class="w-12 h-12 rounded-lg object-cover">
                <div class="flex-1">
                    <h3 class="font-semibold text-foreground">${song.title}</h3>
                    <p class="text-sm text-muted-foreground">${song.artist}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <button class="p-2 rounded-2xl border border-border bg-white hover:bg-secondary transition-all duration-200 hover:scale-105 active:scale-90">
                        <i data-lucide="play" class="w-4 h-4"></i>
                    </button>
                    <button class="instagram-button text-xs px-3 py-2 text-white">
                        <i data-lucide="plus" class="w-3 h-3 mr-1 inline"></i>
                        Add to Story
                    </button>
                </div>
            </div>
        `;
        suggestionsList.appendChild(songElement);
    });
    
    lucide.createIcons();
}

function populateTrendingSongs() {
    const trendingList = document.getElementById('trendingList');
    trendingList.innerHTML = '';
    
    trendingSongs.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.className = 'song-card instagram-card';
        songElement.innerHTML = `
            <div class="flex items-center space-x-4">
                <div class="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100">
                    <span class="text-sm font-bold text-primary">#${index + 1}</span>
                </div>
                <img src="${song.cover}" alt="${song.title}" class="w-14 h-14 rounded-xl object-cover shadow-sm">
                <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-foreground truncate">${song.title}</h3>
                    <p class="text-sm text-muted-foreground truncate">${song.artist}</p>
                    <div class="flex items-center space-x-2 mt-1">
                        <span class="text-xs text-muted-foreground">${song.plays} plays</span>
                        <span class="text-xs text-green-500 font-medium">${song.trend}</span>
                    </div>
                </div>
                <button class="p-2 rounded-2xl border border-border bg-white hover:bg-secondary transition-all duration-200 hover:scale-105 active:scale-90 shrink-0">
                    <i data-lucide="play" class="w-4 h-4"></i>
                </button>
            </div>
        `;
        trendingList.appendChild(songElement);
    });
    
    lucide.createIcons();
}

function populateSavedSongs() {
    const savedSongsContainer = document.getElementById('savedSongs');
    savedSongsContainer.innerHTML = '';
    
    savedSongs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.className = 'song-card instagram-card';
        songElement.innerHTML = `
            <div class="flex items-center space-x-4">
                <img src="${song.cover}" alt="${song.title}" class="w-12 h-12 rounded-lg object-cover">
                <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-foreground truncate">${song.title}</h3>
                    <p class="text-sm text-muted-foreground truncate">${song.artist}</p>
                    <p class="text-xs text-muted-foreground">${song.dateSaved}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="relative">
                        <img src="${song.matchedPhoto}" alt="Matched photo" class="w-10 h-10 rounded-lg object-cover">
                        <i data-lucide="camera" class="absolute -top-1 -right-1 w-4 h-4 text-primary bg-background rounded-full p-0.5"></i>
                    </div>
                </div>
            </div>
        `;
        savedSongsContainer.appendChild(songElement);
    });
    
    lucide.createIcons();
}

// API Functions (for future backend integration)
async function uploadPhotoToServer(file) {
    try {
        const formData = new FormData();
        formData.append('photo', file);
        
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Upload failed:', error);
        return null;
    }
}

async function getMusicRecommendations(photoId) {
    try {
        const response = await fetch(`/api/recommendations/${photoId}`);
        const recommendations = await response.json();
        return recommendations;
    } catch (error) {
        console.error('Failed to get recommendations:', error);
        return [];
    }
}

async function getTrendingSongs() {
    try {
        const response = await fetch('/api/trending');
        const trending = await response.json();
        return trending;
    } catch (error) {
        console.error('Failed to get trending songs:', error);
        return [];
    }
}