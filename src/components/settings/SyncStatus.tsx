import { useSync } from '../../hooks/use-sync';
import { useAuth } from '../../hooks/use-auth';
export function SyncStatus() {
  const { isAuthenticated, signIn, signOut } = useAuth();
  const { sync, syncing, lastSynced } = useSync();
  if (!isAuthenticated) return <button className="setting-btn" onClick={signIn}>Connect Google Drive</button>;
  return (<div className="sync-status"><p>Last synced: {lastSynced ? new Date(lastSynced).toLocaleString() : 'Never'}</p>
    <div className="sync-actions"><button className="btn-primary" onClick={sync} disabled={syncing}>{syncing ? 'Syncing...' : 'Sync Now'}</button><button className="btn-secondary" onClick={signOut}>Disconnect</button></div></div>);
}
