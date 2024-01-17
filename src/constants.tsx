import { Icon } from '@iconify/react';



import { SideNavItem } from './types';


export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },

  {
    title: 'Trending',
    path: '/trending',
    icon: <Icon icon="icon-park-twotone:trend-two" width="24" height="24" />,
  },
  // {
  //   title: 'Trending - 1',
  //   path: '/trendings',
  //   icon: <Icon icon="icon-park-twotone:trend-two" width="24" height="24" />,
  // },
  {
    title: 'Search',
    path: '/search',
    icon: <Icon icon="ri:search-line" width="24" height="24" />,
    // submenu: true,
    // subMenuItems: [
    //   { title: 'All', path: '/projects' },
    //   { title: 'Web Design', path: '/projects/web-design' },
    //   { title: 'Graphic Design', path: '/projects/graphic-design' },
    // ],
  },
  {
    title: 'Fundamentals',
    path: '/fundamental',
    icon: <Icon icon="clarity:details-line" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Company Overview', path: '/fundamental/company-overview' },
      { title: 'Income Statement', path: '/fundamental/income-statement' },
      { title: 'Balance Sheet', path: '/fundamental/balance-sheet' },
      { title: 'Cash Flow', path: '/fundamental/cash-flow' },
    ],
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];