# BIE Portfolio Website

A modern, responsive portfolio website for Business Intelligence Engineers showcasing data analysis and data engineering projects.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Project filtering, smooth scrolling, and hover effects
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Loading**: Optimized for performance with minimal dependencies
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Professional summary, experience stats, and technical skills
3. **Projects**: Filterable showcase of data analyst and data engineer projects
4. **Resume**: Professional summary with downloadable resume link
5. **Contact**: Contact form and social media links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 📁 Project Structure

```
Professional Portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Clone or Download**: Download the project files to your local machine

2. **Open in Browser**: 
   - Double-click `index.html` to open in your default browser
   - Or use a local server for better development experience

3. **Local Server** (Optional):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Access**: Open `http://localhost:8000` in your browser

## 🎨 Customization

### Personal Information

1. **Update Hero Section** (`index.html`):
   ```html
   <h1 class="hero-title">Your Name</h1>
   <p class="hero-subtitle">Your Professional Title</p>
   ```

2. **Update About Section**:
   - Modify the description text
   - Update experience statistics
   - Customize skill categories and tags

3. **Update Projects**:
   - Replace project descriptions
   - Update tools and technologies
   - Add your GitHub links and live demos

4. **Update Contact Information**:
   - Replace placeholder email
   - Add your LinkedIn and GitHub URLs
   - Update social media links

### Styling

1. **Colors**: Modify the CSS custom properties in `styles.css`:
   ```css
   :root {
       --primary-color: #4299e1;
       --secondary-color: #667eea;
       --text-color: #2d3748;
       --background-color: #f7fafc;
   }
   ```

2. **Fonts**: Change the Google Fonts import in `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
   ```

3. **Layout**: Adjust grid layouts and spacing in `styles.css`

### Adding Projects

1. **Duplicate Project Card**:
   ```html
   <div class="project-card" data-category="data-analyst">
       <div class="project-image">
           <i class="fas fa-your-icon"></i>
       </div>
       <div class="project-content">
           <h3>Your Project Title</h3>
           <p>Your project description</p>
           <div class="project-tools">
               <span class="tool-tag">Tool 1</span>
               <span class="tool-tag">Tool 2</span>
           </div>
           <div class="project-links">
               <a href="your-github-link" class="project-link">
                   <i class="fab fa-github"></i> View Code
               </a>
               <a href="your-demo-link" class="project-link">
                   <i class="fas fa-external-link-alt"></i> Live Demo
               </a>
           </div>
       </div>
   </div>
   ```

2. **Set Category**: Use `data-category="data-analyst"` or `data-category="data-engineer"`

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📈 Performance Optimization

- **Minimal Dependencies**: Only essential external resources
- **Optimized Images**: Use WebP format when possible
- **CSS Optimization**: Efficient selectors and minimal redundancy
- **JavaScript Optimization**: Event delegation and efficient DOM manipulation

## 🚀 Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Upload your project files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to Netlify
2. Your site will be deployed automatically
3. Customize your domain if needed

### Vercel

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push
3. Get a custom domain and SSL certificate

## 📞 Contact Form Setup

The contact form currently shows a success message. To make it functional:

1. **Formspree** (Recommended):
   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST">
   ```

2. **Netlify Forms**:
   ```html
   <form name="contact" netlify>
   ```

3. **Custom Backend**: Modify the JavaScript to send data to your server

## 🎯 SEO Optimization

- Meta descriptions and keywords
- Semantic HTML structure
- Alt text for images
- Proper heading hierarchy
- Fast loading times
- Mobile-friendly design

## 🔒 Security Considerations

- Input validation on contact form
- HTTPS for production deployment
- No sensitive information in client-side code
- Regular dependency updates

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you need help with customization or have questions:
- Create an issue in the repository
- Check the documentation
- Review the code comments

## 🎉 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Modern CSS techniques and best practices
- Responsive design principles

---

**Happy Coding! 🚀** 