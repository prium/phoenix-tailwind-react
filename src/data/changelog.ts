import changelogListElips from './changelogList';

export default [
  {
    version: '2.2.0',
    title: 'Solara',
    publishDate: '9 Dec 2025',
    logs: {
      new: [
        'PACKAGE: <code>react-plock</code>',
        'PAGE: <code>apps/gallery/album</code>',
        'PAGE: <code>apps/gallery/gallery-column</code>',
        'PAGE: <code>apps/gallery/gallery-grid</code>',
        'PAGE: <code>apps/gallery/grid-with-title</code>',
        'PAGE: <code>apps/gallery/gallery-masonry</code>',
        'PAGE: <code>apps/gallery/gallery-slider</code>'
      ],
      update: [
        'SCSS: <code>src/assets/scss/theme/plugins/_swiper.scss</code>',
        'SCSS: <code>src/assets/scss/theme/_landing.scss</code>',
        'SCSS: <code>src/assets/scss/theme/_mixed.scss</code>',
      ]
    }
  },
  {
    version: '2.1.0',
    title: 'Ignis',
    publishDate: '17 Nov 2025',
    logs: {
      new: [
        'PACKAGE: <code>emoji-picker-react</code>', 
        'SCSS: <code>_emoji-picker.scss</code>'
      ],
      update: [
        'PACKAGE: <code>@fullcalendar/core</code> from <code>6.1.17</code> to <code>6.1.19</code>',
        'PACKAGE: <code>@fullcalendar/daygrid</code> from <code>6.1.17</code> to <code>6.1.19</code>',
        'PACKAGE: <code>@fullcalendar/interaction</code> from <code>6.1.17</code> to <code>6.1.19</code>',
        'PACKAGE: <code>@fullcalendar/list</code> from <code>6.1.17</code> to <code>6.1.19</code>',
        'PACKAGE: <code>@fullcalendar/react</code> from <code>6.1.17</code> to <code>6.1.19</code>',
        'PACKAGE: <code>@fullcalendar/timegrid</code> from <code>6.1.17</code> to <code>6.1.19</code>',
        'PACKAGE: <code>@iconscout/react-unicons</code> from <code>2.2.4</code> to <code>2.2.5</code>',
        'PACKAGE: <code>@testing-library/jest-dom</code> from <code>6.6.3</code> to <code>6.9.1</code>',
        'PACKAGE: <code>@tinymce/tinymce-react</code> from <code>6.2.1</code> to <code>6.3.0</code>',
        'PACKAGE: <code>@types/node</code> from <code>24.0.3</code> to <code>24.10.0</code>',
        'PACKAGE: <code>@types/react</code> from <code>19.1.8</code> to <code>19.2.2</code>',
        'PACKAGE: <code>@types/react-dom</code> from <code>19.1.6</code> to <code>19.2.2</code>',
        'PACKAGE: <code>Bootstrap</code> from <code>5.3.7</code> to <code>5.3.8</code>',
        'PACKAGE: <code>chart.js</code> from <code>4.5.0</code> to <code>4.5.1</code>',
        'PACKAGE: <code>dayjs</code> from <code>1.11.13</code> to <code>1.11.19</code>',
        'PACKAGE: <code>dhtmlx-gantt</code> from <code>9.0.11</code> to <code>9.1.0</code>',
        'PACKAGE: <code>echarts</code> from <code>5.6.0</code> to <code>6.0.0</code>',
        'PACKAGE: <code>echarts-for-react</code> from <code>3.0.2</code> to <code>3.0.5</code>',
        'PACKAGE: <code>fs-extra</code> from <code>11.3.0</code> to <code>11.3.2</code>',
        'PACKAGE: <code>fslightbox-react</code> from <code>1.8.0</code> to <code>2.0.0</code>',
        'PACKAGE: <code>leaflet.tilelayer.colorfilter</code> from <code>1.2.5</code> to <code>2.0.0</code>',
        'PACKAGE: <code>mapbox-gl</code> from <code>3.12.0</code> to <code>3.16.0</code>',
        'PACKAGE: Removed <code>picmo</code>',
        'PACKAGE: <code>react</code> from <code>19.1.0</code> to <code>19.2.0</code>',
        'PACKAGE: <code>react-chartjs-2</code> from <code>5.3.0</code> to <code>5.3.1</code>',
        'PACKAGE: <code>react-dom</code> from <code>19.1.0</code> to <code>19.2.0</code>',
        'PACKAGE: <code>react-flatpickr</code> from <code>4.0.10</code> to <code>4.0.11</code>',
        'PACKAGE: <code>react-intersection-observer</code> from <code>9.16.0</code> to <code>10.0.0</code>',
        'PACKAGE: <code>react-router</code> from <code>7.6.2</code> to <code>7.9.5</code>',
        'PACKAGE: <code>react-select</code> from <code>5.10.1</code> to <code>5.10.2</code>',
        'PACKAGE: <code>simplebar</code> from <code>6.3.1</code> to <code>6.3.2</code>',
        'PACKAGE: <code>simplebar-react</code> from <code>3.3.1</code> to <code>3.3.2</code>',
        'PACKAGE: <code>swiper</code> from <code>11.2.8</code> to <code>12.0.3</code>',
        'PACKAGE: <code>tinymce</code> from <code>7.9.1</code> to <code>8.2.1</code>',
        'PACKAGE: <code>uuid</code> from <code>11.1.0</code> to <code>13.0.0</code>',
        'PACKAGE: <code>vite</code> from <code>6.3.5</code> to <code>7.2.1</code>',
        'PACKAGE: <code>web-vitals</code> from <code>5.0.3</code> to <code>5.1.0</code>',
        'SCSS: Removed <code>_picmo.scss</code>',
        'Picmo replaced by emoji-picker-react',
      ],
      fix: [
        'Replaced the deprecated <code>containLabel</code> option in the Echarts grid configuration with the new <code>outerBoundsMode</code>.',
        'Minor Bug fix'
      ]
    }
  },
  {
    version: '2.0.0',
    title: 'Astraea',
    alertText:
      'This is a major update. Please backup your project before upgrading to the latest version.',
    publishDate: '15 Jul, 2025',
    logs: {
      new: [
        'PAGE: <code>gantt-chart</code>',
        'PACKAGE: <code>echarts</code>',
        'PACKAGE: <code>react-leaflet-markercluster</code>',
        'PACKAGE: <code>simplebar</code>',
        'PACKAGE: <code>simplebar-react</code>',
      ],
      update: [
        'PACKAGE: React Updated to <code>v19</code>.',
        'PACKAGE: Upgraded to <code>React Router v7</code>: <a href="https://reactrouter.com/upgrading/v6#upgrade-to-v7">See Migration Guide</a>',
        'Removed <code>forwardRef</code> and added the types support.',
        'Refactored Suspense boundaries to align React Router v7 best practices.',
        'All dependencies are updated to the latest version supported for <code>react 19</code>.',
        'PAGE: <code>modules/components/alerts</code>',
        'PAGE: <code>modules/forms/advance/advance-select</code>',
        'PACKAGE: Removed <code>@changey/react-leaflet-markercluster</code>',
        'PACKAGE: Removed <code>react-custom-scrollbars-2</code>'
      ]
    }
  },
  {
    version: '1.10.0',
    title: 'Emberon',
    publishDate: '4 Jun, 2025',
    logs: {
      new: [
        'DASHBOARD: <code>stock</code> ',
        'PAGE: <code>stock/stock-details</code>',
        'PAGE: <code>stock/portfolio</code>',
        'PAGE: <code>stock/watchlist</code>',
        'PACKAGE: <code>chart.js</code>',
        'PACKAGE: <code>react-chartjs-2</code>'
      ],
      update: ['PACKAGE: <code>Bootstrap to v5.3.6</code>'],
      fix: ['Minor bugs']
    }
  },
  {
    version: '1.9.0',
    title: 'Helios',
    alertText:
      'This is a major update. Please backup your project before upgrading to the latest version.',
    alertLink: {
      prefix: 'See the',
      linkText: 'migration',
      link: '/migrations/#v1.9.0',
      suffix: 'for details.'
    },
    publishDate: '4 May, 2025',
    logs: {
      update: [
        'Migrated from <b> Create React App (CRA) to Vite.</b>',
        'PACKAGE: Bootstrap to 5.3.5',
        'PACKAGE: React Bootstrap to 2.10.9',
        'PACKAGE: Removed <code>react-visibility-sensor</code>'
      ],
      new: ['PACKAGE: <code>react-intersection-observer</code>'],
      fix: ['Console warnings', 'Minor bugs']
    }
  },
  {
    version: '1.8.0',
    title: 'Dionysus',
    publishDate: '24 March, 2025',
    logs: {
      new: [
        'PAGE: <code>apps/file-manager/grid-view</code>',
        'PAGE: <code>apps/file-manager/list-view</code>'
      ],
      fix: ['Minor bugs']
    }
  },
  {
    version: '1.7.0',
    title: 'Prometheus',
    publishDate: '14 January, 2025',
    logs: {
      new: [
        'PAGE: <code>travel-agency/trip/homepage</code>',
        'PAGE: <code>travel-agency/trip/trip-details</code>',
        'PAGE: <code>travel-agency/trip/checkout</code>',
        'PACKAGE: <code>@dnd-kit/core</code>',
        'PACKAGE: <code>@dnd-kit/sortable</code>',
        'PACKAGE: <code>@dnd-kit/utilities</code>',
        'PACKAGE: <code>uuid</code>'
      ],
      update: [
        'DOC : <code>Draggable Documentation</code>',
        'PAGE: <code>apps/kanban/kanban</code>',
        'PAGE: <code>apps/kanban/create-board</code>',
        'PAGE: <code>apps/crm/deals</code>',
        'PACKAGE : <code>swiper 11.0.3 to 11.1.15</code>',
        'PACKAGE : Removed <code>react-beautiful-dnd</code>'
      ],
      fix: ['Minor bugs']
    }
  },
  {
    version: '1.6.0',
    title: 'Aether',
    publishDate: '12 November, 2024',
    logs: {
      new: [
        'PAGE : <code>travel-agency/hotel/customer/hotel-details</code>',
        'PAGE : <code>travel-agency/hotel/customer/hotel-compare</code>',
        'PAGE : <code>travel-agency/hotel/customer/checkout</code>',
        'PAGE : <code>travel-agency/hotel/customer/payment</code>',
        'PAGE : <code>travel-agency/flight/homepage</code>',
        'PAGE : <code>travel-agency/flight/booking</code>',
        'PAGE : <code>travel-agency/flight/payment</code>'
      ],
      update: [
        'DOC : <code>React Table Documentation</code>',
        'Header and footer style in flight module'
      ],
      fix: [
        'Horizontal nav scrollbar issue in firefox',
        'Multiple file select issue',
        'Mapbox full screen issue',
        'Minor bugs'
      ]
    }
  },
  {
    version: '1.5.0',
    title: 'Auxo',
    publishDate: '23 September, 2024',
    logs: {
      new: [
        '<b>Vite Starter version</b> (Contact <a href="mailto:support@themewagon.com">support</a> with the purchase id)',
        'PAGE : <code>travel-agency/hotel/admin/add-property</code>',
        'PAGE : <code>travel-agency/hotel/admin/add-room</code>',
        'PAGE : <code>travel-agency/hotel/admin/room-listing</code>',
        'PAGE : <code>travel-agency/hotel/admin/search-room</code>',
        'PAGE : <code>travel-agency/hotel/customer/homepage</code>',
        'PAGE : <code>travel-agency/hotel/customer/gallery</code>',
        'PACKAGE : <code>react-range</code>',
        'DOC : <code>React Range Documentation</code>'
      ],
      update: ['PACKAGE: React Bootstrap to 2.10.4'],
      fix: ['Minor bugs']
    }
  },
  {
    version: '1.4.0',
    title: 'Apollo',
    publishDate: '23 Jun, 2024',
    logs: {
      new: [
        'DASHBOARD : <code>TravelAgency</code>',
        'PAGE : <code>travel-agency/landing</code>',
        'PACKAGE : <code>@turf/turf</code>',
        'PACKAGE : <code>tinymce</code>',
        'PACKAGE : Hosted <strong>Tinymce</strong> to the public directory'
      ],
      update: [
        'PACKAGE: Bootstrap to 5.3.3',
        'PACKAGE: React Bootstrap to 2.10.2',
        'DOC: Tinymce documentation'
      ],
      fix: ['Minor bugs']
    }
  },
  {
    version: '1.3.0',
    title: 'Elpis',
    publishDate: '21 March, 2024',
    alertText:
      'This is a major update. Please backup your project before upgrading to the latest version',
    logs: {
      new: [
        'New theme color shades.',
        'DOC : Color page',
        `Utility Classes ${changelogListElips}`
      ],
      update: [
        'Bootstrap to 5.3.2',
        'All SCSS files are updated',
        'DOC: Styling documentation',
        'DOC: Dark mode documentation',
        'HTML: <code>bg-soft-{color}</code> to <code>bg-{color}-subtle</code>',
        'HTML: <code>z-index-{values}</code> to <code>z-{values}</code>',
        'HTML: <code>text-none</code> to <code>text-transform-none</code>',
        'HTML: <code>{text/bg}-gray-{100 to 1100}</code> classes replaced with <code>{text/bg}-body-{color}</code>',
        'HTML: <code>text-{themeColor}-{variant}</code> classes replaced with <code>text-{themeColor}-light/lighter/dark/darker</code>',
        'HTML: <code>z-index-bg-{themeColor}-{variant}</code> classes replaced with <code>bg-{themeColor}-light/lighter/dark/darker</code>'
      ],
      fix: ['Minor bugs']
    }
  },
  {
    version: '1.2.0',
    title: 'Demetra',
    publishDate: '22 Nov, 2023',
    logs: {
      new: [
        'PAGE : <code>Apps/CRM/Deals</code>',
        'PAGE : <code>Apps/Kanban/Kanban</code>',
        'PAGE : <code>Apps/Kanban/Boards</code>',
        'PAGE : <code>Apps/Kanban/Create-Board</code>',
        'PAGE : <code>Apps/Calendar</code>',
        'PAGE : <code>Pages/Faq/Faq-Tab</code>',
        'PAGE : <code>Pages/Landing/Alternate</code>',
        'PAGE : <code>Pages/Timeline</code>',
        'PAGE : <code>Pages/Coming-Soon</code>',
        'PAGE : <code>Modules/Forms/Wizard</code>',
        'PAGE : <code>Modules/Components/Calendar</code>',
        'PAGE : <code>Modules/Components/Draggable</code>',
        'PAGE : <code>Modules/Widgets</code>',
        'COMPONENT : <code>FullCalendar</code>',
        'COMPONENT : <code>PhoenixDroppable</code>',
        'COMPONENT : <code>PhoenixFloatingLabel</code>',
        'COMPONENT : <code>ScrollSpy</code>',
        'FEATURE : <code>Chat Demo (floating widget)</code>',
        'FEATURE : <code>Chat file and image attachments</code>'
      ],
      update: [
        'PACKAGE: typescript to v5.2.2',
        'PACKAGE: swiper to v11.0.3',
        'PACKAGE: @iconscout/react-unicons to v2.0.2',
        'PACKAGE: eslint-config-prettier to v9.0.0',
        'PACKAGE: eslint-plugin-prettier to v5.0.1',
        'PACKAGE: prettier to v3.0.3'
      ],
      fix: ['Minor bugs']
    }
  },
  {
    version: '1.1.0',
    title: 'Theseus',
    publishDate: '12 October, 2023',
    logs: {
      new: [
        'Dashboard : <code>CRM</code>',
        'PAGE : <code>CRM/Analytics</code>',
        'PAGE : <code>CRM/Deal-Details</code>',
        'PAGE : <code>CRM/Lead</code>',
        'PAGE : <code>CRM/Lead-Details</code>',
        'PAGE : <code>CRM/Reports</code>',
        'PAGE : <code>CRM/Report-Details</code>',
        'PAGE : <code>CRM/Add-Contact</code>',
        'PAGE : <code>pricing/pricing-grid</code>',
        'PAGE : <code>authentication/split/sign-in</code>',
        'PAGE : <code>authentication/split/sign-up</code>',
        'PAGE : <code>authentication/split/sign-out</code>',
        'PAGE : <code>authentication/split/forgot-password</code>',
        'PAGE : <code>authentication/split/reset-password</code>',
        'PAGE : <code>authentication/split/lock-screen</code>',
        'PAGE : <code>authentication/split/2FA</code>',
        'PAGE : <code>authentication/card/sign-in</code>',
        'PAGE : <code>authentication/card/sign-up</code>',
        'PAGE : <code>authentication/card/sign-out</code>',
        'PAGE : <code>authentication/card/forgot-password</code>',
        'PAGE : <code>authentication/card/reset-password</code>',
        'PAGE : <code>authentication/card/lock-screen</code>',
        'PAGE : <code>authentication/card/2FA</code>',
        'PAGE : <code>migrations</code>',
        'COMPONENT : <code>Unicon</code>',
        'COMPONENT : <code>PhoenixLoader</code>'
      ],
      update: [
        'Migrated from Font Awesome React  <code>Global Use</code> to <code>Individual Use</code> for improved icon management.',
        'Added <code>footerProps</code> in <code>AdvanceTable</code> columns definition.',
        'Example added for all <code>Icon</code> sets.'
      ],
      fix: ['Minor bugs']
    }
  }
];
