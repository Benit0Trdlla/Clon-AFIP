import HeaderAndNav from "./components/Home/HeaderAndNav"
import Slider from "./components/Home/Slider"
import Login from "./components/Home/Login"
import Banner from "./components/Home/Banner"
import MasConsultadosSection from "./components/Home/MasConsultadosSection"
import NovedadesSection from "./components/Home/NovedadesSection"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <HeaderAndNav />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7 px-1">
            <Slider />
          </div>
          <div className="col-md-5">
            <Login />
          </div>
        </div>
        <Banner imgMobile="pacto-fiscal-banner.jpg" imgDesktop="pacto-fiscal-banner-lg.jpg" />
        <MasConsultadosSection />
        <NovedadesSection />
      </div>
      <Footer />
    </>
  )
}

export default App
