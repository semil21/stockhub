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
    title: 'Commodity',
    path: '/commodity',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Crude Oil WTI', path: '/commodity/crudeOilWTI' },
      { title: 'Crude Oil Brent', path: '/commodity/crudeOilBrent' },
      { title: 'Natural Gas', path: '/commodity/naturalGas' },
      { title: 'Copper', path: '/commodity/copper' },
      { title: 'Aluminium', path: '/commodity/aluminium' },
    ],
  },
];
