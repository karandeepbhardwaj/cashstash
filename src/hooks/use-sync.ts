import { useState } from 'react';
import { useAuth } from './use-auth';
import { exportData } from '../services/sync-engine';
import { uploadBackup, downloadBackup } from '../services/google-drive';

export function useSync() {
  const { accessToken } = useAuth();
  const [syncing, setSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState<string | null>(localStorage.getItem('cashstash-last-synced'));

  const sync = async () => {
    if (!accessToken) return;
    setSyncing(true);
    try {
      const localData = await exportData();
      await uploadBackup(accessToken, localData);
      const now = new Date().toISOString();
      setLastSynced(now);
      localStorage.setItem('cashstash-last-synced', now);
    } finally { setSyncing(false); }
  };
  return { sync, syncing, lastSynced };
}
