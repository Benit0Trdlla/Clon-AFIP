
function App() {

  return (
    <>
      <header>
        <nav className="navbar bg-info">
          <div className="container d-flex align-items-center">
            <a className="navbar-brand" href="/">
              <img src="/logo_afip_blanco.png" alt="Logo de la institución AFIP" width={160} height={60} />
            </a>
            <p className="text-white fst-italic d-flex gap-2 align-items-center justify-content-center">
              <img src="/logo-bandera-escudo.svg" alt="Logo de la República Argentina" width={160} height={40} />
              <span style={{ color: '#13a2bb' }}>2024</span>
              <strong> - </strong>
              Año de la Defensa de la Vida, la Libertad y la Propiedad
            </p>
          </div>
        </nav>
        <nav className="navbar navbar-expand-md bg-info border-top mt-1">
          <div className="container fw-semibold">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
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
      </header>
      <div className="container mt-3">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 px-1 lh-lg text-wrap">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="Slider/modo.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="Slider/modo.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="Slider/modo.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-6 row mt-2">
            <div className="text-center d-flex flex-column">
              <h2>Ingresar con Clave Fiscal</h2>
              <div className="d-flex justify-content-center">
                <button className="btn btn-info">Iniciar Sesion</button>
              </div>
              <a href="#">Recuperar Clave Fiscal</a>
            </div>
            <hr />
            <button type="button" className="btn btn-outline-info">Comenzar Inscripción</button>
            <button type="button" className="btn btn-outline-info">Constacia de CUIT</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
