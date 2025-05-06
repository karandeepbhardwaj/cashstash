import type { Transaction } from '../../models/transaction';
import { formatCurrency, formatDate } from '../../lib/format';
interface Props { transaction: Transaction; onDelete: () => void; }
export function TransactionItem({ transaction, onDelete }: Props) {
  const isIncome = transaction.type === 'income';
  return (
    <div className="transaction-item">
      <div className="transaction-info"><span className="transaction-note">{transaction.note || 'No description'}</span><span className="transaction-date">{formatDate(transaction.date)}</span></div>
      <div className="transaction-actions">
        <span className={`transaction-amount ${isIncome ? 'income' : 'expense'}`}>{isIncome ? '+' : '-'}{formatCurrency(transaction.amount)}</span>
        <button className="btn-delete" onClick={onDelete}>x</button>
      </div>
    </div>
  );
}
