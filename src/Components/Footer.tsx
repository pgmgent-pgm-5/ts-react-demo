import { useContext } from 'react'
import { AppCtx } from '../Contexts'

export const Footer = () => {
	const appContext = useContext(AppCtx)
	return <div>This website was made by {appContext?.name}</div>
}
