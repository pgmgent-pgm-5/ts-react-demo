import React, { useReducer, useRef } from 'react'
import { useClickOutside } from '../Hooks'

type ShowHideButtonState = {
	show: boolean
}

type ShowHideButtonAction = { type: 'show' } | { type: 'hide' }

function reducer(state: ShowHideButtonState, action: ShowHideButtonAction) {
	switch (action.type) {
		case 'show':
			return { show: true }
		case 'hide':
			return { show: false }
		default:
			return state
	}
}

export const ShowHideButton = () => {
	const [state, dispatch] = useReducer(reducer, { show: false })
	const ref = useRef<HTMLDivElement>(null!)
	useClickOutside(ref, () => {
		// console.log('clicked outside')
	})
	return (
		<div style={{ background: 'red' }} ref={ref}>
			{state.show && <h1>Hidden text is now visible!</h1>}
			<button type='button' onClick={() => dispatch({ type: 'show' })}>
				Show
			</button>
			<button type='button' onClick={() => dispatch({ type: 'hide' })}>
				Hide
			</button>
		</div>
	)
}
