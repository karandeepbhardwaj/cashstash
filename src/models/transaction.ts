export interface Transaction {
  id?: number;
  amount: number;
  type: 'income' | 'expense';
  categoryId: number;
  date: string;
  note: string;
  isRecurring: boolean;
  createdAt: string;
  updatedAt: string;
}
