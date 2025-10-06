<script lang="ts">
	import { onMount } from 'svelte';
	import { themeManager, setPresetTheme } from '../utils/theme';
	import { getAvailableThemes, getDefaultTheme } from '../config/themes';
	import type { ThemePreset } from '../config/themes';

	let currentTheme: string = getDefaultTheme();
	let isOpen = false;

	// Get all themes from centralized configuration
	const themes = getAvailableThemes().map(({ name, config }) => ({
		name,
		label: config.label,
		color: config.displayColor,
		description: config.description
	}));

	onMount(() => {
		// Initialize theme on mount
		themeManager.initializeTheme();
		currentTheme = themeManager.loadThemePreference() || getDefaultTheme();
	});

	function handleThemeChange(themeName: string) {
		setPresetTheme(themeName as ThemePreset);
		currentTheme = themeName;
		isOpen = false;
	}
</script>

<div class="relative">
	<button
		on:click={() => (isOpen = !isOpen)}
		class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-500 text-gray-400 transition-colors hover:border-gray-300 hover:text-white"
		aria-label="Change theme"
	>
		<div
			class="h-4 w-4 rounded-full {themes.find((t) => t.name === currentTheme)?.color ||
				'bg-gray-300'}"
		></div>
	</button>

	{#if isOpen}
		<!-- Theme Picker Dropdown  -->
		<div
			class="absolute bottom-full right-0 z-50 mb-2 w-48 rounded-lg border border-border bg-background shadow-lg"
		>
			<div class="py-1">
				{#each themes as theme}
					<button
						on:click={() => handleThemeChange(theme.name)}
						class="flex w-full items-center space-x-3 px-3 py-2 text-left transition-colors hover:bg-background-alt {currentTheme ===
						theme.name
							? 'bg-primary-lighter'
							: ''}"
					>
						<div class="h-4 w-4 rounded-full border-2 border-gray-200 {theme.color}"></div>
						<span class="text-sm text-text-primary">{theme.label}</span>
						{#if currentTheme === theme.name}
							<svg class="ml-auto h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								></path>
							</svg>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<!-- Close dropdown when clicking outside -->
{#if isOpen}
	<div
		class="fixed inset-0 z-40"
		role="button"
		tabindex="-1"
		on:click={() => (isOpen = false)}
		on:keydown={(e) => e.key === 'Escape' && (isOpen = false)}
	></div>
{/if}
