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
    image: '/assets/prototype-screens/home.svg',
    description: 'Main navigation for Claude Code improvement concepts',
  },
  {
    id: 'concept-1',
    title: 'Concept 1',
    image: '/assets/prototype-screens/screen-1.svg',
    description: 'Onboarding improvements',
  },
  {
    id: 'concept-2',
    title: 'Concept 2',
    image: '/assets/prototype-screens/screen-2.svg',
    description: 'Feature discovery enhancements',
  },
  {
    id: 'concept-3',
    title: 'Concept 3',
    image: '/assets/prototype-screens/screen-3.svg',
    description: 'Collaboration workflows',
  },
  {
    id: 'concept-4',
    title: 'Concept 4',
    image: '/assets/prototype-screens/screen-4.svg',
    description: 'Growth opportunities',
  },
];
