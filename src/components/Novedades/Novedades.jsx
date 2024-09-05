import { Link } from "react-router-dom"
import Header from "./Header"
import Slider from "./Slider"
import articles from "../../data/articles.json";

export default function NovedadesPage() {

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
                    {articles.map((card) => (
                        <article className="col mb-3" key={card.Id}>
                            <div className="card mb-3 h-100" style={{ width: '16rem' }}>
                                <img src={card.imageUrl} className="card-img-top" alt="..." />
                                <div className="card-body" style={{ minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <p className="card-text">{card.title}</p>
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