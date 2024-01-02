import { Meta, StoryObj } from '@storybook/react'

import { MyComponent } from '../src/MyComponent'

const meta: Meta<typeof MyComponent> = {
	title: 'UI/MyComponent',
	component: MyComponent,
}
export default meta

type Story = StoryObj<typeof MyComponent>

export const Example: Story = {
	args: {
		text: 'Try Me!',
	},
}
