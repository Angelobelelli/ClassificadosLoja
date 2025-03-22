// Este arquivo é responsável por criar as rotas da aplicação
// e exportar o componente de roteamento para ser utilizado no arquivo index.js

// Importa o componente createBrowserRouter da biblioteca react-router-dom para criar as rotas
import { createBrowserRouter } from "react-router-dom";

// Importa as páginas que serão utilizados 
import App from "./App.jsx";


// Cria as rotas da aplicação
const router = createBrowserRouter([
  {
    // Define a rota raiz da aplicação
    path: "/",
    element: <App />,
    
  },
]);

// Exporta o componente de roteamento
export default router;