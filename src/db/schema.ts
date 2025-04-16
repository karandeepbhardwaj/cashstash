import Dexie, { type Table } from 'dexie';
import type { Transaction } from '../models/transaction';
import type { Category } from '../models/category';

export class CashStashDB extends Dexie {
  transactions!: Table<Transaction>;
  categories!: Table<Category>;

  constructor() {
    super('cashstash');
    this.version(1).stores({
      transactions: '++id, date, categoryId, type, createdAt',
      categories: '++id, name',
    });
  }
}

export const db = new CashStashDB();
