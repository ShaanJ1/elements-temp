/**
 * Dynamic Theme Config
 */

// Todo: If JS Isnt available, always have a default theme on standby

export interface ThemeColors {
    primary: string;
    primaryHover: string;
    primaryLight: string;
    primaryLighter: string;

    secondary: string;
    secondaryHover: string;
    secondaryLight: string;
    secondaryLighter: string;

    background: string;
    backgroundAlt: string;
    backgroundDark: string;

    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    textInverse: string;

    border: string;
    borderDark: string;
    borderLight: string;

    accent: string;
    accentHover: string;

    danger: string;
    warning: string;
    success: string;
}

export type ThemeMode = 'light' | 'dark';

export interface Theme {
    mode: ThemeMode;
    colors: ThemeColors;
}

export type ThemePreset = 'light' | 'dark' | 'test';


// THEMES
export const lightTheme: ThemeColors = {
    primary: 'rgb(79, 70, 229)',      // indigo-600
    primaryHover: 'rgb(67, 56, 202)', // indigo-700
    primaryLight: 'rgb(199, 210, 254)', // indigo-200
    primaryLighter: 'rgb(238, 242, 255)', // indigo-50

    secondary: 'rgb(107, 114, 128)',   // gray-500
    secondaryHover: 'rgb(75, 85, 99)', // gray-600
    secondaryLight: 'rgb(229, 231, 235)', // gray-200
    secondaryLighter: 'rgb(249, 250, 251)', // gray-50

    background: 'rgb(255, 255, 255)',  // white
    backgroundAlt: 'rgb(249, 250, 251)', // gray-50
    backgroundDark: 'rgb(17, 24, 39)', // gray-900

    textPrimary: 'rgb(17, 24, 39)',    // gray-900
    textSecondary: 'rgb(107, 114, 128)', // gray-500
    textMuted: 'rgb(156, 163, 175)',   // gray-400
    textInverse: 'rgb(255, 255, 255)', // white

    border: 'rgb(229, 231, 235)',      // gray-200
    borderDark: 'rgb(75, 85, 99)',     // gray-600
    borderLight: 'rgb(243, 244, 246)', // gray-100

    accent: 'rgb(16, 185, 129)',       // emerald-500
    accentHover: 'rgb(5, 150, 105)',   // emerald-600

    danger: 'rgb(239, 68, 68)',        // red-500
    warning: 'rgb(245, 158, 11)',      // amber-500
    success: 'rgb(34, 197, 94)',       // green-500
};

export const darkTheme: ThemeColors = {
    ...lightTheme,
    background: 'rgb(17, 24, 39)',     // gray-900
    backgroundAlt: 'rgb(31, 41, 55)',  // gray-800
    backgroundDark: 'rgb(0, 0, 0)',    // black

    textPrimary: 'rgb(255, 255, 255)', // white
    textSecondary: 'rgb(209, 213, 219)', // gray-300
    textMuted: 'rgb(156, 163, 175)',   // gray-400
    textInverse: 'rgb(17, 24, 39)',    // gray-900

    border: 'rgb(75, 85, 99)',         // gray-600
    borderDark: 'rgb(107, 114, 128)',  // gray-500
    borderLight: 'rgb(55, 65, 81)',    // gray-700
};

