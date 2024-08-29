import HeaderAndNav from "./components/HeaderAndNav"
import MasConsultadosSection from "./components/MasConsultadosSection"
import NovedadesSection from "./components/NovedadesSection"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <HeaderAndNav/>
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
      <Footer />
    </>
  )
}

export default App
