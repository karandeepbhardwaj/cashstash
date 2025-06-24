import { useState } from 'react';
import { CURRENCIES } from '../../lib/constants';
export function CurrencyPicker() {
  const [currency, setCurrency] = useState(() => localStorage.getItem('cashstash-currency') ?? 'USD');
  const handleChange = (code: string) => { setCurrency(code); localStorage.setItem('cashstash-currency', code); };
  return <select className="setting-select" value={currency} onChange={e => handleChange(e.target.value)}>{CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.symbol} {c.name}</option>)}</select>;
}
