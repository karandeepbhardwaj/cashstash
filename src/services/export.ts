import { db } from '../db/schema';

export async function exportToCSV(): Promise<string> {
  const transactions = await db.transactions.toArray();
  const categories = await db.categories.toArray();
  const catMap = new Map(categories.map(c => [c.id, c.name]));
  const headers = ['Date', 'Type', 'Category', 'Amount', 'Note'];
  const rows = transactions.map(t => [t.date, t.type, catMap.get(t.categoryId) ?? 'Unknown', t.amount.toFixed(2), `"${t.note.replace(/"/g, '""')}"`]);
  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}

export function downloadCSV(csv: string, filename: string) {
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}
