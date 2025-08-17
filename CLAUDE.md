# Miletičova Apartment Listing Website

## Project Overview
Modern React-based apartment listing website built using the **padpal-finder** template. Features professional photo gallery, Slovak localization, and contact integration for a 4-room apartment in Bratislava.

**Live URL**: `http://localhost:8080/`

## Technology Stack
- **React 18** + **TypeScript** - Modern UI framework with type safety
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Lucide Icons** - Consistent iconography
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and state management

## Project Structure
```
/Users/patrik/Desktop/Stuff/Miletičova 2025/Web/
├── public/
│   ├── images/               # 24 apartment photos + floor plan
│   │   ├── IMG_0277.jpg     # Living room photos
│   │   ├── IMG_0279.jpg     # Kitchen photos  
│   │   ├── IMG_0281.jpg     # Bedroom photos
│   │   ├── IMG_0283.jpg     # Bathroom photos
│   │   ├── ...              # Additional room photos
│   │   └── Miletičova_planik.png  # Floor plan
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ContactForm.tsx  # Contact form with Patrik's details
│   │   ├── Navigation.tsx   # Site navigation
│   │   ├── PhotoGallery.tsx # Advanced image gallery with lightbox
│   │   └── ui/              # shadcn/ui components (40+ components)
│   ├── pages/
│   │   ├── Index.tsx        # Main apartment listing page
│   │   └── NotFound.tsx     # 404 page
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx            # React app entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind configuration
├── vite.config.ts         # Vite build configuration
└── CLAUDE.md              # This documentation
```

## Key Features

### 🏠 Apartment Details
- **Property**: Priestranný 4‑izbový byt na Miletičovej
- **Location**: Miletičova, Ružinov, Bratislava
- **Size**: 91 m² interior + 11 m² lodžia
- **Rooms**: 4 separate rooms, 2 bathrooms, 2 WC
- **Features**: Renovated, gas heating, balcony, free parking

### 🖼️ Photo Gallery
- **24 high-quality apartment photos** including:
  - Living room and kitchen areas
  - All 4 bedrooms
  - Both bathrooms
  - Balcony and exterior views
  - Building exterior and surroundings
  - Floor plan diagram
- **Advanced Features**:
  - Lightbox modal with full-screen viewing
  - Thumbnail navigation
  - Keyboard controls (arrows, ESC)
  - Touch/swipe support for mobile
  - Image counter and descriptions in Slovak

### 📞 Contact Integration
- **Owner**: Patrik Magoš
- **Phone**: +421 948 994 733 (clickable tel: link)
- **Email**: patrikmko@gmail.com (clickable mailto: link)
- **Contact Form**: Inquiry form with Slovak labels
- **CTA Button**: "Mám záujem" (I'm interested)

### 🌐 Localization
- **Language**: Full Slovak localization
- **Content**: Property description translated from original apartment.html
- **UI Elements**: All form labels, buttons, and navigation in Slovak
- **SEO Ready**: Proper meta tags and alt texts

## Component Details

### PhotoGallery.tsx
Advanced image gallery component with:
- Main image display with hover effects
- Thumbnail grid (4-8 columns responsive)
- Full-screen lightbox modal
- Navigation arrows (prev/next)
- Keyboard shortcuts support
- Loading states and error handling
- Touch/gesture support for mobile

### ContactForm.tsx
Professional contact form featuring:
- Personal details inputs (name, phone, email)
- Preferred viewing date/time selectors
- Optional message textarea
- Direct contact links for phone and email
- Form validation and submission handling
- Responsive layout for all screen sizes

### Index.tsx
Main apartment listing page with:
- Hero section with property title and key stats
- Property description in Slovak
- Features and amenities grid
- Integrated photo gallery
- Sticky contact form sidebar
- Responsive 3-column layout (gallery + details + contact)

## Development Workflow

### Local Development
```bash
npm install          # Install dependencies
npm run dev         # Start dev server (http://localhost:8080)
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

### File Organization
- **Components**: Reusable UI components in `/src/components/`
- **Pages**: Route components in `/src/pages/`
- **Assets**: Static images in `/public/images/`
- **Styles**: Tailwind utilities + custom CSS in `/src/index.css`
- **Types**: TypeScript definitions throughout

### Image Management
- **Location**: `/public/images/` (publicly accessible)
- **Loading**: Direct public paths (e.g., `/images/IMG_0277.jpg`)
- **Format**: JPEG for photos, PNG for floor plan
- **Optimization**: Vite automatically optimizes during build

## Deployment Ready
- **Build Output**: Optimized static files in `/dist/`
- **Hosting**: Compatible with any static hosting (Vercel, Netlify, etc.)
- **Performance**: Lazy loading, code splitting, optimized assets
- **SEO**: Meta tags, semantic HTML, alt texts
- **Accessibility**: ARIA labels, keyboard navigation, color contrast

## Customization Points
- **Colors**: Modify Tailwind theme in `tailwind.config.ts`
- **Content**: Update property details in `src/pages/Index.tsx`
- **Images**: Replace files in `/public/images/`
- **Contact Info**: Update in `src/components/ContactForm.tsx`
- **Styling**: Customize via Tailwind classes or CSS variables