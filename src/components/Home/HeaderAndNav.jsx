import { Link } from "react-router-dom";

export default function HeaderAndNav() {
    return (
        <>
            <header>
                <nav className="navbar bg-info">
                    <div className="container d-flex align-items-center">
                        <Link className="navbar-brand" to="/">
                            <img className="img-fluid" src="/logo_afip_blanco.png" alt="Logo de la institución AFIP" width={160} height={60} />
                        </Link>
                        <p className="text-white fst-italic d-flex gap-2 align-items-center justify-content-center d-none d-md-block">
                            <img className="img-fluid" src="/logo-bandera-escudo.svg" alt="Logo de la República Argentina" width={160} height={40} />
                            <span style={{ color: '#13a2bb' }}>2024</span>
                            <strong> - </strong>
                            Año de la Defensa de la Vida, la Libertad y la Propiedad
                        </p>
                        <button className="navbar-toggler d-md-none d-sm-block" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </header>
            <nav className="navbar navbar-expand-md bg-info border-top mt-1">
                <div className="container fw-semibold">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <p className="d-sm-block d-md-none text-white fs-6 d-flex gap-2 align-items-center justify-content-center">
                            <span style={{ color: '#13a2bb' }}>2024</span>
                            <strong> - </strong>
                            Año de la Defensa de la Vida, la Libertad y la Propiedad
                        </p>
                        <ul className="navbar-nav ms-auto gap-3">
                            <li className="nav-item">
                                <a href="#services" className="nav-link text-white">Institucional</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contribuyentes
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Autónomos</a></li>
                                    <li><a className="dropdown-item" href="#">Casas particulares</a></li>
                                    <li><a className="dropdown-item" href="#">Futuros contribuyentes</a></li>
                                    <li><a className="dropdown-item" href="#">Monotributo</a></li>
                                    <li><a className="dropdown-item" href="#">Operadores de comercio exterior</a></li>
                                    <li><a className="dropdown-item" href="#">Régimen General</a></li>
                                    <li><a className="dropdown-item" href="#">Relaciones Laborales</a></li>
                                    <li><a className="dropdown-item" href="#">Usuarios Aduaneros</a></li>
                                    <li><a className="dropdown-item" href="#">Viajeros</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Turnos
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Solicitud</a></li>
                                    <li><a className="dropdown-item" href="#">Dependencias</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown-center">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ayuda
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Aplicativos</a></li>
                                    <li><a className="dropdown-item" href="#">Biblioteca</a></li>
                                    <li><a className="dropdown-item" href="#">Calculadora de intereses</a></li>
                                    <li><a className="dropdown-item" href="#">Consultas Web</a></li>
                                    <li><a className="dropdown-item" href="#">Contactos</a></li>
                                    <li><a className="dropdown-item" href="#">Credencial virtual</a></li>
                                    <li><a className="dropdown-item" href="#">Denuncias</a></li>
                                    <li><a className="dropdown-item" href="#">Formas de pago</a></li>
                                    <li><a className="dropdown-item" href="#">Guías de trámites</a></li>
                                    <li><a className="dropdown-item" href="#">Nomenclador de Actividades</a></li>
                                    <li><a className="dropdown-item" href="#">Reclamos y segurencias</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}