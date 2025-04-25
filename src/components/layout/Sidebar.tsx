import { NavLink } from 'react-router-dom';
export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">CashStash</div>
      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>Dashboard</NavLink>
        <NavLink to="/transactions" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>Transactions</NavLink>
        <NavLink to="/categories" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>Categories</NavLink>
        <NavLink to="/settings" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>Settings</NavLink>
      </nav>
    </aside>
  );
}
