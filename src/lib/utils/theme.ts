import type { ThemeColors, ThemeMode, ThemePreset } from '../config/themes';
import { getThemeConfig, getDefaultTheme, isValidTheme, CSS_VARIABLE_MAP } from '../config/themes';

/**
 * Utility class for managing theme colors and modes
 */
export class ThemeManager {
    private currentTheme: ThemeColors;
    private currentMode: ThemeMode = 'light';

    constructor() {
        const defaultConfig = getThemeConfig(getDefaultTheme());
        this.currentTheme = defaultConfig.theme;
        this.currentMode = defaultConfig.mode;
    }

    /**
     * Apply theme colors to CSS custom properties
     */
    applyTheme(theme: ThemeColors, mode: ThemeMode = 'light'): void {
        this.currentTheme = theme;
        this.currentMode = mode;

        const root = document.documentElement;

        // Apply all theme colors using the CSS variable map
        Object.entries(CSS_VARIABLE_MAP).forEach(([cssVar, themeKey]) => {
            root.style.setProperty(cssVar, theme[themeKey as keyof ThemeColors]);
        });

        // Set theme mode data attribute
        root.setAttribute('data-theme', mode);
    }

    /**
     * Switch between light and dark modes
     */
    toggleMode(): ThemeMode {
        const newMode = this.currentMode === 'light' ? 'dark' : 'light';
        const themeConfig = getThemeConfig(newMode);
        this.applyTheme(themeConfig.theme, themeConfig.mode);
        return newMode;
    }

    /**
     * Get the current theme
     */
    getCurrentTheme(): ThemeColors {
        return this.currentTheme;
    }

    /**
     * Get the current mode
     */
    getCurrentMode(): ThemeMode {
        return this.currentMode;
    }

    /**
     * Apply a predefined theme by name
     */
    applyPresetTheme(themeName: ThemePreset): void {
        if (!isValidTheme(themeName)) {
            console.warn(`Invalid theme name: ${themeName}. Using default theme.`);
            themeName = getDefaultTheme();
        }

        const themeConfig = getThemeConfig(themeName);
        this.applyTheme(themeConfig.theme, themeConfig.mode);
    }

    /**
     * Save theme preference to localStorage
     */
    saveThemePreference(themeName: string): void {
        localStorage.setItem('theme-preference', themeName);
    }

    /**
     * Load theme preference from localStorage
     */
    loadThemePreference(): string | null {
        return localStorage.getItem('theme-preference');
    }

    /**
     * Initialize theme from saved preference or system preference
     */
    initializeTheme(): void {
        const saved = this.loadThemePreference();

        if (saved && isValidTheme(saved)) {
            this.applyPresetTheme(saved);
        } else {
            // Default to warm-timber theme for flooring business
            // Check system preference for dark mode
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.applyPresetTheme(prefersDark ? 'dark' : getDefaultTheme());
        }
    }
}

// Create a singleton instance
export const themeManager = new ThemeManager();

// Utility functions for easier usage
export const setTheme = (theme: ThemeColors, mode: ThemeMode = 'light') => {
    themeManager.applyTheme(theme, mode);
};

export const toggleTheme = () => {
    return themeManager.toggleMode();
};

export const setPresetTheme = (themeName: ThemePreset) => {
    themeManager.applyPresetTheme(themeName);
    themeManager.saveThemePreference(themeName);
};

/**
 * Convert RGB values to CSS color string
 */
export const rgbToColor = (rgb: string, alpha: number = 1): string => {
    return `rgb(${rgb} / ${alpha})`;
};

/**
 * Get CSS custom property value
 */
export const getCSSVar = (property: string): string => {
    return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
};