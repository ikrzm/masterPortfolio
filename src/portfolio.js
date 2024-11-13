/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ikram's Portfolio",
  description:
    "A passionate Data Engineer focused on building scalable data pipelines and implementing efficient data solutions.",
  og: {
    title: "Ikram Zouaoui Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Ikram Zouaoui",
  logo_name: "IkramZouaoui",
  nickname: "Data Engineer",
  subTitle:
    "A data engineering professional specialized in building robust data pipelines, implementing ETL processes, and creating efficient data solutions for large-scale applications.",
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:ikramzouaoui95@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Medium",
    link: "",
    fontAwesomeIcon: "fa-medium",
    backgroundColor: "#000000",
  },
];

const skills = {
  data: [
    {
      title: "Data Engineering & Cloud",
      fileName: "DataEngineeringImg",
      skills: [
        "⚡ Building scalable data pipelines and ETL processes for large-scale data processing",
        "⚡ Implementing real-time data streaming solutions using Apache Kafka and Azure Event Hubs",
        "⚡ Developing microservices for efficient data integration and processing",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "simple-icons:snowflake",
          style: {
            color: "#29B5E8",
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
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Data Visualization & Analytics",
      fileName: "AnalyticsImg",
      skills: [
        "⚡ Creating interactive dashboards and reports using Power BI",
        "⚡ Developing data visualization solutions for business intelligence",
        "⚡ Implementing data quality monitoring and analytics solutions",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title:
        "ISIMA (Institut Supérieur d'Informatique, de Modélisation et de leurs Applications)",
      subtitle: "Engineering Degree in Information Systems for Decision Making",
      logo_path: "isima_logo.png",
      alt_name: "ISIMA",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ Studied advanced concepts in data engineering, information systems, and decision making",
        "⚡ Specialized in data processing, ETL development, and business intelligence",
        "⚡ Completed projects in data pipeline development and real-time data processing",
      ],
      website_link: "",
    },
    {
      title: "CPGE (Classes Préparatoires Aux Grandes Écoles)",
      subtitle: "Maths and Physics",
      logo_path: "cpge_logo.jpeg",
      alt_name: "CPGE",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ Studied advanced mathematics and physics",
        "⚡ Developed strong analytical and problem-solving skills",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Azure Data Engineer Associate (DP-203)",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link: "",
      alt_name: "Microsoft Azure",
      color_code: "#00A4EF",
    },
    {
      title: "Azure Data Fundamentals (DP-900)",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link: "",
      alt_name: "Microsoft Azure",
      color_code: "#0089D6",
    },
    {
      title: "Azure Event Hubs & Stream Analytics",
      subtitle: "- Microsoft Learn",
      logo_path: "azure_logo.jpeg",
      certificate_link: "",
      alt_name: "Microsoft Azure",
      color_code: "#0078D4",
    },
    {
      title: "Snowflake SnowPro Core",
      subtitle: "- Snowflake Cloud Data Platform",
      logo_path: "snowflake_logo.png",
      certificate_link: "",
      alt_name: "Snowflake",
      color_code: "#29B5E8",
    },
    {
      title: "Apache Kafka on Azure Event Hubs",
      subtitle: "- Microsoft & Confluent",
      logo_path: "kafka_logo.png",
      certificate_link: "",
      alt_name: "Kafka",
      color_code: "#231F20",
    },
    {
      title: "Docker on Azure",
      subtitle: "- Microsoft Learn",
      logo_path: "docker_logo.png",
      certificate_link: "",
      alt_name: "Docker",
      color_code: "#1488C6",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as a Data Engineer, focusing on building and maintaining data pipelines, implementing ETL processes, and creating data visualization solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Engineer",
          company: "Michelin",
          company_url: "https://www.michelin.com/",
          logo_path: "michelin_logo.png",
          duration: "Oct 2023 - Present",
          location: "Clermont-Ferrand, FR",
          description:
            "Working on data transformations, pipeline development, and implementing microservices for data integration. Maintaining data pipeline architecture and creating data visualizations.",
          color: "#0879bf",
        },
        {
          title: "Data Engineer en alternance",
          company: "Michelin",
          company_url: "https://www.michelin.com/",
          logo_path: "michelin_logo.png",
          duration: "2022 - 2023",
          location: "Clermont-Ferrand, FR",
          description:
            "Developed real-time ETL processes and monitored data quality. Identified team needs and project scope.",
          color: "#9b1578",
        },
        {
          title: "Intern Data Analyst",
          company: "Michelin",
          company_url: "https://www.michelin.com/",
          logo_path: "michelin_logo.png",
          duration: "2022",
          location: "Clermont-Ferrand, FR",
          description:
            "Trained teams on Power BI usage, developed Power BI dashboards for data source monitoring, and analyzed variables impacting tire quality.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
