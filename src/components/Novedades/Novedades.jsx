export default function NovedadesPage() {
    return (
        <header>
            <nav className="navbar bg-info">
                <div className="container d-flex align-items-center">
                    <a className="navbar-brand" href="/">
                        <img className="img-fluid" src="/logo_afip_blanco.png" alt="Logo de la institución AFIP" width={160} height={60} />
                    </a>
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
    )
}