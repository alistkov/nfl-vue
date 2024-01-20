import type { Link } from '@/common/types';

export const MAIN_NAVIGATION: Link[] = [
  { label: 'Standings', routeName: 'standings' },
  { label: 'Teams', routeName: 'teams' },
];

export const STANDINGS_NAVIGATION: Link[] = [
  { label: 'Division', routeName: 'divisions-standings' },
  { label: 'Conference', routeName: 'conferences-standings' },
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
