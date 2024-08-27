import MasConsultadosSection from "./components/MasConsultadosSection"
import NovedadesSection from "./components/NovedadesSection"
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
      </header>
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
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7 px-1">
            <div id="carouselExampleIndicators" className="carousel slide border border-3 rounded rounded-4">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner border border-3 rounded rounded-4">
                <div className="carousel-item active">
                  <a href="">
                    <img src="Slider/Slider-1.jpg" className="d-block w-100" alt="..." />
                  </a>
                </div>
                <div className="carousel-item">
                  <img src="Slider/Slider-2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="Slider/Slider-3.jpg" className="d-block w-100" alt="..." />
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

          <div className="col-md-5">
            <div className="bg-info text-white border border-3 rounded rounded-4 h-100 p-4">
              <div className="text-center d-flex flex-column">
                <h2>Ingresar con Clave Fiscal</h2>
                <div className="d-flex justify-content-center mt-1 p-2">
                  <button className="btn btn-light">Iniciar Sesion</button>
                </div>
                <a href="#" className="link-secondary fw-bold link-underline-opacity-0 link-underline-opacity-75-hover">Recuperar Clave Fiscal</a>
              </div>
              <hr style={{ backgroundColor: 'white', height: '4px' }} />
              <div className="d-flex justify-content-center flex-column gap-3">
                <button type="button" className="btn btn-outline-light">Comenzar Inscripción</button>
                <button type="button" className="btn btn-outline-light">Constacia de CUIT</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <img src="pacto-fiscal-banner.jpg" alt="Nuevo pacto fiscal banner" title="Nuevo pacto fiscal" className="w-100 mt-4 border-3 rounded rounded-2 d-md-none" />
          <img src="pacto-fiscal-banner-lg.jpg" alt="Nuevo pacto fiscal banner" title="Nuevo pacto fiscal" className="w-100 mt-4 mb-5 border-3 rounded rounded-2 d-none d-md-block" />
        </div>

        <MasConsultadosSection />
        <NovedadesSection />
      </div>
      <footer className="bg-info text-warning mt-3">
        <div className="container">
          <div className="row p-5">
            <div className="col-md-4">
              <div className="col">
                <div className="mb-2 p-1">
                  <a href="/" className="d-flex justify-content-start ">
                    <img src="/logo_afip_blanco.png" width={128} height={50} alt="" />
                  </a>
                </div>
                <div className="d-flex gap-1 align-items-center">
                  <a href="">
                    <img src="RedesFooter/twitter.svg" width={34} height={34} alt="Logo Twitter" />
                  </a>
                  <a href="">
                    <img src="RedesFooter/instagram.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="RedesFooter/facebook.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="RedesFooter/linkedin.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="RedesFooter/youtube.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="RedesFooter/whatsapp.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="RedesFooter/telegram.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="col container row gap-3">
                <div className="col border-end">
                  <div className="d-flex justify-content-center ">
                    <ul style={{ listStyleType: 'none' }}>
                      <li className="mb-2"><a href="" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Institucional</a></li>
                      <li className="mb-2"><a href="" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Denuncias</a></li>
                      <li className="mb-2"><a href="" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Transparencia Activa</a></li>
                      <li className="mb-2"><a href="" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Selección de personal</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col border-end">
                  <div className="d-flex justify-content-end">
                    <ul style={{ listStyleType: 'none' }}>
                      <li className="mb-2"><a href="" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Derechos y obligaciones</a></li>
                      <li className="mb-2"><a href="" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Aviso legal</a></li>
                      <li className="mb-2"><a href="" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Excombatientes de Malvinas</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-end">
                    <ul style={{ listStyleType: 'none' }}>
                      <li className="mb-2"><a href="" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contacto</a></li>
                      <li className="mb-2"><a href="" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Facturación apócrifa</a></li>
                      <li className="mb-2"><a href="" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Transparencia Activa</a></li>
                      <li className="mb-2"><a href="" className="link-light link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Constatación de comprobantes</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
