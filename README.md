# Jewelry Research Hub

A comprehensive market analysis and brand directory for the Indian jewelry industry, featuring multiple research projects and interactive databases.

## 🚀 Live Demo

Visit the deployed application: [Jewelry Research Hub](https://your-vercel-url.vercel.app)

## 📋 Project Overview

This research hub consolidates multiple studies and analyses of the Indian jewelry market, providing:

- **ChatGPT Research**: Table-based analysis of major Indian jewelry brands
- **GenSpark Analysis**: Interactive directory with modern dark theme
- **Perplexity Research 2**: Advanced filterable database with search functionality
- **Perplexity Research 1**: Comprehensive brand categorization system

## 🏗️ Project Structure

```
/Research/
├── index.html                          # Main navigation hub
├── pages/                              # Research pages directory
│   ├── ChatGpt.html                    # ChatGPT research data
│   ├── GenSpark.html                   # GenSpark analysis
│   ├── PerplexityResearch2.html        # Interactive web app
│   ├── PerplexityResearch3.html        # Comprehensive database
│   ├── app.js                          # JavaScript functionality
│   ├── style.css                      # Shared styling
│   └── *.csv                          # Data files
├── package.json                        # Project configuration
├── vite.config.js                      # Vite configuration
├── vercel.json                         # Vercel deployment config
├── .gitignore                          # Git ignore rules
└── README.md                           # This file
```

## 🚀 Development & Deployment

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   This will start Vite dev server at `http://localhost:3000`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

### Deployment to Vercel

#### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from the Research directory**:
   ```bash
   cd /Users/mehulkalathiya/Diorin/Research
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - Project name: `indian-jewelry-research-hub`
   - Directory: `./` (current directory)
   - Override settings? `N`

#### Method 2: GitHub + Vercel Dashboard

1. **Create a GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Jewelry Research Hub with Vite"
   git branch -M main
   git remote add origin https://github.com/yourusername/indian-jewelry-research-hub.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Vite and use the correct build settings
   - Deploy with default settings

## 🛠️ Technology Stack

- **Build Tool**: Vite 5.0+ for fast development and optimized builds
- **Frontend**: Vanilla HTML, CSS, and JavaScript
- **Styling**: CSS Custom Properties with dark/light theme support
- **Deployment**: Vercel with automatic Vite detection
- **Package Manager**: npm

## 📊 Features

### Main Hub (index.html)
- **Modern Design**: Dark theme with gradient accents
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Project Cards**: Easy navigation to different research projects
- **Statistics Display**: Overview of research scope

### Research Projects
1. **ChatGPT Research**: Static HTML table with brand information
2. **GenSpark Analysis**: Styled directory with comprehensive brand data
3. **Perplexity Research 2**: Interactive app with search and filtering
4. **Perplexity Research 1**: Categorized brand database

## 🎨 Design Features

- **Dark Theme**: Professional appearance with blue/orange accents
- **Responsive Grid**: Adapts to different screen sizes
- **Hover Effects**: Interactive card animations
- **Modern Typography**: Inter font family for readability
- **Gradient Elements**: Visual appeal with CSS gradients

## 📱 Mobile Optimization

- Responsive design that works on all devices
- Touch-friendly interface
- Optimized loading for mobile networks
- Proper viewport configuration

## 🔧 Configuration Files

### vercel.json
- Static site deployment configuration
- Proper routing for all HTML files
- Cache optimization settings

### package.json
- Project metadata and scripts
- Development server commands
- Repository information

## 🚀 Adding New Research Projects

To add a new research project:

1. **Create your HTML file or folder** in the Research directory
2. **Update index.html** to add a new card:
   ```html
   <div class="research-card">
       <div class="card-header">
           <div class="card-icon" style="background: linear-gradient(135deg, #color1, #color2);">
               🔬
           </div>
           <h3 class="card-title">Your Research Title</h3>
       </div>
       <p class="card-description">
           Description of your research project.
       </p>
       <div class="card-meta">
           <span>Format: Your Format</span>
           <span>Focus: Your Focus</span>
       </div>
       <div class="card-actions">
           <a href="your-file.html" class="btn btn-primary" target="_blank">
               🔍 View Research
           </a>
       </div>
   </div>
   ```
3. **Update the statistics** in the header if needed
4. **Redeploy** to Vercel

## 📄 License

MIT License - feel free to use this project as a template for your own research hubs.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ for jewelry market research**