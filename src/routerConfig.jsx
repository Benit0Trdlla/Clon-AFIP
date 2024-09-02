import { Home, Novedades, PactoFiscal }  from "./pages";

export const routes = [
    {
        path: '/',
        component: <Home/>,
    },
    {
        path: '/novedades',
        component: <Novedades/>,
    },
    {
        path: '/pactofiscal',
        component: <PactoFiscal/>
    }
]