export interface NavbarItem {
  id: number;
  name: string;
  link: string;
}

export interface ProjectPreviewCard {
  id: string;
  preview: string;
  name: string;
  prompt: string;
  badge: string;
  createdAt: string;
  previewDoc: string;
  user?: User;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  fullName?: string;
  imageUrl?: string;
  image?: string;
}

export interface Message {
  id: string;
  role: any;
  content: string;
  timestamp: string;
}

export interface Version {
  id: string;
  timestamp: string;
  code: string;
}

export interface Project {
  id: string;
  name: string;
  initialPrompt: string;
  currentCode: string;
  userId: string;
  user?: User;
  isPublished?: boolean;
  versionId?: string;
  conversation: Message[];
  versions: Version[];
  CurrentVersionIndex: string;
  createdAt: string;
  upadatedAt: string;
}
export interface Plan {
  id: string;
  name: string;
  price: string;
  credits: string;
  description: string;
  features: string[];
}
