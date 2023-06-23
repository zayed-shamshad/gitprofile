// gitprofile.config.js

const config = {
  github: {
    username: 'zayed-shamshad', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [
        'quizapp',
        'zayed-shamshad',
        'isDhruvSingle-',
        'board-zayed'


      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'mohammad-zaid-shamshad-611546203',
    twitter: 'ZaidShamshad2',
    instagram: 'zaid_shamshad',
    website: 'https://zayed-shamshad.github.io/',
    email: 'shamshad.1@iitj.ac.in',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1lRpS_P2OvivE2Jh3O-egb0JwdSz5VCdE/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Nuxt JS',
    'Vue.js',
    'Firebase',
    'Android',
    'Java',
    'Python',
    'Django',
    'Flask',
    'Flutter',
    'JavaScript',
    'Node.js',
    'Express.js',
    'FastAPI',
    'Sqlite3',
    'MongoDB',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
    'Bootstrap',
    'HTML',
    'C',
    'C++',

  ],
  experiences: [
    {
      company: 'Willings Inc.',
      position: 'Full Stack Engineer',
      from: 'Jan 2023',
      to: 'March 2023',
      companyLink: 'https://willings.co.jp/',
    },
    {
      company: 'DimensionEd (ArEd)',
      position: 'Web & Mobile App Developer',
      from: 'Dec 2021',
      to: 'March 2022',
      companyLink: 'https://dimensioned.in/',
    },
  ],
   certifications: [
    {
      name: 'Udemy - The Complete 2022 Web Development Bootcamp',
      body: 'Udemy',
      year: 'March 2022',
       link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-d19d0ef0-b3c1-4ee9-9a8e-ac1fd3a1734f.jpg'
    },
  ], 
  education: [
    {
      institution: 'IIT Jodhpur',
      degree: 'B.Tech in Electrical Engineering',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Anand Bhawan School',
      degree: 'Intermediate',
      from: '2017',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Elfurat website',
      description:
        'A website for a Tech-Startup. The website is built with Nuxt.js and Tailwind CSS, deployed on Cloudflare Pages.',
      imageUrl: 'https://elfurat.tech/_nuxt/nobgblacktext.ddf8865d.png',
      link: 'https://elfurat.tech',
    },
    {
      title: 'Proximity based Reminder',
      description:
        'A Native android app that reminds you to do a task when you are near a location. The app uses Geofencing, GPS and Sqlite as database.',  
      imageUrl: '',
      link: 'https://github.com/zayed-shamshad/MPC_PROJECT',
    },
    {
      title: 'Prakriti app',
      description:
        'A Native android app, a social media app for environmentalists. The app uses Firebase as backend and has features like posting, liking, commenting, ML kit integration etc.',
      imageUrl: '',
      link: '',
    },
    
  
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
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
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'night',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'procyon',
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
