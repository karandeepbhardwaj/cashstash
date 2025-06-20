import { useState } from 'react';
import { useCategories } from '../../hooks/use-categories';
import { CategoryForm } from './CategoryForm';
export function CategoryManager() {
  const { categories, addCategory, deleteCategory } = useCategories();
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="categories-page">
      <div className="page-header"><h1 className="page-title">Categories</h1><button className="btn-primary" onClick={() => setShowForm(true)}>Add</button></div>
      <div className="category-list">{categories.map(cat => (
        <div key={cat.id} className="category-item"><span className="category-color" style={{ background: cat.color }} /><span className="category-name">{cat.name}</span><span className="category-budget">{cat.budgetLimit > 0 ? `$${cat.budgetLimit}/mo` : ''}</span><button className="btn-delete" onClick={() => deleteCategory(cat.id!)}>x</button></div>
      ))}</div>
      {showForm && <CategoryForm onSave={async (data) => { await addCategory(data); setShowForm(false); }} onClose={() => setShowForm(false)} />}
    </div>
  );
}
