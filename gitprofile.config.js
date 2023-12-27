// gitprofile.config.js

const config = {
  github: {
    username: 'magidevv', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 7, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['QA_portfolio'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'avberezhna',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'anelln',
    website: '',
    phone: '',
    email: 'avberejna@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'WebdriverIO',
    'Playwright',
    'Cypress',
    'Cucumber',
    'BrowserStack',
    'Appium',
    'Postman+Newman',
    'API',
    'Git',
    'Docker',
    'Jira',
    'TestRail'
  ],
  experiences: [
    {
      company: 'Luxe Quality',
      position: 'AQA Trainee',
      from: 'October 2023',
      to: 'Present',
      companyLink: 'https://luxequality.com',
    },
  ],
  certifications: [
    {
      name: 'The Fundamentals of Software Testing',
      body: 'QATestLab',
      year: 'August 2023',
      link: 'https://eng-clients.qatestlab.com/api/trainings/public_certificate_272577_35455.pdf'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      body: 'freeCodeCamp',
      year: 'May 2023',
      link: 'https://www.freecodecamp.org/certification/Anelin/javascript-algorithms-and-data-structures'
    },
    {
      name: 'Responsive Web Design',
      body: 'freeCodeCamp',
      year: 'February 2023',
      link: 'https://www.freecodecamp.org/certification/Anelin/responsive-web-design'
    },
  ],
  education: [
    {
      institution: 'Borys Grinchenko Kyiv University',
      degree: 'Bachelor\'s degree, Computer Science',
      from: '2017',
      to: '2021',
    },
    {
      institution: 'Borys Grinchenko Kyiv University',
      degree: 'Master\'s degree, Computer Science',
      from: '2021',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
