# Indian Jewelry Research Hub

A comprehensive market analysis and brand directory for the Indian jewelry industry, featuring multiple research projects and interactive databases.

## 🚀 Live Demo

Visit the deployed application: [Indian Jewelry Research Hub](https://your-vercel-url.vercel.app)

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
├── ChatGpt.html                        # ChatGPT research data
├── GenSpark.html                       # GenSpark analysis
├── Perplexity Research 2/              # Interactive web app
│   ├── index.html
│   ├── app.js
│   └── style.css
├── Preplxicity Research one.zip/       # Categorization system
│   ├── index.html
│   ├── app.js
│   └── style.css
├── package.json                        # Project configuration
├── vercel.json                         # Vercel deployment config
└── README.md                           # This file
```

## 🚀 Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

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

### Method 2: GitHub + Vercel Dashboard

1. **Create a GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Indian Jewelry Research Hub"
   git branch -M main
   git remote add origin https://github.com/yourusername/indian-jewelry-research-hub.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Deploy with default settings

## 🛠️ Local Development

1. **Clone or navigate to the project**:
   ```bash
   cd /Users/mehulkalathiya/Diorin/Research
   ```

2. **Start a local server**:
   ```bash
   # Using Python 3
   python3 -m http.server 3000
   
   # Or using Node.js (if you have it)
   npx serve .
   
   # Or using PHP
   php -S localhost:3000
   ```

3. **Open in browser**:
   ```
   http://localhost:3000
   ```

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