import { NavLink } from 'react-router-dom';
export function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}><span>Dashboard</span></NavLink>
      <NavLink to="/transactions" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}><span>Transactions</span></NavLink>
      <NavLink to="/categories" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}><span>Categories</span></NavLink>
      <NavLink to="/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}><span>Settings</span></NavLink>
    </nav>
  );
}
