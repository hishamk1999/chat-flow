import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, className = '', type = 'button', ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-xl bg-primary-600 px-4 py-2 font-medium text-white transition hover:bg-primary-700 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
