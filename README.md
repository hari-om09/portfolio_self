# 🚀 Personal Portfolio Website

A modern, responsive, and production-ready portfolio website built with vanilla HTML5, CSS3, and JavaScript. Designed to showcase skills, projects, and experience as a Computer Science student and developer.

![Portfolio Preview](assets/preview.png)

## ✨ Features

### Core Features

- **Responsive Design** - Fully responsive across mobile, tablet, and desktop
- **Dark/Light Mode** - Theme toggle with system preference detection and local storage persistence
- **Smooth Animations** - Scroll-based animations and subtle hover effects
- **Dynamic Projects** - Projects loaded from JavaScript data for easy updates
- **Contact Form** - Frontend validation with real-time feedback
- **Accessible** - WCAG compliant with skip links, ARIA labels, and keyboard navigation
- **SEO Optimized** - Meta tags, semantic HTML, and structured content

### Sections

- **Home** - Hero section with typewriter effect and social links
- **About** - Background, experience cards, and downloadable CV
- **Skills** - Categorized skill display with icons
- **Projects** - Filterable project cards with GitHub/demo links
- **Experience/Education** - Tabbed timeline with details
- **Contact** - Form with validation and contact information

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   ├── style.css           # Main stylesheet (CSS custom properties, responsive)
│   └── animations.css      # Scroll and hover animations
├── js/
│   ├── main.js             # Core JavaScript functionality
│   └── projects.js         # Project data (easy to update)
├── assets/
│   ├── resume.pdf          # Your resume (add this)
│   └── images/             # Project images and photos
├── .gitignore              # Git ignore file
└── README.md               # This file
```

## 🛠️ Tech Stack

| Technology        | Purpose                       |
| ----------------- | ----------------------------- |
| HTML5             | Semantic structure            |
| CSS3              | Styling with Flexbox/Grid     |
| JavaScript (ES6+) | Interactivity                 |
| Google Fonts      | Typography (Inter, Fira Code) |
| SVG Icons         | Lightweight, scalable icons   |

## 🎨 Design Decisions

### Color Palette

- **Primary**: `#6366f1` (Indigo) - Professional yet modern
- **Secondary**: `#10b981` (Emerald) - For accents and success states
- **Background Light**: `#ffffff`, `#f8fafc`, `#f1f5f9`
- **Background Dark**: `#0f172a`, `#1e293b`, `#334155`

### Typography

- **Primary Font**: Inter - Clean, professional, highly readable
- **Monospace**: Fira Code - For code elements and branding

### UX Principles

1. **Progressive Enhancement** - Works without JS, enhanced with it
2. **Performance First** - No heavy libraries, optimized assets
3. **Mobile First** - Designed for mobile, scaled up for desktop
4. **Accessibility** - Keyboard navigation, screen reader support
5. **Consistency** - CSS custom properties for unified styling

## 🚀 Deployment Guide

### Option 1: GitHub Pages (Recommended - Free)

1. **Create a GitHub Repository**

   ```bash
   # Already initialized locally, now create repo on GitHub
   # Go to https://github.com/new and create a new repository
   ```

2. **Push to GitHub**

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at `https://YOUR_USERNAME.github.io/portfolio-website/`

### Option 2: Netlify (Free with more features)

1. **Via Git Integration**

   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository
   - Click "Deploy site"

2. **Via Drag & Drop**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag your entire project folder
   - Your site will be deployed instantly

### Option 3: Vercel

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Deploy**

   ```bash
   cd portfolio-website
   vercel
   ```

3. Follow the prompts to deploy

## 📝 Customization Guide

### Update Personal Information

1. **index.html** - Update:

   - Your name in `<h1>` and meta tags
   - Social media links
   - Email address
   - About section content
   - Experience and education details

2. **js/projects.js** - Update:

   - Add your actual projects
   - Update GitHub URLs
   - Add live demo links
   - Change project descriptions and tags

3. **css/style.css** - Customize:
   - Color palette in `:root`
   - Font choices
   - Spacing values

### Add Your Photo

Replace the placeholder in the hero section:

```html
<!-- In index.html, replace the hero__image-placeholder div -->
<img src="assets/your-photo.jpg" alt="Your Name" class="hero__photo" />
```

Add corresponding CSS:

```css
.hero__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-2xl);
}
```

### Add Resume

1. Add your resume PDF to the `assets/` folder
2. Name it `resume.pdf` (or update the link in index.html)

## 🔧 Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-website.git
   cd portfolio-website
   ```

2. **Open with Live Server**

   - Using VS Code: Install "Live Server" extension and click "Go Live"
   - Using Python: `python -m http.server 8000`
   - Using Node: `npx serve`

3. **Make changes and test**
   - Edit files
   - Changes appear automatically with Live Server
   - Test on different screen sizes using browser DevTools

## 📊 Performance Optimizations

- ✅ No external CSS/JS frameworks (lightweight)
- ✅ Minimal HTTP requests
- ✅ CSS and JS at optimal positions
- ✅ Font preconnect for faster loading
- ✅ SVG icons instead of icon fonts
- ✅ Throttled scroll event handlers
- ✅ Lazy animations (on scroll)

### Lighthouse Scores (Target)

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔮 Future Improvements

1. **Blog Section** - Add technical writing with Markdown support
2. **CMS Integration** - Connect to Contentful/Sanity for easy updates
3. **Analytics** - Add privacy-friendly analytics (Plausible/Fathom)
4. **Contact Form Backend** - Integrate Formspree/Netlify Forms
5. **PWA Support** - Add service worker for offline access
6. **Image Optimization** - Add WebP with fallbacks
7. **Internationalization** - Multi-language support
8. **Testimonials Section** - Add recommendations from colleagues

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/YOUR_USERNAME/portfolio-website/issues).

## 👨‍💻 Author

**Hariom Kr**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Twitter: [@yourusername](https://twitter.com/yourusername)

---

⭐ Star this repo if you found it helpful!
