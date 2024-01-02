import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	core: {
		builder: '@storybook/builder-vite',
		core: {
			disableTelemetry: true, // 👈 Disables telemetry
			disableWhatsNewNotifications: true,
		},
	},
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
}

export default config
