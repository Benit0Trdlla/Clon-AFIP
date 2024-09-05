import React from "react"
import Home from "../components/Home/Home";
export { Home }

export const Novedades = React.lazy(() => import('../components/Novedades/Novedades'));
export const Articles = React.lazy(() => import('../components/Novedades/Articles'));
export const PactoFiscal = React.lazy(() => import('../components/PactoFiscal/PactoFiscal'));
export const Vencimientos = React.lazy(() => import('../components/PactoFiscal/Vencimientos'));
