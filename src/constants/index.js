import {
  agency,
  mobile,
  backend,
  creator,
  dataanalyst,
  vehicleclassification,
  cryptocurrency,
  programmer,
  entrepreneur,
  productive,
  ai,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  xinerlink,
  //tesla,
  anyoneai,
  //shopify,
  freqtrade,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  dart,
  android,
  learning,
  creditguard,
  moviesreview,
  pythondeveloper,
  machinelearningengineer,
  cryptochallenge,
  vertexai,
  imageclassification,
  homecreditrisk,
  gentetoxica,
  fumanyi,
  topo,
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Python Developer",
      icon: pythondeveloper,
    },
    {
      title: "AI Developer",
      icon: ai,
    },
    {
      title: "ML Engineer",
      icon: machinelearningengineer,
    },
    {
      title: "Full Stack Developer",
      icon: programmer,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
      experienceYears: "1",
    },
    {
      name: "JavaScript",
      icon: javascript,
      experienceYears: "1",
    },
    {
      name: "Dart",
      icon: dart,
      experienceYears: "1",
    },
    //{
    //  name: "HTML 5",
    //  icon: html,
    //  experienceYears: "1",
    //},
    //{
    //  name: "CSS 3",
    //  icon: css,
    //  experienceYears: "1",
    //},
    //{
    //  name: "TypeScript",
    //  icon: typescript,
    //  experienceYears: "1",
    //},
    {
      name: "React JS",
      icon: reactjs,
      experienceYears: "1",
    },
    //{
    //  name: "Redux Toolkit",
    //  icon: redux,
    //  experienceYears: "1",
    //},
    {
      name: "Tailwind CSS",
      icon: tailwind,
      experienceYears: "1",
    },
    //{
    //  name: "Node JS",
    //  icon: nodejs,
    //  experienceYears: "1",
    //},
    {
      name: "MongoDB",
      icon: mongodb,
      experienceYears: "1",
    },
    //{
    //  name: "Three JS",
    //  icon: threejs,
    //  experienceYears: "1",
    //},
    //{
    //  name: "git",
    //  icon: git,
    //  experienceYears: "1",
    //},
    //{
    //  name: "figma",
    //  icon: figma,
    //  experienceYears: "1",
    //},
    {
      name: "docker",
      icon: docker,
      experienceYears: "1",
    },
  ];
  
  /* Work Experience */
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company_name: "AnyoneAI",
      icon: anyoneai,
      iconBg: "#182B56",
      date: "Feb 2023 - Aug 2023",
      points: [
        "Developed and deployed machine learning models using PyTorch, TensorFlow, and Scikit-learn for diverse projects.",
        "Participated in a prestigious fellowship program focused on advancing top talent across Latin America.",
        "Accumulated over 650 hours of training in NLP, Computer Vision, Predictive Analysis, and MLOps practices involving AWS, Docker, Linux, Flask, and Redis.",
        "Automated data retrieval, charting, and reporting via an Apache Airflow pipeline, significantly reducing report generation time while improving accuracy and data visibility.",
        "Created a machine learning model and pipeline to predict loan repayment probability for home credit applicants, utilizing Python, Pandas, Scikit-learn, Matplotlib, and Seaborn, with AUC as the evaluation metric."
      ],
    },
    {
      title: "Business Intelligence Analyst",
      company_name: "Xinerlink",
      icon: xinerlink,
      iconBg: "#FFFFFF",
      date: "Aug 2022 - to date",
      points: [
        "Developed real-time dashboards with interactive visualizations using Power BI, facilitating quick decision-making by monitoring key performance indicators and operational metrics.",
        "Managed extensive databases using PostgreSQL and SQL, ensuring data integrity, reliability, and accessibility. I leveraged my strong SQL skills to design and optimize complex queries, stored procedures, and views, enabling efficient data retrieval, analysis, and reporting.",
        "Collaborated cross-functionally to create custom reports, enabling data-driven decisions with clear visual insights."
      ],
    },
    {
      title: "Professional growth",
      company_name: "During this career break, I pursued a path of continuous professional development and broadened my skill set through various enriching experiences:",
      icon: learning,
      iconBg: "#050816",
      date: "Sep 2021 - Aug 2022",
      points: [
        "Skill Refinement: Actively honed my skills as a Data Scientist, dedicating time to enhancing my expertise in data analysis, machine learning, and data-driven decision-making.",
        "Renowned Training: Engaged in rigorous training programs provided by esteemed institutions like FIUBA Consulting, ensuring that I stayed current with industry best practices and emerging trends in data science.",
        "Real-world Challenges: Seized the invaluable opportunity to participate in a demanding Dataton organized by Media.Monks in collaboration with Mercadolibre. This event allowed me to apply my data science skills to solve real-life challenges, further sharpening my problem-solving abilities.",
        "Collaborative Endeavors: Demonstrated my dedication to professional growth by actively contributing to a variety of exciting projects at Alkemy. Collaborating with multidisciplinary teams, I leveraged my knowledge to develop and implement innovative solutions, thereby solidifying my expertise in data science."
      ],
    },
    {
      title: "Data Scientist for Finance",
      company_name: "Freelancer",
      icon: freqtrade,
      iconBg: "#FFFFFF",
      date: "Sep 2020 - Sep 2021",
      points: [
        "Developed and executed trading strategies using Freqtrade and Python, capitalizing on advanced data analysis capabilities and Freqtrade's robust features.",
        "Crafted custom trading strategies using Python and pandas.",
        "Conducted rigorous backtesting of strategies, evaluating performance and identifying areas for enhancement with historical market data from various exchanges.",
        "Employed hyper-optimization techniques, including machine learning, to fine-tune trading strategy parameters such as buy/sell points, take profit, stop-loss, and trailing stop-loss.",
        "Tested strategies in simulated and live trading modes, actively monitoring performance and making necessary adjustments.",
        "Utilized the Edge module to determine historical trade expectancy by market and implemented risk-based trade sizing strategies.",
        "Controlled and monitored trading activities through Telegram.",
        "Conducted thorough analysis of backtesting data and Freqtrade trading history stored in SQL databases, leveraging automated standard plots and interactive data environments for comprehensive reporting and insights."
      ],
    },
    {
      title: "Mobile App Developer",
      company_name: "Freelancer",
      icon: android,
      iconBg: "#E6DEDD",
      date: "Mar 2019 - Sep 2020",
      points: [
        "Developed and published three Flutter/Dart mobile apps for Android.",
        "Designed and implemented user interfaces that are intuitive and visually appealing.",
        "Conducted regular app testing, debugging, and optimization to ensure top performance.",
        "Implemented ASO strategies to improve app visibility and increase downloads.",
        "Achieved 1000+ downloads for one application.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Matías's infectious curiosity and team-focused approach drive continuous improvement. He excels in both technical problem-solving and motivating the team to excel further.",
      name: "Gonzalo Diez",
      designation: "Sr. Data Analyst",
      company: "Mondelēz",
      image: "https://media.licdn.com/dms/image/D4D03AQHf07SJk-jr8w/profile-displayphoto-shrink_100_100/0/1693753270034?e=1699488000&v=beta&t=-8cv07WZ_NxNaL-1vFFre5mpBs52Z2Dk-rbwo12YSwM",
      linkedin: "https://www.linkedin.com/in/gonzalo-damian-diez/"
    },
    {
      testimonial:
        "Matías is an exceptional colleague with strong technical problem-solving skills in artificial intelligence. Highly qualified and reliable for any machine learning role.",
      name: "Matías Reyes",
      designation: "ML Engineer",
      company: "AnyoneAI",
      image: "https://media.licdn.com/dms/image/D5603AQGIuW6K-U2P-Q/profile-displayphoto-shrink_200_200/0/1635994225725?e=1699488000&v=beta&t=tAeoBjQAnPA1NYI64FxfKvWJWeluoDrmgRBHXsOCOOI",
      linkedin: "https://www.linkedin.com/in/developer-matias-reyes/"
    },
    {
      testimonial:
        "Matías is a dynamic AI and data science professional with creativity, adaptability, and a strong work ethic. Highly recommended for his diverse skills and impact-driven approach.",
      name: "Jhonatan Camasca",
      designation: "Data Scientist",
      company: "Deloitte",
      image: "https://media.licdn.com/dms/image/C4E03AQGmas6u5bdk1g/profile-displayphoto-shrink_200_200/0/1644886382126?e=1699488000&v=beta&t=iNgqhqSXVguXl2GliuNC0FLD2hCdjjSyBfIkSbEww_Y",
      linkedin: "https://www.linkedin.com/in/jhonatancamasca/"
    },
    {
      testimonial:
        "Matías is an exceptional AI and Data Science professional known for his collaboration, quick learning, and unwavering positivity. Highly recommended for his dedication and adaptability.",
      name: "Lucio Rapetti",
      designation: "AI Developer",
      company: "AnyoneAI",
      image: "https://media.licdn.com/dms/image/D4D03AQEuaLhNfNGY_Q/profile-displayphoto-shrink_100_100/0/1689263899742?e=1699488000&v=beta&t=cMztC04f77UoTJ9G1JTe32q8LwRjwqQvMYYsB0OFURE",
      linkedin: "https://www.linkedin.com/in/lucio-f-rapetti-ab619235/"
    },
    {
      testimonial:
        "Matías, a colleague for over a year, shines in problem-solving and commitment in our 6-month Machine Learning project. A skilled professional and friend; highly recommended.",
      name: "Yessid Rios",
      designation: "Tutor ML Engineer",
      company: "AnyoneAI",
      image: "https://media.licdn.com/dms/image/C5603AQGRThEUbMUAEQ/profile-displayphoto-shrink_100_100/0/1637270545970?e=1699488000&v=beta&t=K1IAl-OS-0w1vSGwx64VM96i-dyzltPp0YZA8fLnioY",
      linkedin: "https://www.linkedin.com/in/yessid-rios-prada/"
    },
    {
      testimonial:
        "Matías consistently showed a positive attitude, solving challenges creatively, contributing to the team with skill, open to collaboration, dedicated, and detail-oriented. Would gladly collaborate again.",
      name: "Fabian Moreno",
      designation: "Data Scientist",
      company: "AnyoneAI",
      image: "https://media.licdn.com/dms/image/D4E03AQGI4XXepxb9BQ/profile-displayphoto-shrink_200_200/0/1688091954918?e=1699488000&v=beta&t=SiPeUDFMZs4knH_fnHSJrrna1fcsYzYWMjMhfKUTX10",
      linkedin: "https://www.linkedin.com/in/fabianmorenodata/"
    },
  ];
  
  const projects = [
    {
      name: "Credit Risk Analysis",
      description:
        "API service that is backed by a machine learning model that will accept a financial profile and will be able to predict a credit risk score for that profile.",
      tags: [
        {
          name: "Python",
          color: "tag-red-gradient-dark",
        },
        {
          name: "FastAPI",
          color: "tag-yellow-gradient-dark",
        },
        {
          name: "Scikit-learn",
          color: "tag-green-blue-gradient-dark",
        },
        {
          name: "Pandas",
          color: "tag-purple-pink-gradient-dark",
        },
        {
          name: "Numpy",
          color: "tag-cyan-teal-gradient-dark",
        },
        {
          name: "HTML",
          color: "tag-gold-orange-gradient-dark",
        },
        {
          name: "CSS",
          color: "tag-red-purple-gradient-dark",
        },
        {
          name: "Redis",
          color: "tag-blue-cyan-gradient-dark",
        },
        {
          name: "Docker",
          color: "tag-orange-pink-gradient-dark",
        },
        {
          name: "Tensorflow",
          color: "tag-deep-purple-indigo-gradient-darker",
        },
        {
          name: "Jupyter Notebook",
          color: "tag-teal-purple-gradient-darker",
        },
      ],
      image: creditguard,
      source_code_link: "https://github.com/tutecode/credit-risk-analysis",
      category: "AI",
    },
    {
      name: "Sentiment Analysis on Movies Review",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: moviesreview,
      source_code_link: "https://github.com/tutecode/sentiment-analysis-on-movies-reviews/tree/main",
      category: "AI",
    },
    {
      name: "Vehicle Classification",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: vehicleclassification,
      source_code_link: "https://github.com/tutecode/vehicle-classification",
      category: "AI",
    },
    {
      name: "Image Classification ML API",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: imageclassification,
      source_code_link: "https://github.com/tutecode/image-classification-ml-api",
      category: "AI",
    },
    {
      name: "Home Credit Default Risk",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: homecreditrisk,
      source_code_link: "https://github.com/tutecode/home-credit-default-risk",
      category: "AI",
    },
    {
      name: "Marketing Agency",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: agency,
      source_code_link: "https://github.com/tutecode/FullStack-with-Django-and-React",
      category: "web_development",
    },
    {
      name: "Gente Toxica App",
      description:
        "Evaluating a newly launched cryptocurrency initiative at Mercado Libre Brasil using three datasets (transactions, users, accounts) from Dec 23 to Dec 31, post-launch period.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Dart",
          color: "green-text-gradient",
        },
        {
          name: "Android",
          color: "green-text-gradient",
        },
      ],
      image: gentetoxica,
      source_code_link: "https://github.com/tutecode/gente_toxica_app",
      category: "mobile_app",
    },
    {
      name: "Fumanyi App",
      description:
        "Evaluating a newly launched cryptocurrency initiative at Mercado Libre Brasil using three datasets (transactions, users, accounts) from Dec 23 to Dec 31, post-launch period.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Dart",
          color: "green-text-gradient",
        },
        {
          name: "Android",
          color: "green-text-gradient",
        },
      ],
      image: fumanyi,
      source_code_link: "https://github.com/tutecode/fumanyi_app/tree/master",
      category: "mobile_app",
    },
    {
      name: "Botonera Topo App",
      description:
        "Evaluating a newly launched cryptocurrency initiative at Mercado Libre Brasil using three datasets (transactions, users, accounts) from Dec 23 to Dec 31, post-launch period.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Dart",
          color: "green-text-gradient",
        },
        {
          name: "Android",
          color: "green-text-gradient",
        },
      ],
      image: topo,
      source_code_link: "https://github.com/tutecode/botonera_topo_app",
      category: "mobile_app",
    },
    {
      name: "Crypto Challenge",
      description:
        "Evaluating a newly launched cryptocurrency initiative at Mercado Libre Brasil using three datasets (transactions, users, accounts) from Dec 23 to Dec 31, post-launch period.",
      tags: [
        {
          name: "Power BI",
          color: "blue-text-gradient",
        },
        {
          name: "Tableau",
          color: "green-text-gradient",
        },
      ],
      image: cryptochallenge,
      source_code_link: "https://www.youtube.com/watch?v=sBd1Av86CiI",
      category: "hackaton",
    },
    {
      name: "Google Vertex AI Hackathon",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "Python",
          color: "orange-text-gradient",
        },
        {
          name: "FastAPI",
          color: "pink-text-gradient",
        },
        {
          name: "Vertex AI",
          color: "blue-text-gradient",
        },
        {
          name: "PaLM2",
          color: "green-text-gradient",
        },
      ],
      image: vertexai,
      source_code_link: "https://github.com/tutecode/Google-VertexAI-FastAPI",
      category: "hackaton",
    },
    //{
    //  name: "Trip Guide",
    //  description:
    //    "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //  tags: [
    //    {
    //      name: "nextjs",
    //      color: "blue-text-gradient",
    //    },
    //    {
    //      name: "supabase",
    //      color: "green-text-gradient",
    //    },
    //    {
    //      name: "css",
    //      color: "pink-text-gradient",
    //    },
    //  ],
    //  image: tripguide,
    //  source_code_link: "https://github.com/",
    //  category: "Web3",
    //},
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  