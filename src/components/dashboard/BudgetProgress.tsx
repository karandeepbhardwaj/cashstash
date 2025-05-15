import type { Category } from '../../models/category';
import { formatCurrency } from '../../lib/format';
interface Props { categories: Category[]; spending: Map<number, number>; }
export function BudgetProgress({ categories, spending }: Props) {
  const withBudget = categories.filter(c => c.budgetLimit > 0);
  return (
    <div className="budget-progress"><h3>Budget Progress</h3>
      {withBudget.map(cat => {
        const spent = spending.get(cat.id!) ?? 0;
        const pct = Math.min((spent / cat.budgetLimit) * 100, 100);
        return (<div key={cat.id} className="budget-item">
          <div className="budget-header"><span>{cat.name}</span><span>{formatCurrency(spent)} / {formatCurrency(cat.budgetLimit)}</span></div>
          <div className="budget-bar"><div className="budget-fill" style={{ width: `${pct}%`, background: pct > 90 ? '#ef4444' : cat.color }} /></div>
        </div>);
      })}
    </div>
  );
}
