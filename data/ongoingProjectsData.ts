export interface TimelineStage {
  title: string;
  date: string;
  status: "Completed" | "In Progress" | "Pending";
  description?: string;
}

export interface OngoingProject {
  id: number;

  title: string;

  slug: string;

  category: string;

  image: string;

  gallery: string[];

  location: string;

  address: string;

  googleMapEmbed: string;

  client: string;

  consultant: string;

  projectManager: string;

  siteEngineer: string;

  projectType: string;

  progress: number;

  currentStage: string;

  startDate: string;

  expectedCompletion: string;

  area: string;

  workers: number;

  structure: string;

  roofing: string;

  description: string;

  overview: string;

  features: string[];

  timeline: TimelineStage[];
}

export const ongoingProjects: OngoingProject[] = [
  {
    id: 1,

    title: "Industrial Warehouse Construction",

    slug: "industrial-warehouse-construction",

    category: "Warehouse",

    image: "/images/projects/warehouse-1.png",

    gallery: [
      "/images/projects/warehouse-1.png",
      "/images/projects/warehouse-2.png",
      "/images/projects/warehouse-3.png",
    ],

    location: "Bengaluru, Karnataka",

    address:
      "KIADB Industrial Area, Bengaluru, Karnataka",

    googleMapEmbed:
      "https://www.google.com/maps/embed?pb=",

    client: "ABC Logistics Pvt Ltd",

    consultant: "MBS Construction",

    projectManager: "Mr. Vinod",

    siteEngineer: "Mr. Ramesh",

    projectType: "Warehouse Construction",

    progress: 72,

    currentStage: "Roofing Installation",

    startDate: "January 2026",

    expectedCompletion: "October 2026",

    area: "50,000 Sq.ft",

    workers: 95,

    structure: "PEB Steel Structure",

    roofing: "Insulated Roofing Sheet",

    description:
      "Construction of a modern logistics warehouse with premium steel structure and insulated roofing system.",

    overview:
      "This warehouse project is being executed using Pre-Engineered Building technology to deliver faster construction, superior durability and cost efficiency for industrial operations.",

    features: [
      "PEB Steel Structure",
      "High Strength Columns",
      "Insulated Roofing",
      "Large Clear Span",
      "Industrial Flooring",
      "Future Expansion Ready",
    ],

    timeline: [
      {
        title: "Site Preparation",
        date: "Jan 2026",
        status: "Completed",
      },
      {
        title: "Foundation",
        date: "Feb 2026",
        status: "Completed",
      },
      {
        title: "Steel Structure",
        date: "Mar 2026",
        status: "Completed",
      },
      {
        title: "Roof Installation",
        date: "Apr 2026",
        status: "In Progress",
      },
      {
        title: "Wall Cladding",
        date: "May 2026",
        status: "Pending",
      },
      {
        title: "Finishing Works",
        date: "Jun 2026",
        status: "Pending",
      },
    ],
  },

  {
    id: 2,

    title: "PEB Factory Building",

    slug: "peb-factory-building",

    category: "PEB",

    image: "/images/projects/warehouse-2.png",

    gallery: [
      "/images/projects/warehouse-2.png",
      "/images/projects/warehouse-3.png",
      "/images/projects/steel-1.png",
    ],

    location: "Tumakuru, Karnataka",

    address:
      "Industrial Estate, Tumakuru, Karnataka",

    googleMapEmbed:
      "https://www.google.com/maps/embed?pb=",

    client: "Suresh Industries",

    consultant: "MBS Construction",

    projectManager: "Mr. Vinod",

    siteEngineer: "Mr. Suresh",

    projectType: "Factory Building",

    progress: 48,

    currentStage: "Steel Erection",

    startDate: "March 2026",

    expectedCompletion: "December 2026",

    area: "65,000 Sq.ft",

    workers: 82,

    structure: "Pre Engineered Building",

    roofing: "Color Coated Roofing",

    description:
      "Large manufacturing facility under construction.",

    overview:
      "Premium industrial factory designed for heavy manufacturing operations using modern PEB technology.",

    features: [
      "Heavy Steel Structure",
      "Industrial Ventilation",
      "Premium Roofing",
      "Fire Safety",
      "Future Expansion",
    ],

    timeline: [
  {
    title: "Site Preparation",
    status: "Completed",
    date: "January 2026",
    description: "Site clearing, leveling and temporary utilities completed."
  },
  {
    title: "Foundation Works",
    status: "Completed",
    date: "February 2026",
    description: "Footings, pedestals and anchor bolts completed."
  },
  {
    title: "Steel Structure",
    status: "In Progress",
    date: "July 2026",
    description: "Primary and secondary steel erection is currently underway."
  },
  {
    title: "Roofing Installation",
    status: "Pending",
    date: "August 2026",
    description: "Roof sheeting and insulation installation."
  },
  {
    title: "Wall Cladding",
    status: "Pending",
    date: "September 2026",
    description: "Wall cladding and flashing installation."
  },
  {
    title: "Project Handover",
    status: "Pending",
    date: "October 2026",
    description: "Final inspection, testing and project handover."
  }
],
  },
];