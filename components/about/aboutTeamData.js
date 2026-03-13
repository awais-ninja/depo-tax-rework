/**
 * About page team members. Data-driven for easy updates.
 * Add or edit: name (optional), title, image, description.
 * Homepage team (Director + 2 members) is separate and unchanged.
 */
export const ABOUT_TEAM_INTRO =
  'The DepoTax team includes specialists across client management, accounts, payroll, IT, marketing, and operations, helping support businesses and individuals across the UK.';

/** Director/CEO — featured at top with social links. Same as homepage Director. */
export const ABOUT_DIRECTOR = {
  id: 'ajmal-baig',
  name: 'Ajmal Aziz Baig',
  title: 'Director',
  tags: 'Tax Planning • Business Accounts',
  image: '/team/ajmal-baig.png',
  description: 'Leading DepoTax with a focus on quality, compliance, and client-centred service.',
  social: {
    instagram: 'https://www.instagram.com/ajmal.baig.35/',
    facebook: 'https://www.facebook.com/ajmalbaig74',
    linkedin: 'https://www.linkedin.com/in/ajmal-aziz-60432330/',
    twitter: null,
  },
};

/** Two senior team members shown directly under the Director */
export const ABOUT_SENIOR_TEAM = [
  {
    id: 'operations-manager',
    name: 'Taimoor Azhar',
    title: 'Operations Manager',
    image: '/team/taimoor.png',
    description: 'Helping ensure smooth operations and efficient delivery of client services.',
  },
  {
    id: 'ali-shan',
    name: 'Ali Shan',
    title: 'Assistant Practice Manager',
    image: '/team/ali-shan.png',
    description: 'Supporting practice management and client coordination across the team.',
  },
];

/** Departments with Head then person 2 and 3 */
export const ABOUT_DEPARTMENT_GROUPS = [
  {
    departmentLabel: 'Accounts Department',
    members: [
      { id: 'accounts-head', name: null, title: 'Accounts Department Head', image: '/team/accounts-department.png', description: 'Leading the accounts team and supporting clients with day-to-day accounting and compliance requirements.' },
      { id: 'accounts-2', name: null, title: 'Accounts Department', image: '/team/accounts-department-2.png', description: 'Supporting clients with day-to-day accounting and compliance requirements.' },
      { id: 'accounts-3', name: null, title: 'Accounts Department', image: '/team/accounts-department-3.png', description: 'Supporting clients with day-to-day accounting and compliance requirements.' },
    ],
  },
  {
    departmentLabel: 'Client Management Department',
    members: [
      { id: 'client-mgmt-head', name: null, title: 'Client Management Department Head', image: '/team/client-management-department.png', description: 'Leading client communication and service coordination.' },
      { id: 'client-mgmt-2', name: null, title: 'Client Management Department', image: '/team/client-management-department-2.png', description: 'Supporting client communication and service coordination.' },
      { id: 'client-mgmt-3', name: null, title: 'Client Management Department', image: '/team/client-management-department-3.png', description: 'Supporting client communication and service coordination.' },
    ],
  },
];

/** Standalone roles (single card each) */
export const ABOUT_OTHER_MEMBERS = [
  { id: 'it-manager', name: null, title: 'IT Manager', image: '/team/it-manager.png', description: 'Managing systems and technology to support secure, efficient operations.' },
  { id: 'marketing', name: null, title: 'Marketing Department', image: '/team/marketing-department.png', description: 'Supporting outreach and communication so clients can find the right information.' },
  { id: 'fdl', name: null, title: 'FDL', image: '/team/fdl.png', description: 'Supporting specialist compliance and filing requirements.' },
  { id: 'paye', name: null, title: 'PAYE Department', image: '/team/paye-department.png', description: 'Helping ensure smooth payroll and PAYE operations for clients.' },
];
