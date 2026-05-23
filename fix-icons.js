const fs = require('fs');
let content = fs.readFileSync('src/data/courses.ts', 'utf8');

content = content.replace(/export type CourseCategory[\s\S]*?icon: string;/m, `import { 
  Globe, Zap, Layout, Server, Rocket, Smartphone, Bot, Apple, 
  Settings, PenTool, Image as ImageIcon, Cloud, Database, Shield, Lock, Network, 
  PieChart, LineChart, BrainCircuit, Sparkles, Code, Code2, Search, ShoppingCart, MonitorSmartphone
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type CourseCategory = 'Development' | 'Design' | 'Cloud & Security' | 'AI & Data' | 'Marketing' | 'Programming';

export interface Course {
  id: string;
  name: string;
  category: CourseCategory;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  technologies: string[];
  icon: LucideIcon;`);

const emojiMap = {
  "'🌐'": "Globe",
  "'⚡'": "Zap",
  "'🎨'": "Layout",
  "'🔧'": "Server",
  "'🚀'": "Rocket",
  "'📱'": "Smartphone",
  "'🤖'": "Bot",
  "'🍎'": "Apple",
  "'⚙️'": "Settings",
  "'✏️'": "PenTool",
  "'🖌️'": "ImageIcon",
  "'☁️'": "Cloud",
  "'🔶'": "Database",
  "'🔷'": "Database",
  "'🛡️'": "Shield",
  "'🔐'": "Lock",
  "'📊'": "PieChart",
  "'🔬'": "BrainCircuit",
  "'🧠'": "BrainCircuit",
  "'✨'": "Sparkles",
  "'🐍'": "Code",
  "'☕'": "Code2",
  "'💻'": "MonitorSmartphone",
  "'📈'": "LineChart",
  "'🔍'": "Search",
  "'🛒'": "ShoppingCart"
};

for (const [emoji, icon] of Object.entries(emojiMap)) {
  content = content.replace(new RegExp(`icon: ${emoji},`, 'g'), `icon: ${icon},`);
}

fs.writeFileSync('src/data/courses.ts', content);
console.log('Fixed icons in courses.ts');
