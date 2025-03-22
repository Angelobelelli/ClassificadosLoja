import {useState} from "react";
import "./App.css";
import {Outlet, Link} from "react-router-dom";


function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Outlet />
			{/* Outlet é onde os componentes filhos das rotas são renderizados */}
			<Link to="/" className="">Home</Link>
		</>
	);
}

export default App;
