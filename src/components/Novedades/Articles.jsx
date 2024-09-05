import Header from "./Header"
import { Link, useParams } from "react-router-dom"
import articles from "../../data/articles.json";
export default function Articles() {
    const { articleId } = useParams()
    return (
        <>
            <Header />
            <nav className="navbar navbar-expand-md bg-info border-top mt-1">
                <div className="container fw-semibold">
                    <nav aria-label="breadcrumb d-flex">
                        <ol className="breadcrumb fw-semibold">
                            <li className="breadcrumb-item text-white"><Link to="/" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Inicio</Link></li>
                            <li className="breadcrumb-item text-white"><Link to="/novedades" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Novedades</Link></li>
                            <li className="breadcrumb-item active text-white" aria-current="page"><small>{articles[articleId].title}</small></li>
                        </ol>
                    </nav>
                </div>
            </nav>
            <div className="container">
                <img src={`${articles[articleId].imageUrl}`} className="rounded mt-2" height={"50%"} width={"100%"} alt="" />
                <div className="d-flex justify-content-between py-0 py-lg-3">
                    <span className="fw-semibold text-uppercase badge text-bg-info mt-2 p-2 py-2 d-none d-lg-block d-flex align-self-center">{articles[articleId].category}</span>
                </div>
                <div className="border-bottom">
                    <h1 className="fw-bold mt-3 py-3">{articles[articleId].title}</h1>
                    <h3 className="mt-2 mb-3 py-1 text-secondary">{articles[articleId].subtitle}</h3>
                    <p className="mt-2 text-secondary">{`PUBLICADO: ${articles[articleId].date}`}</p>
                </div>
                <div className="border-bottom">
                    <p className="mt-3 py-3">{articles[articleId].description}</p>
                </div>
                <div className="d-flex flex-column flex-lg-row gap-3 mt-2 py-3">
                    {articles[articleId].resoluciones &&
                        (
                            articles[articleId].resoluciones.map((resoluciones) => (
                                <button key={resoluciones.Id} className="btn btn-primary text-start">{resoluciones.num}</button>
                            ))
                        )
                    }
                </div>
                <Link to={"/novedades"} className="btn btn-outline-info mt-3 py-2">Volver al listado</Link>
            </div>
            <div className="mt-3 bg-body-secondary py-3">
                <div className="container">
                    <p className="fw-semibold text-uppercase fs-5">Últimas Novedades</p>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">
                        {articles.slice(0, 5).filter((article) => article.Id.toString() !== articleId).map((card) => (
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
            </div>
        </>
    )
}