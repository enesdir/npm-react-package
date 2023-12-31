import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { MyComponent } from '../src/MyComponent' // Make sure the path is correct

describe('renders component with text', () => {
	// Render the component
	render(<MyComponent text='Hello, World!' />)

	// Assert that the component renders with the correct text
	const componentElement = screen.getByText('Hello, World!')
	it('should display that the text', () => {
		expect(componentElement).toBeInTheDocument()
	})
})
