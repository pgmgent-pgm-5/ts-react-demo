import React from 'react'

type ButtonProps = {
	// onClick: () => string;
	// onClick(): string
	// onClick(): void // method returens nothing
	// onClick(text: string): void
	// onClick: (text: string) => void // function with params
	// onClick: (e: React.MouseEvent) => void // basic mouse event
	// onChange?: (e: React.FormEvent<HTMLInputElement>) => void // basic mouse event
	// children: string,
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void // basic mouse event
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
	<button type='button' onClick={onClick}>
		{children}
	</button>
	// <button onClick={() => onClick('hello')}>Clicking The Button</button>
)
