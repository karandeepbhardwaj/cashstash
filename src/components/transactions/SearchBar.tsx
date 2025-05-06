interface Props { value: string; onChange: (value: string) => void; }
export function SearchBar({ value, onChange }: Props) {
  return <div className="search-bar"><input type="text" placeholder="Search transactions..." value={value} onChange={e => onChange(e.target.value)} className="search-input" /></div>;
}
