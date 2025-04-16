export interface AppSettings {
  currency: string;
  theme: 'light' | 'dark' | 'system';
  lastSyncedAt: string | null;
}
