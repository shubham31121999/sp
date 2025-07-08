import { FaHeart, FaUserNurse } from "react-icons/fa"; // Add more icons as needed

export const layoutMap = {
  'cardiac-science': {
    label: 'Cardiac Sciences',
    icon: FaHeart,
    layout: 'A',
    data: () => import('./layoutA/cardiac-science'),
  },

  'Anesthesiology': {
    label: 'Anesthesiology',
    icon: FaHeart,
    layout: 'A',
    data: () => import('./layoutA/Anesthesiology'),
  },
  'urology': {
    label: 'Urology',
    icon: FaUserNurse,
    layout: 'B',
    data: () => import('./layoutB/urology'),
  },
  // Add more departments like:
  // 'dermatology': {
  //   label: 'Dermatology',
  //   icon: FaStethoscope,
  //   layout: 'B',
  //   data: () => import('./layoutB/dermatology'),
  // },
};
