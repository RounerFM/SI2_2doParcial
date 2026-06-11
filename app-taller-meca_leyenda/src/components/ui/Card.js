import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { GLASS } from '../../constants/colors';

export default function Card({ children, className = '', onPress, variant = 'glass', ...props }) {
  const Component = onPress ? TouchableOpacity : View;
  const activeOpacity = onPress ? 0.85 : 1;

  const glassStyle =
    variant === 'glass'
      ? {
          backgroundColor: GLASS.background,
          borderColor: GLASS.border,
          shadowColor: '#10b981',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.18,
          shadowRadius: 16,
          elevation: 3,
        }
      : {
          backgroundColor: '#111a2b',
          borderColor: '#1f2a3d',
        };

  return (
    <Component
      onPress={onPress}
      activeOpacity={activeOpacity}
      className={`rounded-none border ${className}`}
      style={glassStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
