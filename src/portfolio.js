/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Niraj Ghetiya",
  description:
    "Computer Engineer Email : nirajghetiya2002@gmail.com",
  og: {
    title: "Niraj Portfolio",
    type: "website",
    url: "https://niraj-ghetiya.vercel.app/#/",
  },
};

//Home Page
const greeting = {
  title: "Ghetiya Niraj",
  logo_name: "GhetiyaNiraj",
  nickname: "N.R.GHETIYA",
  subTitle:
     "To gain confidence and fame using my potential in the field of 'Software Engineering', and express my innovative creative skills for self and company growth.",
  resumeLink:
    "https://niraj-ghetiya.vercel.app/200200107038_resume.pdf",
  portfolio_repository: "https://niraj-ghetiya.vercel.app/#/",
  githubProfile: "https://github.com/niraj003",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/niraj003",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/niraj-ghetiya-5b13b7220/?originalSubdomain=in",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
    // name: "YouTube",
    // link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
    // fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    // backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "nirajghetiya2002@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
    // name: "resume",
    // link: "https://drive.google.com/uc?export=download&id=1PFvg4a8k4foyAMUqvwDX3f-lJqcN7IbH",
    // fontAwesomeIcon: "download", // Reference https://fontawesome.com/icons/twitter?style=brands
    // backgroundColor: "#000000", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
    // name: "Facebook",
    // link: "https://www.facebook.com/laymanbrother.19/",
    // fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    // backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/niraj.ghetiya/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
      // title: "Data Science & AI",
      // fileName: "DataScienceImg",
      // skills: [
        // "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        // "⚡ Experience of working with Computer Vision and NLP projects",
        // "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      // ],
      // softwareSkills: [
        // {
          // skillName: "Tensorflow",
          // fontAwesomeClassname: "logos-tensorflow",
          // style: {
            // backgroundColor: "transparent",
          // },
        // },
        // {
          // skillName: "Keras",
          // fontAwesomeClassname: "simple-icons:keras",
          // style: {
            // backgroundColor: "white",
            // color: "#D00000",
          // },
        // },
        // {
          // skillName: "PyTorch",
          // fontAwesomeClassname: "logos-pytorch",
          // style: {
            // backgroundColor: "transparent",
          // },
        // },
        // {
          // skillName: "Python",
          // fontAwesomeClassname: "ion-logo-python",
          // style: {
            // backgroundColor: "transparent",
            // color: "#3776AB",
          // },
        // },
      // ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing web applications using tailwind css, React js and Html",
        "⚡ Creating application backend in Node, php,java",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
          // skillName: "Sass",
          // fontAwesomeClassname: "simple-icons:sass",
          // style: {
            // color: "#CC6699",
          // },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "php",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#CB3837",
          },
        },
        // {
          // skillName: "Yarn",
          // fontAwesomeClassname: "simple-icons:yarn",
          // style: {
            // color: "#2C8EBB",
          // },
        // },
        {
          skillName: "java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "DataBase",
      fileName: "CloudInfraImg",
      skills: [
        // "⚡ Experience working on multiple cloud platforms",
        // "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        // "⚡ Deploying deep learning models on cloud to use on mobile devices",
        // "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // {
      // title: "UI/UX Design",
      // fileName: "DesignImg",
      // skills: [
        // "⚡ Designing highly attractive user interface for mobile and web applications",
        // "⚡ Customizing logo designs and building logos from scratch",
        // "⚡ Creating the flow of application functionalities to optimize user experience",
      // ],
      // softwareSkills: [
        // {
          // skillName: "Adobe XD",
          // fontAwesomeClassname: "simple-icons:adobexd",
          // style: {
            // color: "#FF2BC2",
          // },
        // },
        // {
          // skillName: "Figma",
          // fontAwesomeClassname: "simple-icons:figma",
          // style: {
            // color: "#F24E1E",
          // },
        // },
        // {
          // skillName: "Adobe Illustrator",
          // fontAwesomeClassname: "simple-icons:adobeillustrator",
          // style: {
            // color: "#FF7C00",
          // },
        // },
        // {
          // skillName: "Inkscape",
          // fontAwesomeClassname: "simple-icons:inkscape",
          // style: {
            // color: "#000000",
          // },
        // },
      // ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
      // siteName: "HackerRank",
      // iconifyClassname: "simple-icons:hackerrank",
      // style: {
        // color: "#2EC866",
      // },
      // profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
      // siteName: "Codechef",
      // iconifyClassname: "simple-icons:codechef",
      // style: {
        // color: "#5B4638",
      // },
      // profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
      // siteName: "Codeforces",
      // iconifyClassname: "simple-icons:codeforces",
      // style: {
        // color: "#1F8ACB",
      // },
      // profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
      // siteName: "Hackerearth",
      // iconifyClassname: "simple-icons:hackerearth",
      // style: {
        // color: "#323754",
      // },
      // profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
      // siteName: "Kaggle",
      // iconifyClassname: "simple-icons:kaggle",
      // style: {
        // color: "#20BEFF",
      // },
      // profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Gujarat Technological University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "gtu.png",
      alt_name: "GOVERNMENT ENGINEERING COLLEGE, RAJKOT",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, COA, Java etc.",
        "⚡ Apart from this, I have done courses on java, php and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://gtu.ac.in",
    },
    {
      title: "Ramkrishna Vidhya bhavan",
      subtitle: "Higher Secondary Education(GHSEB)",
      logo_path: "12.png",
      alt_name: "RKVD",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ Percentage : 70.00 %",
        // "⚡ Apart from this, I have done courses on java, php and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have 
  // received award from respected director for consistently best performance in academics.",
      ],
      website_link: "",
    },
    {
      title: "Archhna Vidhya bhavan ",
      subtitle: "Higher Education(GHSEB)",
      logo_path: "10.png",
      alt_name: "Archhna",
      duration: "2017-2018",
      descriptions: [
        "⚡ Percentage : 75.00 %",
        // "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, COA, Java etc.",
        // "⚡ Apart from this, I have done courses on java, php and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have 
  //  / received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://archanaschool.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- AI/ML",
      logo_path: "AI.png",
      certificate_link:
        "https://drive.google.com/file/d/13SlNAtCrpHdyQD0TIWZI1Q2FTMtzK0er/view?usp=share_link",
      alt_name: "GECR",
      color_code: "#FFFFFF",
    },
    {
      title: "php",
      subtitle: "- Linkedin",
      logo_path: "php.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/ff0b995dd1662d15a1532e9acf70af41a1c1ced6b043ca51d7c4ba56124a7094?trk=share_certificate",
      alt_name: "php",
      color_code: "#00000099",
    },
    {
      title: "Node js",
      subtitle: "- Linkedin",
      logo_path: "node.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/b04ba48764a1d2168c6f177857490b0eb696abdee6f3339e978f1b8563d547bf?trk=share_certificate",
      alt_name: "Linkedin",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        // {
          // title: "Associate AI Engineer",
          // company: "Legato Health Technology",
          // company_url: "https://legatohealthtech.com/",
          // logo_path: "legato_logo.png",
          // duration: "June 2020 - PRESENT",
          // location: "Hyderabad, Telangana",
          // description:
            // // // "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          // color: "#0879bf",
        // },
        // {
          // title: "Android and ML Developer",
          // company: "Muffito Incorporation",
          // company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          // logo_path: "muffito_logo.png",
          // duration: "May 2018 - Oct 2018",
          // location: "Pune, Maharashtra",
          // description:
            // // // // "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          // color: "#9b1578",
        // },
        // {
          // title: "Android Developer",
          // company: "FreeCopy Pvt. Ltd.",
          // company_url: "https://www.linkedin.com/company/freecopy/about/",
          // logo_path: "freecopy_logo.png",
          // duration: "Nov 2017 - Dec 2017",
          // location: "Ahmedabad, Gujarat",
          // description:
            // // // // "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          // color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer",
          company: "Lest Grow More",
          company_url: "#",
          logo_path: "i1.jpg",
          duration: "Sep 2022- Nov 2022",
          location: "Work From Home",
          description:
            "",
          color: "#ee3c26",
        },
        {
          title: "Web Developer",
          company: "",
          company_url:
            "#",
          logo_path: "i2.jpg",
          duration: "Jul 2022- Sep 2022",
          location: "Work From Home",
          description:
            " ",
          color: "#0071C5",
        },
        {
          title: "Software Engineer",
          company: "Standard Bank Group",
          company_url:
            "#",
          logo_path: "i3.jpg",
          duration: "Aug 2022 - Dec 2022",
          location: "Work From Home",
          description:
            "",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
          // title: "Google Explore ML Facilitator",
          // company: "Google",
          // company_url: "https://about.google/",
          // logo_path: "google_logo.png",
          // duration: "June 2019 - April 2020",
          // location: "Hyderabad, Telangana",
          // description:
            // // // // "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          // color: "#4285F4",
        // },
        // {
          // title: "Microsoft Student Partner",
          // company: "Microsoft",
          // company_url: "https://www.microsoft.com/",
          // logo_path: "microsoft_logo.png",
          // duration: "Aug 2019 - May 2020",
          // location: "Hyderabad, Telangana",
          // description:
            // // // "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          // color: "#D83B01",
        // },
        // {
          // title: "Mozilla Campus Captain",
          // company: "Mozilla",
          // company_url: "https://www.mozilla.org/",
          // logo_path: "mozilla_logo.png",
          // duration: "Oct 2019 - May 2020",
          // location: "Kurnool, Andhra Pradesh",
          // description:
            // // // "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          // color: "#000000",
        // },
        // {
          // title: "Developer Students Club Member",
          // company: "DSC IIITDM Kurnool",
          // company_url:
            // "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          // logo_path: "dsc_logo.png",
          // duration: "Jan 2018 - May 2020",
          // location: "Kurnool, Andhra Pradesh",
          // description:
            // // // "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          // color: "#0C9D58",
        // },
        // {
          // title: "Developer Program Member",
          // company: "Github",
          // company_url: "https://github.com/",
          // logo_path: "github_logo.png",
          // duration: "July 2019 - PRESENT",
          // location: "Work From Home",
          // description:
            // // // // "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          // color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
  "My projects makes use of vast variety of latest technology tools. My best experience is to create web applicationprojects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Engineering Courses",
      createdAt: "2020-03-06T16:26:54Z",
      description: "in this project, we are going to guide those students which are enroll in engineering and they students are not know anything about their course, books , etc. ",
      url:
        "https://engineeringcourses003.000webhostapp.com/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Niraj.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "#",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "129, Ishwarkrupa Soc-2, Lambe Hanuman Road, Surat City, Gujarat-395006",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/dV9K3DLamiheM9nz6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9978003438",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
