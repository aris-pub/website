# Aris Website

Landing page and blog for Aris - Infrastructure for the post-PDF era.

Built with [Eleventy](https://www.11ty.dev/) and designed for easy deployment to [Netlify](https://netlify.com/).

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Deployment to Netlify

1. Connect your GitHub repository to Netlify
2. The build settings are automatically configured via `netlify.toml`
3. Build command: `npm run build`
4. Publish directory: `_site`

### Content Management

The site includes Netlify CMS for easy blog post management:

1. Enable Netlify Identity in your Netlify dashboard
2. Enable Git Gateway in the Identity settings
3. Access the admin panel at `/admin/` after deployment
4. Invite users via the Netlify dashboard

## Project Structure

```
src/
├── _layouts/          # Page layouts
├── _includes/         # Reusable components
├── _data/             # Global data files
├── css/               # Stylesheets
├── blog/              # Blog posts and index
├── admin/             # Netlify CMS configuration
└── index.njk          # Homepage
```

## Features

- ✅ Responsive design with dark mode support
- ✅ Mobile-optimized navigation with hamburger menu
- ✅ Custom logo system with Georgia serif typography
- ✅ Blog with Markdown support
- ✅ Netlify CMS integration
- ✅ SEO optimized with structured data
- ✅ Performance optimized
- ✅ Accessible design
- ✅ Academic-focused design for Preview Press and RSM Studio