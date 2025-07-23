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
      { label: 'Helthcare', href: '/solutions/helthcare' },
      { label: 'Manufacturing', href: '/solutions/manufacturing' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Resources',
    href: '/resources',
    dropdown: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Case studies', href: '/resources/case-studies' },
      { label: 'Guides', href: '/resources/guides' },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    dropdown: [
      { label: 'Guides', href: '/resources/guides' },
      { label: 'Careers', href: '/resources/careers' },
      { label: 'Team', href: '/resources/team' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];
