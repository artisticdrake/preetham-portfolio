export interface HackathonPhoto {
  src: string
  alt: string
  caption?: string
}

export interface Hackathon {
  id: string
  name: string
  track: string
  date: string
  location: string
  result: string
  prize: string | null
  /** Big right-aligned achievement figure (falls back to prize) + its sublabel */
  stat?: string
  statLabel?: string
  youtube?: string
  /** Link to the hackathon's official project/submission page. */
  projectUrl?: string
  teamSize: number
  totalTeams: number | null
  projectId: string
  description: string
  tech: string[]
  featured: boolean
  /** Force the cyan halo/accent treatment even when the result isn't a placement. */
  highlight?: boolean
  photos: HackathonPhoto[]
}

export const hackathons: Hackathon[] = [
  {
    id: 'bio-it-2026',
    name: 'Bio-IT World Hackathon 2026',
    track: 'Fair Data Track',
    date: 'May 2026',
    location: 'Boston, MA',
    result: 'Prize Winner',
    prize: '$4,000',
    stat: '$4,000',
    statLabel: 'Prize Awarded',
    youtube: 'https://www.youtube.com/watch?v=bjEPVhkSdC0',
    teamSize: 4,
    totalTeams: 6,
    projectId: 'nest-vnn',
    description:
      'Built interpretable cancer outcome prediction system on NIH CFDE datasets. Judges cited excellence in model interpretability.',
    tech: ['PyTorch', 'AWS Bedrock', 'MLflow', 'Flask'],
    featured: true,
    photos: [
      { src: '/images/hackathons/bio-it-2026/photo-1.jpg', alt: 'Bio-IT World Hackathon 2026 team photo' },
      { src: '/images/hackathons/bio-it-2026/photo-2.jpg', alt: 'Bio-IT World Hackathon 2026' },
      { src: '/images/hackathons/bio-it-2026/photo-3.jpg', alt: 'Bio-IT World Hackathon 2026' },
      { src: '/images/hackathons/bio-it-2026/photo-4.jpg', alt: 'Bio-IT World Hackathon 2026 award' },
    ],
  },
  {
    id: 'musichackspace-2026',
    name: 'Music Hackspace Boston Hackathon',
    track: 'Berklee College of Music',
    date: 'June 6–7, 2026',
    location: 'Berklee, Boston MA',
    result: '3rd Place',
    prize: null,
    stat: '3rd',
    statLabel: 'Place Awarded',
    projectUrl: 'https://musichackspace.org/events/hackathon-boston-june-2026/projects/169',
    teamSize: 2,
    totalTeams: null,
    projectId: 'pocketband',
    description:
      'Built PocketBand — a phone-as-instrument jam station with AI-restyled drums (Stable Audio 3) and AI vocals (Suno), bar-synced and exported as DAW stems. Built with Athul Thulasidasan.',
    tech: ['Web Audio API', 'Socket.IO', 'Stable Audio 3', 'Suno API'],
    featured: false,
    photos: [
      { src: '/images/hackathons/musichackspace/photo-1.jpg', alt: 'Music Hackspace Boston Hackathon' },
      { src: '/images/hackathons/musichackspace/photo-2.jpg', alt: 'Music Hackspace Boston Hackathon' },
      { src: '/images/hackathons/musichackspace/photo-3.jpg', alt: 'Music Hackspace Boston Hackathon' },
      { src: '/images/hackathons/musichackspace/photo-4.jpg', alt: 'Music Hackspace Boston Hackathon' },
      { src: '/images/hackathons/musichackspace/photo-5.jpg', alt: 'Music Hackspace Boston Hackathon' },
      { src: '/images/hackathons/musichackspace/photo-6.jpg', alt: 'Music Hackspace Boston Hackathon' },
      { src: '/images/hackathons/musichackspace/photo-7.jpg', alt: 'Music Hackspace Boston Hackathon' },
      { src: '/images/hackathons/musichackspace/photo-8.jpg', alt: 'Music Hackspace Boston Hackathon' },
    ],
  },
  {
    id: 'boston-protocol-2026',
    name: 'Boston Protocol: Hacking Healthcare',
    track: 'FOMO · Boston Tech Week',
    date: 'May 2026',
    location: 'Boston, MA',
    result: 'Investor Introductions',
    prize: null,
    stat: 'Selected',
    statLabel: 'FOMO Investor Intros',
    youtube: 'https://youtu.be/fOEVA3Fsg6E',
    teamSize: 3,
    totalTeams: null,
    projectId: 'chronicle',
    description:
      'One-day healthcare AI hackathon where every team paired a patient, an engineer, and a clinician. Built Chronicle — an Oura Ring detects heart-failure decompensation signals, an ElevenLabs voice agent calls the patient and runs an adaptive SOAP interview, and Claude synthesizes transcript + wearable data into a one-page clinical brief for clinician review. Full pipeline, working demo, one day — since selected by FOMO for investor introductions and Foundry follow-up.',
    tech: ['Oura API', 'ElevenLabs', 'Twilio', 'Claude API', 'React', 'Supabase', 'Stanford Spezi'],
    featured: false,
    photos: [
      { src: '/images/hackathons/bos-protocol/photo-1.jpg', alt: 'Boston Protocol: Hacking Healthcare' },
      { src: '/images/hackathons/bos-protocol/photo-2.jpg', alt: 'Boston Protocol: Hacking Healthcare' },
      { src: '/images/hackathons/bos-protocol/photo-3.jpg', alt: 'Boston Protocol: Hacking Healthcare' },
      { src: '/images/hackathons/bos-protocol/photo-4.jpg', alt: 'Boston Protocol: Hacking Healthcare team' },
      { src: '/images/hackathons/bos-protocol/photo-5.jpg', alt: 'Boston Protocol: Hacking Healthcare' },
      { src: '/images/hackathons/bos-protocol/photo-6.jpg', alt: 'Boston Protocol: Hacking Healthcare' },
      { src: '/images/hackathons/bos-protocol/photo-7.jpg', alt: 'Boston Protocol: Hacking Healthcare demo' },
    ],
  },
  {
    id: 'sharkhack-2026',
    name: 'SharkHack 2026',
    track: 'The Alt',
    date: 'April 4–5, 2026',
    location: 'Simmons University, Boston MA',
    result: 'Participated',
    prize: null,
    teamSize: 2,
    totalTeams: null,
    projectId: 'space-pirates',
    description:
      'Built Space Pirates — a local multiplayer party brawler in Godot 4, phone gyroscope as controller over Socket.IO.',
    tech: ['Godot 4 (GDScript)', 'Node.js', 'Socket.IO'],
    featured: false,
    highlight: true,
    photos: [
      { src: '/images/hackathons/sharkhack-2026/photo-1.jpg', alt: 'SharkHack 2026' },
      { src: '/images/hackathons/sharkhack-2026/photo-2.jpg', alt: 'SharkHack 2026' },
      { src: '/images/hackathons/sharkhack-2026/photo-3.jpg', alt: 'SharkHack 2026' },
      { src: '/images/hackathons/sharkhack-2026/photo-4.jpg', alt: 'SharkHack 2026' },
      { src: '/images/hackathons/sharkhack-2026/photo-5.jpg', alt: 'SharkHack 2026' },
      { src: '/images/hackathons/sharkhack-2026/photo-6.jpg', alt: 'SharkHack 2026' },
    ],
  },
]
