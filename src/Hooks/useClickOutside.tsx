import React, { useEffect } from 'react'

export const useClickOutside = (
	ref: React.MutableRefObject<HTMLDivElement>,
	// handler: (event: React.MouseEvent<HTMLElement>) => void
	handler: (e: MouseEvent) => void
) => {
	useEffect(() => {
		// const listener = (e: React.MouseEvent<HTMLElement>) => {
		const listener = (e: MouseEvent) => {
			if (!ref.current || ref.current.contains(e.target as Node)) {
				return
			}
			handler(e)
		}
		document.addEventListener('mousedown', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
		}
	}, [handler, ref])
}
