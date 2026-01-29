import React from 'react';
import { colors, spacing, typography } from '../../tokens';

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    'aria-label'?: string;
    type?: 'button' | 'submit' | 'reset';
}

//The button atom, functional on its own, but designed
//to be incorporated into a larger piece of the puzzle
export function Button({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    disabled = false,
    'aria-label': ariaLabel,
    type = 'button',
}: ButtonProps) {
  // sizing styles using spacing and typography tokens
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: `${spacing.xs} ${spacing.sm}`,
      fontSize: typography.fontSize.sm,
    },
    md: {
      padding: `${spacing.sm} ${spacing.md}`,
      fontSize: typography.fontSize.base,
    },
    lg: {
      padding: `${spacing.md} ${spacing.lg}`,
      fontSize: typography.fontSize.lg,
    },
  };

  //variant styles using color tokens
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: colors.info.icon,
      color: colors.neutral.white,
      border: 'none',
    },
    secondary: {
      backgroundColor: colors.neutral.white,
      color: colors.neutral.gray800,
      border: `1px solid ${colors.neutral.gray300}`,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.neutral.gray600,
      border: 'none',
    },
  };
  //base style settings for the font 
  //and the alignment of elements
    const baseStyle: React.CSSProperties = {
    fontFamily: typography.fontFamily.base,
    fontWeight: typography.fontWeight.medium,
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    transition: 'background-color 0.2s, opacity 0.2s',
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  return (
    <button
      type={type}
      style={baseStyle}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}