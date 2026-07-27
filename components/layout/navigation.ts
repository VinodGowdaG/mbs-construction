import {
  ImageIcon,
  PlayCircle,
  FileText,
  FolderOpen,
} from "lucide-react";

export const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const galleryItems = [
  {
    name: "Images",
    href: "/gallery/images",
    icon: ImageIcon,
    description: "Browse completed project photos",
  },
  {
    name: "Videos",
    href: "/gallery/videos",
    icon: PlayCircle,
    description: "Watch construction videos",
  },
  {
    name: "Brochures",
    href: "/gallery/brochures",
    icon: FileText,
    description: "Download company catalogues",
  },
  {
    name: "Categories",
    href: "/gallery/categories",
    icon: FolderOpen,
    description: "Explore project categories",
  },
];