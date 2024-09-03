import { Link } from "react-router-dom"
export default function Header() {
    return (
        <>
            <header>
                <nav className="navbar bg-info">
                    <div className="container d-flex align-items-center">
                        <Link className="navbar-brand" to="/">
                            <img className="img-fluid" src="/logo_afip_blanco.png" alt="Logo de la institución AFIP" width={160} height={60} />
                        </Link>
                        <div className="d-flex align-items-center">
                            <p className="text-white fw-semibold mt-2">
                                Novedades
                            </p>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}