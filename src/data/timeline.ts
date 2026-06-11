export interface TimelineEntry {
  id: string
  org: string
  role: string
  period: string
  location?: string
  bullets?: string[]
  tech?: string[]
  type: 'edu' | 'work' | 'achievement'
  current?: boolean
}

export const education: TimelineEntry[] = [
  {
    id: 'bu-ms',
    org: 'Boston University',
    role: 'MS Computer Science — ML Engineering & Data Analytics',
    period: 'Jul 2024 – May 2026',
    location: 'Boston, MA',
    bullets: [
      'Capstone: UniGuide (9-stage NLP pipeline), 45-model ML classification study, Zenith LLM SaaS',
      'Coursework: Advanced ML, Data Mining, Web Mining & Graph Analytics, Software Engineering, Foundations of Analytics',
    ],
    tech: [],
    type: 'edu',
  },
  {
    id: 'iiit-ranking',
    org: 'IIIT Hyderabad',
    role: 'Ranked 2nd of 364 Nationally',
    period: '2023',
    location: 'Hyderabad, India',
    bullets: [
      'Top 0.6% in Foundations of Modern Machine Learning — competitive national program',
    ],
    tech: [],
    type: 'achievement',
  },
  {
    id: 'jntu-btech',
    org: 'JNTU Hyderabad',
    role: 'BTech Computer Science — AI & Machine Learning',
    period: 'Aug 2020 – Jul 2024',
    location: 'Hyderabad, India',
    bullets: [],
    tech: [],
    type: 'edu',
  },
]

export const experience: TimelineEntry[] = [
  {
    id: 'bu-housing',
    org: 'Boston University Housing',
    role: 'Mailroom Assistant',
    period: 'Jan 2025 – May 2026',
    location: 'Boston, MA',
    bullets: [
      'Built a Python data-automation tool (pandas/openpyxl) that ingests, validates, and transforms monthly package reports into scannable barcode records — packaged as a standalone Windows executable, cutting processing time ~26% at peak',
      'In active production use for 15+ months; analyzed annual operations data to surface bottlenecks for management reporting',
      'Built a standardized, color-coded residence-to-location reference adopted as the routing standard across every campus mailroom',
    ],
    tech: ['Python', 'pandas', 'openpyxl'],
    type: 'work',
  },
  {
    id: 'jntu-intern',
    org: 'JNTU Hyderabad',
    role: 'Research Intern — ML Engineer',
    period: 'Aug 2023 – Jun 2024',
    location: 'Hyderabad, India',
    bullets: [
      'YOLOv5 vehicle detection on Raspberry Pi edge hardware for automated traffic signal control',
      'Rainwater monitoring: 3 units deployed across a 70-acre campus, 30% faster flood response',
      'Built and evaluated ML/DL models across CV and IoT problems; contributed to a speech-translation tool and a gaze-based exam-integrity system',
    ],
    tech: ['PyTorch', 'OpenCV', 'YOLOv5', 'Raspberry Pi', 'TensorFlow', 'scikit-learn'],
    type: 'work',
  },
  {
    id: 'iiit-intern',
    org: 'IIIT Hyderabad — Speech Processing Lab',
    role: 'Research Intern',
    period: 'May 2023 – Aug 2023',
    location: 'Hyderabad, India',
    bullets: [
      'Designed novel prosody dataset via audio source separation (Spleeter) — cross-domain insight from music production',
      'Improved speech-to-speech translation accuracy 8–10%, with measured gains in naturalness and intelligibility — presented to a cohort of 20+ researchers',
    ],
    tech: ['Python', 'Spleeter', 'Librosa', 'NumPy', 'pandas', 'GCP'],
    type: 'work',
  },
]
