import { useTheme } from '../../hooks/use-theme';
export function ThemeToggle() { const { theme, toggle } = useTheme(); return <button className="setting-btn" onClick={toggle}>{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</button>; }
