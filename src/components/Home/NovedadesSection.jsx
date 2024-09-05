import { Link } from "react-router-dom"
import articles from "../../data/articles.json";

export default function NovedadesSection() {
    return (
        <section className="container">
            <h2 className="fw-bold mt-4 mb-3">Novedades</h2>
            <div className="row d-flex row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {articles.map((card) => (
                    <article className="col mb-3 mt-3 ms-lg-0 d-flex justify-content-center align-items-center" key={card.Id}>
                        <div className="card mb-3 h-100" style={{ width: '16rem' }}>
                            <img src={card.imageUrl} className="card-img-top" alt="..." />
                            <div className="card-body" style={{ minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <p className="card-text">{card.title}</p>
                                <footer className="d-flex justify-content-end">
                                    <Link to={`/novedades/${card.Id}`} className="btn btn-outline-primary fw-bold">Ver más</Link>
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