// import { FaHeart, FaUserNurse } from "react-icons/fa"; // Add more icons as needed

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
import { 
  FaHeart, FaUserNurse, FaTooth, FaProcedures, FaSyringe, FaNotesMedical, FaStethoscope, 
  FaMicroscope, FaLungs, FaBaby, FaBrain, FaHospitalUser, FaClinicMedical 
} from "react-icons/fa"; // Choose icons as you like

export const layoutMap = {
  'cardiac-science': {
    label: 'Cardiac Sciences',
    icon: FaHeart,
    layout: 'A',
    data: () => import('./layoutA/cardiac-science'),
  },
  'Anesthesiology': {
    label: 'Anesthesiology',
    icon: FaSyringe,
    layout: 'A',
    data: () => import('./layoutA/Anesthesiology'),
  },
  'CriticalCare': {
    label: 'Critical Care',
    icon: FaProcedures,
    layout: 'A',
    data: () => import('./layoutA/CriticalCare'),
  },
  'DentalOral&MaxillofacialSurgery': {
    label: 'Dental, Oral & Maxillofacial Surgery',
    icon: FaTooth,
    layout: 'A',
    data: () => import('./layoutA/DentalOral&MaxillofacialSurgery'),
  },
  'Dermatology': {
    label: 'Dermatology',
    icon: FaStethoscope,
    layout: 'A',
    data: () => import('./layoutA/Dermatology'),
  },
  'EmergencyMedicine': {
    label: 'Emergency Medicine',
    icon: FaClinicMedical,
    layout: 'A',
    data: () => import('./layoutA/EmergencyMedicine'),
  },
  'Endocrinology': {
    label: 'Endocrinology',
    icon: FaMicroscope,
    layout: 'A',
    data: () => import('./layoutA/Endocrinology'),
  },
  'Ent': {
    label: 'ENT',
    icon: FaUserNurse,
    layout: 'A',
    data: () => import('./layoutA/Ent'),
  },
  'FamilyMedicine': {
    label: 'Family Medicine',
    icon: FaHospitalUser,
    layout: 'A',
    data: () => import('./layoutA/FamilyMedicine'),
  },
  'Gastroenterology': {
    label: 'Gastroenterology',
    icon: FaStethoscope,
    layout: 'A',
    data: () => import('./layoutA/Gastroenterology'),
  },
  'GeneralMinimalAccessSurgery': {
    label: 'General & Minimal Access Surgery',
    icon: FaNotesMedical,
    layout: 'A',
    data: () => import('./layoutA/GeneralMinimalAccessSurgery'),
  },
  'GeneralSurgery': {
    label: 'General Surgery',
    icon: FaNotesMedical,
    layout: 'A',
    data: () => import('./layoutA/GeneralSurgery'),
  },
  'Laryngology': {
    label: 'Laryngology',
    icon: FaUserNurse,
    layout: 'A',
    data: () => import('./layoutA/Laryngology'),
  },
  'Nephrology': {
    label: 'Nephrology',
    icon: FaStethoscope,
    layout: 'A',
    data: () => import('./layoutA/Nephrology'),
  },
  'ObstetricsGynaecology': {
    label: 'Obstetrics & Gynaecology',
    icon: FaBaby,
    layout: 'A',
    data: () => import('./layoutA/ObstetricsGynaecology'),
  },

  // Example Layout B department (already present)
  'urology': {
    label: 'Urology',
    icon: FaUserNurse,
    layout: 'B',
    data: () => import('./layoutB/urology'),
  },

  'Ophthalmology': {
    label: 'Ophthalmology',
    icon: FaUserNurse,
    layout: 'B',
    data: () => import('./layoutB/Ophthalmology'),
  },
  'PlasticMicrovascularSurgery': {
    label: 'Plastic & Microvascular Surgery',
    icon: FaProcedures,
    layout: 'B',
    data: () => import('./layoutB/plasticMicrovascularSurgery'),
  },
  'CosmeticAestheticSurgery': {
    label: 'Cosmetic & Aesthetic Surgery',
    icon: FaProcedures,
    layout: 'B',
    data: () => import('./layoutB/aesthetic-surgery'),
  },
  'Radiodiagnosis': {
    label: 'Radiodiagnosis',
    icon: FaMicroscope,
    layout: 'B',
    data: () => import('./layoutB/radiodiagnosisData'),
  },
  'RespiratoryMedicine': {
    label: 'Respiratory Medicine',
    icon: FaLungs,
    layout: 'B',
    data: () => import('./layoutB/respiratoryMedicine'),
  },
  'Rheumatology': {
    label: 'Rheumatology',
    icon: FaStethoscope,
    layout: 'B',
    data: () => import('./layoutB/rheumatology'),
  },

  'RoboticSurgery': {
    label: 'Robotic Surgery',
    icon: FaProcedures,
    layout: 'B',
    data: () => import('./layoutB/roboticLaparoscopicSurgery'),
  },

  'SpeechTherapy': {
    label: 'Speech Therapy',
    icon: FaUserNurse,
    layout: 'B',
    data: () => import('./layoutB/speechTherapy'),
  },

};
