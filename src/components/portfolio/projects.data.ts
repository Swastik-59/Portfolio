/**
 * projects.data.ts
 * ================
 * Project data for the portfolio Projects section.
 *
 * Notes:
 * - Descriptions are concise, factual, and code-backed.
 * - No unverifiable vanity metrics in the top-level descriptions.
 */

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  repoUrl: string;
  demoUrl: string;
  isDemo: boolean;
  thumbnail?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'helixai',
    name: 'HelixAI',
    tagline: 'Local-first multi-agent orchestration system',
    description: 'Desktop AI orchestrator that runs complex workflows without cloud dependency.',
    highlights: [
      'Decomposes user requests into DAG task workflows, routes to specialized workers via Redis Streams',
      'Handles LLM inference (Ollama), tool execution, RAG lookups, and streaming outputs locally',
      'FastAPI orchestrator + PostgreSQL state + Qdrant vector search, all running on your machine',
    ],
    tech: ['Electron', 'React', 'TypeScript', 'FastAPI', 'Python', 'Redis Streams', 'PostgreSQL', 'Qdrant', 'Ollama'],
    repoUrl: 'https://github.com/Swastik-59/HelixAI',
    demoUrl: '',
    isDemo: false,
    featured: true,
  },
  {
    id: 'real-time-fraud-detection',
    name: 'Real-Time Fraud Detection',
    tagline: 'Streaming fraud scoring pipeline with low-latency inference',
    description: 'Scores transactions in real-time using XGBoost converted to ONNX.',
    highlights: [
      'XGBoost model converted to ONNX for fast CPU inference in production',
      'Spring Boot backend serves predictions with feature preprocessing pipeline',
      'Next.js dashboard for monitoring fraud patterns and model performance',
    ],
    tech: ['Java', 'Spring Boot', 'XGBoost', 'ONNX', 'ONNX Runtime', 'TypeScript', 'Next.js'],
    repoUrl: 'https://github.com/Swastik-59/Real-Time-Fraud-Detection',
    demoUrl: 'https://real-time-fraud-detection.vercel.app/',
    isDemo: true,
  },
  {
    id: 'facecheck-ai',
    name: 'FaceCheck.AI',
    tagline: 'CNN classifier for real vs. AI-generated faces',
    description: 'Detects synthetic faces using a custom CNN trained on a large dataset.',
    highlights: [
      'Custom CNN architecture trained on real vs. AI-generated face dataset',
      'FastAPI backend serves TensorFlow/Keras inference with confidence breakdowns',
      'Clear API boundaries between frontend and ML backend, containerized with Docker',
    ],
    tech: ['Next.js', 'FastAPI', 'TensorFlow', 'Keras', 'Docker', 'TypeScript'],
    repoUrl: 'https://github.com/Swastik-59/FaceCheck.AI',
    demoUrl: 'https://facecheck--ai.vercel.app/',
    isDemo: true,
  },
  {
    id: 'mindmend',
    name: 'MindMend',
    tagline: 'AI-backed journaling and mental wellness platform',
    description: 'Conversational journaling app with structured AI responses and voice interactions.',
    highlights: [
      'Gemini-powered conversations with ElevenLabs voice synthesis for accessibility',
      'Progress tracking, mood journaling, and reflective dialogue features',
      'Firebase Auth + MongoDB Atlas backend, deployed on Vercel',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Express', 'Node.js', 'Firebase Auth', 'MongoDB Atlas', 'Gemini API', 'ElevenLabs'],
    repoUrl: 'https://github.com/Swastik-59/MindMend',
    demoUrl: 'https://mind-mend-ai-therapist.vercel.app/',
    isDemo: true,
  },
];
