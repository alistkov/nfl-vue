import type { Link } from '@/common/types';

export const MAIN_NAVIGATION: Link[] = [
  { label: 'Standings', routeName: 'standings' },
  { label: 'Games', routeName: 'games' },
  { label: 'Teams', routeName: 'teams' },
];

export const STANDINGS_NAVIGATION: Link[] = [
  { label: 'Divisions', routeName: 'divisions-standings' },
  { label: 'Conferences', routeName: 'conferences-standings' },
];

export const CONFERENCES = [
  {
    title: 'American Football Conference',
    divisions: [
      'AFC East',
      'AFC North',
      'AFC South',
      'AFC West',
    ]
  },
  {
    title: 'National Football Conference',
    divisions: [
      'NFC East',
      'NFC North',
      'NFC South',
      'NFC West',
    ]
  }
];
