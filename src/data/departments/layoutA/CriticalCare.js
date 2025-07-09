import React from 'react';
  
  const CriticalCare = {
  hero: {
    title: 'Round-the-clock life support, Expertly delivered',
    description: [
      "At SP Medifort, our Critical Care Department provides continuous, specialized medical care to patients facing life-threatening conditions. Our ICU in Trivandrum is managed by experienced intensivists, trained nurses, and supported by high-end monitoring systems  all focused on stabilizing, supporting, and reviving patients through every crisis.We offer ICU support across all specialties — cardiac, neuro, trauma, post-surgical, and more."
    ],
    cta: { label: 'Contact our Critical Care team', href: '/appointments/cardiology' },
    image: { src: '/images/cardiac.jpg', alt: 'Cardiology' },
    highlightText: [
      'Compassionate Cardiac Care, Always',
      'Hello World!',
    ],
  },

  whyChoose: {
    title: 'Why choose SP Medifort for ICU services?',
    subTitle :'One of Kerala’s largest & most advanced critical care units',
    cards: [
      {
        icon: 'iconamoon:3d-bold',
        title: '170+ Level-D ICU beds with isolation',
        
      },
      {
        icon: 'fluent:laser-tool-20-filled',
        title: '24x7 in-house intensivists, anaesthetists, and nurses',
        
      },
      {
        icon: 'mdi:heart-pulse',
        title: 'Separate Neuro, Cardiac, Medical & Surgical ICUs',
        
      },
      {
        icon: 'mdi:heart-cog-outline',
        title: 'Real-time central monitoring ',
       
      },
      {
        icon: 'material-symbols:heart-check',
        title: 'Protocol-based sepsis, ventilator, and trauma care',
        
      },
      {
        icon: 'streamline-plump:customer-support-7-remix',
        title: 'Isolation Rooms for Infection Control with Positive pressure & negative Pressure facilities',
       
      },
    ],
    description: 'Recognized as a top ICU hospital in Thiruvananthapuram, our ICU protocols follow NABH and international safety standards.',
    cta: {
      label: 'Explore ICU capabilities',
      href: '/facilities#cardiac',
    }

    
  },
  team: {
  title: 'Our team of experts',
  subTitle: 'Dedicated to saving lives, Every minute',
  doctors: [
    {
      name: 'DR. SUJEESH  R',
      designation: 'CRITICAL CARE',
      position: 'HOD, SENIOR CONSULTANT & INFECTION CONTROL OFFICER',
      image: '/images/doctors-card/shibu.png'
    },
    {
      name: 'DR. SABARI  JAYARAM',
      designation: 'CRITICAL CARE',
      position: 'INTENSIVIST',
      image: '/images/doctors-card/shibu.png'
    },
    {
      name: 'DR. NEELIMA V S',
      designation: 'CRITICAL CARE',
      position: 'INTENSIVIST',
      image: '/images/doctors-card/shibu.png'
    },
    
    
  ],
  description: 'Each ICU is managed by full-time critical care doctors and supported by on-call surgeons, neurologists, cardiologists, and pulmonologists.',
  cta: {
    label: 'Meet our critical care team',
    href: '/our-doctors#cardiology'
  }
},

  // ...existing data
  technologies: {
    title: 'Advanced technology and expertise',
    categoryTabs: ['Interventional Cardiology', 'Cardiology'],
    items: [
      {
        name: '128 Slice CT GE Revolution',
        description:
          'Ultra-fast, high-resolution cardiac CT (0.28 mm) delivers detailed 3D images of the heart and vessels in a single heartbeat. It enables accurate, non-invasive evaluation of coronary artery disease, plaque buildup, and blockages—supporting early detection and effective treatment planning.',
      },
      {
        name: 'MRI – GE SIGNA',
        description:
          'Advanced cardiac MRI offering functional and structural heart assessment, ideal for detecting myocardial damage, perfusion, and congenital anomalies.',
      },
      {
        name: 'CRRT (Continuous Renal Replacement Therapy) machines',
        description:
          'Real-time imaging for assessing blood flow and cardiac structures, used for general cardiovascular screening and follow-up.',
      },
      {
        name: 'Hemodialysis machines',
        description:
          'A baseline and essential test that records the heart’s electrical activity to detect rhythm disturbances and myocardial ischemia.',
      },
      {
        name: 'Prognosis machine',
        description:
          'Continuous 24–48 hour ECG monitoring to detect intermittent arrhythmias not captured during a routine ECG.',
      },
      {
        name: 'Ultrasound (USG) scan',
        description:
          'Evaluates cardiac function under physical stress to diagnose ischemic heart disease and determine exercise tolerance.',
      },
      
    ],
    
  },
  ctaSection: {
  text: "This makes SP Medifort a top cardiology hospital in Kerala for both diagnostics and interventions. These tools empower us to offer accurate, fast, and low-risk cardiac interventions.",
  button: {
    label: "View dental technology used",
    link: "/departments/cardiac-science#cath-lab",
  },
},
highlightText: [
      'Compassionate Cardiac Care, Always',
      'State-of-the-Art Cath Lab Technology',
      '24x7 Emergency Heart Care',
      'South Kerala’s First Laser Angioplasty',
      'Minimally Invasive Cardiac Interventions',
      'Personalised Cardiology Services in Trivandrum',
      'Preventive Cardiology & Lifestyle Support',
      'Kerala’s Leading Interventional Cardiologists',
    ],
comprehensiveCare: {
  title: 'Our ICU services',
  subtitle: 'Our ICU services include',
  description:
    'Our cardiac services support every stage of heart health, from early detection and prevention to critical care and recovery, providing complete, patient-focused care.',
 items: [
  {
    title: 'Palliative care',
    icon: 'mdi:stethoscope',
    description: ' A dedicated intensive care unit for critically ill cardiac patients. Provides advanced monitoring and treatment for heart attacks, arrhythmias, and acute coronary syndromes using continuous cardiac telemetry and life-support systems.',
  },
  {
    title: 'Advanced ventilators',
    icon: 'mdi:heart-flash',
    description: 'An emergency service available at all times for the rapid evaluation and management of chest pain. Equipped with ECG, cardiac enzyme testing, and imaging for quick diagnosis of heart attacks and other cardiovascular conditions.',
  },
  {
    title: 'CRRT',
    icon: 'mdi:hospital-box-outline',
    description: 'Comprehensive screening designed for executives and individuals at increased risk of heart disease. Includes ECG, echocardiography, lipid profile, treadmill testing (TMT), and expert consultations to detect early cardiac issues.',
  },
  
  {
    title: 'ECMO',
    icon: 'mdi:heart-pulse',
    description: 'Focused on reducing cardiovascular risk through regular screenings, lifestyle counseling, and medication management. Addresses conditions such as hypertension, diabetes, obesity, and high cholesterol.',
  },
  {
    title: 'Parenteral nutrition',
    icon: 'mdi:heart-plus-outline',
    description: 'A medically supervised program for patients recovering from heart attacks or cardiac surgery. Integrates exercise, nutrition, stress management, and education to improve heart function and reduce future risk.',
  },
  {
    title: 'Cerebral Edema',
    icon: 'mdi:stethoscope',
    description: ' A dedicated intensive care unit for critically ill cardiac patients. Provides advanced monitoring and treatment for heart attacks, arrhythmias, and acute coronary syndromes using continuous cardiac telemetry and life-support systems.',
  },
  {
    title: 'Acute Respiratory failure',
    icon: 'mdi:heart-flash',
    description: 'An emergency service available at all times for the rapid evaluation and management of chest pain. Equipped with ECG, cardiac enzyme testing, and imaging for quick diagnosis of heart attacks and other cardiovascular conditions.',
  },
  {
    title: 'Acute Liver failure',
    icon: 'mdi:hospital-box-outline',
    description: 'Comprehensive screening designed for executives and individuals at increased risk of heart disease. Includes ECG, echocardiography, lipid profile, treadmill testing (TMT), and expert consultations to detect early cardiac issues.',
  },
  
  {
    title: 'Stroke',
    icon: 'mdi:heart-pulse',
    description: 'Focused on reducing cardiovascular risk through regular screenings, lifestyle counseling, and medication management. Addresses conditions such as hypertension, diabetes, obesity, and high cholesterol.',
  },
  


],
},
scopeOfCare: [
  {
    title: 'Critical Care',
    overview:
      'Focuses on medical diagnosis, monitoring, and non-invasive management of heart-related symptoms and diseases.',

    sections: [
      {
        title: 'Symptoms & Risk Conditions',
        items: [
          'Chest pain',
          'Irregular heartbeat (Arrhythmia)',
          'High blood pressure (Hypertension)',
          'High cholesterol',
          'Palpitations & syncope (fainting spells)',
          'Breathlessness (dyspnea)',
          'Recurrent chest pain or breathlessness',
        ],
      },
      {
        title: 'Conditions we commonly treat',
        items: [
          'Respiratory failure & pneumonia',
          'Stroke & seizures',
          'Septic shock and infections',
          'Cardiac arrest/post-MI observation',
          'Post-operative complications',
          'Road traffic accidents and polytrauma',
          'COVID-19 & ARDS',
          
       ],
      },
    ],
  },
],




  insuranceFinance: {
    title: "Insurance and Finance",
    subtitle: "Critical care that’s accessible to all",
    items: [
      {
        title: "Covered under 40+ private insurance companies",
        description: "Covered by all leading insurers and TPAs",
      },
      {
        title: "Transparent, daily ICU cost tracking shared with family & Insurance companies",
        description:
          "Cost-effective packages for all diagnostic & treatment procedures like ASD, VSD Closure, CAVG, PTCA, CAG, Valve Replacements, Pacemaker Implantation, EPS & RF Ablation",
      },
      {
        title: "Insurance Support & Patient Counseling",
        description:
          "Our dedicated insurance department offers end-to-end support for patients, including personalized counseling to help them understand their coverage and navigate the claims process with ease.",
      },
      
    ],
    cta: {
      label: "Check what’s covered",
      link: "#", // update with actual route if needed
    },
  },

  patientJourney : {
  title: "Patient journey",
  subtitle: "From diagnosis to recovery,We stay with you",
  steps: [
    { title: "Emergency assessment or ward transfer" },
    { title: "ICU admission & initial stabilization" },
    { title: "Investigations and multi-specialist review" },
    { title: "Family counselling & daily updates" },
    { title: "ICU care & infection control" },
    { title: "Discharge planning or referral to ward/home" },

  ],
  cta: "Understand the ICU process",
},
  successStories: {
  items: [
    { type: 'text', text: 'My father had severe COVID-19 and was on a ventilator. He’s home now thanks to the ICU team.' },
    { type: 'image', src: '/images/card1.png', alt: 'Happy patient' },
    { type: 'text', text: 'After a stroke, I thought my mother wouldn’t survive. They brought her back' },
    { type: 'image', src: '/images/card2.jpg', alt: 'Patient smiling' },
    { type: 'text', text: 'After a stroke, I thought my mother wouldn’t survive. They brought her back' },
    { type: 'image', src: '/images/card3.jpg', alt: 'Covered woman smiling' },
    { type: 'text', text: 'After a stroke, I thought my mother wouldn’t survive. They brought her back' },
    { type: 'image', src: '/images/card4.jpg', alt: 'Covered woman smiling' },
    { type: 'text', text: 'After a stroke, I thought my mother wouldn’t survive. They brought her back' },
  ],
  cta: {
    label: 'Critical Care Success Stories',
    link: '/patient-stories'
  }
},

/* The above code is a JavaScript object containing an array of FAQs (Frequently Asked Questions). Each
FAQ object in the array has a question and an answer property. */
faqs: [ 
    {
      question: 'Can I get ICU admission without a prior booking?',
      answer: 'Yes, we accept emergency walk-ins and referrals 24x7.',
    },
    {
      question: 'How many visitors are allowed in ICU?',
      answer: 'Limited  our team coordinates family interaction with safety in mind.',
    },
    
  ],
appointmentSection: {
  heading: "Appointment and consultations",
  helpline: {
    label: "24x7 ICU helpline:",
    number: "+91-XXXXXXXXXX",
    icon: "/icons/phone-plus.svg" // or any other icon path
  },
  support: {
    label: "Emergency transfer",
    icon: "/icons/ambulance.svg"
  },
  whatsapp: {
    icon: "/icons/whatsapp.svg",
    link: "https://wa.me/919999999999"
  },
  form: {
    heading: "Post a Cardiac query",
    fields: ["Name", "Phone", "Email", "Query"],
    submitLabel: "Submit"
  }
}

};
  
  export default CriticalCare;
  