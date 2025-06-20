import { useState } from 'react';
import type { Category } from '../../models/category';
interface Props { onSave: (data: Omit<Category, 'id'>) => Promise<void>; onClose: () => void; }
export function CategoryForm({ onSave, onClose }: Props) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#3b82f6');
  const [budgetLimit, setBudgetLimit] = useState('0');
  return (
    <div className="modal-overlay" onClick={onClose}><div className="modal" onClick={e => e.stopPropagation()}>
      <h2>Add Category</h2>
      <form onSubmit={async e => { e.preventDefault(); await onSave({ name, icon: 'tag', color, budgetLimit: parseFloat(budgetLimit) }); }}>
        <div className="form-field"><label>Name</label><input type="text" value={name} onChange={e => setName(e.target.value)} required /></div>
        <div className="form-field"><label>Color</label><input type="color" value={color} onChange={e => setColor(e.target.value)} /></div>
        <div className="form-field"><label>Monthly Budget</label><input type="number" min="0" value={budgetLimit} onChange={e => setBudgetLimit(e.target.value)} /></div>
        <div className="form-actions"><button type="button" className="btn-secondary" onClick={onClose}>Cancel</button><button type="submit" className="btn-primary">Save</button></div>
      </form>
    </div></div>
  );
}
