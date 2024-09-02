import React from "react"
import Home from "../components/Home/Home";
export { Home }

export const Novedades = React.lazy(() => import('../components/Novedades/Novedades'));
export const PactoFiscal = React.lazy(() => import('../components/PactoFiscal/PactoFiscal'));