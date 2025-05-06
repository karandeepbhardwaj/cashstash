export function Toast({ message, type = 'info' }: { message: string; type?: 'info' | 'success' | 'error' }) { return <div className={`toast toast-${type}`}>{message}</div>; }
