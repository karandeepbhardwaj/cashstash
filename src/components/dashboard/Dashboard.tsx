import { SummaryCards } from './SummaryCards';
import { SpendingChart } from './SpendingChart';
import { TrendChart } from './TrendChart';
import { BudgetProgress } from './BudgetProgress';
import { useBudgets } from '../../hooks/use-budgets';
import { useCategories } from '../../hooks/use-categories';
import { getCurrentMonth } from '../../lib/format';

export function Dashboard() {
  const month = getCurrentMonth();
  const budget = useBudgets(month);
  const { categories } = useCategories();
  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>
      <SummaryCards income={budget.income} expenses={budget.expenses} balance={budget.balance} />
      <div className="charts-grid">
        <SpendingChart categories={categories} spending={budget.byCategory} />
        <TrendChart />
      </div>
      <BudgetProgress categories={categories} spending={budget.byCategory} />
    </div>
  );
}
