import { useState } from 'react';
import { useCategories } from '../../hooks/use-categories';
import type { Transaction } from '../../models/transaction';
interface Props { onSave: (data: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>; onClose: () => void; }
export function TransactionForm({ onSave, onClose }: Props) {
  const { categories } = useCategories();
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [amount, setAmount] = useState('');
  const [categoryId, setCategoryId] = useState<number>(0);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [note, setNote] = useState('');
  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); await onSave({ type, amount: parseFloat(amount), categoryId, date, note, isRecurring: false }); };
  return (
    <div className="modal-overlay" onClick={onClose}><div className="modal" onClick={e => e.stopPropagation()}>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="type-toggle"><button type="button" className={`toggle-btn ${type === 'expense' ? 'active' : ''}`} onClick={() => setType('expense')}>Expense</button><button type="button" className={`toggle-btn ${type === 'income' ? 'active' : ''}`} onClick={() => setType('income')}>Income</button></div>
        <div className="form-field"><label>Amount</label><input type="number" step="0.01" min="0" value={amount} onChange={e => setAmount(e.target.value)} required /></div>
        <div className="form-field"><label>Category</label><select value={categoryId} onChange={e => setCategoryId(Number(e.target.value))} required><option value={0}>Select</option>{categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
        <div className="form-field"><label>Date</label><input type="date" value={date} onChange={e => setDate(e.target.value)} required /></div>
        <div className="form-field"><label>Note</label><input type="text" value={note} onChange={e => setNote(e.target.value)} placeholder="Description" /></div>
        <div className="form-actions"><button type="button" className="btn-secondary" onClick={onClose}>Cancel</button><button type="submit" className="btn-primary">Save</button></div>
      </form>
    </div></div>
  );
}
