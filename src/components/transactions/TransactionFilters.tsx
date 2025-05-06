import { useCategories } from '../../hooks/use-categories';
interface Props { categoryFilter: number | null; onCategoryChange: (id: number | null) => void; }
export function TransactionFilters({ categoryFilter, onCategoryChange }: Props) {
  const { categories } = useCategories();
  return (<div className="filters"><select value={categoryFilter ?? ''} onChange={e => onCategoryChange(e.target.value ? Number(e.target.value) : null)}><option value="">All Categories</option>{categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>);
}
