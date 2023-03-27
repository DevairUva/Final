import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Pesquisa from './components/Pesquisa';
import Inscricao from './components/Inscricao';
import Login from './components/Login';
import Teste from './components/teste';
import Nos from './components/Nos';
import NovoUsuario from './components/NovoUsuario';

const router = createHashRouter(
  [
    {
      path: "/",
      element: <App/>,
      errorElement: <h1>Erro 404. Está pág não existe.</h1>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/polos",
          element: <Pesquisa/>
        },
        {
          path: '/inscricao',
          element: <Inscricao/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/teste',
          element: <Teste/>
        },
        {
          path: '/nos',
          element: <Nos/>
        },
        {
          path: '/novoUsuario',
          element: <NovoUsuario/>
        },
      ]
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
