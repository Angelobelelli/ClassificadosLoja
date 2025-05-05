// Este arquivo é responsável por criar as rotas da aplicação
// e exportar o componente de roteamento para ser utilizado no arquivo index.js

// Importa o componente createBrowserRouter da biblioteca react-router-dom para criar as rotas
import { createBrowserRouter } from "react-router-dom";
import Cadastro from "./pages/Cadastro.jsx";

// Importa as páginas que serão utilizados 
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products.jsx";


// Cria as rotas da aplicação
const router = createBrowserRouter([
  {
    // Define a rota raiz da aplicação
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
    
  },
  {
    path: "/anuncios",
    element: <Products />,
  }
]);

// Exporta o componente de roteamento
export default router;