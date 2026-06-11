export type ProjectStatus = 'prize' | 'deployed' | 'active' | 'complete'

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  tech: string[]
  metric: string
  status: ProjectStatus
  links: {
    github?: string
    demo?: string
    youtube?: string
  }
  size: 'large' | 'medium' | 'small'
}

export const projects: Project[] = [
  {
    id: 'nest-vnn',
    name: 'NeST-VNN',
    tagline: 'Interpretable cancer outcome prediction on NIH CFDE datasets',
    description:
      'Hierarchical Visible Neural Network in PyTorch — architecture mirrors biological ontology, making predictions explainable at the protein pathway level via RLIPP scores. Integrated AWS Bedrock for plain-English clinical interpretation. Related to Nature Cancer & Cancer Discovery publications.',
    tech: ['PyTorch', 'AWS Bedrock', 'MLflow', 'Flask', 'Cytoscape.js'],
    metric: '$4,000 Prize · Bio-IT World 2026',
    status: 'prize',
    links: {
      github: 'https://github.com/artisticdrake/cellmapvnn',
      youtube: 'https://www.youtube.com/watch?v=bjEPVhkSdC0',
    },
    size: 'large',
  },
  {
    id: 'zenith',
    name: 'Zenith',
    tagline: 'Full-stack LLM SaaS for job tracking — deterministic matching engine',
    description:
      'Replaced unreliable LLM scoring with a 200-skill canonical dictionary pipeline. GPT-4o-mini autofill, SHA-256 deduplication, AI summary panel. Actively used to manage 100+ applications.',
    tech: ['React', 'Node.js', 'Supabase', 'LangChain', 'OpenAI API'],
    metric: '100+ Applications Tracked',
    status: 'active',
    links: {
      github: 'https://github.com/artisticdrake/job-tracker-saas',
    },
    size: 'medium',
  },
  {
    id: 'pocketband',
    name: 'PocketBand',
    tagline: 'Phone-as-instrument AI jam station, bridged live to a DAW',
    description:
      'Your phone becomes the instrument — mic, touch, and gyro stream over Socket.IO/HTTPS to a desktop browser acting as the audio brain (clock, looper, FX, mixer). Bar-quantized beatbox loops, a diatonic chord wheel, and gyro-controlled FX all sync to a shared clock. AI fills in the rest: Stable Audio 3 restyles a beatboxed loop into a drum track, Suno generates vocal stems from lyrics, and everything exports as stems to a DAW.',
    tech: ['Web Audio API', 'Socket.IO', 'Node.js', 'Stable Audio 3', 'Suno API'],
    metric: '3rd Place · Music Hackspace Berklee',
    status: 'prize',
    links: {
      github: 'https://github.com/artisticdrake/PocketBand',
    },
    size: 'large',
  },
  {
    id: 'space-pirates',
    name: 'Space Pirates',
    tagline: 'Tilt your phone to fly — local multiplayer party brawler in Godot',
    description:
      'A local multiplayer brawler where every phone becomes a motion controller. A Godot 4 (GDScript) game running on a TV talks to a Node.js relay over WebSockets, while up to 5 phone browsers stream gyroscope input via Socket.IO/HTTPS at ~60fps. Six ship classes, five game modes, server-side reconnect/resync, and procedurally generated audio. Built largely solo at SharkHack 2026.',
    tech: ['Godot 4 (GDScript)', 'Node.js', 'Socket.IO'],
    metric: '~60fps Gyro Input · 5 Phones',
    status: 'complete',
    links: {
      github: 'https://github.com/artisticdrake/space-pirates',
    },
    size: 'medium',
  },
  {
    id: 'chronicle',
    name: 'Chronicle',
    tagline: 'AI remote monitoring that catches heart-failure decompensation early',
    description:
      'Combines passive Oura Ring biometrics with an AI-conducted voice check-in to flag early cardiac decompensation in CHF patients. An Oura anomaly triggers an ElevenLabs voice agent to run an 8-question SOAP assessment; Claude synthesizes the transcript and biometrics into a clinical brief for the care team to approve, escalate, or dismiss. A 0-175 point scoring engine with adaptive alert suppression keeps clinicians from drowning in false alarms. Selected by FOMO for investor introductions.',
    tech: ['Oura API', 'ElevenLabs', 'Twilio', 'Claude API', 'React', 'Supabase', 'Stanford Spezi'],
    metric: 'FOMO Investor Intros · Boston Tech Week',
    status: 'active',
    links: {
      github: 'https://github.com/artisticdrake/Chronicle',
    },
    size: 'large',
  },
  {
    id: 'rainwater',
    name: 'Rainwater Monitor',
    tagline: '3 units deployed · 70-acre campus · 30% faster flood response',
    description:
      'Raspberry Pi + Tesseract OCR + Hough Transform image pipeline. 4-week live production trial. Automated SMTP email alerts to campus facilities.',
    tech: ['Raspberry Pi', 'OpenCV', 'Tesseract OCR', 'Python'],
    metric: '3 Units · 70-Acre Campus',
    status: 'complete',
    links: {
      github: 'https://github.com/artisticdrake/rainwater-monitoring-system',
    },
    size: 'small',
  },
  {
    id: 'uniguide',
    name: 'UniGuide',
    tagline: '9-stage local-first NLP pipeline for university course Q&A',
    description:
      'A local-first assistant that answers student questions about courses, instructors, schedules, and locations. Custom-trained spaCy NER feeds a Logistic Regression + SentenceTransformers intent classifier, then a deterministic parameterized SQL layer queries SQLite — with an explicit conversation-context store for follow-ups like "who teaches it?". Runs fully offline; an optional GPT-4.1-mini layer adds RAG-based natural-language responses.',
    tech: ['spaCy NER', 'SentenceTransformers', 'SQLite', 'RAG', 'GPT-4.1-mini', 'Tkinter'],
    metric: '9-Stage Pipeline · Local-First',
    status: 'complete',
    links: {
      github: 'https://github.com/artisticdrake/UniGuide',
    },
    size: 'large',
  },
  {
    id: 'prosody',
    name: 'ProsodyAnalysis',
    tagline: 'Voice/music separation for speech-to-speech translation',
    description:
      'Separates voice from music in movie audio using Spleeter and energy profiling, then uses the cleaned segments to build a labeled prosody dataset. Integrated into the translation pipeline at IIIT Hyderabad, lifting prosody-feature accuracy from 78.2% to 86.5% and subjective naturalness from 6.9 to 7.8/10. SRISHTI 2023.',
    tech: ['Spleeter', 'Librosa', 'NumPy', 'Python'],
    metric: '+8.3pp Feature Accuracy',
    status: 'complete',
    links: {
      github: 'https://github.com/artisticdrake/ProsodyAnalysis',
    },
    size: 'medium',
  },
  {
    id: 'multimodal',
    name: 'Learning Disability Detection',
    tagline: '45 models · 9 algorithms · 7,000+ NHIS records',
    description:
      'Clinical ML study with severe 1:8 class imbalance. Optimized for 86.1% sensitivity over raw accuracy. Feature engineering: polynomial interactions, domain composites, missing indicators.',
    tech: ['scikit-learn', 'Random Forest', 'SMOTE', 'XGBoost', 'R'],
    metric: '86.5% Balanced Accuracy',
    status: 'complete',
    links: {
      github: 'https://github.com/artisticdrake/multimodel-learning-disability-detection',
    },
    size: 'large',
  },
  {
    id: 'darts',
    name: 'DARTS',
    tagline: 'Sound-to-tactile wearable for the hearing-impaired',
    description:
      'A Raspberry Pi 4 wearable that listens continuously through a 2-mic array, classifies environmental sounds with a TensorFlow/Keras model, estimates direction and proximity via TDOA, and translates results into intensity-scaled vibration patterns — a continuous buzz for a siren, rhythmic pulses for speech.',
    tech: ['TensorFlow', 'Raspberry Pi', 'MFCC', 'PyAudio'],
    metric: '~95% Accuracy · <200ms Latency',
    status: 'complete',
    links: {
      github: 'https://github.com/artisticdrake/DARTS',
    },
    size: 'small',
  },
]
