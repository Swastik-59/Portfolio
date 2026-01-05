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
  position: string;
  description: string;
  tech: string[];
  repoUrl: string;
  demoUrl: string;
  isDemo: boolean;
  thumbnail?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'helixai',
    name: 'HelixAI',
    position: 'Local-first multi-agent AI system with real workflow orchestration.',
    description:
      'Desktop-first AI orchestrator that decomposes user requests into DAG task workflows and routes them to capability-specific workers via Redis Streams. Runs locally (Electron desktop) with a FastAPI orchestrator, PostgreSQL state, and Qdrant vector store — supports LLM inference (Ollama), tool execution, RAG lookup, and streaming outputs.',
    tech: [
      'Electron',
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'Redis Streams',
      'PostgreSQL',
      'Qdrant',
      'Ollama',
      'Sentence-Transformers'
    ],
    repoUrl: 'https://github.com/Swastik-59/HelixAI',
    demoUrl: '',
    isDemo: false,
  },
  {
    id: 'facecheck-ai',
    name: 'FaceCheck.AI',
    position: 'AI-driven detector for real vs. synthetic faces.',
    description:
      'Full-stack app that classifies faces as real or AI-generated using a custom CNN trained on a large face-image dataset. FastAPI backend serves TensorFlow/Keras inference; Next.js frontend provides image upload, inference results, and confidence breakdowns. Designed for low-latency inference and clear API boundaries.',
    tech: ['Next.js', 'FastAPI', 'TensorFlow', 'Keras', 'Docker', 'TypeScript'],
    repoUrl: 'https://github.com/Swastik-59/FaceCheck.AI',
    demoUrl: 'https://facecheck--ai.vercel.app/',
    isDemo: true,
  },
  {
    id: 'mindmend',
    name: 'MindMend',
    position: 'AI-assisted mental wellness and self-care platform.',
    description:
      'Conversational mental wellness app that provides reflective dialogues, progress tracking, and optional voice interactions. Built with Next.js frontend and an Express/Node backend; integrates Gemini for conversations and ElevenLabs for TTS. Focused on accessibility and anonymized, early-stage support (not a substitute for clinical care).',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Express',
      'Node.js',
      'Firebase Auth',
      'MongoDB Atlas',
      'Gemini API',
      'ElevenLabs'
    ],
    repoUrl: 'https://github.com/Swastik-59/MindMend',
    demoUrl: 'https://mind-mend-ai-therapist.vercel.app/',
    isDemo: true,
  },
  {
    id: 'real-time-fraud-detection',
    name: 'Real-Time Fraud Detection',
    position: 'Low-latency transaction fraud scoring with production-ready inference.',
    description:
      'Streaming fraud detection pipeline that performs real-time scoring using an XGBoost model converted to ONNX for fast inference. Includes feature preprocessing, model conversion to ONNX, and a Spring Boot backend serving inference alongside a TypeScript/Next.js dashboard for monitoring and visualization.',
    tech: ['Java', 'Spring Boot', 'XGBoost', 'ONNX', 'ONNX Runtime', 'TypeScript', 'Next.js'],
    repoUrl: 'https://github.com/Swastik-59/Real-Time-Fraud-Detection',
    demoUrl: 'https://real-time-fraud-detection.vercel.app/',
    isDemo: true,
  },
];
