export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillColumns: SkillCategory[][] = [
  // Column 1
  [
    {
      title: 'NLP & GenAI',
      skills: [
        'LLMs',
        'RAG',
        'LangChain',
        'Hugging Face',
        'OpenAI API',
        'spaCy / NER',
        'SentenceTransformers',
        'FAISS / Vector Search',
      ],
    },
    {
      title: 'Languages',
      skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'GDScript', 'R', 'Java', 'C/C++'],
    },
  ],
  // Column 2
  [
    {
      title: 'ML / Deep Learning',
      skills: [
        'PyTorch',
        'TensorFlow',
        'scikit-learn',
        'XGBoost',
        'Random Forest',
        'Neural Networks',
        'Interpretable ML',
        'Transfer Learning',
      ],
    },
    {
      title: 'Computer Vision',
      skills: ['OpenCV', 'YOLOv5', 'Tesseract OCR'],
    },
  ],
  // Column 3
  [
    {
      title: 'MLOps & Infra',
      skills: [
        'Docker',
        'FastAPI',
        'Flask',
        'Socket.IO / WebSockets',
        'MLflow',
        'AWS Bedrock',
        'GCP',
        'WSL2 / CUDA',
      ],
    },
    {
      title: 'Web & Full Stack',
      skills: ['React / Vite', 'Node.js / Express', 'Supabase', 'Tailwind CSS', 'Cytoscape.js'],
    },
    {
      title: 'Audio & Music AI',
      skills: ['Web Audio API', 'Spleeter', 'Stable Audio 3', 'Suno API', 'Librosa'],
    },
  ],
]
