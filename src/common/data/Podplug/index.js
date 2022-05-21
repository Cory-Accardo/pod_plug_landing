/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/Podplug/logo.png';

export const rewardLink = 'http://localhost:5000'

export const navbar = {
  logo: logo,
  navMenu: [
    {
      id: 1,
      label: 'Onboarding',
      path: '#features',
      offset: '81',
    },
    {
      id: 2,
      label: 'FAQ',
      path: '#faq',
      offset: '81',
    },
    {
      id: 3,
      label: 'Rewards',
      path: '#rewards',
      offset: '81',
    },
    {
      id: 4,
      label: 'Testimonials',
      path: '#testimonial',
      offset: '81',
    },
    {
      id: 5,
      label: 'Contact',
      path: '#contact',
      offset: '81',
    },
  ],
};

/* ------------------------------------ */
// client data section
/* ------------------------------------ */
import client1 from 'common/assets/image/Podplug/company1.png';
import client2 from 'common/assets/image/Podplug/company2.png';
import client3 from 'common/assets/image/Podplug/company3.png';
import client4 from 'common/assets/image/Podplug/company4.png';

export const client = [
  {
    id: 1,
    image: client1,
    title: 'The new york times',
  },
  {
    id: 2,
    image: client2,
    title: 'amazon',
  },
  {
    id: 3,
    image: client3,
    title: 'evernote',
  },
  {
    id: 4,
    image: client4,
    title: 'the verge',
  },
];

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/Podplug/icon1.svg';
import featureIcon2 from 'common/assets/image/Podplug/icon2.svg';
import featureIcon3 from 'common/assets/image/Podplug/icon3.svg';
import featureIcon4 from 'common/assets/image/Podplug/icon4.svg';

export const features = {
  slogan: 'Our Promise',
  title: 'The Process',
  items: [
    {
      id: 1,
      color: '#F55767',
      icon: featureIcon1,
      title: 'Pay nothing',
      description:
        'We manage installation, maintenance, replenishment, and licensing, for free.',
    },
    {
      id: 2,
      color: '#ff4742',
      icon: featureIcon2,
      title: 'Earn Profit',
      description:
        'We are globally recognised for our services and won a lot of prices around the world .',
    },
    {
      id: 3,
      color: '#fb5781',
      icon: featureIcon3,
      title: 'Cloud Storage',
      description:
        'LiteSpeed Web Server known for its high performance and low resource consumption.',
    },
    {
      id: 4,
      color: '#f18e47',
      icon: featureIcon4,
      title: 'Customization',
      description:
        'Client Satisfaction is our first priority and We are best at it. Keep In Touch for the best output. ',
    },
  ],
};

/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import appSlide1 from 'common/assets/image/Podplug/appSlider1.png';
import appSlide2 from 'common/assets/image/Podplug/appSlider2.png';
import appSlide3 from 'common/assets/image/Podplug/appSlider3.png';
import userprofile from 'common/assets/image/Podplug/userprofile.png';
import qrcode from 'common/assets/image/Podplug/qrcode.png';
import handselect from 'common/assets/image/Podplug/handselect.png';

export const appSlider = {
  carousel: [
    {
      id: 1,
      image: appSlide1,
      title: 'App Slide 1',
    },
    {
      id: 2,
      image: appSlide2,
      title: 'App Slide 1',
    },
    {
      id: 3,
      image: appSlide3,
      title: 'App Slide 1',
    },
  ],
  title: 'Pod Rewards',
  description:
    "Seamlessly take advantage of ongoing discounts and promotions by scanning a QR code. ",
  features: [
    {
      id: 1,
      icon: userprofile,
      title: 'Signup',
      description: 'Verify your U.S drivers license and save payment details for later.',
    },
    {
      id: 2,
      icon: qrcode,
      title: 'Scan QR Code',
      description:
        'Scan the QR code on the kiosk.',
    },
    {
      id: 3,
      icon: handselect,
      title: 'Pick your Item',
      description: 'Select your item like you normally would and enjoy the rewards and convenience.',
    },
  ],
};

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import codingImage from 'common/assets/image/Podplug/code.png';

export const designAndBuilt = {
  image: codingImage,
  slogan: 'CODE INTEGRATION',
  title: 'Introducing coding features of our apps with Customization',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.',
};


/* ------------------------------------ */
// Faq  data section
/* ------------------------------------ */

