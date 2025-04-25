import { type ReactNode } from 'react';
import { BottomNav } from './BottomNav';
import { Sidebar } from './Sidebar';
export function Shell({ children }: { children: ReactNode }) {
  return (<div className="shell"><Sidebar /><main className="shell-main">{children}</main><BottomNav /></div>);
}
