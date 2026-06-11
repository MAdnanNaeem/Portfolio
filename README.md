# Adnan Naeem - Portfolio Website

A modern, responsive portfolio website for Adnan Naeem, a professional freelancer on Upwork.

## Features

- Modern, clean design with TailwindCSS
- Fully responsive layout
- Smooth navigation
- Professional sections: Hero, About, Skills, Services, Contact
- Social media integration
- Optimized for performance

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `portfolio` or `adnan-naeem-portfolio`
3. Make it public (recommended for portfolio)
4. Don't initialize with README (we already have one)

### Step 2: Initialize Git and Push

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Portfolio website"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**

### Step 4: Build and Deploy

```bash
# Build the project
npm run build

# Add the dist folder
git add dist

# Commit the build
git commit -m "Add production build"

# Push to GitHub
git push
```

Your portfolio will be available at: `https://YOUR_USERNAME.github.io/portfolio/`

## Customization

### Update Contact Information

Edit `src/App.jsx` to update:
- Email addresses
- Social media links
- Upwork profile URL
- GitHub and LinkedIn URLs

### Update Skills and Services

Modify the skills and services sections in `src/App.jsx` to match your expertise.

### Change Colors

Edit `tailwind.config.js` to customize the color scheme.

## Technologies Used

- React 18
- Vite
- TailwindCSS
- Lucide React (icons)

## License

This project is open source and available for personal and commercial use.
