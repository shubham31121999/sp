// src/data/departments/layoutMap.js
export const layoutMap = {
  'cardiac-science': {
    label: 'Cardiac Sciences',
    layout: 'A',
    data: () => import('./layoutA/cardiac-science'),
  },
  'urology': {
    layout: 'B', // or B depending on which layout
    data: () => import('./layoutB/urology'), // 👈 is this path correct?
  },
  // Add more departments here...
};
