import type { MyComponentProps } from './types'

export const MyComponent = ({ text }: MyComponentProps) => {
	return <div className='my-component'>{text}</div>
}
