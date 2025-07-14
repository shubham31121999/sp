// speechTherapy.js

const speechTherapy = {
  hero: {
    title: "Helping you speak, understand, and connect.",
    description: [
      "SP Medifort offers specialized Speech and Language Therapy for children and adults with communication, speech, voice, and swallowing disorders. Whether it's delayed speech in children, stammering, voice issues, or post-stroke rehabilitation, our approach is compassionate, evidence-based, and outcome-oriented.",
      "We are a top speech therapy center in Trivandrum, equipped with child-friendly spaces and modern tools for voice and language recovery."
    ],
    cta: { label: "Book a Speech therapy assessment", href: "/appointments/speech-therapy" },
    image: { src: "/images/departments/speech-therapy.jpg", alt: "Speech Therapy" },
    highlightText: [
      "Child-friendly, evidence-based therapy",
      "Support for stroke, autism & speech delay",
    ],
  },

  whyChoose: {
    title: "Why choose SP Medifort for Speech Therapy?",
    subTitle: "Empowering communication through expertise",
    cards: [
      { icon: "fluent:person-feedback-20-filled", title: "Certified Speech-Language Pathologists (SLPs)" },
      { icon: "ph:baby-fill", title: "Pediatric and adult speech care" },
      { icon: "mdi:chat-processing", title: "Language delay, articulation, fluency & voice therapy" },
      { icon: "mdi:food-variant-off", title: "Swallowing assessment & therapy (dysphagia)" },
      { icon: "mdi:brain", title: "Autism, stroke & neurological speech support" },
    ],
    description: "We treat speech not just as a medical issue, but as a vital life skill.",
    cta: { label: "Explore speech & language services", href: "/services/speech-therapy" }
  },

  team: {
    title: "Our Team of Experts",
    subTitle: "Speech professionals with heart & skill",
    doctors: [
      {
        name: "Ms. [Name]",
        designation: "Pediatric Language & Articulation Specialist",
        position: "SLP, Speech & Language Therapy",
        image: "/images/doctors-card/speech-female.png"
      },
      {
        name: "Mr. [Name]",
        designation: "Neurological & Adult Rehabilitation SLP",
        position: "SLP, Speech & Language Therapy",
        image: "/images/doctors-card/speech-male.png"
      }
    ],
    description: "Our speech therapists in Thiruvananthapuram work with families and specialists for holistic care.",
    cta: { label: "Meet our Speech therapy team", href: "/our-doctors#speech-therapy" }
  },
  technologies: {
  title: "Advanced tools for accurate diagnosis and effective therapy",
  categoryTabs: ["Pediatric & Adult Therapy Tools", "Speech Diagnostics"],
  items: [
    {
      name: "Video Stroboscopy",
      description:
        "High-resolution imaging of vocal cord vibrations to diagnose hoarseness, nodules, and vocal fold paralysis accurately.",
    },
    {
      name: "Speech & Language Evaluation Software",
      description:
        "Digital assessment tools for articulation, language comprehension, fluency, and phonology to track progress objectively.",
    },
    {
      name: "FEES (Fiberoptic Endoscopic Evaluation of Swallowing)",
      description:
        "Real-time visualization of swallowing mechanisms to assess and treat dysphagia effectively.",
    },
    {
      name: "AAC Devices (Augmentative and Alternative Communication)",
      description:
        "Touchscreen-based or symbol-driven devices for non-verbal patients to communicate more easily.",
    },
    {
      name: "Interactive Therapy Modules",
      description:
        "Gamified speech therapy programs and apps used for engaging children in articulation, language, and memory tasks.",
    },
    {
      name: "Voice Analysis Software",
      description:
        "Used by voice therapists to evaluate pitch, loudness, and voice quality, enabling customized voice therapy plans.",
    },
  ],
},

  comprehensiveCare: {
    title: "Conditions We Treat",
    subtitle: "Helping with every speech and communication challenge",
    items: [
      { title: "Delayed speech in children", icon: "mdi:clock-alert-outline", description: "" },
      { title: "Autism-related language disorders", icon: "mdi:account-voice", description: "" },
      { title: "Stammering (stuttering) and cluttering", icon: "mdi:voice-off", description: "" },
      { title: "Articulation and phonological disorders", icon: "mdi:alphabetical-variant", description: "" },
      { title: "Aphasia post-stroke or brain injury", icon: "mdi:brain", description: "" },
      { title: "Voice problems (hoarseness, pitch issues)", icon: "mdi:microphone-question", description: "" },
      { title: "Swallowing difficulties (dysphagia)", icon: "mdi:food-off-outline", description: "" },
      { title: "Selective mutism and speech anxiety", icon: "mdi:emoticon-sad-outline", description: "" },
    ],
    cta: { label: "See full list of Speech conditions", href: "/services/speech-therapy#conditions" }
  },

  scopeOfCare: [
    {
      title: "When to seek Speech Therapy",
      overview: "Early intervention improves outcomes — know when it's time to get help.",
      sections: [
        {
          title: "Common indicators",
          items: [
            "Child not speaking by age 2",
            "Unclear or distorted speech",
            "Repeating sounds or blocks while talking",
            "Inability to follow simple instructions",
            "Voice sounds unusually rough or nasal",
            "Difficulty swallowing or frequent choking",
            "Loss of speech post-surgery or stroke"
          ]
        }
      ]
    }
  ],

  ctaSection: {
    text: "Whether you're concerned about a child’s delayed speech or recovering from a stroke — our team is here to help you communicate with confidence.",
    button: {
      label: "Check signs for therapy",
      link: "/services/speech-therapy#when-to-seek"
    }
  },

  packages: {
    title: "Therapy Plans & Evaluation Packages",
    cta: {
      label: "View all health packages",
      link: "/packages#speech-therapy"
    }
  },

  patientJourney: {
    title: "Patient Journey",
    subtitle: "From first words to fluent speech — we walk with you",
    steps: [
      { title: "Referral or self-booked speech consultation" },
      { title: "Baseline assessment and diagnosis" },
      { title: "Customized therapy goal planning" },
      { title: "Weekly one-on-one or group therapy" },
      { title: "Parental involvement and home practice" },
      { title: "Periodic progress reviews" },
    ],
    cta: "Understand the Speech therapy pathway"
  },

  internationalPatients: {
    title: "International Patient Services",
    subtitle: "Therapy support tailored to global families",
    points: [
      "Speech therapy support for global patients visiting Kerala",
      "Online follow-ups and remote parent training",
      "English-Arabic-Tamil support for foreign patients",
      "Therapy options aligned with international education boards",
      "Feedback video reports for overseas communication"
    ],
    cta: { label: "Plan Speech support from abroad", href: "/international-patients#speech-therapy" }
  },

  successStories: {
    items: [
      { type: "text", text: "“My son spoke his first sentence at age 4 after regular sessions here.” – Anita P." },
      { type: "text", text: "“They helped me regain my speech after a brain stroke. Grateful beyond words.” – Salim R., Oman" }
    ],
    cta: {
      label: "Read more testimonials",
      link: "/patient-stories#speech-therapy"
    }
  },

  milestones: {
    title: "Milestones and Achievements",
    items: [
      "1998 - The journey began with SP Fort Hospital launched on January 26",
      "2002 - First ISO certified multi-disciplinary super speciality Hospital in South Kerala",
      "2022 - Exclusive care services in Trivandrum with all facilities provided by the hospital SP Well Fort",
      "2024 - SP Medifort, inaugurated in May, redefines healthcare with technology and expert care"
    ],
    cta: { label: "View Speech department highlights", href: "/about#milestones" }
  },

  faqs: [
    {
      question: "Is speech therapy only for kids?",
      answer: "No. Adults benefit too especially after stroke, surgery, or neurological disorders."
    },
    {
      question: "How long will my child need therapy?",
      answer: "Depends on the condition. Some need months, others see results within weeks."
    }
  ],

  appointmentSection: {
    heading: "Appointments and Contact",
    helpline: {
      label: "Speech therapy desk:",
      number: "+91-XXXXXXXXXX",
      icon: "/icons/phone-plus.svg"
    },
    support: {
      label: "WhatsApp",
      icon: "/icons/whatsapp.svg",
      link: "https://wa.me/91XXXXXXXXXX"
    },
    upload: {
      label: "Upload reports or videos",
      link: "/upload-speech-eval",
      icon: "/icons/upload.svg"
    },
    form: {
      heading: "Book your child’s or your speech evaluation",
      fields: ["Name", "Phone", "Email", "Query"],
      submitLabel: "Submit Speech evaluation request"
    },
    cta: {
      label: "Consult a Speech therapist",
      link: "/appointments/speech-therapy"
    }
  }
};

export default speechTherapy;
