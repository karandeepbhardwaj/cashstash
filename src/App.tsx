import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shell } from './components/layout/Shell';
import { Dashboard } from './components/dashboard/Dashboard';
import { TransactionList } from './components/transactions/TransactionList';
import { CategoryManager } from './components/categories/CategoryManager';
import { Settings } from './components/settings/Settings';
import { useTheme } from './hooks/use-theme';

export function App() {
  const { theme } = useTheme();
  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Shell>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<TransactionList />} />
            <Route path="/categories" element={<CategoryManager />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Shell>
      </BrowserRouter>
    </div>
  );
}
