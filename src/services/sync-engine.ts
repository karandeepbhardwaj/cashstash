import { db } from '../db/schema';

export async function exportData(): Promise<string> {
  const transactions = await db.transactions.toArray();
  const categories = await db.categories.toArray();
  return JSON.stringify({ transactions, categories, exportedAt: new Date().toISOString() });
}

export function importData(localJson: string, remoteJson: string): string {
  const local = JSON.parse(localJson);
  const remote = JSON.parse(remoteJson);
  const mergedTxns = mergeArrays(local.transactions, remote.transactions);
  const mergedCats = mergeArrays(local.categories, remote.categories);
  return JSON.stringify({ transactions: mergedTxns, categories: mergedCats, exportedAt: new Date().toISOString() });
}

function mergeArrays<T extends Record<string, unknown>>(local: T[], remote: T[]): T[] {
  const map = new Map<unknown, T>();
  for (const item of remote) map.set(item.id, item);
  for (const item of local) map.set(item.id, item);
  return Array.from(map.values());
}
