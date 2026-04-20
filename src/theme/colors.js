/**
 * CsPM Brand Colors
 * =================
 * Centralized color definitions for consistent theming across the application.
 * 
 * Usage:
 *   import { colors } from '../theme/colors';
 *   backgroundColor: colors.primary.main
 */

export const colors = {
  // Primary brand color - Deep blue
  primary: {
    main: 'rgba(40, 68, 115, 1)',
    light: 'rgba(40, 68, 115, 0.9)',
    lighter: 'rgba(40, 68, 115, 0.7)',
    subtle: 'rgba(40, 68, 115, 0.15)',
    faint: 'rgba(40, 68, 115, 0.08)',
    border: 'rgba(40, 68, 115, 0.06)',
  },

  // Secondary brand color - Light blue
  secondary: {
    main: 'rgba(166, 203, 232, 1)',
    light: 'rgba(166, 203, 232, 0.9)',
    lighter: 'rgba(166, 203, 232, 0.8)',
    subtle: 'rgba(166, 203, 232, 0.2)',
    faint: 'rgba(166, 203, 232, 0.05)',
  },

  // Accent color - Gold
  accent: {
    main: 'rgba(218, 165, 32, 1)',
    light: 'rgba(218, 165, 32, 0.9)',
    lighter: 'rgba(218, 165, 32, 0.7)',
    subtle: 'rgba(218, 165, 32, 0.25)',
    faint: 'rgba(218, 165, 32, 0.05)',
    dark: 'rgba(184, 134, 11, 1)',
  },

  // Text colors
  text: {
    light: 'rgb(254, 247, 255)',
    primary: 'rgba(40, 68, 115, 0.9)',
    secondary: 'rgba(40, 68, 115, 0.7)',
    muted: 'rgba(40, 68, 115, 0.5)',
  },

  // Background colors
  background: {
    main: 'rgb(245, 245, 245)',
    paper: 'rgb(254, 247, 255)',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },

  // Shadow colors for box-shadow usage
  shadows: {
    primary: 'rgba(40, 68, 115, 0.3)',
    primaryLight: 'rgba(40, 68, 115, 0.15)',
    primaryHover: 'rgba(40, 68, 115, 0.4)',
    card: 'rgba(40, 68, 115, 0.12)',
    cardHover: 'rgba(40, 68, 115, 0.18)',
  },
};

// Gradient presets
export const gradients = {
  appbar: 'linear-gradient(135deg, rgba(40, 68, 115, 0.97) 0%, rgba(40, 68, 115, 0.95) 100%)',
  hero: 'linear-gradient(180deg, rgba(166, 203, 232, 0.1) 0%, transparent 100%)',
};

// Box shadow presets
export const shadows = {
  card: `0px 4px 8px ${colors.shadows.card}`,
  cardHover: `0 8px 20px ${colors.shadows.cardHover}`,
  elevated: `0 4px 20px ${colors.shadows.primaryLight}`,
  fab: `0 4px 16px ${colors.shadows.primary}`,
  fabHover: `0 6px 20px ${colors.shadows.primaryHover}`,
};

export default colors;
