
import type { Part } from '@google/genai';

export enum GenerationMode {
  Guided = 'guided',
  Freestyle = 'freestyle',
}

export type ImageSlot = {
  id: string;
  file: File | null;
  preview: string;
  mimeType: string;
  panY?: number;
};

export type GuidedSlots = 'character' | 'environment' | 'style';

export interface HistoryItem {
  id?: number;
  imageData: string;
  prompt: string;
  timestamp: Date;
  type: 'generated' | 'upload';
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: Part[];
  text?: string;
}