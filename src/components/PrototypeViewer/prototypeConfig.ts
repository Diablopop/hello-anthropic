export interface PrototypeScreen {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const prototypeScreens: PrototypeScreen[] = [
  {
    id: 'home',
    title: 'Home',
    image: '/assets/prototype-1-home.webp',
    description: 'Main navigation for Claude Code enterprise features',
  },
  {
    id: 'chat-with-expert',
    title: 'Chat with an Expert',
    image: '/assets/prototype-2-chat-with-an-expert.webp',
    description: 'Connect non-engineers with AI-powered expert assistance',
  },
  {
    id: 'build-workflow',
    title: 'Build a Workflow',
    image: '/assets/prototype-3-build-a-workflow.webp',
    description: 'Create custom workflows using persistent context',
  },
  {
    id: 'connect-tools',
    title: 'Connect to Tools',
    image: '/assets/prototype-4-connect-to-tools.webp',
    description: 'Integrate MCPs and enterprise tools seamlessly',
  },
];
