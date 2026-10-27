export type Project = {
  id: string;
  name: string;
  company: string;
  category: string;
  dates: string;
  summary: string;
  highlight: string;
  tech: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    id: 'designly', name: 'Designly', company: 'cloudstaff', category: 'Real estate',
    dates: 'Dec 2021 – Aug 2024',
    summary: 'Modernized a real estate application by migrating backend functionality from Slim to Laravel, improving templates, and resolving application issues.',
    highlight: 'Contributed to a 40% reduction in project backlogs.',
    tech: ['Laravel', 'Angular', 'MySQL'],
  },
  {
    id: 'bus-reservation', name: 'Bus Ticket Reservation', company: 'independent', category: 'Travel',
    dates: 'Oct 2025 – Present',
    summary: 'Built a fullstack application for searching bus schedules and managing ticket reservations, connecting an Angular frontend to Laravel REST APIs.',
    highlight: 'Personal project covering frontend, backend, and database development.',
    tech: ['Angular 19', 'Laravel 12', 'MariaDB'],
    url: 'https://whinlopez06.github.io/angular_19_bus_ticket_reservation',
  },
  {
    id: 'elmo-classroom', name: 'ELMO Classroom', company: 'bcs', category: 'Education',
    dates: 'Jun 2020 – Nov 2021',
    summary: 'Developed Angular features for an online classroom application and led the research and integration of the Google Drive API.',
    highlight: 'Frontend enhancements, REST API integration, and issue resolution.',
    tech: ['Angular', 'TypeScript', 'Google Drive API'],
  },
  {
    id: 'health-metrics', name: 'Health Metrics', company: 'bcs', category: 'Healthcare',
    dates: 'Jun 2019 – Mar 2020',
    summary: 'Enhanced healthcare application modules and resolved client-reported issues across application and database layers.',
    highlight: 'Updated SQL tables, queries, and stored procedures to support business requirements.',
    tech: ['PHP', 'SQL Server', 'AngularJS'],
  },
];

export type Employer = {id:string;name:string;role:string;dates:string;summary:string};
export const employers: Employer[] = [
 {id:'cloudstaff',name:'Cloudstaff',role:'Senior Software Engineer',dates:'Dec 2021 – Aug 2024',summary:'Fullstack development and backend modernization for Designly. Migrated Slim functionality to Laravel, enhanced templates, and resolved complex application issues.'},
 {id:'bcs',name:'BCS Technology Philippines',role:'PHP Developer',dates:'Jun 2019 – Nov 2021',summary:'Built Angular features and integrations for ELMO Classroom, and improved healthcare application modules and SQL Server data operations for Health Metrics.'},
 {id:'pccw',name:'Lenovo PCCW Solutions Philippines',role:'Solutions Developer I05',dates:'Jan 2017 – Mar 2019',summary:'Translated technical specifications from the Hong Kong team into application functionality. Developed ProcessMaker modules, custom PHP APIs, and relational databases.'},
 {id:'allcard',name:'Allcard Technologies',role:'Software Developer',dates:'Apr 2015 – Nov 2016',summary:'Delivered applications from requirements through database design, QA, installation, deployment, and client support.'},
 {id:'datamobility',name:'Datamobility Corporation',role:'Programmer / Analyst',dates:'Mar 2012 – Dec 2014',summary:'Developed and supported campus web applications, migrated legacy databases to cloud environments, and trained client champion users.'},
 {id:'quadrant',name:'Quadrant Information Services, Inc.',role:'Programmer Trainee',dates:'Sep 2011 – Dec 2011',summary:'Programmed and maintained rate files from market specifications and performed Level 3 testing using MAP PRO 7 and Quadrant QA tools.'}
];
export const moreProjects = [
 {name:'FWFS',company:'pccw',dates:'Jun 2017 – Mar 2019',summary:'Maintained ProcessMaker business process modules and custom PHP APIs after a team transition. Revamped database structures and SQL queries to improve calculation accuracy.',tech:'PHP · ProcessMaker · REST API · MySQL'},
 {name:'SABON',company:'pccw',dates:'May – Jun 2017',summary:'Contributed to a Magento e-commerce application, resolving issues in existing modules and supporting application enhancements.',tech:'Magento · PHP · MySQL · JavaScript'},
 {name:'MyCampus Card',company:'allcard',dates:'Apr – Nov 2016',summary:'Led development and support of a campus card platform, including database development, QA, deployment, and client implementations.',tech:'C#.NET · Microsoft SQL Server'},
 {name:'Pag-IBIG Loyalty Card',company:'allcard',dates:'Oct 2015 – Mar 2016',summary:'Contributed to the web-based billing and collection system for the Pag-IBIG Loyalty Card program.',tech:'C#.NET · ASP.NET · JavaScript · jQuery'},
 {name:'Allcard internal applications',company:'allcard',dates:'Apr – Sep 2015',summary:'Led fullstack development and maintenance of internal business applications supporting company operations.',tech:'PHP · Microsoft SQL Server · JavaScript'},
 {name:'Campus++ & CampusLite',company:'datamobility',dates:'Mar 2012 – Mar 2016 (project dates)',summary:'Developed and supported campus applications, including database migration, client implementations, requested changes, troubleshooting, and user training.',tech:'PHP · MySQL · JavaScript · AJAX'}
];
