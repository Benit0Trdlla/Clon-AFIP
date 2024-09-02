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
            <nav className="navbar navbar-expand-md bg-info border-top mt-1">
                <div className="container fw-semibold">
                    <nav aria-label="breadcrumb d-flex">
                        <ol className="breadcrumb fw-semibold">
                            <li className="breadcrumb-item text-white"><Link to="/" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Inicio</Link></li>
                            <li className="breadcrumb-item active text-white" aria-current="page">Novedades</li>
                        </ol>
                    </nav>
                </div>
            </nav>
        </>
    )
}