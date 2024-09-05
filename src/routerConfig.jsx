import { Home, Novedades, PactoFiscal, Articles, Vencimientos } from "./pages";

export const routes = [
    {
        path: '/',
        component: <Home />,
    },
    {
        path: '/novedades',
        component: <Novedades />,
    },
    {
        path: '/novedades/:articleId',
        component: <Articles />
    },
    {
        path: '/pactofiscal',
        component: <PactoFiscal />
    },
    {
        path: '/pactofiscal/vencimientos',
        component: <Vencimientos />
    }
]