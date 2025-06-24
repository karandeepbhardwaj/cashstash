import { ThemeToggle } from './ThemeToggle';
import { SyncStatus } from './SyncStatus';
import { ExportButton } from './ExportButton';
import { CurrencyPicker } from './CurrencyPicker';
export function Settings() {
  return (<div className="settings-page"><h1 className="page-title">Settings</h1>
    <div className="settings-section"><h3>Appearance</h3><ThemeToggle /></div>
    <div className="settings-section"><h3>Currency</h3><CurrencyPicker /></div>
    <div className="settings-section"><h3>Google Drive Sync</h3><SyncStatus /></div>
    <div className="settings-section"><h3>Data</h3><ExportButton /></div>
  </div>);
}
