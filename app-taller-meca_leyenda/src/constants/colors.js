/** Tokens dark mode (slate profundo + esmeralda neón). */
export const COLORS = {
  primary: '#10b981',
  primaryDark: '#059669',
  primaryLight: '#34d399',

  secondary: '#34d399',
  secondaryDark: '#10b981',

  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#10b981',

  background: '#070b14',
  backgroundElevated: '#0e1626',
  surface: 'rgba(255, 255, 255, 0.05)',
  surfaceSolid: '#111a2b',
  surfaceDark: '#0e1626',

  text: '#e6edf6',
  textLight: '#8b98ad',
  textDark: '#f8fafc',

  border: 'rgba(255, 255, 255, 0.10)',
  borderSolid: '#1f2a3d',
  borderDark: '#334155',

  white: '#ffffff',
  black: '#000000',

  // Status colors
  pending: '#f59e0b',
  analyzing: '#38bdf8',
  waiting: '#a78bfa',
  assigned: '#22d3ee',
  inProgress: '#10b981',
  completed: '#10b981',
  cancelled: '#94a3b8',

  // Priority colors
  low: '#10b981',
  medium: '#f59e0b',
  high: '#ef4444',
  critical: '#f87171',
};

export const STATUS_COLORS = {
  pending: COLORS.pending,
  analyzing: COLORS.analyzing,
  waiting_workshop: COLORS.waiting,
  assigned: COLORS.assigned,
  in_progress: COLORS.inProgress,
  completed: COLORS.completed,
  cancelled: COLORS.cancelled,
};

export const PRIORITY_COLORS = {
  low: COLORS.low,
  medium: COLORS.medium,
  high: COLORS.high,
  critical: COLORS.critical,
};

export const GLASS = {
  background: 'rgba(17, 26, 43, 0.72)',
  border: 'rgba(255, 255, 255, 0.10)',
  tabBar: 'rgba(13, 20, 34, 0.94)',
};
