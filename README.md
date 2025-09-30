# 🎨 Yogavarshni's Portfolio - Interactive Data Visualization Edition

A stunning, modern portfolio built with **React**, **Vite**, and **shadcn/ui** components featuring beautiful data visualizations, animated timelines, and interactive charts.

## ✨ Features

### 🎭 Animated Components
- **Interactive Timeline**: Professional journey with expandable accordion sections
- **Skeleton Loading**: Smooth loading states with shimmer effects
- **Hover Animations**: Cards, badges, and buttons with smooth transitions
- **Fade-in Effects**: Elements appear smoothly as you scroll
- **Gradient Animations**: Flowing gradient backgrounds

### 📊 Data Visualizations
- **Radar Chart**: Skills proficiency across 6 key areas
- **Area Chart**: Career growth trajectory (2020-2025)
- **Pie Chart**: Domain expertise distribution
- **Bar Chart**: Technology stack analysis with dual metrics
- **Progress Indicators**: Visual skill level representations

### 🎯 Interactive Sections
1. **Journey Tab**: Animated timeline with work experience and education
2. **Skills Tab**: Radar chart + skill categories with badges
3. **Analytics Tab**: Multiple charts showing career metrics
4. **Certifications Tab**: Professional credentials showcase
5. **Hobbies Tab**: Art gallery and personal interests

### 🎨 Design Highlights
- **Dark Theme**: Sleek black background with purple/blue gradients
- **Glass Morphism**: Frosted glass card effects
- **Responsive**: Works on all devices (mobile, tablet, desktop)
- **Accessible**: ARIA labels and keyboard navigation
- **Custom Scrollbar**: Gradient-styled scrollbar

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation Steps

1. **Navigate to the project directory**:
   ```bash
   cd C:\Users\sathy\portfolio_code_react
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:5173
   ```

## 📦 Technology Stack

### Core
- **React 18.3.1** - UI library
- **Vite 6.0.3** - Lightning-fast build tool
- **Tailwind CSS 3.4.17** - Utility-first CSS

### UI Components (shadcn/ui)
- **Card** - Container components
- **Badge** - Label components
- **Tabs** - Tabbed navigation
- **Progress** - Progress bars
- **Accordion** - Expandable sections ✨
- **Skeleton** - Loading placeholders ✨
- **Separator** - Visual dividers ✨

### Data Visualization
- **Recharts 2.13.3** - React charting library
  - Radar Chart
  - Area Chart
  - Pie Chart
  - Bar Chart

### Icons & Utilities
- **Lucide React 0.263.1** - Beautiful icons
- **clsx** - Conditional classNames
- **tailwind-merge** - Merge Tailwind classes
- **class-variance-authority** - Component variants

## 📁 Project Structure

```
portfolio_code_react/
├── src/
│   ├── components/
│   │   └── ui/              # shadcn components
│   │       ├── card.jsx
│   │       ├── badge.jsx
│   │       ├── tabs.jsx
│   │       ├── progress.jsx
│   │       ├── accordion.jsx    ✨ NEW
│   │       ├── skeleton.jsx     ✨ NEW
│   │       └── separator.jsx    ✨ NEW
│   ├── lib/
│   │   └── utils.js         # Utility functions
│   ├── App.jsx              # Main application ✨ ENHANCED
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + animations ✨
├── index.html
├── vite.config.js
├── tailwind.config.js
├── jsconfig.json
├── postcss.config.js
├── package.json
└── README.md
```

## 🎨 Key Features Breakdown

### 1. Animated Timeline Journey
```jsx
<TabsContent value="journey">
  {/* Vertical timeline with gradient line */}
  {/* Each item has expandable accordion */}
  {/* Shows work experience + education */}
  {/* Animated on scroll */}
</TabsContent>
```

**Features**:
- Vertical gradient line (purple → blue → green)
- Pulsing dots for each milestone
- Alternating left/right layout on desktop
- Accordion for achievements & skills
- Impact metrics highlighted

