import React from 'react';
import { Icon, Text, Button } from '../atoms';
import { colors, spacing, AlertVariant } from '../../tokens';

export interface AlertProps {
    variant: AlertVariant;
    message: string;
    title?: string;
    dismissible?: boolean;
    onDismiss?: () => void;
}

export function Alert({
    variant,
    message,
    title,
    dismissible = false,
    onDismiss,
}: AlertProps) {
    const iconNames: Record<AlertVariant, 'check' | 'warning' | 'error' | 'info'> = {
        success: 'check',
        warning: 'warning',
        error: 'error',
        info: 'info',
    };
    const variantColors = colors[variant];

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'flex-start',
        gap: spacing.md,
        padding: spacing.lg,
        backgroundColor: variantColors.background,
        border: `1px solid ${variantColors.border}`,
        borderRadius: '6px',
    };

    const contentStyle: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.xs,
    };

    return (
        <div role="alert" style={containerStyle}>
            <Icon
                name={iconNames[variant]}
                variant={variant}
                size={24}
                aria-label={`${variant} alert`}
            />

            <div style={contentStyle}>
                {title && (
                    <Text weight="bold" color={variantColors.text}>
                        {title}
                    </Text>
                )}
                <Text color={variantColors.text}>{message}</Text>
            </div>

            {dismissible && (
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={onDismiss}
                    aria-label="Dismiss alert"
                >
                    <Icon name="close" size={16} color={variantColors.text} />
                </Button>
            )}
        </div>
    );
}