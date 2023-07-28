import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
	const [name, setName] = useState( () => window.localStorage.getItem('name') || '');
	const changeName = event => setName(event.target.value);
	useEffect(() => {
		window.localStorage.setItem('name',name);
	}, [name]);
	return (
		<div>
			<form className="form">
				<label htmlFor="form_name">Name</label>
				<input value={name} id="form_name" onChange={changeName} />
				{name? <strong>Hello {name}</strong>:'Please type your name.'}
			</form>
		</div>
	);
}

export default App;
