import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db/schema';
import type { Category } from '../models/category';

export function useCategories() {
  const categories = useLiveQuery(() => db.categories.toArray());
  const addCategory = async (data: Omit<Category, 'id'>) => { await db.categories.add(data as Category); };
  const updateCategory = async (id: number, data: Partial<Category>) => { await db.categories.update(id, data); };
  const deleteCategory = async (id: number) => { await db.categories.delete(id); };
  return { categories: categories ?? [], addCategory, updateCategory, deleteCategory };
}