export const testTheme: ThemeColors = {
    ...lightTheme,
    // primary: 'rgba(206, 88, 68, 1)',        // #1B1B1B
    // primaryHover: 'rgb(139, 61, 47)',  // #8B3D2F (button color)
    // primaryLight: 'rgb(124, 148, 115)', // #7C9473 (lighter version)
    // primaryLighter: 'rgb(228, 216, 195)', // #E4D8C3 (very light)

    // secondary: 'rgb(124, 148, 115)',   // #7C9473
    // secondaryHover: 'rgb(27, 27, 27)', // #1B1B1B
    // secondaryLight: 'rgb(228, 216, 195)', // #E4D8C3
    // secondaryLighter: 'rgb(240, 235, 225)', // lighter version

    // background: 'rgb(228, 216, 195)',  // #E4D8C3
    // backgroundAlt: 'rgb(240, 235, 225)', // lighter version
    // backgroundDark: 'rgb(27, 27, 27)', // #1B1B1B

    // textPrimary: 'rgb(27, 27, 27)',    // #1B1B1B
    // textSecondary: 'rgb(162, 142, 126)', // #A28E7E
    // textMuted: 'rgb(140, 140, 140)',   // medium gray
    // textInverse: 'rgb(228, 216, 195)', // #E4D8C3

    // border: 'rgb(228, 216, 195)',      // #E4D8C3
    // borderDark: 'rgb(27, 27, 27)',     // #1B1B1B
    // borderLight: 'rgb(210, 210, 210)', // light gray

    // accent: 'rgb(139, 61, 47)',        // #8B3D2F (get started button)
    // accentHover: 'rgb(110, 50, 37)',   // #6E3225 (button hover)

    // danger: 'rgb(220, 38, 38)',
    // warning: 'rgb(245, 158, 11)',
    // success: 'rgb(34, 197, 94)',
};

// Theme Config Map
export const THEME_CONFIG = {
    light: {
        theme: lightTheme,
        mode: 'light' as ThemeMode,
        label: 'Light',
        description: 'Clean and bright theme',
        displayColor: 'bg-white border-gray-200',
    },
    dark: {
        theme: darkTheme,
        mode: 'dark' as ThemeMode,
        label: 'Dark',
        description: 'Dark mode for low-light environments',
        displayColor: 'bg-gray-900 border-gray-700',
    },
    test: {
        theme: testTheme,
        mode: 'light' as ThemeMode,
        label: 'Test',
        description: 'test',
        displayColor: 'bg-red-700 border-turquoise-900',
    },
} as const;

// Theme utils
/**
 * Get all available theme presets
 */
export const getAvailableThemes = (): Array<{ name: ThemePreset; config: typeof THEME_CONFIG[ThemePreset] }> => {
    return Object.entries(THEME_CONFIG).map(([name, config]) => ({
        name: name as ThemePreset,
        config,
    }));
};

/**
 * Get theme configuration by name
 */
export const getThemeConfig = (themeName: ThemePreset) => {
    return THEME_CONFIG[themeName];
};

/**
 * Get theme colors by name
 */
export const getThemeColors = (themeName: ThemePreset): ThemeColors => {
    return THEME_CONFIG[themeName].theme;
};

/**
 * Get default theme name
 */
export const getDefaultTheme = (): ThemePreset => {
    return 'light'; // Default for flooring business
};

/**
 * Validate if theme name exists
 */
export const isValidTheme = (themeName: string): themeName is ThemePreset => {
    return themeName in THEME_CONFIG;
};

// CSS Variable Map
/**
 * Map of CSS custom property names to theme color keys
 */
export const CSS_VARIABLE_MAP = {
    '--color-primary': 'primary',
    '--color-primary-hover': 'primaryHover',
    '--color-primary-light': 'primaryLight',
    '--color-primary-lighter': 'primaryLighter',

    '--color-secondary': 'secondary',
    '--color-secondary-hover': 'secondaryHover',
    '--color-secondary-light': 'secondaryLight',
    '--color-secondary-lighter': 'secondaryLighter',

    '--color-background': 'background',
    '--color-background-alt': 'backgroundAlt',
    '--color-background-dark': 'backgroundDark',

    '--color-text-primary': 'textPrimary',
    '--color-text-secondary': 'textSecondary',
    '--color-text-muted': 'textMuted',
    '--color-text-inverse': 'textInverse',

    '--color-border': 'border',
    '--color-border-dark': 'borderDark',
    '--color-border-light': 'borderLight',

    '--color-accent': 'accent',
    '--color-accent-hover': 'accentHover',

    '--color-danger': 'danger',
    '--color-warning': 'warning',
    '--color-success': 'success',
} as const;