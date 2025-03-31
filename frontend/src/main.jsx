import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Importa o componente RouterProvider da biblioteca react-router-dom
import {RouterProvider} from "react-router-dom";

// Importa o componente de roteamento criado
import meuRouter from "./MyRouter.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={meuRouter} />
	</StrictMode>
);
