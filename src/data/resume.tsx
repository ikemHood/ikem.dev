import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA_ = {
  name: "Ikem Peter",
  initials: "Ikem",
  url: "https://Ikem.dev",
  location: "LA, NG",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "Typescript",
    "Solidity",
    "Cairo",
    "Rust",
    "Lua",
    "Python",
    "Go",
    "React",
    "Next.js",
    "Node.js",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ikem@ikem.dev",
    tel: "+2348101354115",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ikemHood",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ikem-peter-246097204",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ikempeter3",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:ikem@ikem.dev",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;


export const DATA = {
  name: "Ikem Peter",
  initials: "Ikem",
  url: "https://www.ikem.dev",
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/Lagos,+Nigeria",
  description:
    "A problem solver, I help entrepreneurs and business owners bring their software ideas to life.",
  summary:
    "Full-stack Web3 tinkerer energizing Vynix Labs. working on DeFi, AI agents, and open-source contributions.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Solidity",
    "Cairo",
    "Rust",
    "Ralph",
    "Move",
    "Go",
    "Lua",
    "React",
    "Next.js",
    "Node.js",
    "TailwindCSS",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ikem@ikem.dev",
    tel: "+2348101354115",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ikemHood",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ikem-peter-246097204",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ikempeter3",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ikem@ikem.dev",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "SmartEarners team",
      href: "https://smartearners.team/",
      badges: [],
      location: "Remote",
      title: "Web3 Software Developer",
      logoUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZCIgdmlld0JveD0iMCAwIDIwMCAyMDAiPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiNmZTk4MzMiIGQ9Ik0tLjA1Mi0uMDUyaDIwMHYyMDBoLTIwMHYtMjAwWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiMwNTAzNGMiIGQ9Ik0xMDguMDczIDU3Ljg2NWMuMDQ5LjE0Ni4xNTMuMjE2LjMxMy4yMDguOTIuNDUzIDEuNTI3IDEuMTgyIDEuODIzIDIuMTg4YTcuMjA2IDcuMjA2IDAgMCAxLS4wNTIgMS45NzkuOTI5LjkyOSAwIDAgMC0uMzEzLjYyNSAzLjQ3NiAzLjQ3NiAwIDAgMS0xLjUxIDEuNDU4Yy0uMDUyLjU4OS0uMDcgMS4xOC0uMDUyIDEuNzcxLjA0MyAxLjcwMS4wNzcgMy40MDMuMTA0IDUuMTA0LjI2Ny4wMzEuNTA5LS4wMDMuNzI5LS4xMDRsMi43MDgtLjUyMWEzLjU3MiAzLjU3MiAwIDAgMCAxLjY2Ny0uMzEzYzEuNjYtLjM0NiAzLjMyNy0uNjU5IDUtLjkzOC4yNzYuMDA5LjUyLS4wNi43MjktLjIwOGE0LjMzNCA0LjMzNCAwIDAgMCAxLjc3MS0uMzEzaC4yMDhhMy45OCAzLjk4IDAgMCAwIDEuMTQ2LS4zMTNsMS41NjMtLjIwOGMuMzQ4LS4wNDEuNjk1LS4wOTMgMS4wNDItLjE1NmEuMjMzLjIzMyAwIDAgMCAuMTA0LS4xNTYgMzcuMTA5IDM3LjEwOSAwIDAgMCAxLjU2My0uMjA4Yy4zNDgtLjA0MS42OTUtLjA5MyAxLjA0Mi0uMTU2YS4yMzMuMjMzIDAgMCAwIC4xMDQtLjE1NiAxOC41NTMgMTguNTUzIDAgMCAwIDEuMzU0LS4yMDggMi45MDYgMi45MDYgMCAwIDAgMS41NjMtLjMxM2MuMjQxLS4wNTEuNDgzLS4wODYuNzI5LS4xMDQuMzQ4LS4wNDEuNjk1LS4wOTMgMS4wNDItLjE1NmEuMjMzLjIzMyAwIDAgMCAuMTA0LS4xNTZsMS41NjMtLjIwOGMuMzQ4LS4wNDEuNjk1LS4wOTMgMS4wNDItLjE1NmEuMjMzLjIzMyAwIDAgMCAuMTA0LS4xNTYuNDgyLjQ4MiAwIDAgMCAuNDE3LS4xMDRjLjQ3Ny4wMDYuOTI4LS4wNjMgMS4zNTQtLjIwOC4zMzMuMDU2LjYxLS4wMTQuODMzLS4yMDhhMy41MjYgMy41MjYgMCAwIDEgMS43NzEtMS44NzVjLjI5Ny0uMDczLjU3NS0uMTc4LjgzMy0uMzEzYTUuNjIyIDUuNjIyIDAgMCAxIDIuMjkyLjMxM2MuMDQ5LjE0Ni4xNTMuMjE2LjMxMy4yMDguMDM1LjA4Ny4xMDUuMTIyLjIwOC4xMDQuMTM5LjIwOC4zMTMuMzgyLjUyMS41MjEuMzEzLjI3Ny41MjEuNjI0LjYyNSAxLjA0MmE2LjMwOSA2LjMwOSAwIDAgMSAuMjA4IDEuODc1di4zMTNhMS41NjYgMS41NjYgMCAwIDAtLjMxMy43MjlsLS4xMDQuMjA4Yy0uMTQ3LjA0OS0uMjE2LjE1My0uMjA4LjMxM2E1LjA3NSA1LjA3NSAwIDAgMS0xLjA0Mi45MzhjLS4yNDUuMDEtLjQxOC4xMTQtLjUyMS4zMTNhMi4wMiAyLjAyIDAgMCAwLTEuMzAyLjQxNyAzODAuMTYgMzgwLjE2IDAgMCAwLTIuMTM1IDMuNzVjLS4xNDcuMDQ5LS4yMTYuMTUzLS4yMDguMzEzYTUwLjE4NCA1MC4xODQgMCAwIDAtMi4xODggMy43NWMtLjE0Ny4wNDktLjIxNi4xNTMtLjIwOC4zMTNhMy43NDIgMy43NDIgMCAwIDAtLjQxNy43MjljLS4zMjIuMzYtLjU2NS43NzctLjcyOSAxLjI1YTIxMy41MDcgMjEzLjUwNyAwIDAgMC00LjU4MyA3LjcwOGMtLjE0Ny4wNDktLjIxNi4xNTMtLjIwOC4zMTMtLjM2NC41ODctLjcyOCAxLjE3OC0xLjA5NCAxLjc3MWE5LjY2MSA5LjY2MSAwIDAgMS0uMDUyIDIuMzk2LjkyOS45MjkgMCAwIDAtLjMxMy42MjUgMy43MjMgMy43MjMgMCAwIDEtMS40NTggMS40NThjLS4xOTYtLjAyOC0uMzM0LjA0MS0uNDE3LjIwOC0xLjcxNi41MDQtMy4xMDUuMDUzLTQuMTY3LTEuMzU0LjAwNy0uMTU5LS4wNjEtLjI2My0uMjA4LS4zMTNsLS4yMDgtLjcyOWE1LjI3MyA1LjI3MyAwIDAgMSAwLTIuMDgzIDcuMTU2IDcuMTU2IDAgMCAxIC43MjktMS40NThjLS4xMDUtLjU3LS4yMDktMS4xMjYtLjMxMy0xLjY2N2EuNzQ1Ljc0NSAwIDAgMC0uMjA4LS42MjUgMy4xOTQgMy4xOTQgMCAwIDAtLjE1Ni0uOTM4Yy0yLjE1My0uNzk5LTMuMDM5LTIuMzI3LTIuNjU2LTQuNTgzYS43NDIuNzQyIDAgMCAwIC4yMDgtLjYyNWMuODQ3LTEuNTY5IDIuMTY2LTIuMTk0IDMuOTU4LTEuODc1LjE5Ny4xODEuNDQxLjI4Ni43MjkuMzEzIDEuNDg4Ljc1MyAyLjE2NSAxLjk2OCAyLjAzMSAzLjY0NmEzLjg4MSAzLjg4MSAwIDAgMS0uMzY1IDEuMTQ2Yy0uMTQ3LjA0OS0uMjE2LjE1My0uMjA4LjMxM2ExLjQ3OSAxLjQ3OSAwIDAgMC0uNjI1IDEuMTQ2IDcwLjI4OCA3MC4yODggMCAwIDEgLjMxMyAyLjE4OGMuMjA2LjAzNi4zNDYtLjAzNC40MTctLjIwOGExLjkxOSAxLjkxOSAwIDAgMSAuMzEzLS41MjFjLjE0Ny0uMDQ5LjIxNi0uMTUzLjIwOC0uMzEzLjczLTEuMTg0IDEuNDU5LTIuMzY1IDIuMTg4LTMuNTQyLjE0Ny0uMDQ5LjIxNi0uMTUzLjIwOC0uMzEzYTQuNDggNC40OCAwIDAgMSAuODMzLTEuMzU0Yy4xNDctLjA0OS4yMTYtLjE1My4yMDgtLjMxM2E0NjcuNzI2IDQ2Ny43MjYgMCAwIDEgNy4wODMtMTEuNDU4Yy4wNTYtLjAwNi4wOTItLjA0MS4xMDQtLjEwNGEyLjM4NiAyLjM4NiAwIDAgMC0xLjY2Ny4yMDggMjYuNTA1IDI2LjUwNSAwIDAgMC0xLjQ1OC4yMDggMi40NiAyLjQ2IDAgMCAwLTEuMTQ2LjMxM2gtLjIwOGEzNi4yNDQgMzYuMjQ0IDAgMCAwLTEuNzcxLjI2LjM0LjM0IDAgMCAwLS4yMDguMTU2aC0uMTA0YTI3Ljk5IDI3Ljk5IDAgMCAwLTEuMzU0LjIwOCA2LjU5MiA2LjU5MiAwIDAgMC0xLjc3MS40MTcgMTguNTUzIDE4LjU1MyAwIDAgMC0xLjM1NC4yMDguOTA2LjkwNiAwIDAgMC0uNzI5LjIwOGgtLjIwOGMtLjQ3OC4wNC0uOTMuMTQ0LTEuMzU0LjMxM2EzNy42OTggMzcuNjk4IDAgMCAxLTIuMDgzLjMxMyAyLjQ2IDIuNDYgMCAwIDAtMS4xNDYuMzEzaC0uMjA4YTMuOTY2IDMuOTY2IDAgMCAwLTEuMzU0LjMxMyAyLjAwMyAyLjAwMyAwIDAgMC0uNjI1LjEwNGMtLjYzMi4wNjYtMS4yNTcuMTctMS44NzUuMzEzYTEuOTIxIDEuOTIxIDAgMCAwLS42MjUuMDUyLjIzMy4yMzMgMCAwIDAtLjEwNC4xNTZoLS4yMDhhMjcuOTkgMjcuOTkgMCAwIDAtMS4zNTQuMjA4IDcuMzU4IDcuMzU4IDAgMCAwLS45MzguMTU2LjIzMy4yMzMgMCAwIDAtLjEwNC4xNTZoLS4zMTNhMy45NjYgMy45NjYgMCAwIDAtMS4zNTQuMzEzbC0uNjI1LjEwNGMtLjkuMDgzLTEuNzY4LjI1Ni0yLjYwNC41MjFoLS4yMDhhNi42NTcgNi42NTcgMCAwIDAtMS44NzUuNDE3aC0uMTA0Yy0uNjM1LjA2Ni0xLjI2LjE3LTEuODc1LjMxMy0uMjY5LS4wNDktLjQ3Ny4wMi0uNjI1LjIwOGEuNzE0LjcxNCAwIDAgMC0uNTIxLjEwNCAzLjU3MiAzLjU3MiAwIDAgMC0xLjY2Ny4zMTNjLS4zNzMuMDA1LS43Mi4wNzQtMS4wNDIuMjA4YTIuODk3IDIuODk3IDAgMCAwLTEuNTYzLjMxM2gtLjIwOGMtLjM4Mi4wNDctLjc2NC4wOTktMS4xNDYuMTU2YS4zNDQuMzQ0IDAgMCAwLS4yMDguMTU2Yy0uNTc2LjA2Ny0xLjEzMS4xNzEtMS42NjcuMzEzYTIuODk3IDIuODk3IDAgMCAwLTEuNTYzLjMxMyA1LjY3IDUuNjcgMCAwIDAtMS4xNDYuMjA4IDIuODk3IDIuODk3IDAgMCAwLTEuNTYzLjMxMyA0NC4wNjUgNDQuMDY1IDAgMCAwLTMuMjI5LjYyNSAxLjczIDEuNzMgMCAwIDAtLjgzMy4xMDQgMS45MjIgMS45MjIgMCAwIDAtLjYyNS4wNTIuMjMzLjIzMyAwIDAgMC0uMTA0LjE1NiAxNS4yMDcgMTUuMjA3IDAgMCAwLTEuNTYzLjIwOGMtLjM0OC4wNDEtLjY5NS4wOTMtMS4wNDIuMTU2YS4yMzMuMjMzIDAgMCAwLS4xMDQuMTU2IDIuODUyIDIuODUyIDAgMCAwLTEuMTQ2LjIwOCAzLjM4MSAzLjM4MSAwIDAgMC0uODMzLjA1Mi4zNDQuMzQ0IDAgMCAwLS4yMDguMTU2aC0uMTA0YTE1LjYzNyAxNS42MzcgMCAwIDAtMS43NzEuMzEzIDEuOTIyIDEuOTIyIDAgMCAwLS42MjUuMDUyLjIzMy4yMzMgMCAwIDAtLjEwNC4xNTZoLS4yMDhhMi44MjMgMi44MjMgMCAwIDAtLjkzOC4yMDhsLTEuMTQ2LjIwOGE3LjMyOCA3LjMyOCAwIDAgMC0xLjU2My4zMTMgOC41MjEgOC41MjEgMCAwIDAtMS4wNDIuMjA4IDguMDMgOC4wMyAwIDAgMC0xLjY2Ny4zMTMgMy4zMjIgMy4zMjIgMCAwIDEtLjYyNS4xNTYgMjUuMzkgMjUuMzkgMCAwIDAgMS44NzUgMS4wOTRjLjA0OS4xNDYuMTUzLjIxNi4zMTMuMjA4bDkuNzkyIDUuNjI1YTkuMjA1IDkuMjA1IDAgMCAxIDEuMTQ2LjYyNSAxMzcuNjEzIDEzNy42MTMgMCAwIDAgNi4yNSAzLjU0MmMuMDQ5LjE0Ni4xNTMuMjE2LjMxMy4yMDhhMzQuMDEzIDM0LjAxMyAwIDAgMCAzLjEyNSAxLjc3MWMuMDQ5LjE0Ni4xNTMuMjE2LjMxMy4yMDguNjY3LjQyIDEuMzYxLjgwMiAyLjA4MyAxLjE0Ni4wNDkuMTQ2LjE1My4yMTYuMzEzLjIwOGE0NC40MjQgNDQuNDI0IDAgMCAwIDMuMTI1IDEuNzcxYy4wNDkuMTQ2LjE1My4yMTYuMzEzLjIwOGExMDIuMDA1IDEwMi4wMDUgMCAwIDAgMy44NTQgMi4xODguOTI2LjkyNiAwIDAgMCAuNjI1LjMxMyAyMi4xNTYgMjIuMTU2IDAgMCAwIDEuNzcxIDEuMDQyYy4wNDkuMTQ2LjE1My4yMTYuMzEzLjIwOGEzNC4wOTYgMzQuMDk2IDAgMCAwIDMuMTI1IDEuNzcxYy4wNDkuMTQ3LjE1My4yMTYuMzEzLjIwOGEyMTAuNjk3IDIxMC42OTcgMCAwIDAgNS41MjEgMy4xMjVjLjA0OS4xNDcuMTUzLjIxNi4zMTMuMjA4LjIwMS4xMDMuNDA5LjIwNy42MjUuMzEzLjA0OS4xNDcuMTUzLjIxNi4zMTMuMjA4YS42MDMuNjAzIDAgMCAwIC40MTcuMjA4Yy4wNDkuMTQ3LjE1My4yMTYuMzEzLjIwOGw0Ljc5MiAyLjcwOGMuMDQ5LjE0Ny4xNTMuMjE2LjMxMy4yMDguNzA1LjQ0IDEuNDM0Ljg1NiAyLjE4OCAxLjI1bDEuMDQyLjYyNWMuMjAxLjEwMy40MDkuMjA3LjYyNS4zMTMuMDQ5LjE0Ny4xNTMuMjE2LjMxMy4yMDggMS4yNi43NTIgMi41NDYgMS40ODEgMy44NTQgMi4xODhhLjkyNi45MjYgMCAwIDAgLjYyNS4zMTMgNzEuNjg4IDcxLjY4OCAwIDAgMCAzLjk1OCAyLjI5MiAzOS40NyAzOS40NyAwIDAgMCAyLjA4My4yMDguOTI2LjkyNiAwIDAgMCAuNjI1LjMxMyAzLjQ4NyAzLjQ4NyAwIDAgMSAxLjU2MyAxLjg3NSA2Ljk1NyA2Ljk1NyAwIDAgMSAwIDIuMzk2IDMuNDY3IDMuNDY3IDAgMCAxLTEuNTYzIDEuODc1Yy0uMTU5LS4wMDctLjI2NC4wNjEtLjMxMy4yMDhoLS4xMDRhNC45MzMgNC45MzMgMCAwIDEtMi4zOTYuMTA0IDIuNTQ0IDIuNTQ0IDAgMCAxLTEuMDQyLS41MjEuNjM4LjYzOCAwIDAgMC0uMzY1LS4xMDRjLS44NTMuMDc3LTEuNjY5LjI1LTIuNDQ4LjUyMWEuNzE5LjcxOSAwIDAgMC0uNTIxLjEwNCAzLjU3MiAzLjU3MiAwIDAgMC0xLjY2Ny4zMTNoLS4xMDRjLS43NjkuMDg3LTEuNTMyLjIwOS0yLjI5Mi4zNjVhLjM0LjM0IDAgMCAwLS4yMDguMTU2LjcxOS43MTkgMCAwIDAtLjUyMS4xMDQgMi45MDYgMi45MDYgMCAwIDAtMS41NjMuMzEzbC0xLjU2My4yMDhjLS40NDguMDI2LS44NjUuMTMtMS4yNS4zMTNoLS4xMDRjLS43NjkuMDg3LTEuNTMyLjIwOS0yLjI5Mi4zNjVhLjM0LjM0IDAgMCAwLS4yMDguMTU2LjcxOS43MTkgMCAwIDAtLjUyMS4xMDQgMi45MDYgMi45MDYgMCAwIDAtMS41NjMuMzEzYy0uNTI1LjA0My0xLjA0Ni4xMTEtMS41NjMuMjA4LS4zNDguMDQxLS42OTUuMDkzLTEuMDQyLjE1NmEuMjMzLjIzMyAwIDAgMC0uMTA0LjE1NmgtLjIwOGE2Ny42NDYgNjcuNjQ2IDAgMCAxLTEuNjY3LjI2LjM0LjM0IDAgMCAwLS4yMDguMTU2aC0uMjA4Yy0uNzk4LjExNy0xLjU5Ny4yMzktMi4zOTYuMzY1YS4zNC4zNCAwIDAgMC0uMjA4LjE1NmgtLjEwNGEyNy45OSAyNy45OSAwIDAgMC0xLjM1NC4yMDhjLS4zMS4wNDgtLjYyMy4wODMtLjkzOC4xMDQtLjAzNCAxLjQwNyAwIDIuNzk2LjEwNCA0LjE2Ny4wNDkgMS43MDIuMTE5IDMuNDAzLjIwOCA1LjEwNGEyLjczIDIuNzMgMCAwIDEgMS40NTggMS41NjMgMy4zMSAzLjMxIDAgMCAwIC4yMDguNjI1Yy4wMTkuNzY4LS4wMTYgMS41MzEtLjEwNCAyLjI5MmEzLjUzOCAzLjUzOCAwIDAgMS0xLjY2NyAxLjc3MSAzLjMxIDMuMzEgMCAwIDAtLjYyNS4yMDggNy40MDIgNy40MDIgMCAwIDEtMi4xODggMCA0LjkxMiA0LjkxMiAwIDAgMS0xLjY2Ny0xLjI1Yy4wMDgtLjE1OS0uMDYyLS4yNjQtLjIwOC0uMzEzYTkuNjU3IDkuNjU3IDAgMCAxLS4zMTMtLjkzOHYtMS43NzFhMy4yOTYgMy4yOTYgMCAwIDAgLjIwOC0uNjI1Yy4yOC0uNzY3LjgwMS0xLjI4OCAxLjU2My0xLjU2My4wNy0uODE2LjEwNC0xLjY0OS4xMDQtMi41YTMyLjg5NCAzMi44OTQgMCAwIDAtLjIwOC00LjA2M3YtMS43NzFjLS4wMTMtLjExNC0uMDgyLS4xODItLjIwOC0uMjA4LS41ODEuMDk2LTEuMTM2LjIzNC0xLjY2Ny40MTdoLS4yMDhhMi44MjMgMi44MjMgMCAwIDAtLjkzOC4yMDggMTUuODMyIDE1LjgzMiAwIDAgMS0xLjc3MS4zMTMgMi44MjMgMi44MjMgMCAwIDAtLjkzOC4yMDggMi44OTMgMi44OTMgMCAwIDAtMS41NjMuMzEzIDcuODc4IDcuODc4IDAgMCAwLTIuMDgzLjQxN2gtLjIwOGwtLjgzMy4xMDRjLjAyNiAyLjUxOC4wOTUgNS4wMTguMjA4IDcuNS41MjEuMzEzLjkzOC43MjkgMS4yNSAxLjI1LS4wNDkuMzAxLjA1NS41MDkuMzEzLjYyNS4zOTMgMS42NTUtLjA1OCAzLjAwOS0xLjM1NCA0LjA2M2ExOS4zMTggMTkuMzE4IDAgMCAxLTEuNDU4LjYyNWMtMS45MDMuMTQzLTMuMjIzLS42NTYtMy45NTgtMi4zOTZhNS4yMiA1LjIyIDAgMCAxIC4xMDQtMi41LjYxLjYxIDAgMCAxIC4yMDgtLjQxN2MuMTQ2LS4wNDkuMjE2LS4xNTMuMjA4LS4zMTNhMS45MTggMS45MTggMCAwIDEgLjIwOC0uMzY1Yy4yMzQtLjI1MS41MTItLjQ0Mi44MzMtLjU3My4yODktLjAzMi41MzItLjE1NC43MjktLjM2NWE4LjQ0NSA4LjQ0NSAwIDAgMC0uMzEzLTEuNTEgMTUuNzU0IDE1Ljc1NCAwIDAgMC0uMTA0LTIuNXYtMi4zOTZhNC4wNzQgNC4wNzQgMCAwIDAtMS4wNDIuMjA4IDMuNTcyIDMuNTcyIDAgMCAwLTEuNjY3LjMxM2gtLjEwNGEyNi4zMTUgMjYuMzE1IDAgMCAwLTIuMjkyLjM2NS4zNDQuMzQ0IDAgMCAwLS4yMDguMTU2aC0uMjA4Yy0uNTkxLjA3Mi0xLjE4Mi4xNTktMS43NzEuMjZhLjM0NC4zNDQgMCAwIDAtLjIwOC4xNTZjLS40ODguMDU2LS45NzQuMTI1LTEuNDU4LjIwOGEyLjQ2IDIuNDYgMCAwIDAtMS4xNDYuMzEzIDIuODcgMi44NyAwIDAgMC0xLjE0Ni4yMDggMi45MDYgMi45MDYgMCAwIDAtMS41NjMuMzEzaC0uMjA4YTYuODMgNi44MyAwIDAgMC0xLjk3OS40MTdjLS4zNzMuMDA1LS43Mi4wNzUtMS4wNDIuMjA4YTIuOTA2IDIuOTA2IDAgMCAwLTEuNTYzLjMxMyAyLjg3IDIuODcgMCAwIDAtMS4xNDYuMjA4IDMuMzcgMy4zNyAwIDAgMC0uODMzLjA1Mi4zNDQuMzQ0IDAgMCAwLS4yMDguMTU2aC0uMTA0bC0xLjc3MS4yNmEuMzQ0LjM0NCAwIDAgMC0uMjA4LjE1NiA1LjQgNS40IDAgMCAxLS43MjkuMTA0IDMuOTM4IDMuOTM4IDAgMCAwLTEuMzU0LjMxMyAzLjU5MSAzLjU5MSAwIDAgMC0uODMzLjE1NmMtLjk0NyAxLjgyNy0yLjQ0IDIuNTQtNC40NzkgMi4xMzUtLjkwMy0uMzQ5LTEuNTYyLS45MzktMS45NzktMS43NzEuMDA4LS4xNTktLjA2Mi0uMjY0LS4yMDgtLjMxMy0uNTYxLTEuODM5LS4wNzUtMy4zMTUgMS40NTgtNC40MjdhNC4xMzYgNC4xMzYgMCAwIDEgMS42NjctLjQ2OSAzLjcgMy43IDAgMCAxIC40MTctLjcyOWMuMTQ2LS4wNDkuMjE2LS4xNTMuMjA4LS4zMTNsLjYyNS0xLjA0MmMuMTk5LS4xMDMuMzAzLS4yNzYuMzEzLS41MjFhNy4yNTcgNy4yNTcgMCAwIDEgLjcyOS0xLjI1Yy4xNDYtLjA0OS4yMTYtLjE1My4yMDgtLjMxM2wuMTA0LS4yMDhjLjE5OS0uMTAzLjMwMy0uMjc2LjMxMy0uNTIxYTE4LjcgMTguNyAwIDAgMSAxLjM1NC0yLjI5MmMuMzY2LS4yNDYuNTc1LS41OTMuNjI1LTEuMDQybDIuMTg4LTMuNzVjLjE0Ni0uMDQ5LjIxNi0uMTUzLjIwOC0uMzEzLjE1OC0uMzg1LjM2Ni0uNzMyLjYyNS0xLjA0Mi4xOTktLjEwMy4zMDMtLjI3Ni4zMTMtLjUyMWw0LjAxLTYuNzcxYy0uNDU4LTEuODExLjA0NS0zLjI4NiAxLjUxLTQuNDI3YTMuOTE5IDMuOTE5IDAgMCAxIC44MzMtLjI2IDcuODgxIDcuODgxIDAgMCAxIDEuNjY3LS4xMDRjLjMyMy4wMjcuNjM1LjA5Ni45MzguMjA4LjA0OS4xNDcuMTUzLjIxNi4zMTMuMjA4IDEuMzExLjg1MyAxLjg2NyAyLjA2OCAxLjY2NyAzLjY0NmExLjE1NiAxLjE1NiAwIDAgMC0uMjA4LjcyOSA5Ni4xOTggOTYuMTk4IDAgMCAxLS43MjkgMS4xNDZjLS4xMjguMDY4LS4xOTcuMTktLjIwOC4zNjUuMDIzLjQ2OS4xMjguOTAzLjMxMyAxLjMwMmE4LjMxOCA4LjMxOCAwIDAgMCAuMjA4IDEuMTQ2Yy0uMDA5LjI3Ni4wNi41Mi4yMDguNzI5LjAzOS40NDUuMTQzLjg2MS4zMTMgMS4yNS4wNDkuMTQ3LjE1My4yMTYuMzEzLjIwOC43NzMuMzU3IDEuMjk0Ljk0OCAxLjU2MyAxLjc3MWE2LjMxOSA2LjMxOSAwIDAgMSAuMjA4IDEuODc1IDk2LjM1NCA5Ni4zNTQgMCAwIDAtLjMxMyAxLjA0MiAzLjQzNiAzLjQzNiAwIDAgMS0xLjM1NCAxLjQ1OCA0LjMyNiA0LjMyNiAwIDAgMS0yLjgxMy4zMTNoLS4xMDRhLjkyOS45MjkgMCAwIDAtLjYyNS0uMzEzIDMuOTUxIDMuOTUxIDAgMCAxLTEuNDU4LTEuNTYzIDIuOTgzIDIuOTgzIDAgMCAwLS4zMTMtLjgzMyAzLjkzNyAzLjkzNyAwIDAgMSAuNTczLTIuNzA4Yy4zOC0uMzc4LjcxLS43NzcuOTktMS4xOThhMzQuNzU1IDM0Ljc1NSAwIDAgMS0uMzEzLTEuNzE5Yy4wNC0uMjI5LS4wMy0uNDAyLS4yMDgtLjUyMS0uMDE2LS4zNzktLjEzOC0uNDE0LS4zNjUtLjEwNGEzMy4zNDkgMzMuMzQ5IDAgMCAwLTEuODIzIDMuMDIxYy0uMTQ2LjA0OS0uMjE2LjE1My0uMjA4LjMxM2EzMTEuNTU4IDMxMS41NTggMCAwIDAtNC4wNjMgNi41NjNjLS4xNDYuMDQ5LS4yMTYuMTUzLS4yMDguMzEzYTQ1LjU2NyA0NS41NjcgMCAwIDAtMi4xODggMy41NDJjLS4xNDYuMDQ5LS4yMTYuMTUzLS4yMDguMzEzYTM1Ljg4NCAzNS44ODQgMCAwIDAtMi4yOTIgMy44NTQgMTQuMTQ0IDE0LjE0NCAwIDAgMSAxLjY2Ny0uMzEzIDYuODYzIDYuODYzIDAgMCAwIDEuNzcxLS40MTdsMS41NjMtLjIwOGMuMzQ4LS4wNDEuNjk1LS4wOTMgMS4wNDItLjE1NmEuMjMzLjIzMyAwIDAgMCAuMTA0LS4xNTZoLjIwOGExMS45NCAxMS45NCAwIDAgMCAxLjg3NS0uNDE3bDEuNTYzLS4yMDhhNy4zMjggNy4zMjggMCAwIDAgMS41NjMtLjMxM2MuMTg0LS4xLjM5Mi0uMTM0LjYyNS0uMTA0LjUyLS4wNzggMS4wNDEtLjE2NSAxLjU2My0uMjZhLjIzMy4yMzMgMCAwIDAgLjEwNC0uMTU2aC4yMDhjLjQ0OS0uMDguOTAxLS4xNSAxLjM1NC0uMjA4YTMuOTM4IDMuOTM4IDAgMCAwIDEuMzU0LS4zMTNjLjEwMy4wMTguMTczLS4wMTcuMjA4LS4xMDRhNC4yMTYgNC4yMTYgMCAwIDAgMS42NjctLjMxM2wxLjA0Mi0uMTA0Yy4yNzYuMDA5LjUxOS0uMDYuNzI5LS4yMDguMjguMDE3LjU1OCAwIC44MzMtLjA1MmEuMjMzLjIzMyAwIDAgMCAuMTA0LS4xNTZsMS4zNTQtLjIwOGMuMjguMDE3LjU1OCAwIC44MzMtLjA1MmEuNjU1LjY1NSAwIDAgMCAuNTIxLS4yNi40ODIuNDgyIDAgMCAwIC40MTctLjEwNGMuMzE3LS4wMDEuNjMtLjAzNS45MzgtLjEwNC4yNzYuMDA5LjUxOS0uMDYuNzI5LS4yMDhoLjIwOGMuNDQ5LS4wOC45MDEtLjE1IDEuMzU0LS4yMDguMzQ4LS4wNDEuNjk1LS4wOTMgMS4wNDItLjE1NmEuMjMzLjIzMyAwIDAgMCAuMTA0LS4xNTYgMzEuNzgzIDMxLjc4MyAwIDAgMSAzLjU0Mi0uNjI1Yy40NDgtLjAyNi44NjUtLjEzIDEuMjUtLjMxMy40ODgtLjA1OS45NzQtLjEyOSAxLjQ1OC0uMjA4LjM4Mi0uMDQ3Ljc2NC0uMDk5IDEuMTQ2LS4xNTZhLjIzMy4yMzMgMCAwIDAgLjEwNC0uMTU2aC4yMDhhMi43OTUgMi43OTUgMCAwIDAgMS4xNDYtLjMxMyAxNC45MjMgMTQuOTIzIDAgMCAxIDEuNTYzLS4yMDhjLjM0OC0uMDQxLjY5NS0uMDkzIDEuMDQyLS4xNTZhLjIzMy4yMzMgMCAwIDAgLjEwNC0uMTU2IDM1LjUzMiAzNS41MzIgMCAwIDAgMS41NjMtLjIwOGwxLjc3MS0uMjZhLjIzMy4yMzMgMCAwIDAgLjEwNC0uMTU2aC4yMDhhOC40NDIgOC40NDIgMCAwIDAgMS45NzktLjQxN2MuMjQxLS4wNTEuNDgzLS4wODYuNzI5LS4xMDQuMzQ4LS4wNDEuNjk1LS4wOTMgMS4wNDItLjE1NmEuMjMzLjIzMyAwIDAgMCAuMTA0LS4xNTYgMzUuNTMyIDM1LjUzMiAwIDAgMCAxLjU2My0uMjA4IDMuOTQzIDMuOTQzIDAgMCAwIDEuMzU0LS4zMTNoLjEwNGEyNi4yNiAyNi4yNiAwIDAgMSAxLjI1LS4yMDhjLjQ0OC0uMDI2Ljg2NS0uMTMgMS4yNS0uMzEzYTUuNCA1LjQgMCAwIDAgLjcyOS0uMTA0Yy4zODEtLjA0Ny43NjQtLjA5OSAxLjE0Ni0uMTU2YS4yMzMuMjMzIDAgMCAwIC4xMDQtLjE1NmMuNDU0LS4wNTMuOTA1LS4xMjIgMS4zNTQtLjIwOGExMy4wNzcgMTMuMDc3IDAgMCAwIDEuOTc5LS4yNi4yMzMuMjMzIDAgMCAwIC4xMDQtLjE1NmguMzEzYTkuOTk2IDkuOTk2IDAgMCAxIC45MzgtLjE1Ni4yMzMuMjMzIDAgMCAwIC4xMDQtLjE1NmwxLjU2My0uMjA4YTMuOTQzIDMuOTQzIDAgMCAwIDEuMzU0LS4zMTMgMzYuMjk3IDM2LjI5NyAwIDAgMCAxLjU2My0uMzEzYy4yOC4wMTcuNTU3IDAgLjgzMy0uMDUyYS4yMzMuMjMzIDAgMCAwIC4xMDQtLjE1NiA0LjY5OSA0LjY5OSAwIDAgMCAxLjM1NC0uMzEzbC05LjQ3OS01LjUyMWExLjQ5NiAxLjQ5NiAwIDAgMC0uNjI1LS40MTcgNTAzLjg4OSA1MDMuODg5IDAgMCAxLTguNDM4LTQuODk2Yy0uMDQ5LS4xNDctLjE1My0uMjE2LS4zMTMtLjIwOGE1NTUuMTU0IDU1NS4xNTQgMCAwIDEtMTEuMTQ2LTYuNDU4Yy0uMDQ5LS4xNDYtLjE1My0uMjE2LS4zMTMtLjIwOGEyMzc2LjQ0OCAyMzc2LjQ0OCAwIDAgMC00LjY4OC0yLjcwOGMtLjA0OS0uMTQ2LS4xNTMtLjIxNi0uMzEzLS4yMDhhODI1NS40NzggODI1NS40NzggMCAwIDEtNS40MTctMy4xMjVjLS4wNDktLjE0Ni0uMTUzLS4yMTYtLjMxMy0uMjA4YTI3MS42MzkgMjcxLjYzOSAwIDAgMC03LjkxNy00LjU4M2MtLjA0OS0uMTQ2LS4xNTMtLjIxNi0uMzEzLS4yMDhhMTM0MS45MDcgMTM0MS45MDcgMCAwIDEtMTMuODU0LTguMDIxYy0uMzE2LS4xMjctLjU5NC0uMDU4LS44MzMuMjA4YTUuMjYyIDUuMjYyIDAgMCAxLTIuMDgzIDAgLjkyOS45MjkgMCAwIDAtLjYyNS0uMzEzYy0uOTc4LS41NDctMS41ODYtMS4zOC0xLjgyMy0yLjVhNC45NzIgNC45NzIgMCAwIDEgLjA1Mi0xLjY2Ny45MjkuOTI5IDAgMCAwIC4zMTMtLjYyNSAzLjA3IDMuMDcgMCAwIDEgMS42NjctMS41NjMgNC45MTYgNC45MTYgMCAwIDEgMi44MTMgMCAuNjEuNjEgMCAwIDEgLjQxNy4yMDguNDg3LjQ4NyAwIDAgMCAuMzEzLjEwNGMuMTkzLjAxNy4zMzItLjA1My40MTctLjIwOGE1MS44MzMgNTEuODMzIDAgMCAwIDMuNjQ2LS42MjUgMi43OTUgMi43OTUgMCAwIDAgMS4xNDYtLjMxMyAzNi4yNTggMzYuMjU4IDAgMCAwIDEuNTYzLS4yMDhjLjM0OC0uMDQxLjY5NS0uMDkzIDEuMDQyLS4xNTZhLjIzMy4yMzMgMCAwIDAgLjEwNC0uMTU2aC4yMDhhMTIuMDYyIDEyLjA2MiAwIDAgMCAxLjU2My0uMzEzIDIuMDMgMi4wMyAwIDAgMCAxLjE0Ni0uMjA4IDQuMzI3IDQuMzI3IDAgMCAxIC44MzMtLjEwNCAxMC4xNTcgMTAuMTU3IDAgMCAxIC45MzgtLjE1Ni4yMzMuMjMzIDAgMCAwIC4xMDQtLjE1NiAzNi4yNTggMzYuMjU4IDAgMCAwIDEuNTYzLS4yMDhjLjM0OC0uMDQxLjY5NS0uMDkzIDEuMDQyLS4xNTZhLjIzMy4yMzMgMCAwIDAgLjEwNC0uMTU2Yy40NTQtLjA1My45MDYtLjEyMiAxLjM1NC0uMjA4LjI3Ni4wMDkuNTE5LS4wNi43MjktLjIwOGEzNi4yNTggMzYuMjU4IDAgMCAxIDEuNTYzLS4yMDhjLjM0OC0uMDQxLjY5NS0uMDkzIDEuMDQyLS4xNTZhLjIzMy4yMzMgMCAwIDAgLjEwNC0uMTU2aC4yMDhhLjcxMy43MTMgMCAwIDAgLjQxNy0uMTA0IDE0LjMyNiAxNC4zMjYgMCAwIDAgMC0zLjQzOHYtLjUyMWE3Ni4xMDYgNzYuMTA2IDAgMCAwLS4yMDgtNS41MjFjLTEuNTI3LS45NzQtMi4wODMtMi4zNjMtMS42NjctNC4xNjdhLjkyOS45MjkgMCAwIDAgLjMxMy0uNjI1Yy4zMjQtLjcuODQ1LTEuMTg2IDEuNTYzLTEuNDU4YTMuNjYxIDMuNjYxIDAgMCAxIC44MzMtLjIwOGgxLjY2N2MxLjg2OC42NDMgMi43MTkgMS45NjMgMi41NTIgMy45NTgtLjI2OSAxLjE1My0uOTEyIDIuMDIxLTEuOTI3IDIuNjA0YTIyLjY0IDIyLjY0IDAgMCAwLS4xMDQgMi4xODhjLS4wMSAxLjI3MS4wNTkgMi41MjEuMjA4IDMuNzV2Mi44MTNjLjM0Ny4wMy42NTktLjA0LjkzOC0uMjA4YTM2LjI1OCAzNi4yNTggMCAwIDEgMS41NjMtLjIwOGMuMzQ4LS4wNDEuNjk1LS4wOTMgMS4wNDItLjE1NmEuMjMzLjIzMyAwIDAgMCAuMTA0LS4xNTZsMS4wNDItLjEwNGMuMjc2LjAwOS41MTktLjA2LjcyOS0uMjA4YTM4Ljk5IDM4Ljk5IDAgMCAxIDIuMjkyLS40MTcgMy4zODEgMy4zODEgMCAwIDAgLjgzMy0uMDUyLjY1NS42NTUgMCAwIDAgLjUyMS0uMjZsLjgzMy0uMTA0YS42ODIuNjgyIDAgMCAwIC40NjktLjEwNGMuMDUyLS45MDIuMDctMS44MDUuMDUyLTIuNzA4YTkxLjI4NyA5MS4yODcgMCAwIDAtLjIwOC01IDMuMDM2IDMuMDM2IDAgMCAxLTEuMjUtMS4wNDJjLjAwOC0uMTU5LS4wNjItLjI2My0uMjA4LS4zMTNhMS4xODYgMS4xODYgMCAwIDAtLjIwOC0uNTIxIDEzLjk4MSAxMy45ODEgMCAwIDEtLjEwNC0yLjA4M2MuMTM4LS40ODUuMzgxLS45MDIuNzI5LTEuMjVhMi42ODUgMi42ODUgMCAwIDAgLjYyNS0uNjI1IDIuMTA3IDIuMTA3IDAgMCAxIDEuNDU4LS42NzcgNS40MDUgNS40MDUgMCAwIDEgMS45NzkuMTU2WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3NTQ1NDEiIGQ9Ik0xMDguMDczIDU3Ljg2NWMuMTU5LS4wMDguMjY0LjA2Mi4zMTMuMjA4LS4xNTkuMDA4LS4yNjQtLjA2Mi0uMzEzLS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzUzMmY0NSIgZD0iTTk0LjExNSA1OC41OTRoLTEuNjY3di0uMTA0YTIuNzA1IDIuNzA1IDAgMCAxIDEuNjY3LjEwNFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYTY2MzNjIiBkPSJNOTIuNDQ4IDU4LjQ5di4xMDRhMy42NjEgMy42NjEgMCAwIDAtLjgzMy4yMDhjLjIxMS0uMjI4LjQ4OC0uMzMzLjgzMy0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM0YzJiNDYiIGQ9Ik0xMDQuNjM1IDU4LjM4NWEyLjY4NSAyLjY4NSAwIDAgMS0uNjI1LjYyNS45MzguOTM4IDAgMCAxIC42MjUtLjYyNVoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjODE0YzQwIiBkPSJNOTAuMDUyIDYwLjI2YS45MjkuOTI5IDAgMCAxLS4zMTMuNjI1LjkyOS45MjkgMCAwIDEgLjMxMy0uNjI1WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4NTRmNDAiIGQ9Ik0xMDMuMjgxIDYwLjI2YTEzLjk4MSAxMy45ODEgMCAwIDAgLjEwNCAyLjA4My4zNDcuMzQ3IDAgMCAxLS4xNTYtLjIwOCA1LjczMSA1LjczMSAwIDAgMSAuMDUyLTEuODc1WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3NDQ0NDEiIGQ9Ik0xMTAuMTU2IDYyLjI0YS45Mi45MiAwIDAgMS0uMzEzLjYyNS45Mi45MiAwIDAgMSAuMzEzLS42MjVaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzgzNGU0MCIgZD0iTTEwMy41OTQgNjIuODY1Yy4xNDYuMDQ5LjIxNi4xNTMuMjA4LjMxMy0uMTQ2LS4wNDktLjIxNi0uMTUzLS4yMDgtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYWI2NjNjIiBkPSJNMTQwLjQ2OSA2My4yODFhMy43NCAzLjc0IDAgMCAxLS44MzMuMzEzYy4yMS0uMjI4LjQ4OS0uMzMzLjgzMy0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4NDRlNDAiIGQ9Ik0xNDIuNzYgNjMuNTk0Yy4xNTktLjAwOC4yNjQuMDYyLjMxMy4yMDgtLjE1OS4wMDgtLjI2NC0uMDYyLS4zMTMtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYTg2NDNkIiBkPSJNMTQzLjI4MSA2My45MDZhLjY2OS42NjkgMCAwIDEgLjUyMS41MjEgMS44NzMgMS44NzMgMCAwIDEtLjUyMS0uNTIxWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM0YzJiNDUiIGQ9Ik0xMzcuODY1IDY1LjQ2OWMtLjIyMy4xOTUtLjUuMjY0LS44MzMuMjA4YTEwLjM4IDEwLjM4IDAgMCAxIC44MzMtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYWE2NTNjIiBkPSJNMTM3LjAzMSA2NS42NzdhMy45ODggMy45ODggMCAwIDEtMS4zNTQuMjA4IDMuMzA3IDMuMzA3IDAgMCAxIDEuMzU0LS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzVjMzU0NCIgZD0iTTEzNS4yNiA2NS45OWEuMjMzLjIzMyAwIDAgMS0uMTA0LjE1NmMtLjM0Ny4wNjQtLjY5NC4xMTYtMS4wNDIuMTU2YTIuNDYgMi40NiAwIDAgMSAxLjE0Ni0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM2ODNkNDMiIGQ9Ik0xMzIuNTUyIDY2LjUxYS4yMzMuMjMzIDAgMCAxLS4xMDQuMTU2Yy0uMzQ3LjA2NC0uNjk0LjExNi0xLjA0Mi4xNTZhMi40NiAyLjQ2IDAgMCAxIDEuMTQ2LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzYwMzk0MyIgZD0iTTE0NC40MjcgNjUuNDY5Yy4xNjQuMTIzLjI1LjI5Ny4yNi41MjEuMDg0LjQ3MS4wNjguOTIyLS4wNTIgMS4zNTRhNi4zMjUgNi4zMjUgMCAwIDAtLjIwOC0xLjg3NVoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNGEyODQ2IiBkPSJNMTMwLjY3NyA2Ni45MjdhMi45MTIgMi45MTIgMCAwIDEtMS41NjMuMzEzIDYuMDQ5IDYuMDQ5IDAgMCAxIDEuNTYzLS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2MyNzQzOSIgZD0iTTEwOC4yODEgNjYuMDk0Yy4wODMuMTUxLjEzNS4zMjUuMTU2LjUyMS4wNTIgMS40OTMuMDcgMi45ODYuMDUyIDQuNDc5aC42MjVjLS4yMi4xMDEtLjQ2My4xMzYtLjcyOS4xMDRhNTQyLjM3NiA1NDIuMzc2IDAgMCAwLS4xMDQtNS4xMDRaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzYzM2E0MyIgZD0iTTEyNy43NiA2Ny40NDhhLjIzMy4yMzMgMCAwIDEtLjEwNC4xNTZjLS4zNDcuMDY0LS42OTQuMTE2LTEuMDQyLjE1NmEyLjQ2IDIuNDYgMCAwIDEgMS4xNDYtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYTE2MDNkIiBkPSJNMTQ0LjYzNSA2Ny42NTZjLjAzNC4zMTItLjA3LjU1NS0uMzEzLjcyOS4wNDUtLjI3Ny4xNDktLjUyLjMxMy0uNzI5WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM2YzQwNDIiIGQ9Ik0xMjUuMDUyIDY3Ljk2OWEuMjMzLjIzMyAwIDAgMS0uMTA0LjE1NmMtLjM0Ny4wNjQtLjY5NC4xMTYtMS4wNDIuMTU2YTIuNDYgMi40NiAwIDAgMSAxLjE0Ni0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiNhYjY2M2IiIGQ9Ik0xMjIuMzQ0IDY4LjQ5YTMuOTggMy45OCAwIDAgMS0xLjE0Ni4zMTNjLjA2OC0uMTI4LjE5LS4xOTcuMzY1LS4yMDguMjYtLjA0My41MjEtLjA3OC43ODEtLjEwNFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjODE0YzQwIiBkPSJNMTQ0LjIxOSA2OC41OTRjLjAwNy4xNTktLjA2MS4yNjMtLjIwOC4zMTMtLjAwNy0uMTU5LjA2MS0uMjYzLjIwOC0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3YzQ5NDEiIGQ9Ik0xMDUuMDUyIDY0LjIxOWE5MC42ODkgOTAuNjg5IDAgMCAxIC4yMDggNWgtLjEwNGE4MS42NTYgODEuNjU2IDAgMCAxLS4xMDQtNVoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNzE0MjQyIiBkPSJNMTIwLjk5IDY4LjgwMmE0LjMzNCA0LjMzNCAwIDAgMS0xLjc3MS4zMTMgMTAuOSAxMC45IDAgMCAxIDEuNzcxLS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzdmNGI0MCIgZD0iTTExOS4yMTkgNjkuMTE1YTEuMTU2IDEuMTU2IDAgMCAxLS43MjkuMjA4LjkwMi45MDIgMCAwIDEgLjcyOS0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiNkZDg0MzYiIGQ9Ik05MS40MDYgNjUuMDUyYTc2LjEwNiA3Ni4xMDYgMCAwIDEgLjIwOCA1LjUyMS45MjIuOTIyIDAgMCAxLS4xNTYtLjQxN2MtLjA1Mi0xLjcwMS0uMDY5LTMuNDAyLS4wNTItNS4xMDRaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzdhNDg0MCIgZD0iTTEzNy40NDggNjkuNjM1Yy0uMDQ0LS4wNjUtLjExMy0uMS0uMjA4LS4xMDQtLjQ0OS4wODktLjkwMS4xNTgtMS4zNTQuMjA4YTIuMzggMi4zOCAwIDAgMSAxLjY2Ny0uMjA4Yy0uMDEzLjA2My0uMDQ4LjA5OC0uMTA0LjEwNFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOTg1YTNlIiBkPSJNMTQyLjk2OSA2OS44NDRhLjY5NC42OTQgMCAwIDEtLjUyMS4zMTNjLjEwMy0uMTk5LjI3Ni0uMzAzLjUyMS0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM1ZjM3NDQiIGQ9Ik0xMzQuNDI3IDY5Ljk0OGEyLjgxNyAyLjgxNyAwIDAgMS0xLjE0Ni4zMTMgMi40NiAyLjQ2IDAgMCAxIDEuMTQ2LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzY4M2Q0MyIgZD0iTTExMy40OSA3MC4yNmEzLjU4NSAzLjU4NSAwIDAgMS0xLjY2Ny4zMTMgOC4wMTggOC4wMTggMCAwIDEgMS42NjctLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOGI1MjNmIiBkPSJNMTMzLjA3MyA3MC4yNmMtLjYzLjIxNi0xLjI5LjM1NC0xLjk3OS40MTdhLjM0Ny4zNDcgMCAwIDEgLjIwOC0uMTU2IDM2LjI0NCAzNi4yNDQgMCAwIDEgMS43NzEtLjI2WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiNhYjY2M2MiIGQ9Ik0xMzAuOTkgNzAuNjc3YS4zNDcuMzQ3IDAgMCAxLS4yMDguMTU2Yy0uMzgyLjA1Ny0uNzY1LjEwOS0xLjE0Ni4xNTZ2LS4xMDRjLjQ0OS0uMDgxLjkwMS0uMTUgMS4zNTQtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNWUzNzQzIiBkPSJNOTQuNzQgNjUuMTU2YTE4NC4zNTcgMTg0LjM1NyAwIDAgMCAuMTA0IDUuOTM4IDI5LjIxOSAyOS4yMTkgMCAwIDEtLjIwOC0zLjc1YzAtLjc0Ny4wMzUtMS40NzcuMTA0LTIuMTg4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM0NzI3NDYiIGQ9Ik0xMjkuNjM1IDcwLjg4NXYuMTA0YTIwLjkyNSAyMC45MjUgMCAwIDEtMS43NzEuMzEzIDYuNjYgNi42NiAwIDAgMSAxLjc3MS0uNDE3WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM5NTU5M2UiIGQ9Ik0xMDUuMTU2IDY5LjIxOWguMTA0Yy4wMTguOTAzIDAgMS44MDYtLjA1MiAyLjcwOGEuNjc2LjY3NiAwIDAgMS0uNDY5LjEwNGMuMDgyLS4xNjcuMjIxLS4yMzcuNDE3LS4yMDh2LTIuNjA0WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3NzQ2NDEiIGQ9Ik0xMjYuNTEgNzEuNTFhMS4xNTYgMS4xNTYgMCAwIDEtLjcyOS4yMDguOTAyLjkwMiAwIDAgMSAuNzI5LS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2JjNzAzYiIgZD0iTTEyNS41NzMgNzEuNzE5YS42NTUuNjU1IDAgMCAxLS41MjEuMjZjLS4yNzYuMDUyLS41NTMuMDY5LS44MzMuMDUyYTQuNjk1IDQuNjk1IDAgMCAxIDEuMzU0LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzNjMjA0NyIgZD0iTTEwMy45MDYgNzIuMTM1YS42NTUuNjU1IDAgMCAxLS41MjEuMjYgMy4zODEgMy4zODEgMCAwIDEtLjgzMy4wNTJjLjQyOS0uMTUyLjg4LS4yNTYgMS4zNTQtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNTkzNDQ0IiBkPSJNMTIyLjEzNSA3Mi4zNDRhMi44MTcgMi44MTcgMCAwIDEtMS4xNDYuMzEzIDIuNDYgMi40NiAwIDAgMSAxLjE0Ni0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM5MTU2M2UiIGQ9Ik0xMjAuNzgxIDcyLjY1NmEuMzQ3LjM0NyAwIDAgMS0uMjA4LjE1NmMtLjM4Mi4wNTctLjc2NS4xMDktMS4xNDYuMTU2YTMuOTkgMy45OSAwIDAgMSAxLjM1NC0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM0ZDJiNDUiIGQ9Ik0xMDAuMjYgNzIuODY1Yy0uMjEuMTQ4LS40NTMuMjE4LS43MjkuMjA4LjIxLS4xNDguNDUzLS4yMTguNzI5LS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzVmMzg0NCIgZD0iTTk4LjQ5IDczLjE3N2EuMjM3LjIzNyAwIDAgMS0uMTA0LjE1NmMtLjM0Ny4wNjQtLjY5NC4xMTYtMS4wNDIuMTU2YTIuNDYgMi40NiAwIDAgMSAxLjE0Ni0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiNhYTY1M2MiIGQ9Ik0xMTguODAyIDczLjA3M2E2LjY1NyA2LjY1NyAwIDAgMS0xLjg3NS40MTd2LS4xMDRhMTUuMzMxIDE1LjMzMSAwIDAgMSAxLjg3NS0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM0ZDJkNDUiIGQ9Ik0xMTYuOTI3IDczLjM4NXYuMTA0YTIuMjMyIDIuMjMyIDAgMCAwLS43MjkuMTA0LjIzMy4yMzMgMCAwIDEgLjEwNC0uMTU2IDEuOTIxIDEuOTIxIDAgMCAxIC42MjUtLjA1MloiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOGE1MjNlIiBkPSJNOTQuODQ0IDcyLjg2NWMuMTAyLjI5LjEzNi42MDMuMTA0LjkzOGwuODMzLS4xMDRhMS41MSAxLjUxIDAgMCAxLS45MzguMjA4di0xLjA0MloiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOTc1YTNlIiBkPSJNMTE1Ljk5IDczLjU5NGEuMzQ3LjM0NyAwIDAgMS0uMjA4LjE1NmMtLjM4Mi4wNTctLjc2NS4xMDktMS4xNDYuMTU2di0uMTA0Yy40NDktLjA4MS45MDEtLjE1IDEuMzU0LS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzUwMmY0NCIgZD0iTTExNC42MzUgNzMuODAydi4xMDRjLS4zNS4wNTYtLjY5OC4xMjYtMS4wNDIuMjA4YS4yMzMuMjMzIDAgMCAxIC4xMDQtLjE1NiA3LjM1OCA3LjM1OCAwIDAgMSAuOTM4LS4xNTZaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzhiNTMzZiIgZD0iTTExMy4yODEgNzQuMTE1YS4zNDcuMzQ3IDAgMCAxLS4yMDguMTU2Yy0uMzgyLjA1Ny0uNzY1LjEwOS0xLjE0Ni4xNTZhMy45OSAzLjk5IDAgMCAxIDEuMzU0LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2FjNjczYyIgZD0iTTkxLjYxNSA3MS4wOTRhMTQuMzI2IDE0LjMyNiAwIDAgMSAwIDMuNDM4LjcxMy43MTMgMCAwIDEtLjQxNy4xMDRjLjA3MS0uMTc1LjIxLS4yNDQuNDE3LS4yMDh2LTMuMzMzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3ZDRhNDAiIGQ9Ik0xMzkuMDEgNzQuMzIzYy4wMDcuMTU5LS4wNjEuMjYzLS4yMDguMzEzLS4wMDctLjE1OS4wNjEtLjI2My4yMDgtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOTk1YjNlIiBkPSJNMTExLjMwMiA3NC41MzFjLS44MzcuMjU5LTEuNzA1LjQzMy0yLjYwNC41MjFhMTIuNDA1IDEyLjQwNSAwIDAgMSAyLjYwNC0uNTIxWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM2MzM5NDMiIGQ9Ik05MC45OSA3NC42MzVhLjIzNy4yMzcgMCAwIDEtLjEwNC4xNTZjLS4zNDcuMDY0LS42OTQuMTE2LTEuMDQyLjE1NmEyLjQ2IDIuNDYgMCAwIDEgMS4xNDYtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOTQ1ODNlIiBkPSJNMTA4LjQ5IDc1LjA1MmEuMzQ3LjM0NyAwIDAgMS0uMjA4LjE1NiAxOS4zNzkgMTkuMzc5IDAgMCAxLTEuNjY3LjI2IDYuNjU3IDYuNjU3IDAgMCAxIDEuODc1LS40MTdaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzgxNGQzZiIgZD0iTTg4LjI4MSA3NS4xNTZjLS4yMS4xNDgtLjQ1My4yMTgtLjcyOS4yMDguMjEtLjE0OC40NTMtLjIxOC43MjktLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNjQzYTQzIiBkPSJNODYuMTk4IDc1LjU3M2EuMjM3LjIzNyAwIDAgMS0uMTA0LjE1NmMtLjM0Ny4wNjQtLjY5NC4xMTYtMS4wNDIuMTU2YTIuNDYgMi40NiAwIDAgMSAxLjE0Ni0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM5YzVkM2UiIGQ9Ik0xMDYuNTEgNzUuNDY5YTguODcgOC44NyAwIDAgMS0xLjg3NS40MTd2LS4xMDRjLjYxNS0uMTQzIDEuMjQtLjI0NyAxLjg3NS0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM0YzJjNDUiIGQ9Ik0xMDQuNjM1IDc1Ljc4MXYuMTA0YTIuMDAzIDIuMDAzIDAgMCAwLS42MjUuMTA0Yy4xNDgtLjE4OC4zNTYtLjI1OC42MjUtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNzA0MjQyIiBkPSJNODMuNDkgNzYuMDk0YS4yMzcuMjM3IDAgMCAxLS4xMDQuMTU2IDEwLjE1NyAxMC4xNTcgMCAwIDAtLjkzOC4xNTYuMjM3LjIzNyAwIDAgMSAuMTA0LS4xNTYgNy4zNDYgNy4zNDYgMCAwIDEgLjkzOC0uMTU2WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4OTUyM2YiIGQ9Ik0xMDMuNDkgNzYuMDk0YTguMDE4IDguMDE4IDAgMCAxLTEuNjY3LjMxMyAzLjU4NSAzLjU4NSAwIDAgMSAxLjY2Ny0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM1MzMwNDUiIGQ9Ik04MS42MTUgNzYuNTFjLS4zNDguMTc5LS43My4yNDgtMS4xNDYuMjA4YTUuNiA1LjYgMCAwIDEgMS4xNDYtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOTI1NzNmIiBkPSJNMTAwLjc4MSA3Ni42MTVhNy4zMDMgNy4zMDMgMCAwIDEtMS41NjMuMzEzIDIuOTA0IDIuOTA0IDAgMCAxIDEuNTYzLS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2JiNzAzYSIgZD0iTTgwLjQ2OSA3Ni43MTlhMTIuMDYyIDEyLjA2MiAwIDAgMS0xLjU2My4zMTNjLjA2OC0uMTI4LjE4OS0uMTk3LjM2NS0uMjA4YTYuMjIyIDYuMjIyIDAgMCAxIDEuMTk4LS4xMDRaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzY4M2Q0MyIgZD0iTTc4LjY5OCA3Ny4wMzFhLjIzNy4yMzcgMCAwIDEtLjEwNC4xNTZjLS4zNDcuMDY0LS42OTQuMTE2LTEuMDQyLjE1NmEyLjQ2IDIuNDYgMCAwIDEgMS4xNDYtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYTA1ZjNkIiBkPSJNOTkuMDEgNzYuOTI3YTMuOTg0IDMuOTg0IDAgMCAxLTEuMzU0LjMxMy4zNDcuMzQ3IDAgMCAxIC4yMDgtLjE1NmMuMzgyLS4wNTcuNzY0LS4xMDkgMS4xNDYtLjE1NloiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOGQ1NDNmIiBkPSJNNzUuOTkgNzcuNTUyYTIuODE3IDIuODE3IDAgMCAxLTEuMTQ2LjMxMyAyLjQ2IDIuNDYgMCAwIDEgMS4xNDYtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOTM1NzNmIiBkPSJNOTUuOTkgNzcuNTUyYTcuMzAzIDcuMzAzIDAgMCAxLTEuNTYzLjMxMyAyLjkwNCAyLjkwNCAwIDAgMSAxLjU2My0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM5MDU2M2YiIGQ9Ik03MC4wNTIgNzguMzg1YTQuOTE2IDQuOTE2IDAgMCAwLTIuODEzIDAgLjY1NS42NTUgMCAwIDEgLjUyMS0uMjYgOC41MTggOC41MTggMCAwIDEgMS44NzUgMCAuNTIuNTIgMCAwIDEgLjQxNy4yNloiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjODc1MDQwIiBkPSJNOTMuMjgxIDc4LjA3M2E3LjMwMyA3LjMwMyAwIDAgMS0xLjU2My4zMTMgMi45MDQgMi45MDQgMCAwIDEgMS41NjMtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNmY0MjQxIiBkPSJNNzEuMTk4IDc4LjQ5Yy0uMDg1LjE1Ni0uMjIzLjIyNS0uNDE3LjIwOGEuNDg3LjQ4NyAwIDAgMS0uMzEzLS4xMDQgNS4zNzIgNS4zNzIgMCAwIDEgLjcyOS0uMTA0WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4YjUzM2YiIGQ9Ik0xMzYuNjE1IDc4LjM4NWMuMDA3LjE1OS0uMDYxLjI2My0uMjA4LjMxMy0uMDA3LS4xNTkuMDYxLS4yNjMuMjA4LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzliNWMzZSIgZD0iTTg4LjQ5IDc5LjAxYTEuODQgMS44NCAwIDAgMS0uODMzLjIwOHYtLjEwNGMuMjU1LS4xMDEuNTMzLS4xMzYuODMzLS4xMDRaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzUxMmY0NCIgZD0iTTg3LjY1NiA3OS4xMTV2LjEwNGEyLjIzMyAyLjIzMyAwIDAgMC0uNzI5LjEwNC4yMzcuMjM3IDAgMCAxIC4xMDQtLjE1NiAxLjkyMiAxLjkyMiAwIDAgMSAuNjI1LS4wNTJaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzcwNDE0MiIgZD0iTTEyNC4xMTUgNzguOTA2Yy4yODkuMDI3LjUzMi4xMzEuNzI5LjMxM2ExLjIwNyAxLjIwNyAwIDAgMS0uNzI5LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzRiMmM0NSIgZD0iTTg1LjM2NSA3OS41MzFhMy45OCAzLjk4IDAgMCAxLTEuMTQ2LjMxMy4yMzcuMjM3IDAgMCAxIC4xMDQtLjE1NmMuMzQ3LS4wNjQuNjk0LS4xMTYgMS4wNDItLjE1NloiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNzM0NDQxIiBkPSJNODMuMDczIDgwLjA1MmE0LjAzMSA0LjAzMSAwIDAgMS0xLjA0Mi4yMDguMzQ3LjM0NyAwIDAgMSAuMjA4LS4xNTYgMy4zODEgMy4zODEgMCAwIDEgLjgzMy0uMDUyWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4YTUyM2YiIGQ9Ik02NS41NzMgNzkuOTQ4YS45MjkuOTI5IDAgMCAxLS4zMTMuNjI1LjkyOS45MjkgMCAwIDEgLjMxMy0uNjI1WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM5YTVjM2UiIGQ9Ik04MS45MjcgODAuMjZhLjM0Ny4zNDcgMCAwIDEtLjIwOC4xNTZjLS41MjUuMDcxLTEuMDQ2LjE1Ny0xLjU2My4yNnYtLjEwNGExNS42MzcgMTUuNjM3IDAgMCAxIDEuNzcxLS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzRkMmQ0NSIgZD0iTTgwLjE1NiA4MC41NzN2LjEwNGEyLjIzMyAyLjIzMyAwIDAgMC0uNzI5LjEwNC4yMzcuMjM3IDAgMCAxIC4xMDQtLjE1NiAxLjkyMiAxLjkyMiAwIDAgMSAuNjI1LS4wNTJaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2MwNzIzYSIgZD0iTTEzNS45OSA3OS40MjdhNS4wMTYgNS4wMTYgMCAwIDEtLjUyMSAxLjE0NmMtLjA0OC4wODMtLjExNy4xMTgtLjIwOC4xMDRhMy42NiAzLjY2IDAgMCAxIC43MjktMS4yNVoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYWM2NjNjIiBkPSJNNzkuMjE5IDgwLjc4MWEuMjM3LjIzNyAwIDAgMS0uMTA0LjE1NiAzLjM4MSAzLjM4MSAwIDAgMS0uODMzLjA1MmMuMjg5LS4xMjEuNjAxLS4xOS45MzgtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNWYzNzQ0IiBkPSJNMTIwLjE1NiA4MC43ODFhLjc0NS43NDUgMCAwIDEtLjIwOC42MjUuNzQ1Ljc0NSAwIDAgMSAuMjA4LS42MjVaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzZjM2U0MyIgZD0iTTEzMC4zNjUgODEuMDk0Yy4wMDcuMTU5LS4wNjEuMjYzLS4yMDguMzEzLS4wMDctLjE1OS4wNjEtLjI2My4yMDgtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYWU2ODNjIiBkPSJNNzcuMTM1IDgxLjE5OGEyLjkwNCAyLjkwNCAwIDAgMS0xLjU2My4zMTMgNy4zMDMgNy4zMDMgMCAwIDEgMS41NjMtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYTA1ZjNkIiBkPSJNNzQuNTMxIDgxLjcxOWEzLjU4NSAzLjU4NSAwIDAgMS0xLjY2Ny4zMTMgOC4wMTggOC4wMTggMCAwIDEgMS42NjctLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNmM0MDQyIiBkPSJNMTI5LjMyMyA4Mi43NmMuMDA3LjE1OS0uMDYxLjI2My0uMjA4LjMxMy0uMDA3LS4xNTkuMDYxLS4yNjMuMjA4LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzg0NGUzZiIgZD0iTTc0LjExNSA4My4yODFjLjE1OS0uMDA4LjI2My4wNjIuMzEzLjIwOC0uMTU5LjAwOC0uMjYzLS4wNjItLjMxMy0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3YzQ5NDAiIGQ9Ik0xMjYuNTEgODQuMDFjLjAwNy4xNTktLjA2MS4yNjMtLjIwOC4zMTMtLjAwNy0uMTU5LjA2MS0uMjYzLjIwOC0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM2MzNiNDMiIGQ9Ik02Ny4wMzEgODQuNzRhLjkyOS45MjkgMCAwIDEgLjYyNS4zMTMuOTI5LjkyOSAwIDAgMS0uNjI1LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzc2NDY0MSIgZD0iTTcwLjU3MyA4NC44NDRhNS42IDUuNiAwIDAgMC0uODMzLjIwOGMuMjQtLjI2Ni41MTctLjMzNS44MzMtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNmEzZjQyIiBkPSJNMTI2LjkyNyA4Ni42MTVjLjAwNy4xNTktLjA2MS4yNjMtLjIwOC4zMTMtLjAwNy0uMTU5LjA2MS0uMjYzLjIwOC0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3ZDRhNDAiIGQ9Ik0xMjIuNzYgODYuOTI3YS43NDIuNzQyIDAgMCAxIC4yMDguNjI1Ljc0Mi43NDIgMCAwIDEtLjIwOC0uNjI1WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM0MDIwNDciIGQ9Ik0xMjUuNjc3IDg1LjQ2OWMuMjEuNTk2LjM2NyAxLjIyMS40NjkgMS44NzUuMDM1LjIyMS4xMjMuMjU2LjI2LjEwNC0uMDcxLjE3NS0uMjEuMjQ0LS40MTcuMjA4YTcwLjI4OCA3MC4yODggMCAwIDAtLjMxMy0yLjE4OFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjODU0ZjNmIiBkPSJNMTMwLjY3NyA4OC4zODVjLjAwNy4xNTktLjA2MS4yNjMtLjIwOC4zMTMtLjAwNy0uMTU5LjA2MS0uMjYzLjIwOC0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiNjMzc0M2EiIGQ9Ik04NC4yMTkgODkuMTE1Yy40OS4wMTkuODcyLjIyOCAxLjE0Ni42MjVhOS4yMDUgOS4yMDUgMCAwIDAtMS4xNDYtLjYyNVoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNWIzNTQzIiBkPSJNMTIyLjU1MiA5MC42NzdhNS4yNzMgNS4yNzMgMCAwIDAgMCAyLjA4MyAyLjIyNCAyLjIyNCAwIDAgMS0uMjA4LTEuMDk0bC4wNTItLjc4MWEuMzQ0LjM0NCAwIDAgMSAuMTU2LS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzc1NDY0MSIgZD0iTTg0LjQyNyA5Mi44NjVjLjE1OS0uMDA4LjI2My4wNjIuMzEzLjIwOC0uMTU5LjAwOC0uMjYzLS4wNjItLjMxMy0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4YzU0M2UiIGQ9Ik05MS42MTUgOTMuMjgxYy4xNTktLjAwOC4yNjMuMDYyLjMxMy4yMDgtLjE1OS4wMDgtLjI2My0uMDYyLS4zMTMtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjN2U0YjQwIiBkPSJNMTI5LjMyMyA5Mi44NjVhLjkyLjkyIDAgMCAxLS4zMTMuNjI1LjkyLjkyIDAgMCAxIC4zMTMtLjYyNVoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjODM0ZDQwIiBkPSJNMTIyLjc2IDkzLjQ5Yy4xNDcuMDQ5LjIxNi4xNTMuMjA4LjMxMy0uMTQ3LS4wNDktLjIxNi0uMTUzLS4yMDgtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNzQ0NDQxIiBkPSJNMTI3LjU1MiA5NC45NDhhLjYwMy42MDMgMCAwIDEtLjQxNy4yMDhjLjA4Mi0uMTY3LjIyMS0uMjM3LjQxNy0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4MTRkNDAiIGQ9Ik05NS4wNTIgOTUuMjZjLjE1OS0uMDA4LjI2My4wNjIuMzEzLjIwOC0uMTU5LjAwOC0uMjYzLS4wNjItLjMxMy0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4YzUzM2YiIGQ9Ik05Ny40NDggOTYuNjE1Yy4xNTktLjAwOC4yNjMuMDYyLjMxMy4yMDgtLjE1OS4wMDgtLjI2My0uMDYyLS4zMTMtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNzQ0NDQxIiBkPSJNOTIuNjU2IDk3LjY1NmMuMTU5LS4wMDguMjYzLjA2Mi4zMTMuMjA4LS4xNTkuMDA4LS4yNjMtLjA2Mi0uMzEzLS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzgxNGM0MCIgZD0iTTEwMC44ODUgOTguNTk0Yy4xNTktLjAwOC4yNjMuMDYyLjMxMy4yMDgtLjE1OS4wMDgtLjI2My0uMDYyLS4zMTMtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNzA0MjQyIiBkPSJNOTguMzg1IDEwMC45OWMuMTU5LS4wMDguMjYzLjA2Mi4zMTMuMjA4LS4xNTkuMDA4LS4yNjMtLjA2Mi0uMzEzLS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2FjNjYzYyIgZD0iTTEwNS4wNTIgMTAwLjk5YS45MjYuOTI2IDAgMCAxIC42MjUuMzEzLjkyNi45MjYgMCAwIDEtLjYyNS0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4NTRmM2YiIGQ9Ik0xMDcuNDQ4IDEwMi4zNDRjLjE1OS0uMDA4LjI2NC4wNjIuMzEzLjIwOC0uMTU5LjAwOC0uMjY0LS4wNjItLjMxMy0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3MzQ0NDEiIGQ9Ik0xMDMuMzg1IDEwMy45MDZjLjE1OS0uMDA4LjI2My4wNjIuMzEzLjIwOC0uMTU5LjAwOC0uMjYzLS4wNjItLjMxMy0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3OTQ4NDEiIGQ9Ik0xMTAuODg1IDEwNC4zMjNjLjE1OS0uMDA3LjI2NC4wNjEuMzEzLjIwOC0uMTU5LjAwNy0uMjY0LS4wNjEtLjMxMy0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3NjQ1NDEiIGQ9Ik0xMTYuNzE5IDEwNy42NTZjLjE1OS0uMDA3LjI2NC4wNjEuMzEzLjIwOC0uMTU5LjAwNy0uMjY0LS4wNjEtLjMxMy0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM1ZTM4NDMiIGQ9Ik03OS4zMjMgMTA4LjM4NWE3Ljg2OCA3Ljg2OCAwIDAgMC0xLjY2Ny4xMDRjLjIzNC0uMTM2LjUxMS0uMjA2LjgzMy0uMjA4LjI5NyAwIC41NzUuMDM1LjgzMy4xMDRaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzhkNTQzZSIgZD0iTTExNy42NTYgMTA4LjE3N2MuMTU5LS4wMDcuMjY0LjA2MS4zMTMuMjA4LS4xNTkuMDA3LS4yNjQtLjA2MS0uMzEzLS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzdlNGI0MCIgZD0iTTgwLjI2IDEwOC41OTRjLjE1OS0uMDA3LjI2My4wNjEuMzEzLjIwOC0uMTU5LjAwNy0uMjYzLS4wNjEtLjMxMy0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4YjUyM2YiIGQ9Ik0xMTguMzg1IDEwOC41OTRjLjE1OS0uMDA3LjI2NC4wNjEuMzEzLjIwOC0uMTU5LjAwNy0uMjY0LS4wNjEtLjMxMy0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM2ZjQyNDIiIGQ9Ik0xMTQuODQ0IDExMC41NzNjLjE1OS0uMDA3LjI2NC4wNjEuMzEzLjIwOC0uMTU5LjAwNy0uMjY0LS4wNjEtLjMxMy0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4YjUzM2YiIGQ9Ik0xMjMuNDkgMTExLjUxYy4xNTktLjAwNy4yNjQuMDYxLjMxMy4yMDgtLjE1OS4wMDctLjI2NC0uMDYxLS4zMTMtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjODk1MjNmIiBkPSJNODIuMjQgMTEyLjQ0OGMuMDA5LjI3Ni0uMDYuNTItLjIwOC43MjktLjAwOS0uMjc2LjA2LS41Mi4yMDgtLjcyOVoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYWM2NjNkIiBkPSJNMTI1Ljk5IDExMi45NjljLjQ0OS4wNS43OTYuMjU4IDEuMDQyLjYyNWwtMS4wNDItLjYyNVoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjN2Q0YTQwIiBkPSJNMTI3LjY1NiAxMTMuOTA2Yy4xNTktLjAwNy4yNjQuMDYxLjMxMy4yMDgtLjE1OS4wMDctLjI2NC0uMDYxLS4zMTMtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYTk2NTNjIiBkPSJNMTIzLjU5NCAxMTUuNjc3Yy4yNDguMDg5LjQ1Ni4yMjcuNjI1LjQxNy0uMjg5LS4wMzktLjQ5Ny0uMTc3LS42MjUtLjQxN1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjODk1MTQwIiBkPSJNODEuMzAyIDExNC4zMjNhMS4xNDMgMS4xNDMgMCAwIDAtLjEwNC4zNjUgMTYuOTM5IDE2LjkzOSAwIDAgMSAuMjA4IDEuMzAyIDMuNDg4IDMuNDg4IDAgMCAxLS4zMTMtMS4zMDJjLjAxMS0uMTc1LjA4MS0uMjk3LjIwOC0uMzY1WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiNhYTY1M2QiIGQ9Ik0xMzEuODIzIDExNi4zMDJjLjI1Ny4wMjYuNDY2LjEzLjYyNS4zMTNhLjkxOC45MTggMCAwIDEtLjYyNS0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4MzRkNDAiIGQ9Ik03OC4yODEgMTE2LjkyN2MuMTc4LjExOS4yNDguMjkyLjIwOC41MjEtLjE3OC0uMTE5LS4yNDgtLjI5Mi0uMjA4LS41MjFaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzg3NTEzZiIgZD0iTTgxLjYxNSAxMTcuMTM1Yy4xNDguMjA5LjIxOC40NTMuMjA4LjcyOWExLjE1NiAxLjE1NiAwIDAgMS0uMjA4LS43MjlaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2I2NmQzYiIgZD0iTTEzNi40MDYgMTE4LjkwNmMuNjI2LS4wMTggMS4yNTEgMCAxLjg3NS4wNTJhLjM0LjM0IDAgMCAxIC4yMDguMTU2IDM5LjQ3IDM5LjQ3IDAgMCAxLTIuMDgzLS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzc1NDU0MSIgZD0iTTgyLjEzNSAxMTkuMTE1Yy4xNTktLjAwNy4yNjMuMDYxLjMxMy4yMDgtLjE1OS4wMDctLjI2My0uMDYxLS4zMTMtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjN2Y0YjQwIiBkPSJNMTM4LjQ5IDExOS4xMTVjLjI1Ny4wMjYuNDY2LjEzLjYyNS4zMTNhLjkxOC45MTggMCAwIDEtLjYyNS0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3OTQ4NDAiIGQ9Ik03Ni4wOTQgMTE5Ljg0NGMuMDA4LjE1OS0uMDYyLjI2NC0uMjA4LjMxMy0uMDA4LS4xNTkuMDYyLS4yNjQuMjA4LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzUxMmI0NiIgZD0iTTcxLjMwMiAxMTkuOTQ4Yy0uMDEuMjQ1LS4xMTQuNDE4LS4zMTMuNTIxLjAyNi0uMjI2LjEzLS40LjMxMy0uNTIxWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4MTRjNDAiIGQ9Ik03MC4zNjUgMTIxLjUxYy4wMDguMTU5LS4wNjIuMjY0LS4yMDguMzEzLS4wMDgtLjE1OS4wNjItLjI2NC4yMDgtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNGQyYzQ1IiBkPSJNMTMyLjM0NCAxMjEuOTI3YS4yMjkuMjI5IDAgMCAxLS4xMDQuMTU2Yy0uMjc2LjA1Mi0uNTUzLjA2OS0uODMzLjA1Mi4yOTYtLjA4Ny42MDgtLjE1Ny45MzgtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNTMzMTQ0IiBkPSJNODQuMDEgMTIxLjA5NGMuMTYzLjEyMy4yNS4yOTcuMjYuNTIxLjA4NS40NzEuMDY3LjkyMi0uMDUyIDEuMzU0YTYuMzE5IDYuMzE5IDAgMCAwLS4yMDgtMS44NzVaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzNkMjM0NiIgZD0iTTE0MC42NzcgMTIxLjMwMmEuMzQ3LjM0NyAwIDAgMSAuMTU2LjIwOGwuMDUyLjkzOGMuMDIzLjQ0OC0uMDQ2Ljg2NS0uMjA4IDEuMjVhNi45NTcgNi45NTcgMCAwIDAgMC0yLjM5NloiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNTMzMDQ0IiBkPSJNMTI5Ljg0NCAxMjIuNDQ4YTMuOTkgMy45OSAwIDAgMS0xLjM1NC4zMTMuMzQ3LjM0NyAwIDAgMSAuMjA4LS4xNTZjLjM4Mi0uMDU3Ljc2NS0uMTA5IDEuMTQ2LS4xNTZaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzY5M2Q0MyIgZD0iTTEyNi45MjcgMTIyLjk2OWEuMjI5LjIyOSAwIDAgMS0uMTA0LjE1NmMtLjMxNy4wMzctLjYyOS4wOS0uOTM4LjE1NmEuMjI5LjIyOSAwIDAgMSAuMTA0LS4xNTZjLjMxLS4wNzMuNjIzLS4xMjUuOTM4LS4xNTZaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzlhNWMzZCIgZD0iTTc3LjI0IDEyMy4wNzNjLjE0My4yNTQuMjQ3LjUzMS4zMTMuODMzYTEuMDQ2IDEuMDQ2IDAgMCAxLS4zMTMtLjgzM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNDAyMzQ3IiBkPSJNMTI1LjU3MyAxMjMuMjgxYS4yMjkuMjI5IDAgMCAxLS4xMDQuMTU2Yy0uNjU0LjEzOC0xLjMxNC4yMjQtMS45NzkuMjZhMTQuOTk4IDE0Ljk5OCAwIDAgMSAyLjA4My0uNDE3WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3NTQ1NDEiIGQ9Ik04NC4yMTkgMTIyLjk2OWMuMDQ5LjQwOC0uMDU1Ljc1NS0uMzEzIDEuMDQyYTk2LjM1NCA5Ni4zNTQgMCAwIDEgLjMxMy0xLjA0MloiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNmEzZTQyIiBkPSJNMTIyLjEzNSAxMjMuOTA2YS4yMjkuMjI5IDAgMCAxLS4xMDQuMTU2Yy0uMzgyLjA1Ny0uNzY1LjEwOS0xLjE0Ni4xNTZhMy4zNzIgMy4zNzIgMCAwIDEgMS4yNS0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM1OTM0NDQiIGQ9Ik0xMjAuMTU2IDEyNC4zMjNhMy4zNzIgMy4zNzIgMCAwIDEtMS4yNS4zMTN2LS4xMDRhOC45MzEgOC45MzEgMCAwIDEgMS4yNS0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiNhYzY3M2MiIGQ9Ik0xMTguOTA2IDEyNC41MzF2LjEwNGEyNi4yNiAyNi4yNiAwIDAgMC0xLjI1LjIwOCAyLjU2MyAyLjU2MyAwIDAgMSAxLjI1LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzU5MzQ0NCIgZD0iTTExNy41NTIgMTI0Ljg0NGEzLjk5IDMuOTkgMCAwIDEtMS4zNTQuMzEzLjM0Ny4zNDcgMCAwIDEgLjIwOC0uMTU2Yy4zODItLjA1Ny43NjUtLjEwOSAxLjE0Ni0uMTU2WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM2YjNmNDIiIGQ9Ik0xMTQuNjM1IDEyNS4zNjVhLjIyOS4yMjkgMCAwIDEtLjEwNC4xNTZjLS4zNDcuMDY0LS42OTQuMTE2LTEuMDQyLjE1NmEyLjQ2IDIuNDYgMCAwIDEgMS4xNDYtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOWQ1ZDNlIiBkPSJtMTM1LjI2IDEyNS4zNjUtMi44MTMuNDE3YTEwLjIxNSAxMC4yMTUgMCAwIDEgMi40NDgtLjUyMS42MzguNjM4IDAgMCAxIC4zNjUuMTA0WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM1NTMxNDQiIGQ9Ik03OS4wMSAxMjUuNDY5YS45Mi45MiAwIDAgMSAuNjI1LjMxMy45Mi45MiAwIDAgMS0uNjI1LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzgxNGM0MCIgZD0iTTEzOS4xMTUgMTI1LjU3M2MtLjA0OS4xNDctLjE1My4yMTYtLjMxMy4yMDguMDQ5LS4xNDcuMTUzLS4yMTYuMzEzLS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2EyNjEzZCIgZD0iTTgyLjU1MiAxMjUuNDY5Yy0uNDg3LjQ2LTEuMDc3LjYzNC0xLjc3MS41MjFhMi41MzYgMi41MzYgMCAwIDEtMS4wNDItLjIwOGMuOTguMjEgMS45MTguMTA2IDIuODEzLS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzY1M2I0MyIgZD0iTTExMi43NiAxMjUuNzgxYy0uNjMuMjE2LTEuMjkuMzU0LTEuOTc5LjQxN2EuMzQ3LjM0NyAwIDAgMSAuMjA4LS4xNTZjLjU5LS4xMDEgMS4xNzktLjE4OSAxLjc3MS0uMjZaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzgzNGU0MCIgZD0iTTEzOC42OTggMTI1Ljc4MWMtLjAzLjEyLS4xMTcuMTktLjI2LjIwOGE3LjkwOSA3LjkwOSAwIDAgMS0xLjA0Mi4xMDQgMi4yMjkgMi4yMjkgMCAwIDEtMS4wOTQtLjIwOCA0LjkzNCA0LjkzNCAwIDAgMCAyLjM5Ni0uMTA0WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4MzRkNDAiIGQ9Ik0xMzEuOTI3IDEyNS44ODVhOC4wODQgOC4wODQgMCAwIDEtMS42NjcuMzEzIDMuNTg1IDMuNTg1IDAgMCAxIDEuNjY3LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzQzMjM0NyIgZD0iTTY3Ljk2OSAxMjUuNTczYy0uMDUuNDQ5LS4yNTkuNzk2LS42MjUgMS4wNDJhMTAuMzYgMTAuMzYgMCAwIDEgLjYyNS0xLjA0MloiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOTM1NzNmIiBkPSJNMTMwLjE1NiAxMjYuMTk4YTEzLjMyIDEzLjMyIDAgMCAxLTIuNS41MjEuMzQ3LjM0NyAwIDAgMSAuMjA4LS4xNTYgMjYuNTE5IDI2LjUxOSAwIDAgMSAyLjI5Mi0uMzY1WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM1YzM1NDQiIGQ9Ik0xMTAuNTczIDEyNi4xOThhLjIyOS4yMjkgMCAwIDEtLjEwNC4xNTZsLTEuNzcxLjI2YS4zNDcuMzQ3IDAgMCAxIC4yMDgtLjE1NmMuNTYtLjA3MyAxLjExNi0uMTU5IDEuNjY3LS4yNloiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjODM0ZTQwIiBkPSJNNzEuODIzIDEyNi43MTljLjAwOC4xNTktLjA2Mi4yNjQtLjIwOC4zMTMtLjAwOC0uMTU5LjA2Mi0uMjY0LjIwOC0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3MDQyNDIiIGQ9Ik0xMDcuMTM1IDEyNi44MjNhLjIyOS4yMjkgMCAwIDEtLjEwNC4xNTZjLS4zNDcuMDY0LS42OTQuMTE2LTEuMDQyLjE1NmEyLjQ2IDIuNDYgMCAwIDEgMS4xNDYtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOTQ1ODNlIiBkPSJNMTI3LjEzNSAxMjYuODIzYTcuMzY1IDcuMzY1IDAgMCAxLTEuNTYzLjMxMyAyLjkxMyAyLjkxMyAwIDAgMSAxLjU2My0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM5NzVhM2UiIGQ9Ik0xMDQuNDI3IDEyNy4zNDRhMi44MTcgMi44MTcgMCAwIDEtMS4xNDYuMzEzIDIuNDYgMi40NiAwIDAgMSAxLjE0Ni0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM2MjNhNDMiIGQ9Ik0xMjQuMDEgMTI3LjM0NGEzLjM3MiAzLjM3MiAwIDAgMS0xLjI1LjMxMyAzLjM3MiAzLjM3MiAwIDAgMSAxLjI1LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzRmMmU0NSIgZD0iTTEwMy4wNzMgMTI3LjY1NmEuMjMyLjIzMiAwIDAgMS0uMTA0LjE1NmMtLjM4Mi4wNTctLjc2NC4xMDktMS4xNDYuMTU2YTMuMzcyIDMuMzcyIDAgMCAxIDEuMjUtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjODY0ZjQwIiBkPSJNMTIyLjY1NiAxMjcuNjU2YTE3LjkzNCAxNy45MzQgMCAwIDEtMi41LjUyMS4zNDcuMzQ3IDAgMCAxIC4yMDgtLjE1NiAyNi41MTkgMjYuNTE5IDAgMCAxIDIuMjkyLS4zNjVaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzZhM2Y0MiIgZD0iTTEwMC4zNjUgMTI4LjE3N2EzLjM3MiAzLjM3MiAwIDAgMS0xLjI1LjMxMy4yMzIuMjMyIDAgMCAxIC4xMDQtLjE1NmMuMzgyLS4wNTcuNzY0LS4xMDkgMS4xNDYtLjE1NloiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOGQ1MzNmIiBkPSJNMTE5LjYzNSAxMjguMjgxYTcuMzY1IDcuMzY1IDAgMCAxLTEuNTYzLjMxMyAyLjkxMyAyLjkxMyAwIDAgMSAxLjU2My0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM0ZTJkNDUiIGQ9Ik0xMTYuNTEgMTI4LjgwMmE0LjAxMiA0LjAxMiAwIDAgMS0xLjE0Ni4zMTMuMjI5LjIyOSAwIDAgMSAuMTA0LS4xNTZjLjM0Ny0uMDY0LjY5NC0uMTE2IDEuMDQyLS4xNTZaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzUxMmU0NSIgZD0iTTk1LjU3MyAxMjkuMTE1YS4yMzIuMjMyIDAgMCAxLS4xMDQuMTU2Yy0uMzQ3LjA2NC0uNjk0LjExNi0xLjA0Mi4xNTZ2LS4xMDRhOC4zMzYgOC4zMzYgMCAwIDEgMS4xNDYtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNTEyYzQ2IiBkPSJNNjUuOTkgMTI4LjkwNmMtLjAxLjI0NS0uMTE0LjQxOC0uMzEzLjUyMS4wMjYtLjIyNi4xMy0uNC4zMTMtLjUyMVoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOWU1ZTNkIiBkPSJNMTE1LjE1NiAxMjkuMTE1YS4yMjkuMjI5IDAgMCAxLS4xMDQuMTU2bC0xLjc3MS4yNmEuMzQ3LjM0NyAwIDAgMSAuMjA4LS4xNTYgNjcuNjQ2IDY3LjY0NiAwIDAgMCAxLjY2Ny0uMjZaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2I4NmUzYSIgZD0iTTk0LjQyNyAxMjkuMzIzdi4xMDRhMjcuOTkgMjcuOTkgMCAwIDAtMS4zNTQuMjA4Yy4wNjgtLjEyOC4xODktLjE5Ny4zNjUtLjIwOC4zMjctLjA2NC42NTctLjA5OC45OS0uMTA0WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM2MjNhNDMiIGQ9Ik05Mi44NjUgMTI5LjYzNWMtLjIxLjE0OC0uNDUzLjIxOC0uNzI5LjIwOHYtLjEwNGE1LjQgNS40IDAgMCAxIC43MjktLjEwNFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOTI1NjNmIiBkPSJNMTEzLjA3MyAxMjkuNTMxYy0uODMuMjg1LTEuNjk5LjQ1OC0yLjYwNC41MjFhLjM0Ny4zNDcgMCAwIDEgLjIwOC0uMTU2Yy43OTktLjEyNiAxLjU5OC0uMjQ4IDIuMzk2LS4zNjVaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzZlNDA0MiIgZD0iTTY1LjU3MyAxMjkuNjM1Yy4wMDguMTU5LS4wNjIuMjY0LS4yMDguMzEzLS4wMDgtLjE1OS4wNjItLjI2NC4yMDgtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYWI2NzNiIiBkPSJNOTIuMTM1IDEyOS43NHYuMTA0Yy0uMzA4LjA2OS0uNjIuMTAzLS45MzguMTA0LjI4OS0uMTIxLjYwMS0uMTkuOTM4LS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzQwMjI0NyIgZD0iTTkwLjc4MSAxMzAuMDUyYS42NTIuNjUyIDAgMCAxLS41MjEuMjZjLS4yNzYuMDUyLS41NTMuMDY5LS44MzMuMDUyLjQyOS0uMTUxLjg4LS4yNTUgMS4zNTQtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOWI1YzNkIiBkPSJNMTEwLjM2NSAxMzAuMDUyYS4zNDcuMzQ3IDAgMCAxLS4yMDguMTU2Yy0uMzgyLjA1Ny0uNzY1LjEwOS0xLjE0Ni4xNTZ2LS4xMDRjLjQ0OS0uMDguOTAxLS4xNSAxLjM1NC0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM1ODM0NDQiIGQ9Ik0xMDkuMDEgMTMwLjI2di4xMDRhNC4zOTQgNC4zOTQgMCAwIDEtLjgzMy4xMDR2NC4wNjNjLS4xMDQtMS4zNzEtLjEzOS0yLjc1OS0uMTA0LTQuMTY3LjMxNS0uMDIxLjYyNy0uMDU2LjkzOC0uMTA0WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM1NTMxNDQiIGQ9Ik04OC4wNzMgMTMwLjU3M2EuMjMyLjIzMiAwIDAgMS0uMTA0LjE1NmMtLjI3Ni4wNTItLjU1My4wNjktLjgzMy4wNTJhNy4yMjMgNy4yMjMgMCAwIDEgLjkzOC0uMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4NjRmNDAiIGQ9Ik02OS40MjcgMTMwLjU3M2MuMDA4LjE1OS0uMDYyLjI2NC0uMjA4LjMxMy0uMDA4LS4xNTkuMDYyLS4yNjQuMjA4LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzRkMmE0NiIgZD0iTTg3LjEzNSAxMzAuNzgxYy0uMjEuMTQ4LS40NTMuMjE4LS43MjkuMjA4LjIxLS4xNDguNDUzLS4yMTguNzI5LS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzlkNWUzZCIgZD0iTTg1LjM2NSAxMzEuMDk0YTQuMjEzIDQuMjEzIDAgMCAxLTEuNjY3LjMxMyA4LjA4NCA4LjA4NCAwIDAgMSAxLjY2Ny0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4NDRlNDAiIGQ9Ik0xMDQuOTQ4IDEzMS4zMDJjLS42My4wMjQtMS4yNTUuMDk0LTEuODc1LjIwOGExMC4zMTYgMTAuMzE2IDAgMCAxIDEuNjY3LS40MTdjLjEyNi4wMjYuMTk2LjA5NS4yMDguMjA4WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM1MTJiNDYiIGQ9Ik02NC42MzUgMTMxLjE5OGMtLjAxLjI0NS0uMTE0LjQxOC0uMzEzLjUyMS4wMjYtLjIyNi4xMy0uNC4zMTMtLjUyMVoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYTc2MzNkIiBkPSJNMTAyLjg2NSAxMzEuNTFhLjIzMi4yMzIgMCAwIDEtLjEwNC4xNTZjLS4yNzYuMDUyLS41NTMuMDY5LS44MzMuMDUyLjI4OS0uMTIxLjYwMS0uMTkuOTM4LS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzRmMmU0NSIgZD0iTTgzLjQ5IDEzMS41MWEzLjk4NCAzLjk4NCAwIDAgMS0xLjM1NC4zMTN2LS4xMDRjLjQ0Ny0uMDg5Ljg5OS0uMTU4IDEuMzU0LS4yMDhaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2JkNzEzYSIgZD0iTTgyLjEzNSAxMzEuNzE5di4xMDRhMjcuOTkgMjcuOTkgMCAwIDAtMS4zNTQuMjA4Yy4wNjgtLjEyOC4xODktLjE5Ny4zNjUtLjIwOC4zMjctLjA2NC42NTctLjA5OC45OS0uMTA0WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM2ZTNmNDMiIGQ9Ik04MC41NzMgMTMyLjAzMWEuMjMyLjIzMiAwIDAgMS0uMTA0LjE1NmMtLjUyMi4wOTYtMS4wNDIuMTgyLTEuNTYzLjI2YTUuMDU3IDUuMDU3IDAgMCAxIDEuNjY3LS40MTdaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzk5NWIzZSIgZD0iTTEwMC4xNTYgMTMyLjAzMWEuMjMyLjIzMiAwIDAgMS0uMTA0LjE1NmMtLjI3Ni4wNTItLjU1My4wNjktLjgzMy4wNTIuMjg5LS4xMjEuNjAxLS4xOS45MzgtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNTEyYzQ1IiBkPSJNOTkuMjE5IDEzMi4yNGEyMi4yMzQgMjIuMjM0IDAgMCAxLTEuMzU0LjMxM2gtLjIwOGEyLjkwMiAyLjkwMiAwIDAgMSAxLjU2My0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM2MzNhNDMiIGQ9Ik03OC4yODEgMTMyLjU1MmE3LjM2NSA3LjM2NSAwIDAgMS0xLjU2My4zMTMgMi45MTMgMi45MTMgMCAwIDEgMS41NjMtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOTY1OTNlIiBkPSJNOTcuNjU2IDEzMi41NTJoLjIwOGMtLjczNi4yMjMtMS41LjM2MS0yLjI5Mi40MTdhNy45MjYgNy45MjYgMCAwIDEgMi4wODMtLjQxN1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjODE0ZDQwIiBkPSJNNjMuNjk4IDEzMi43NmMuMDA4LjE1OS0uMDYyLjI2NC0uMjA4LjMxMy0uMDA4LS4xNTkuMDYyLS4yNjQuMjA4LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2I4NmUzYiIgZD0iTTc1LjE1NiAxMzMuMDczYy0uNjAxLjE4Ni0xLjIyNi4zMjUtMS44NzUuNDE3LjA2OC0uMTI4LjE4OS0uMTk3LjM2NS0uMjA4YTc5LjI3IDc5LjI3IDAgMCAxIDEuNTEtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNjYzYzQzIiBkPSJNNzMuMDczIDEzMy40OWEuMjMyLjIzMiAwIDAgMS0uMTA0LjE1NmMtLjM0Ny4wNjQtLjY5NC4xMTYtMS4wNDIuMTU2YTIuNDYgMi40NiAwIDAgMSAxLjE0Ni0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiNhZTY4M2IiIGQ9Ik03MC4zNjUgMTM0LjAxYTYuODYzIDYuODYzIDAgMCAxLTEuNzcxLjQxNyA2LjYyIDYuNjIgMCAwIDEgMS43NzEtLjQxN1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjODg1MTNmIiBkPSJNOTAuMzY1IDEzNC4wMWE4LjA4NCA4LjA4NCAwIDAgMS0xLjY2Ny4zMTMgMy41ODUgMy41ODUgMCAwIDEgMS42NjctLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOTU1ODNmIiBkPSJNODguNTk0IDEzNC4zMjNjLS44MDQuMjUxLTEuNjM3LjQyNS0yLjUuNTIxYS4zNDcuMzQ3IDAgMCAxIC4yMDgtLjE1NiAyNi4zMTUgMjYuMzE1IDAgMCAxIDIuMjkyLS4zNjVaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2M2NzYzOCIgZD0iTTkxLjQwNiAxMzYuMTk4YTExLjU1MiAxMS41NTIgMCAwIDEtLjEwNC0yLjE4OGgtLjkzOGE0LjAzMSA0LjAzMSAwIDAgMSAxLjA0Mi0uMjA4djIuMzk2WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4ZTU0M2YiIGQ9Ik04NS44ODUgMTM0Ljg0NGMtLjYzLjIxNi0xLjI5LjM1NC0xLjk3OS40MTdhLjM0Ny4zNDcgMCAwIDEgLjIwOC0uMTU2IDM1LjQ2NyAzNS40NjcgMCAwIDEgMS43NzEtLjI2WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM2ODNkNDIiIGQ9Ik04Mi40NDggMTM1LjQ2OWEyLjgxNyAyLjgxNyAwIDAgMS0xLjE0Ni4zMTMgMi40NiAyLjQ2IDAgMCAxIDEuMTQ2LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzVlMzc0MyIgZD0iTTEwNC45NDggMTMzLjA3M2MuMTUyIDEuMzMzLjIyMiAyLjY4OC4yMDggNC4wNjMgMCAuODUxLS4wMzQgMS42ODQtLjEwNCAyLjUuMDA5LTIuMTg5LS4wMjYtNC4zNzYtLjEwNC02LjU2M1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjODk1MTQwIiBkPSJNODAuMTU2IDEzNS45OWE2LjA0IDYuMDQgMCAwIDEtMS41NjMuMzEzIDIuOTEzIDIuOTEzIDAgMCAxIDEuNTYzLS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzkwNTUzZiIgZD0iTTc4LjM4NSAxMzYuMzAyYTYuODcgNi44NyAwIDAgMS0xLjk3OS40MTcgNi44NyA2Ljg3IDAgMCAxIDEuOTc5LS40MTdaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzg0NGU0MCIgZD0iTTc1LjM2NSAxMzYuOTI3YTcuMzY1IDcuMzY1IDAgMCAxLTEuNTYzLjMxMyAyLjkxMyAyLjkxMyAwIDAgMSAxLjU2My0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3NjQ2NDEiIGQ9Ik03Mi42NTYgMTM3LjQ0OGE0LjAzMSA0LjAzMSAwIDAgMS0xLjA0Mi4yMDguMzQ3LjM0NyAwIDAgMSAuMjA4LS4xNTZjLjI3Ni0uMDUyLjU1My0uMDY5LjgzMy0uMDUyWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM5YjVjM2UiIGQ9Ik03MS41MSAxMzcuNjU2YS4zNDcuMzQ3IDAgMCAxLS4yMDguMTU2bC0xLjc3MS4yNmEuMzQ3LjM0NyAwIDAgMSAuMjA4LS4xNTZsMS43NzEtLjI2WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4YjUzM2YiIGQ9Ik05NS4zNjUgMTMyLjk2OWMtLjE4NS4xOTItLjQyOC4yNjEtLjcyOS4yMDguMDg0IDIuNDY1LjExOSA0LjkyOS4xMDQgNy4zOTZhMjExLjY2NSAyMTEuNjY1IDAgMCAxLS4yMDgtNy41bC44MzMtLjEwNFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjOTk1YjNkIiBkPSJNNjguODAyIDEzOC4xNzdhLjM0Ny4zNDcgMCAwIDEtLjIwOC4xNTZjLS4zODIuMDU3LS43NjQuMTA5LTEuMTQ2LjE1NmEzLjk4NCAzLjk4NCAwIDAgMSAxLjM1NC0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM3OTQ4NDAiIGQ9Ik01OS45NDggMTM4LjY5OGMuMTQ2LjA0OS4yMTYuMTUzLjIwOC4zMTMtLjE0Ni0uMDQ5LS4yMTYtLjE1My0uMjA4LS4zMTNaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzM1MWI0OCIgZD0iTTkxLjUxIDEzOC42OThhOC40NDUgOC40NDUgMCAwIDEgLjMxMyAxLjUxYy0uMTk3LjIxLS40NC4zMzItLjcyOS4zNjUuMDgyLS4xNjcuMjIxLS4yMzYuNDE3LS4yMDh2LTEuNjY3WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4ZTU0M2UiIGQ9Ik0xMDMuNDkgMTQxLjE5OGEzLjI5NiAzLjI5NiAwIDAgMS0uMjA4LjYyNWgtLjEwNGEuOTI2LjkyNiAwIDAgMSAuMzEzLS42MjVaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzg0NGUzZiIgZD0iTTEwOS44NDQgMTQxLjE5OGEuOTI2LjkyNiAwIDAgMSAuMzEzLjYyNWgtLjEwNGEzLjMxIDMuMzEgMCAwIDEtLjIwOC0uNjI1WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM2NjNjNDMiIGQ9Ik05MC4wNTIgMTQxLjUxYy4wMDguMTU5LS4wNjIuMjY0LS4yMDguMzEzLS4wMDgtLjE1OS4wNjItLjI2NC4yMDgtLjMxM1oiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNTIyYzQ2IiBkPSJNOTUuOTkgMTQxLjgyM2MuMTU3LjE3NS4yNjEuMzgzLjMxMy42MjUtLjI1Ny0uMTE2LS4zNjEtLjMyNC0uMzEzLS42MjVaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzRmMmM0NSIgZD0iTTEwMy4xNzcgMTQxLjgyM2guMTA0djEuNzcxYTIuNjc3IDIuNjc3IDAgMCAxLS4xMDQtMS43NzFaIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iIzRlMmI0NSIgZD0iTTExMC4wNTIgMTQxLjgyM2guMTA0Yy4xNzEuNzk3LjEwMSAxLjU2LS4yMDggMi4yOTIuMDg5LS43Ni4xMjMtMS41MjQuMTA0LTIuMjkyWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM5NTU5M2UiIGQ9Ik04OS42MzUgMTQyLjI0YTUuMjIgNS4yMiAwIDAgMC0uMTA0IDIuNS4zNDcuMzQ3IDAgMCAxLS4xNTYtLjIwOCA4LjUxOCA4LjUxOCAwIDAgMSAwLTEuODc1Yy4wMTMtLjIwMi4wOTktLjM0MS4yNi0uNDE3WiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM4ODUxM2YiIGQ9Ik0xMDMuNTk0IDE0NC41MzFjLjE0Ni4wNDkuMjE2LjE1My4yMDguMzEzLS4xNDYtLjA0OS0uMjE2LS4xNTMtLjIwOC0uMzEzWiIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiM5MDU2M2UiIGQ9Ik0xMDguMjgxIDE0NS44ODVhLjkyNi45MjYgMCAwIDEtLjYyNS4zMTN2LS4xMDRhMy4zMSAzLjMxIDAgMCAxIC42MjUtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjNTAyZTQ1IiBkPSJNMTA1LjQ2OSAxNDYuMDk0YTcuNDAyIDcuNDAyIDAgMCAwIDIuMTg4IDB2LjEwNGMtLjM2MS4wNTUtLjcyNi4wOS0xLjA5NC4xMDRhMi4yMjkgMi4yMjkgMCAwIDEtMS4wOTQtLjIwOFoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eToxIiBmaWxsPSIjYWU2ODNjIiBkPSJNOTQuOTQ4IDE0Ni41MWMtLjM2OC40NTEtLjg1NC42NTktMS40NTguNjI1LjQ5LS4xODYuOTc2LS4zOTUgMS40NTgtLjYyNVoiLz48L3N2Zz4=",
      start: "2022",
      end: "2024",
      description:
        "Contributed to blockchain research and development, Across DeFi projects including Kimberlite, KRYPTOVERSE, NFT NG and more. We built DEXs, LP farms, NFT marketplaces, and more .",
    },
    {
      company: "PineApp Solutions",
      href: "https://pineapptech.com/",
      badges: [],
      location: "Enugu, Nigeria",
      title: "CTO & Backend Engineer",
      logoUrl: "/pineapp.png",
      start: "March 2024",
      end: "Dec 2024",
      description:
        "Led the development of PineApp major products including Pine Business Grow, Pine School Pay and Pine Ticketing.",
    },
    {
      company: "Horus Labs",
      href: "https://www.horuslabs.io",
      badges: [],
      location: "Remote",
      title: "Web3 Software Developer",
      logoUrl: "https://avatars.githubusercontent.com/u/123994955?s=200&v=4",
      start: "August 2024",
      end: "2025",
      description:
        "Contributed to blockchain research and backend development, focusing on coloniz a decentralized social network from Africa.",
    },
    {
      company: "Vynix Innovation Labs Ltd.",
      href: "https://vynixlabs.com/",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Founder",
      logoUrl: "https://avatars.githubusercontent.com/u/217583073?s=200&v=4",
      start: "July 2025",
      end: "Present",
      description:
        "Leading Vynix Innovation Labs, a software development firm specializing in custom software, web and mobile applications, and IT consulting services.",
    },
  ],
  education: [
    {
      school: "Federal University Ndufu-Alike Ikwo",
      href: "https://funai.edu.ng",
      degree: "Bachelor's Degree (Mechatronics Engineer)",
      logoUrl: "https://funai.edu.ng/wp-content/uploads/2020/03/cropped-funai_Logo-1.png", 
      start: "Jan 2017",
      end: "Jan 2022",
    },
  ],
  projects: [
    {
      title: "Yield Vaults (YAO)",
      href: "https://yieldvaults.ar.io",
      dates: "2025",
      active: true,
      description:
        "Autonomous AI yield aggregator on AO, optimizing DeFi yields with agents. Finalist in Practical Utility Agents track.",
      technologies: [
        "TypeScript",
        "Lua",
        "AO",
      ],
      links: [
        {
          type: "X",
          href: "https://x.com/yield_vaults",
          icon: <Icons.x className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ikemHood",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yao.jpeg",
      video: "",
    },
    {
      title: "Linx Lending",
      href: "https://linxlabs.org",
      dates: "2025",
      active: true,
      description:
        "Leading Lending and Borrowing platform on Alephium.",
      technologies: [
        "TypeScript",
        "Ralph",
        "Alephium",
      ],
      links: [
        {
          type: "website",
          href: "https://linxlabs.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/linx.png",
      video: "",
    },
    {
      title: "Orbis Wallet",
      href: "https://github.com/cy-forge/Orbis-Wallet",
      dates: "2025",
      active: true,
      description:
        "Unified, secure smart contract wallet for Starknet, simplifying dApp onboarding and bridging Web2 to Web3.",
      technologies: [
        "TypeScript",
        "Cairo",
        "Starknet",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/cy-forge/Orbis-Wallet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/orbis.png",
      video: "",
    },
    {
      title: "Mingloft",
      href: "https://www.mingloft.com",
      dates: "2025",
      active: true,
      description:
        "Ticketing and event management platform delivering scheduling, task automation, and payments for organizers.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.mingloft.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mingloft-dash.png",
      video: "",
    },
    {
      title: "Capalyse",
      href: "https://www.capalyse.com",
      dates: "2025",
      active: true,
      description:
        "Analytics suite for investment teams combining portfolio intelligence, automation, and AI-driven reporting.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.capalyse.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/capalyse-dash.png",
      video: "",
    },
    {
      title: "Kyrooz",
      href: "https://www.kyrooz.com",
      dates: "2025",
      active: true,
      description:
        "Customer support dashboard providing AI-assisted ticket routing, status tracking, and analytics.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.kyrooz.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/kyrooz-dash.png",
      video: "",
    },
  ],
  hackathons: [
    // {
    //   title: "AO Hackathon (Practical Utility Agents Track)",
    //   dates: "August 2025",
    //   location: "Online",
    //   description:
    //     "Won the Practical Utitlity Agents Track",
    //   image: "",
    //   links: [
    //     {
    //       title: "X Post",
    //       icon: <Icons.x className="h-4 w-4" />,
    //       href: "https://x.com/yield_vaults/status/1964021734182428816",
    //     },
    //   ],
    // },
    {
      title: "AO Hackathon (Practical Utility Agents Track)",
      dates: "September 2025",
      location: "Online",
      description:
        "Won the Practical Utitlity Agents Track",
      image: "",
      links: [
        {
          title: "X Post",
          icon: <Icons.x className="h-4 w-4" />,
          href: "https://x.com/yield_vaults/status/1964021734182428816",
        },
      ],
    },
  ],
}

