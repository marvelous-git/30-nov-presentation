import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'USER MANAGEMENT',
    group: true,
  },
  {
    title: 'User Accounts',
    icon: 'layout-outline',
    children: [
      {
        title: 'Manage User-Accounts',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Register User',
        link: '/pages/layout/list',
      },
    ],
  },
  {
    title: 'User Roles',
    icon: 'layout-outline',
    children: [
      {
        title: 'Manage User-Roles',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Add User-Role',
        link: '/pages/layout/list',
      },
    ],
  },

  {
    title: 'CONTENT MANAGEMENT',
    group: true,
  },
  {
    title: 'Video',
    icon: 'layout-outline',
    children: [
      {
        title: 'Manage Videos',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Approve Videos',
        link: '/pages/layout/list',
      },
    ],
  },
  {
    title: 'User Roles',
    icon: 'layout-outline',
    children: [
      {
        title: 'Manage User-Roles',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Add User-Role',
        link: '/pages/layout/list',
      },
    ],
  },


  {
    title: 'BILLING MANAGEMENT',
    group: true,
  },
  {
    title: 'Payments',
    icon: 'layout-outline',
    children: [
      {
        title: 'Manage Payments',
        link: '/pages/layout/stepper',
      },
      {
        title: 'verify payments',
        link: '/pages/layout/list',
      },
    ],
  },
  {
    title: 'User Roles',
    icon: 'layout-outline',
    children: [
      {
        title: 'Manage User-Roles',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Add User-Role',
        link: '/pages/layout/list',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
