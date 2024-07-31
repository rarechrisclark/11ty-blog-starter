export const url = process.env.URL || 'http://localhost:8080';
export const siteName = 'rareChrisClark';
export const siteDescription = 'Welcome to my little corner of the internet.';
export const siteType = 'Person'; // Organization, Person, or LocalBusiness
export const locale = 'en-AU';
export const lang = 'en';
export const skipContent = 'Skip to content';

export const author = {
  name: 'Chris Clark',
  email: 'example@example.com',
  website: 'https://rarechrisclark.com',
  social: 'https://github.com/rareChrisClark',
};

export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/rareChrisClark',
    icon: 'github',
    aria: 'GitHub',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rarechrisclark/',
    icon: 'linkedin',
    aria: 'LinkedIn',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/rarechrisclark/',
    icon: 'instagram',
    aria: 'Instagram',
  },
];

export const pathToSvgLogo = 'src/assets/svg/brand/logo.svg';
export const themeColor = '#20C997'; //  Manifest: defines the default theme color for the application
export const themeBgColor = '#FBFBFB'; // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
export const opengraph_default_alt = 'rareChrisClark'; // fallback/default meta image alt text

export const blog = {
  name: 'rareChrisClark Blog',
  description: 'Tell the world what you are writing about in your blog. It will show up on feed readers.',
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml',
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json',
    },
  ],
};