export const Faq = [
  {
    id: 1,
    expend: true,
    title: 'How is your installation process free?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore ',
  },
  {
    id: 2,
    title: 'What legal issues should I be concerned of?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore ',
  },
  {
    id: 3,
    title: 'What work is required on our part?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore',
  },
  {
    id: 4,
    title: 'What types of venues have the most success with Pod Plug?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore',
  },
];

/* ------------------------------------ */
// Product  Slide  section
/* ------------------------------------ */
import slide1 from 'common/assets/image/Podplug/page1.png';
import slide2 from 'common/assets/image/Podplug/page2.png';
import slide3 from 'common/assets/image/Podplug/page3.png';

export const productData = {
  slogan: 'PRODUCT SHOWCASE',
  title: 'Meet Client Satisfaction by using our product',
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 1',
    },
    {
      id: 2,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 2',
    },
    {
      id: 3,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 3',
    },

    {
      id: 4,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 4',
    },

    {
      id: 5,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 5',
    },
    {
      id: 6,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 6',
    },
  ],
};

/* ------------------------------------ */
// Pricing policy data section
/* ------------------------------------ */
export const pricing = {
  slogan: 'PRICING PLAN',
  title: 'Choose your pricing policy',
  monthly: [
    {
      id: 1,
      title: 'Business Class',
      description: 'For Small teams or office',
      suggested: false,
      price: 0,
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Pro Master',
      description: 'For Best opportunities',
      suggested: true,
      price: 99,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
  annualy: [
    {
      id: 1,
      title: 'Pro Master',
      description: 'For Small teams or office',
      suggested: true,
      price: 999,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Enterprise',
      description: 'For Best opportunities',
      suggested: false,
      price: 1299,
      trail: 30,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Team Portfolio data section
/* ------------------------------------ */
import member1 from 'common/assets/image/Podplug/1.png';
import member2 from 'common/assets/image/Podplug/2.png';
import member3 from 'common/assets/image/Podplug/3.png';
import member4 from 'common/assets/image/Podplug/4.png';
import member5 from 'common/assets/image/Podplug/5.png';
import member6 from 'common/assets/image/Podplug/6.png';
import member7 from 'common/assets/image/Podplug/7.png';

export const teamportfolio = {
  title: 'Meet our awesome team members',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.',

  teammember: [
    {
      id: 1,
      img: member1,
      text: 'Berlin Corleone',
    },
    {
      id: 2,
      img: member2,
      text: 'Jona White',
    },
    {
      id: 3,
      img: member3,
      text: 'Michael Price',
    },
    {
      id: 4,
      img: member4,
      text: 'Gullyboy Rana',
    },
    {
      id: 5,
      img: member5,
      text: 'Miss Clair',
    },
    {
      id: 6,
      img: member6,
      text: 'Bucky Ali',
    },
    {
      id: 7,
      img: member7,
      text: 'Arthus Doe',
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
  slogan: 'TESTIMONIAL',
  title: 'Venue owners who have found success with Pod Plug',
  reviews: [
    {
      id: 1,
      title: 'Pod Plug is great!',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Jon Doe',
      designation: 'Owner of some bar',
      review: 4,
    },
    {
      id: 2,
      title: 'Pod Plug is great!',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Jeny Doe',
      designation: 'Owner of some bar',
      review: 5,
    },
    {
      id: 3,
      title: 'Pod Plug is great!',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
      name: 'Jon Doe',
      designation: 'Owner of some bar',
      review: 5,
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/assets/image/Podplug/chat.svg';
import group from 'common/assets/image/Podplug/group.svg';
import github from 'common/assets/image/Podplug/github.svg';
import footerLogo from 'common/assets/image/Podplug/logoWhite.png';

export const footer = {
  widgets: [
    {
      id: 1,
      icon: chat,
      title: 'Reach out to us!',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore ',
    },
    {
      id: 2,
      icon: group,
      title: 'Join our team',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
    {
      id: 3,
      icon: github,
      title: 'Github Access',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
  ],
  logo: footerLogo,
  menu: [
    // {
    //   id: 1,
    //   text: 'Home',
    //   link: '#',
    // },
    // {
    //   id: 2,
    //   text: 'Adversite',
    //   link: '#',
    // },
    // {
    //   id: 3,
    //   text: 'Supports',
    //   link: '#',
    // },
    // {
    //   id: 4,
    //   text: 'Marketing',
    //   link: '#',
    // },
    // {
    //   id: 5,
    //   text: 'Contact',
    //   link: '#',
    // },
  ],
};
