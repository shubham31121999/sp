// src/data/departments/layoutMap.js
export const layoutMap = {
  'cardiac-science': {
    label: 'Cardiac Sciences',
    layout: 'A',
    data: () => import('./layoutA/cardiac-science'),
  },
  'urology': {
    label: 'Urology',
    layout: 'A',
    data: () => import('./layoutB/urology'),
  },
  // Add more departments here...
};
