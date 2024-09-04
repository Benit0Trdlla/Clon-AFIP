import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand-md bg-info">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img className="img-fluid" src="/logo_afip_blanco.png" alt="Logo de la institución AFIP" width={160} height={60} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto gap-3">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-white">Inicio</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Accesos
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="#">Regularización de activos</a></li>
                                        <li><a className="dropdown-item" href="#">Moratoria</a></li>
                                        <li><a className="dropdown-item" href="#">Beneficio a cumplidores</a></li>
                                        <li><a className="dropdown-item" href="#">REIBP</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Consultas Web
                                    </a>
                                </li>
                                <li className="nav-item dropdown-center">
                                    <a className="nav-link text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Ayuda
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}