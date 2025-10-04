# Shopify E-commerce Website

A modern, production-ready e-commerce website built with React 18, TypeScript, and the Shopify Storefront API. Features custom authentication, seamless checkout, and professional design.

## Features

- **Shopify Integration**: Full integration with Shopify Storefront API
- **Custom Authentication**: Seamless login flow that integrates with Shopify checkout
- **Smart Cart Management**: Context-based state management with localStorage persistence
- **Product Catalog**: Dynamic product listing with proper HTML description rendering
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Performance Optimized**: Code splitting, lazy loading, and optimized images
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Ready**: Dynamic meta tags and structured data

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Context API + useReducer
- **Routing**: React Router v6
- **GraphQL**: graphql-request
- **Security**: DOMPurify for HTML sanitization

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SHOPIFY_DOMAIN=your-store.myshopify.com
VITE_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
VITE_SHOPIFY_API_VERSION=2024-10
VITE_CUSTOM_DOMAIN=yourdomain.com
```

### 2. Shopify Configuration

Ensure your Shopify app has these Storefront API permissions:
- `unauthenticated_read_customers`
- `unauthenticated_write_customers`
- `unauthenticated_read_checkouts`
- `unauthenticated_write_checkouts`
- `unauthenticated_read_product_listings`
- `unauthenticated_read_product_inventory`

### 3. Installation

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── auth/         # Authentication components
│   ├── cart/         # Shopping cart components
│   ├── layout/       # Header, Footer, Navigation
│   ├── products/     # Product display components
│   └── ui/           # Basic UI components
├── context/          # React Context providers
├── hooks/            # Custom React hooks
├── lib/              # Shopify API integration
├── pages/            # Route components
├── types/            # TypeScript type definitions
└── utils/            # Helper functions
```

## Key Components

### Authentication System
- Custom login modal with Shopify integration
- Customer data management with Context API
- Token validation and automatic logout
- Password recovery flow

### Cart Management
- Real-time cart state with Context API
- localStorage persistence
- Smart checkout button with authentication flow
- Responsive cart drawer

### Product Display
- Dynamic product listing with pagination
- Product detail pages with variant selection
- Proper HTML description rendering with DOMPurify
- Image galleries with thumbnails

### Checkout Flow
1. User adds items to cart
2. Smart checkout button checks authentication
3. Shows login modal if not authenticated
4. Creates Shopify checkout with customer association
5. Redirects to Shopify checkout (domain masked)
6. Returns to order confirmation

## Customization

### Styling
Modify `src/index.css` and Tailwind configuration for custom styling.

### Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --color-primary: #2c5530;
  --color-secondary: #FFA726;
  /* etc. */
}
```

### GraphQL Queries
Extend queries in `src/lib/graphql/` for additional data needs.

## Performance Optimizations

- Code splitting with React.lazy()
- Image optimization with proper aspect ratios
- GraphQL query optimization
- Context API for efficient state management
- localStorage for cart persistence

## Accessibility

- Proper heading hierarchy
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance

## SEO Features

- Dynamic meta tags for product pages
- Structured data for products
- Semantic HTML structure
- Proper URL structure with product handles

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

### Custom Domain Setup

Configure DNS and Shopify settings for seamless checkout experience:
1. Set up CNAME records
2. Configure Shopify checkout domain
3. Set up redirects for checkout flow

## Production Checklist

- [ ] Environment variables configured
- [ ] Shopify permissions enabled
- [ ] Custom domain configured
- [ ] SSL certificate installed
- [ ] Analytics tracking added
- [ ] Error monitoring setup
- [ ] Performance testing completed
- [ ] Accessibility testing completed
- [ ] Cross-browser testing completed

## Support

For issues and questions:
1. Check the Shopify Storefront API documentation
2. Review the React and TypeScript documentation
3. Check browser developer tools for errors
4. Ensure all environment variables are set correctly

## License

MIT License - see LICENSE file for details.