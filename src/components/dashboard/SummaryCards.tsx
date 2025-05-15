import { formatCurrency } from '../../lib/format';
interface Props { income: number; expenses: number; balance: number; }
export function SummaryCards({ income, expenses, balance }: Props) {
  return (
    <div className="summary-cards">
      <div className="summary-card income"><span className="summary-label">Income</span><span className="summary-value">{formatCurrency(income)}</span></div>
      <div className="summary-card expense"><span className="summary-label">Expenses</span><span className="summary-value">{formatCurrency(expenses)}</span></div>
      <div className="summary-card balance"><span className="summary-label">Balance</span><span className="summary-value">{formatCurrency(balance)}</span></div>
    </div>
  );
}
