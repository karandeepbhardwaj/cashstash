import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
export function TrendChart() {
  const data = [{ month: 'Jan', income: 0, expenses: 0 }, { month: 'Feb', income: 0, expenses: 0 }, { month: 'Mar', income: 0, expenses: 0 }];
  return (
    <div className="chart-card"><h3>Monthly Trend</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}><XAxis dataKey="month" /><YAxis /><Tooltip />
          <Bar dataKey="income" fill="#10b981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
