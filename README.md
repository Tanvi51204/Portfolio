# Portfolio Website

A modern, dark-themed portfolio website with smooth animations and interactive elements.

## 🎨 Design Features

- **Dark Theme**: Sleek black background with lime green (#c4ff61) accents
- **Smooth Animations**: Scroll-triggered animations, parallax effects, and micro-interactions
- **Responsive Design**: Fully responsive across all devices
- **Interactive Elements**: Hover effects, card tilts, and dynamic counters
- **Modern Typography**: Using Inter font for a clean, professional look

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive JavaScript features
├── images/             # Image assets
│   ├── profile.png     # Your profile photo
│   ├── workspace.jpg   # Workspace/about section image
│   ├── project1.jpg    # Project screenshots
│   ├── project2.jpg
│   └── project3.jpg
└── assets/
    └── resume.pdf      # Your resume (downloadable)
```

## 🚀 Getting Started

1. **Customize Content**: Open `index.html` and replace placeholder content with your own:
   - Name and title
   - About me description
   - Tech stack
   - Projects
   - Experience
   - Achievements
   - Contact information

2. **Replace Images**:
   - Add your professional photo as `images/profile.png`
   - Add workspace/about photo as `images/workspace.jpg`
   - Add project screenshots as `images/project1.jpg`, `project2.jpg`, `project3.jpg`

3. **Update Resume**:
   - Replace `assets/resume.pdf` with your actual resume

4. **Customize Colors** (Optional):
   - Open `styles.css`
   - Modify CSS variables in the `:root` section to change colors

## 🌐 Deployment

### Option 1: Simple HTTP Server (for local testing)
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server
```

Then open `http://localhost:8000` in your browser.

### Option 2: Deploy to GitHub Pages
1. Create a new GitHub repository
2. Push your code to the repository
3. Go to Settings > Pages
4. Select your main branch as the source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 3: Deploy to Netlify/Vercel
1. Sign up for a free account on [Netlify](https://netlify.com) or [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Deploy with one click
4. Your site will be live with a custom URL

## ✨ Features

### Sections Included:
- **Hero**: Eye-catching introduction with your name and role
- **About**: Personal introduction with stats
- **Tech Stack**: Organized display of your technologies
- **Projects**: Featured projects with descriptions and stats
- **Experience**: Timeline of your work history
- **Achievements**: Showcase your accomplishments
- **Contact**: Contact form and information

### Interactive Elements:
- Smooth scroll navigation
- Scroll-triggered animations
- Parallax effects
- Card tilt on hover
- Animated counters
- Form validation
- Responsive navigation

## 🎨 Customization Tips

### Changing the Accent Color:
In `styles.css`, find the `:root` section and modify:
```css
--color-accent: #c4ff61;  /* Change to your preferred color */
```

### Adding More Projects:
Copy a `.project-card` div in `index.html` and modify the content.

### Modifying Sections:
Each section has a clear structure. Simply find the section you want to modify and update the content.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Feel free to use this template for your personal portfolio. No attribution required!

## 🤝 Support

If you encounter any issues or have questions, feel free to reach out!

---

**Built with ❤️ using HTML, CSS, and JavaScript**
