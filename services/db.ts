// Fix: Use a type-only import for the `Table` interface from Dexie.
// This is the correct way to import TypeScript interfaces and can resolve
// issues with subclass type resolution.
import Dexie, { type Table } from 'dexie';
import type { HistoryItem } from '../types';

export interface AppSettings {
    key: string;
    value: any;
}

export class NanoFusionDB extends Dexie {
  history!: Table<HistoryItem, number>;
  settings!: Table<AppSettings, string>;

  constructor() {
    super('NanoFusionDB');
    // CRITICAL: DO NOT INCREMENT THE DB VERSION WITHOUT A PROPER, NON-DESTRUCTIVE
    // .upgrade() MIGRATION PATH. Incrementing this number WILL WIPE ALL
    // USER DATA (history, settings) if not handled correctly.
    // See Dexie.js documentation on versioning.
    (this as Dexie).version(2).stores({
      history: '++id, timestamp', // Primary key and indexed props
      settings: 'key', // key-value store
    });
  }
}

export const db = new NanoFusionDB();
