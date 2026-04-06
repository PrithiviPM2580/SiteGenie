export interface NavbarItem {
  id: number;
  name: string;
  link: string;
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
