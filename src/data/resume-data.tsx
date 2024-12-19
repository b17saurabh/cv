import {
  Accops
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Saurabh Batham",
  initials: "SB",
  location: "Kannauj, Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Kannauj",
  about:
    "Backend Developer with a strong foundation in .NET technologies and cloud services, passionate about building scalable and high-quality solutions.",
  summary: (
    <>
      Dedicated software engineer with more than 2 years of experience in fast-paced
      startup environments. Specialized in developing backend services using .NET
      technologies, cloud platforms, and databases. Proven ability to deliver
      clean, scalable, and efficient solutions while contributing to high-impact
      projects such as Desktop-as-a-Service (DaaS). Committed to professional
      growth and continuous learning in back-end development.
    </>
  ),
  avatarUrl: "", // Add your avatar URL here
  personalWebsiteUrl: "", // Add your personal website URL here, if available
  contact: {
    email: "saurabhbatham17@gmail.com",
    tel: "+91-8418816899",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/b17saurabh", // Update if needed
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/b17saurabh", // Updated LinkedIn profile
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Abdul Kalam Technical University (AKTU)",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Tensech Solution Private Limited",
      link: "https://tensech.com", // Add company website if available
      badges: [".NET", "Python", "Google Cloud Platform", "FastAPI", "Elasticsearch"],
      title: "Backend Developer",
      logo: Accops, // Add the company logo if available
      start: "Dec 2022",
      end: "Present",
      description: (
        <>
          Developed and maintained scalable backend services using .NET and
          Python FastAPI.
          <ul className="list-inside list-disc">
            <li>
              Contributed to the Accops Desktop-as-a-Service (DaaS) project with
              Accops Systems, focusing on high-quality and scalable backend
              solutions.
            </li>
            <li>
              Led the development of Google Cloud Platform (GCP) connector and
              backend services for enhanced DaaS offerings.
            </li>
            <li>
              Spearheaded the Accops Reporting Server project, improving data
              retrieval speeds by 43% through Elasticsearch optimization.
            </li>
            <li>
              Conducted comprehensive unit testing to ensure robustness and high
              code quality.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Tensech Solution Private Limited",
      link: "https://tensech.com", // Add company website if available
      badges: [".NET", "C#", "SQL", "Cloud Services"],
      title: "Software Trainee",
      logo: Accops, // Add the company logo if available
      start: "Aug 2022",
      end: "Nov 2022",
      description: (
        <>
          Completed intensive training in backend development using the .NET
          stack.
          <ul className="list-inside list-disc">
            <li>
              Gained expertise in .NET stack technologies and programming in C#.
            </li>
            <li>
              Contributed to client projects and received acknowledgment for
              meeting training milestones ahead of schedule.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "C#",
    ".NET Framework",
    ".NET Core",
    "Python",
    "FastAPI",
    "SQL",
    "NoSQL",
    "ELK Stack",
    "Cloud Services",
    "Docker",
    "Git",
  ],
  projects: [
    {
      title: "Jio DaaS - Accops Reporting Server",
      techStack: [".NET", "Elasticsearch", "Apex Charts", "FastAPI", "SQL"],
      description:
        "Developed APIs to improve data retrieval speed by 43% using Elasticsearch. Enhanced data visualization with Apex Charts and ensured seamless integration through thorough unit testing.",
      logo: Accops, // Add project logo if available
      link: "https://www.accops.com/cloud-services/accops-daas", // Add project link if available
    },
    {
      title: "GCP Connector for DaaS",
      techStack: [".NET Core", "Google Cloud Platform", "REST APIs"],
      description:
        "Created a Google Cloud Platform connector to manage virtual compute resources, improving efficiency in cloud service integration.",
      logo: Accops, // Add project logo if available
      link: "https://www.accops.com/cloud-services/accops-daas", // Add project link if available
    },
  ],
} as const;
