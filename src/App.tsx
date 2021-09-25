import React from 'react'
import './App.css'
import {
	Button,
	Footer,
	Head,
	Input,
	ProductHead,
	ShowHideButton,
} from './Components'
import { AppCtx } from './Contexts'

function App() {
	return (
		<AppCtx.Provider
			value={{
				name: 'Using React Context in a Typescript App',
			}}
		>
			<div className='App'>
				<Head title='Hello!' />
				<ProductHead product={{ name: 'Star Wars - A New Hope', price: 15 }} />
				<Button
					onClick={e => {
						e.preventDefault()
						// console.log('Clicking')
					}}
				>
					Hello World
				</Button>
				<Input />
				<ShowHideButton />
				<Footer />
			</div>
		</AppCtx.Provider>
	)
}

export default App
