import React, { useState, useRef } from 'react'

export const Input = () => {
	// const [name, setName] = useState<string>("");
	const [name, setName] = useState<string>('testing')
	// const ref = useRef<HTMLInputElement>(null!);
	// strict null check in tsconfig
	const ref = useRef<HTMLInputElement>(null)

	// if (ref && ref.current) {
	//   console.log(ref.current.value)
	// }
	// console.log(ref?.current?.value)

	return <input ref={ref} value={name} onChange={e => setName(e.target.value)} />
}
