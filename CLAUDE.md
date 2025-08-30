# Miletičova Apartment Listing Website

## Project Overview
Modern React-based apartment listing website built using the **padpal-finder** template. Features professional photo gallery, Slovak localization, and contact integration for a 4-room apartment in Bratislava.

**Live URL**: `https://byt.teapot.sk/`

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
│   ├── images/               # 34 apartment photos + floor plan + visualizations
│   │   ├── IMG_0277_new.webp # Living room visualization (main preview)
│   │   ├── IMG_0288_new.webp # Balcony visualization
│   │   ├── IMG_0295_new.webp # Bedroom visualization
│   │   ├── IMG_0298_new.webp # Kitchen visualization
│   │   ├── IMG_0281_new.webp # Bedroom with large windows visualization
│   │   ├── IMG_0283_new.webp # Bathroom with bathtub visualization
│   │   ├── IMG_0285_new.webp # Second room visualization
│   │   ├── IMG_0291_new.webp # Second bathroom visualization
│   │   ├── IMG_0293_new.webp # Kitchen appliances visualization
│   │   ├── IMG_0304_new.webp # Bathroom detail visualization
│   │   ├── IMG_0277.jpg     # Original living room photos
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
- **34 high-quality images** including:
  - **10 new visualization images** (WebP format for performance)
  - **24 original apartment photos**
  - Living room and kitchen areas
  - All 4 bedrooms
  - Both bathrooms
  - Balcony and exterior views
  - Building exterior and surroundings
  - Floor plan diagram
- **Advanced Features**:
  - **Fixed-size lightbox** with consistent layout (no jumping/resizing)
  - **Keyboard navigation** (Left/Right arrows, Escape to close)
  - **Touch/swipe support** for mobile (50px minimum swipe distance)
  - **Thumbnail navigation** with visual feedback
  - **Image counter** and descriptions in Slovak
  - **Smooth transitions** between images of different aspect ratios

### 📞 Contact Integration
- **Owner**: Patrik Magoš
- **Phone**: +421 948 994 733 (clickable tel: link)
- **Email**: patrikmko@gmail.com (clickable mailto: link)
- **Contact Form**: Inquiry form with Slovak labels
- **CTA Button**: "Mám záujem" (I'm interested)

### 🌐 Localization & SEO
- **Language**: Full Slovak localization (`lang="sk"`)
- **Content**: Property description in Slovak with updated apartment details
- **UI Elements**: All form labels, buttons, and navigation in Slovak
- **SEO Optimized**: 
  - Slovak meta title with price (386 000 €)
  - Relevant Slovak keywords for apartment search
  - Updated Open Graph tags with visualization image
  - Proper Slovak locale (`sk_SK`) for social sharing
  - Twitter Card optimization

## Component Details

### PhotoGallery.tsx
Advanced image gallery component with:
- **Main image display** with hover effects and smooth scaling
- **Thumbnail grid** (4-8 columns responsive) with visual selection feedback
- **Fixed-size lightbox modal** that prevents layout jumping between images
- **Multiple navigation methods**:
  - Click/touch navigation arrows
  - **Keyboard controls** (Left/Right arrows, Escape to close)
  - **Touch/swipe gestures** (50px minimum distance to prevent accidents)
- **Optimized performance** with proper event cleanup
- **Image prioritization**: Visualization images displayed first
- **Responsive design** with consistent behavior across devices

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
- **Hero section** with property title, key stats, and price (386 000 €)
- **Updated property description** in Slovak with current apartment details
- **Features and amenities grid** with relevant icons
- **Integrated photo gallery** featuring visualization images first
- **Sticky contact form** sidebar for easy access
- **Responsive 3-column layout** (gallery + details + contact)
- **Smooth scroll** navigation to contact form

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
- **Loading**: Direct public paths (e.g., `/images/IMG_0277_new.webp`)
- **Formats**: 
  - **WebP** for new visualization images (better compression)
  - **JPEG** for original apartment photos
  - **PNG** for floor plan diagram
- **Gallery Order**: Visualization images prioritized first, then original photos
- **Optimization**: Vite automatically optimizes during build

## Deployment Setup
- **Hosting**: Deployed on **Vercel** (vercel.com)
- **Source**: Automatically deployed from GitHub repository
- **Environment Variables**: Configured in Vercel dashboard
  - `VITE_EMAILJS_SERVICE_ID=service_jm4ovrd`
  - `VITE_EMAILJS_PUBLIC_KEY=Lm7SsgaLLRVBDXGRa`
  - `VITE_EMAILJS_TEMPLATE_ID=template_upzk6l9` ⚠️ **Correct template ID** (not template_upzk6l92)
  - `VITE_EMAILJS_PRIVATE_KEY=52LeZ3HkrPeyn-Yt36y1I`
- **Build Output**: Optimized static files in `/dist/`
- **Performance**: Lazy loading, code splitting, optimized assets, WebP images
- **SEO**: Slovak-optimized meta tags, semantic HTML, descriptive alt texts
- **Accessibility**: ARIA labels, full keyboard navigation, color contrast
- **Modern UX**: Touch/swipe support, smooth animations, responsive design

## Recent Updates

### Gallery Enhancements (Latest)
- ✅ **Added 10 visualization images** in WebP format for better performance (6 new images added recently)
- ✅ **Fixed lightbox sizing issues** - consistent layout regardless of image dimensions
- ✅ **Enhanced navigation** - keyboard arrows and touch/swipe support
- ✅ **Improved UX** - smooth transitions and responsive controls

### SEO & Localization Updates
- ✅ **Updated meta tags** for Slovak apartment listing with proper keywords
- ✅ **Enhanced Open Graph** integration with visualization image
- ✅ **Improved social sharing** with Slovak locale and Twitter Cards
- ✅ **Updated property description** with current apartment details

### Technical Improvements
- ✅ **Performance optimized** with WebP images and fixed-size containers
- ✅ **Accessibility enhanced** with full keyboard navigation support
- ✅ **Mobile-first design** with touch gestures and responsive layouts
- ✅ **Code quality** improved with proper event cleanup and TypeScript

## Customization Points
- **Colors**: Modify Tailwind theme in `tailwind.config.ts`
- **Content**: Update property details in `src/pages/Index.tsx`
- **Images**: Replace files in `/public/images/` (supports WebP, JPEG, PNG)
- **Contact Info**: Update in `src/components/ContactForm.tsx`
- **SEO**: Modify meta tags in `index.html`
- **Styling**: Customize via Tailwind classes or CSS variables