import { Home, Novedades, PactoFiscal, Articles } from "./pages";

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
    }
]