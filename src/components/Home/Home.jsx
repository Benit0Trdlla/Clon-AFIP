import HeaderAndNav from "./HeaderAndNav"
import Slider from "./Slider"
import Login from "./Login"
import Banner from "./Banner"
import MasConsultadosSection from "./MasConsultadosSection"
import NovedadesSection from "./NovedadesSection"
export default function Home() {
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
        </>
    )
}