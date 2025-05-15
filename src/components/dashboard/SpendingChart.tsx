import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import type { Category } from '../../models/category';
import { formatCurrency } from '../../lib/format';
interface Props { categories: Category[]; spending: Map<number, number>; }
export function SpendingChart({ categories, spending }: Props) {
  const data = categories.filter(c => (spending.get(c.id!) ?? 0) > 0).map(c => ({ name: c.name, value: spending.get(c.id!) ?? 0, color: c.color }));
  if (data.length === 0) return <div className="chart-card"><p className="empty-text">No spending data yet</p></div>;
  return (
    <div className="chart-card"><h3>Spending by Category</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart><Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={90}>
          {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
        </Pie><Tooltip formatter={(value: number) => formatCurrency(value)} /></PieChart>
      </ResponsiveContainer>
    </div>
  );
}
