import { exportToCSV, downloadCSV } from '../../services/export';
export function ExportButton() {
  const handleExport = async () => { const csv = await exportToCSV(); downloadCSV(csv, `cashstash-export-${new Date().toISOString().slice(0, 10)}.csv`); };
  return <button className="setting-btn" onClick={handleExport}>Export to CSV</button>;
}
