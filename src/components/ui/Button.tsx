import { type ButtonHTMLAttributes } from 'react';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'ghost'; }
export function Button({ variant = 'primary', className, ...props }: Props) { return <button className={`btn-${variant} ${className ?? ''}`} {...props} />; }
