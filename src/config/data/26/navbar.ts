import type { navbarType } from '@/types';
import { MUN_PAGE } from '@/config';

export const routes: navbarType[] = [
  { path: '/techfiesta', name: 'Techfiesta' },
  { path: MUN_PAGE, name: 'MUN' },
  { path: 'https://hack.ioittenet.com/', name: 'Hackathon' },
  { path: '/register/esports', name: 'eSports' },
];