### 2. Skills Radar Chart
```jsx
<RadarChart data={skillsData}>
  {/* Shows proficiency in 6 key areas */}
  {/* Python, SQL, ML/AI, Viz, Cloud, Big Data */}
</RadarChart>
```

### 3. Career Growth Area Chart
```jsx
<AreaChart data={projectGrowth}>
  {/* Shows projects & impact over 2020-2025 */}
  {/* Gradient fill for visual appeal */}
</AreaChart>
```

### 4. Interactive Skill Categories
```jsx
{skillCategories.map(category => (
  <Card>
    <Icon /> {category.name}
    <Badges /> {/* Technology badges */}
  </Card>
))}
```

**Categories**:
- Programming & Frameworks
- Databases & Tools
- Cloud Platforms
- BI & Visualization
- AI/ML
- Big Data

## 🎯 Data Highlights

### Career Stats
- **4+ Years** Experience
- **35+ Projects** Completed
- **40+ Technologies** Mastered
- **4 Certifications** Earned

### Impact Metrics
- **$800K** Cost Savings (Discover)
- **$12.57M** Revenue Identified (Freshworks)
- **85%** Fraud Detection Precision (Saayam)
- **80%** Time Reduction (SJSU Research)
- **50%** ETL Performance Boost (Infosys)

### Domain Distribution
- SaaS Analytics: 30%
- AI/ML: 25%
- Finance & Pricing: 20%
- Data Engineering: 15%
- Research: 10%

## 🎨 Customization Guide

### Update Personal Data
Edit `src/App.jsx`:

```jsx
// Timeline data
const timelineData = [
  {
    year: '2025',
    role: 'Your Role',
    company: 'Your Company',
    // ... customize
  }
]

// Skills data
const skillsData = [
  { skill: 'Your Skill', proficiency: 95 }
]
```

### Change Colors
Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Modify Animations
Edit `src/index.css`:

```css
@keyframes your-animation {
  /* Define your animation */
}

.your-class {
  animation: your-animation 1s ease-in-out;
}
```

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

Output will be in `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

### Deploy Options
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Use GitHub Actions
- **Cloudflare Pages**: Connect GitHub repo

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Mobile Optimizations
- Stacked cards on mobile
- Vertical timeline on mobile
- Touch-friendly buttons
- Optimized chart sizes

## 🎨 Animation Showcase

### Available Animations
- `animate-fade-in` - Fade in effect
- `animate-fade-in-up` - Fade in from bottom
- `animate-gradient` - Flowing gradient
- `animate-float` - Floating motion
- `animate-pulse-glow` - Pulsing glow effect
- `animate-accordion-down` - Accordion expand
- `animate-accordion-up` - Accordion collapse

## 🔧 Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Add shadcn components
npx shadcn@latest add [component]
```

## 📝 Adding More Components

```bash
# Add a new shadcn component
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add tooltip
npx shadcn@latest add alert
```

## 🎯 Performance

- **Fast Load**: Vite's optimized bundling
- **Small Bundle**: Tree-shaking enabled
- **Lazy Loading**: Components load on demand
- **Optimized Images**: Lazy loading images

## 🐛 Troubleshooting

### Issue: Port already in use
```bash
# Kill process on port 5173
npx kill-port 5173
```

### Issue: Module not found
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue: Build fails
```bash
# Clear cache and rebuild
npm run build -- --force
```

## 📄 License

This portfolio is created for **Yogavarshni Ramachandran**.

## 🤝 Contact

- **Email**: yogavarshni@gmail.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Yogavarshni4699]

---

<div align="center">

**Built with ❤️ using React, Vite, shadcn/ui, and Recharts**

[React](https://react.dev) • [Vite](https://vitejs.dev) • [shadcn/ui](https://ui.shadcn.com) • [Recharts](https://recharts.org) • [Tailwind CSS](https://tailwindcss.com)

</div>
