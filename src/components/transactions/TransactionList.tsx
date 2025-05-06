import { useState } from 'react';
import { useTransactions } from '../../hooks/use-transactions';
import { TransactionItem } from './TransactionItem';
import { TransactionForm } from './TransactionForm';
import { SearchBar } from './SearchBar';
import { getCurrentMonth } from '../../lib/format';

export function TransactionList() {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const { transactions, addTransaction, deleteTransaction } = useTransactions(getCurrentMonth());
  const filtered = search ? transactions.filter(t => t.note.toLowerCase().includes(search.toLowerCase())) : transactions;
  return (
    <div className="transactions-page">
      <div className="page-header"><h1 className="page-title">Transactions</h1><button className="btn-primary" onClick={() => setShowForm(true)}>Add</button></div>
      <SearchBar value={search} onChange={setSearch} />
      <div className="transaction-list">
        {filtered.length === 0 ? <p className="empty-text">No transactions yet</p> : filtered.map(t => <TransactionItem key={t.id} transaction={t} onDelete={() => deleteTransaction(t.id!)} />)}
      </div>
      {showForm && <TransactionForm onSave={async (data) => { await addTransaction(data); setShowForm(false); }} onClose={() => setShowForm(false)} />}
    </div>
  );
}
