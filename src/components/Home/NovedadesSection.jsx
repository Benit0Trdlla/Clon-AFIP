import { Link } from "react-router-dom"

export default function NovedadesSection() {
    const InfoCards = [
        { Id: 1, ImgUrl: 'Novedades/image.jfif', descripcion: 'En el marco del Nuevo Pacto Fiscal, la titular de la AFIP se reunió en los Estados Unidos con su par del IRS.' },
        { Id: 2, ImgUrl: 'Novedades/image-2.jfif', descripcion: 'Simplificación de trámites para facilitar el comercio y la producción.' },
        { Id: 3, ImgUrl: 'Novedades/image-3.jfif', descripcion: 'Se eliminan trabas para dinamizar la exportación de carbón.' },
        { Id: 4, ImgUrl: 'Novedades/image-4.jfif', descripcion: 'Nuevo Pacto Fiscal sin deudas.' },
    ]
    return (
        <section className="container">
            <h2 className="fw-bold mt-4 mb-3">Novedades</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">
                {InfoCards.map((card) => (
                    <article className="col mb-3" key={card.Id}>
                        <div className="card mb-3 h-100" style={{ width: '16rem' }}>
                            <img src={card.ImgUrl} className="card-img-top" alt="..." />
                            <div className="card-body" style={{ minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <p className="card-text">{card.descripcion}</p>
                                <footer className="d-flex justify-content-end">
                                    <a href="#" className="btn btn-outline-primary fw-bold">Ver más</a>
                                </footer>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <Link to="novedades" className="btn btn-secondary text-white px-5 py-2 mt-3 mb-4 justify-content-end">Ver todos</Link>
            </div>
        </section>
    )
}