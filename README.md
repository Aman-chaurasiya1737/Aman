# Portfolio Website

A modern, animated portfolio website with sophisticated animations and a beautiful design.

## Features

- **Profile Photo Animation**: Your profile photo pops in with a 3D rotation effect
- **Layered Content**: Other elements emerge from behind the photo with staggered animations
- **Interactive Cards**: Hover effects and smooth transitions
- **Responsive Design**: Works on all devices
- **Smooth Animations**: CSS3 and JavaScript powered animations
- **Modern Styling**: Clean, professional design with gradient backgrounds

## Setup Instructions

1. **Replace the Profile Photo**: 
   - Replace `profile.jpg` with your actual profile photo
   - Recommended size: 300x400 pixels or similar aspect ratio
   - Supported formats: JPG, PNG, WebP

2. **Customize Content**:
   - Edit `index.html` to update your personal information
   - Update contact details, project descriptions, and skills
   - Modify the welcome message and about section

3. **Styling Customization**:
   - Primary color: `#f0c040` (golden yellow)
   - Background: Dark gradient
   - Edit `styles.css` to change colors, fonts, or layout

## File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript animations and interactions
├── profile.jpg         # Your profile photo (replace this)
└── README.md          # This file
```

## Animation Sequence

1. **Loading Screen** (1 second)
2. **Profile Photo Pop** (1.5 seconds) - 3D rotation and scale animation
3. **Content Cards** (Staggered) - Elements slide in from behind the photo
4. **Text Animation** (2+ seconds) - Text elements fade in with stagger
5. **Continuous Effects** - Floating particles, hover effects, parallax

## Customization Guide

### Colors
- Primary: `#f0c040` (golden yellow)
- Background: `#1a1a1a` to `#2d2d2d` gradient
- Text: `#ffffff` (white)
- Accent: `rgba(255, 255, 255, 0.1)` (transparent white)

### Animations
- Profile photo: 3D rotation with bounce
- Cards: Slide from behind with depth
- Hover effects: Lift and glow
- Parallax: Mouse movement tracking

### Content Sections
1. **Welcome Card**: Main introduction
2. **About Card**: Personal description and skills
3. **Project Cards**: Your work showcase
4. **Contact Card**: Contact information and social links

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive design

## Performance

- Optimized animations with `transform3d`
- Efficient CSS transitions
- Lazy loading ready
- 60fps smooth animations

## Tips

1. Use high-quality profile photo for best results
2. Keep card content concise and impactful
3. Test on different screen sizes
4. Consider adding your own project images

## Live Demo

Open `index.html` in your browser to see the portfolio in action!

---

Created with modern web technologies for a stunning portfolio experience.
