import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db/schema';
import type { Transaction } from '../models/transaction';

export function useTransactions(month?: string) {
  const transactions = useLiveQuery(async () => {
    const query = db.transactions.orderBy('date').reverse();
    if (month) return query.filter(t => t.date.startsWith(month)).toArray();
    return query.toArray();
  }, [month]);

  const addTransaction = async (data: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date().toISOString();
    await db.transactions.add({ ...data, createdAt: now, updatedAt: now } as Transaction);
  };

  const updateTransaction = async (id: number, data: Partial<Transaction>) => {
    await db.transactions.update(id, { ...data, updatedAt: new Date().toISOString() });
  };

  const deleteTransaction = async (id: number) => { await db.transactions.delete(id); };

  return { transactions: transactions ?? [], addTransaction, updateTransaction, deleteTransaction };
}
