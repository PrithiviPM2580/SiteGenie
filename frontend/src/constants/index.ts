import type { NavbarItem, ProjectPreviewCard } from "@/types";

export const NAVBAR: NavbarItem[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Project",
    link: "/projects",
  },
  {
    id: 3,
    name: "Preview",
    link: "/preview",
  },
  {
    id: 4,

    name: "Pricing",
    link: "/pricing",
  },
];

export const DUMMY_PROJECT_CARDS: ProjectPreviewCard[] = [
  {
    id: "project-1",
    preview: "project-1",
    name: "Create a developer portfolio website with AI",
    prompt: "Create a developer portfolio website with all sections",
    badge: "Website",
    createdAt: "11/19/2025",
    previewDoc:
      "<!doctype html><html><head><meta charset='utf-8'/><style>body{margin:0;font-family:Arial,Helvetica,sans-serif;background:#060d1d;color:#d9ecff;display:grid;place-items:center;height:100vh}h1{font-size:28px;margin:0 0 8px}p{opacity:.8;margin:0}.chip{margin-top:16px;padding:8px 14px;border-radius:999px;border:1px solid #3a7dff;background:#0f203f}</style></head><body><main><h1>Hi, I'm Alex Jr.</h1><p>Front-end developer portfolio</p><div class='chip'>View Projects</div></main></body></html>",
  },
  {
    id: "project-2",
    preview: "project-2",
    name: "Create an admin dashboard",
    prompt: "Create an admin dashboard",
    badge: "Website",
    createdAt: "11/19/2025",
    previewDoc:
      "<!doctype html><html><head><meta charset='utf-8'/><style>body{margin:0;font-family:Arial,Helvetica,sans-serif;background:#f6f8fc;color:#20242d}header{padding:12px 16px;background:#fff;border-bottom:1px solid #e5e9f2}section{display:grid;grid-template-columns:1.2fr .8fr;gap:12px;padding:16px}.card{height:130px;border-radius:12px;background:#fff;border:1px solid #e5e9f2}.ring{display:grid;place-items:center;font-size:24px;color:#5a5f73;background:conic-gradient(#8b8ff8 68%,#e8ebf8 0)}</style></head><body><header>Dashboard</header><section><div class='card'></div><div class='card ring'>68%</div></section></body></html>",
  },
  {
    id: "project-3",
    preview: "project-3",
    name: "Create a web developer portfolio website",
    prompt: "Create a web developer portfolio website",
    badge: "Website",
    createdAt: "11/17/2025",
    previewDoc:
      "<!doctype html><html><head><meta charset='utf-8'/><style>body{margin:0;font-family:Arial,Helvetica,sans-serif;background:#eef7f5;color:#113e36;display:grid;place-items:center;height:100vh}h1{margin:0;font-size:34px}.sub{margin-top:6px;opacity:.8;text-align:center}</style></head><body><main><h1>Hi, I'm Your Name</h1><p class='sub'>Personal developer portfolio</p></main></body></html>",
  },
  {
    id: "project-4",
    preview: "project-4",
    name: "Create a calculator",
    prompt: "Create a calculator",
    badge: "Website",
    createdAt: "11/14/2025",
    previewDoc:
      "<!doctype html><html><head><meta charset='utf-8'/><style>body{margin:0;font-family:Arial,Helvetica,sans-serif;background:#1a1f2f;color:#fff;display:grid;place-items:center;height:100vh}.calc{width:220px;padding:14px;border-radius:14px;background:#0f1320;border:1px solid #2f3956}.screen{height:34px;border-radius:8px;background:#24304d;margin-bottom:10px}.row{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.key{height:28px;border-radius:8px;background:#2a3450}</style></head><body><div class='calc'><div class='screen'></div><div class='row'><div class='key'></div><div class='key'></div><div class='key'></div><div class='key'></div></div></div></body></html>",
  },
  {
    id: "project-5",
    preview: "project-5",
    name: "Create a simple landing page in white and black only",
    prompt: "Create a simple landing page in white and black only",
    badge: "Website",
    createdAt: "11/24/2025",
    previewDoc:
      "<!doctype html><html><head><meta charset='utf-8'/><style>body{margin:0;font-family:Arial,Helvetica,sans-serif;background:#fff;color:#111;display:grid;place-items:center;height:100vh}.box{width:300px;text-align:center}.btn{display:inline-block;margin-top:12px;padding:8px 12px;border-radius:999px;background:#111;color:#fff}</style></head><body><div class='box'><h2>Excellence in Minimalism</h2><p>Simple monochrome landing page</p><span class='btn'>Get Started</span></div></body></html>",
  },
];
