export const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    dropdown: [
      { label: 'Quanta ERP', href: '/products/quanta-erp' },
      { label: 'Quanta BI', href: '/products/quanta-bi' },
      { label: 'Quanta LMS', href: '/products/quanta-lms' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    dropdown: [
      { label: 'Retail', href: '/solutions/retail' },
      { label: 'Healthcare', href: '/solutions/healthcare' },
      { label: 'Manufacturing', href: '/solutions/manufacturing' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Resources',
    href: '/resources',
    dropdown: [
      { label: 'Blogs', href: '/resources/blogs' },
      { label: 'Case studies', href: '/resources/case-studies' },
      { label: 'Guides', href: '/resources/guides' },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    dropdown: [
      { label: 'About Us', href: '/company/about-us' },
      { label: 'Careers', href: '/company/careers' },
      { label: 'Team', href: '/company/team' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];
