import { Link } from "react-router-dom"
import Header from "./Header"
import Slider from "./Slider"
export default function NovedadesPage() {
    const InfoCards = [
        { Id: 0, ImgUrl: 'Novedades/image.jfif', descripcion: 'En el marco del Nuevo Pacto Fiscal, la titular de la AFIP se reunió en los Estados Unidos con su par del IRS.' },
        { Id: 1, ImgUrl: 'Novedades/image-2.jfif', descripcion: 'Simplificación de trámites para facilitar el comercio y la producción.' },
        { Id: 2, ImgUrl: 'Novedades/image-3.jfif', descripcion: 'Se eliminan trabas para dinamizar la exportación de carbón.' },
        { Id: 3, ImgUrl: 'Novedades/image-4.jfif', descripcion: 'Nuevo Pacto Fiscal sin deudas.' },
        { Id: 4, ImgUrl: 'Novedades/image-5.jfif', descripcion: 'La AFIP avanza en la digitalización de trámites aduaneros.' },
        { Id: 5, ImgUrl: 'Novedades/image-6.jfif', descripcion: 'Nuevas funcionalidades del remito electrónico harinero.' },
        { Id: 6, ImgUrl: 'Novedades/image-7.jfif', descripcion: 'Cambios en Monotributo Social.' },
        { Id: 7, ImgUrl: 'Novedades/image-8.jfif', descripcion: 'Vencimientos de septiembre.' },
    ]
    return (
        <>
            <Header />
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
            <div className="container">
                <Slider />
                <h2 className="fw-bold mt-4 mb-5">Todas las Novedades</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">
                    {InfoCards.map((card) => (
                        <article className="col mb-3" key={card.Id}>
                            <div className="card mb-3 h-100" style={{ width: '16rem' }}>
                                <img src={card.ImgUrl} className="card-img-top" alt="..." />
                                <div className="card-body" style={{ minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <p className="card-text">{card.descripcion}</p>
                                    <footer className="d-flex justify-content-end">
                                    <Link to={`/novedades/${card.Id}`} className="btn btn-outline-primary fw-bold">Ver más</Link>                                    </footer>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>

    )
}