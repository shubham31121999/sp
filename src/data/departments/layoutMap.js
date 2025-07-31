
// export const layoutMap = {
//   'cardiac-science': {
//     label: 'Cardiac Sciences',
//     icon: FaHeart,
//     layout: 'A',
//     data: () => import('./layoutA/cardiac-science'),
//   },

//   'Anesthesiology': {
//     label: 'Anesthesiology',
//     icon: FaHeart,
//     layout: 'A',
//     data: () => import('./layoutA/Anesthesiology'),
//   },
//   'urology': {
//     label: 'Urology',
//     icon: FaUserNurse,
//     layout: 'B',
//     data: () => import('./layoutB/urology'),
//   },
//   // Add more departments like:
//   // 'dermatology': {
//   //   label: 'Dermatology',
//   //   icon: FaStethoscope,
//   //   layout: 'B',
//   //   data: () => import('./layoutB/dermatology'),
//   // },
// };

export const layoutMap = {
  'cardiac-science': {
    label: 'Cardiac Sciences',
    icon: '/images/dp-icons/Cardiac-Sciences.svg',
    layout: 'A',
    data: () => import('./layoutA/cardiac-science'),
  },
  'Anesthesiology': {
    label: 'Anesthesiology',
    icon: '/images/dp-icons/Anesthesiology.svg',
    layout: 'A',
    data: () => import('./layoutA/Anesthesiology'),
  },
  'CriticalCare': {
    label: 'Critical Care',
    icon: '/images/dp-icons/Critical-Care.svg',
    layout: 'A',
    data: () => import('./layoutA/CriticalCare'),
  },
  'DentalOralMaxillofacialSurgery': {
    label: 'Dental, Oral & Maxillofacial Surgery',
    icon: '/images/dp-icons/Dental-oral-&-maxillofacial-surgery.svg',
    layout: 'A',
    data: () => import('./layoutA/DentalOral&MaxillofacialSurgery'),
  },
  'Dermatology': {
    label: 'Dermatology',
    icon: '/images/dp-icons/dermatology.svg',
    layout: 'A',
    data: () => import('./layoutA/Dermatology'),
  },
  'EmergencyMedicine': {
    label: 'Emergency Medicine',
    icon: '/images/dp-icons/Emergency-Medicine.svg',
    layout: 'A',
    data: () => import('./layoutA/EmergencyMedicine'),
  },
  'Endocrinology': {
    label: 'Endocrinology',
    icon: '/images/dp-icons/endocrinology.svg',
    layout: 'A',
    data: () => import('./layoutA/Endocrinology'),
  },
  'Ent': {
    label: 'ENT',
    icon: '/images/dp-icons/ENT.svg',
    layout: 'A',
    data: () => import('./layoutA/Ent'),
  },
  'FamilyMedicine': {
    label: 'Family Medicine',
    icon: '/images/dp-icons/Family-Medicine.svg',
    layout: 'A',
    data: () => import('./layoutA/FamilyMedicine'),
  },
  'Gastroenterology': {
    label: 'Gastroenterology',
    icon: '/images/dp-icons/gastroenterology.svg',
    layout: 'A',
    data: () => import('./layoutA/Gastroenterology'),
  },
  'GeneralMinimalAccessSurgery': {
    label: 'General & Minimal Access Surgery',
    icon: '/images/dp-icons/General-&-Minimal-Access-Surgery.svg',
    layout: 'A',
    data: () => import('./layoutA/GeneralMinimalAccessSurgery'),
  },
  'GeneralSurgery': {
    label: 'General Surgery',
    icon: '/images/dp-icons/General-Surgery.svg',
    layout: 'A',
    data: () => import('./layoutA/GeneralSurgery'),
  },
  'Laryngology': {
    label: 'Laryngology',
    icon: '/images/dp-icons/Laryngology.svg',
    layout: 'A',
    data: () => import('./layoutA/Laryngology'),
  },
  'Nephrology': {
    label: 'Nephrology',
    icon: '/images/dp-icons/nephrology.svg',
    layout: 'A',
    data: () => import('./layoutA/Nephrology'),
  },
  'ObstetricsGynaecology': {
    label: 'Obstetrics & Gynaecology',
    icon: '/images/dp-icons/Obstetrics-Gynecology.svg',
    layout: 'A',
    data: () => import('./layoutA/ObstetricsGynaecology'),
  },

  // Layout B
  'urology': {
    label: 'Urology',
    icon: '/images/dp-icons/urology.svg',
    layout: 'B',
    data: () => import('./layoutB/urology'),
  },

  'Ophthalmology': {
    label: 'Ophthalmology',
    icon: '/images/dp-icons/Ophthalmology.svg',
    layout: 'B',
    data: () => import('./layoutB/Ophthalmology'),
  },
  'PlasticMicrovascularSurgery': {
    label: 'Plastic & Microvascular Surgery',
    icon: '/images/dp-icons/Plastic-&-Microvascular-Surgery.svg',
    layout: 'B',
    data: () => import('./layoutB/plasticMicrovascularSurgery'),
  },

  'Radiodiagnosis': {
    label: 'Radiodiagnosis',
    icon: '/images/dp-icons/Radiodiagnosis.svg',
    layout: 'B',
    data: () => import('./layoutB/radiodiagnosisData'),
  },
  'RespiratoryMedicine': {
    label: 'Respiratory Medicine',
    icon: '/images/dp-icons/Respiratory-Medicine.svg',
    layout: 'B',
    data: () => import('./layoutB/respiratoryMedicine'),
  },
  'Rheumatology': {
    label: 'Rheumatology',
    icon: '/images/dp-icons/rheumatology.svg',
    layout: 'B',
    data: () => import('./layoutB/rheumatology'),
  },
  'RoboticSurgery': {
    label: 'Robotic Surgery',
    icon: '/images/dp-icons/Robotic-Surgery.svg',
    layout: 'B',
    data: () => import('./layoutB/roboticLaparoscopicSurgery'),
  },
  'SpeechTherapy': {
    label: 'Speech Therapy',
    icon: '/images/dp-icons/Speech-Therapy.svg',
    layout: 'B',
    data: () => import('./layoutB/speechTherapy'),
  },
};

