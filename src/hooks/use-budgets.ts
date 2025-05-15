import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db/schema';

export function useBudgets(month: string) {
  const summary = useLiveQuery(async () => {
    const txns = await db.transactions.filter(t => t.date.startsWith(month)).toArray();
    const income = txns.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const expenses = txns.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const byCategory = new Map<number, number>();
    txns.filter(t => t.type === 'expense').forEach(t => {
      byCategory.set(t.categoryId, (byCategory.get(t.categoryId) ?? 0) + t.amount);
    });
    return { income, expenses, balance: income - expenses, byCategory };
  }, [month]);
  return summary ?? { income: 0, expenses: 0, balance: 0, byCategory: new Map() };
}
