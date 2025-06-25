import "./App.css";
import {Outlet, Link} from "react-router-dom";

function App() {
	return (
		<>
			<Outlet />
			{/* Outlet é onde os componentes filhos das rotas são renderizados */}
		</>
	);
}

export default App;
