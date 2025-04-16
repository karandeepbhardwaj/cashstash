import { db } from './schema';
import type { Category } from '../models/category';

const defaultCategories: Omit<Category, 'id'>[] = [
  { name: 'Food & Dining', icon: 'utensils', color: '#ef4444', budgetLimit: 500 },
  { name: 'Transportation', icon: 'car', color: '#f59e0b', budgetLimit: 200 },
  { name: 'Housing', icon: 'home', color: '#3b82f6', budgetLimit: 1500 },
  { name: 'Entertainment', icon: 'film', color: '#8b5cf6', budgetLimit: 150 },
  { name: 'Health', icon: 'heart', color: '#ec4899', budgetLimit: 100 },
  { name: 'Shopping', icon: 'bag', color: '#14b8a6', budgetLimit: 300 },
  { name: 'Income', icon: 'wallet', color: '#10b981', budgetLimit: 0 },
  { name: 'Other', icon: 'grid', color: '#6b7280', budgetLimit: 200 },
];

export async function seedCategories() {
  const count = await db.categories.count();
  if (count === 0) {
    await db.categories.bulkAdd(defaultCategories as Category[]);
  }
}
