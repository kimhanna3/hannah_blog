# Hannah Kim - Personal Portfolio & Blog

A modern, responsive personal portfolio and blog website built with React, Vite, and Tailwind CSS. Features a clean design with baby pink and baby blue accents, showcasing data science projects and blog posts.

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern Tech Stack**: Built with React, Vite, and Tailwind CSS
- **Blog System**: Full-featured blog with category filtering
- **Project Showcase**: Portfolio section highlighting data science projects
- **Clean UI**: Minimal design with smooth animations and transitions
- **Fast Performance**: Optimized with Vite for quick load times

## Pages

- **Home**: Hero section with bio, recent blog posts, and featured works
- **Works**: Complete portfolio of data science projects
- **Blog**: Blog listing with category filters (All, Technical, Personal)
- **Individual Blog Posts**: Full blog post pages with formatted content

## Tech Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Inter Font**: Modern sans-serif typography

## Project Structure

```
hannah-portfolio/
├── public/
│   ├── profile.jpg          # Profile photo
│   ├── resume.pdf           # Resume PDF
│   ├── vite.svg            # Favicon
│   └── images/             # Image assets
│       ├── blog/           # Blog post images
│       └── projects/       # Project thumbnails
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Footer.jsx     # Footer with social links
│   │   ├── Button.jsx     # Custom button component
│   │   ├── Hero.jsx       # Home page hero section
│   │   ├── ProjectCard.jsx # Project display card
│   │   └── BlogCard.jsx   # Blog post preview card
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Home page
│   │   ├── Works.jsx      # Projects page
│   │   ├── Blog.jsx       # Blog listing page
│   │   └── BlogPost.jsx   # Individual blog post page
│   ├── data/              # Data files
│   │   ├── projects.js    # Project data
│   │   └── blogPosts.js   # Blog post content
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles with Tailwind
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## Setup Instructions

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd hannah_blog
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Make sure your assets are in place**:
   - `profile.jpg` should be in `/public/`
   - `resume.pdf` should be in `/public/`

### Running the Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

Create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Color Scheme

- **Primary Background**: White (`#FFFFFF`)
- **Coral/Pink**: `#FF6B8A` (buttons, links, accents)
- **Baby Pink**: `#FFB6C1` (secondary accents)
- **Baby Blue**: `#ADD8E6` (secondary accents)
- **Text**: Gray scale (`#1F2937`, `#4B5563`, `#6B7280`)

## Content

### Projects (4 total)

1. **House Price Prediction** - Regression model with 89% accuracy
2. **Sentiment Analysis** - NLP pipeline with BERT embeddings
3. **Plant Disease Detection** - Computer vision with ResNet50
4. **Energy Consumption Forecasting** - Time series analysis

### Blog Posts (5 total)

1. **The Art of Feature Engineering in Machine Learning** - Technical
2. **From Pandas to Polars: Speeding Up Data Processing** - Technical
3. **My Journey into Data Science: From Biology to Big Data** - Personal
4. **Cooking with Data: How I Use Analytics in the Kitchen** - Personal
5. **Visualizing Complexity: A Love Letter to Sankey Diagrams** - Technical

## Customization

### Updating Projects

Edit `src/data/projects.js` to add, remove, or modify projects.

### Adding Blog Posts

Edit `src/data/blogPosts.js` to add new blog posts. Each post should include:
- `id`: Unique identifier
- `slug`: URL-friendly slug
- `title`: Post title
- `date`: Publication date
- `categories`: Array of categories
- `excerpt`: Short preview text
- `image`: Path to featured image
- `content`: Full post content (markdown-style)

### Changing Colors

Update `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  'baby-pink': '#FFB6C1',
  'baby-blue': '#ADD8E6',
  'coral': '#FF6B8A',
}
```

### Updating Personal Information

- Bio text: Edit `src/components/Hero.jsx`
- Social links: Edit `src/components/Footer.jsx`
- Email: Edit `src/components/Navbar.jsx`

## Social Links

- LinkedIn: [https://www.linkedin.com/in/hannahmkim/](https://www.linkedin.com/in/hannahmkim/)
- GitHub: [https://github.com/kimhanna3](https://github.com/kimhanna3)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Hannah Kim. All rights reserved.

## Contact

For any questions or feedback, please contact Hannah Kim via the social links above.
