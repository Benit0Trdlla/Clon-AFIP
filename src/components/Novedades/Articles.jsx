import Header from "./Header"
import { Link, useParams } from "react-router-dom"
import articles from "./articles.json"
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
            <div className="container ">
                <div className="d-flex justify-content-center">
                    <img src={`${articles[articleId].imageUrl}`} className="rounded img-fluid mt-2" alt="" />
                </div>
                <div className="d-flex justify-content-between">
                    <span className="py-2 px-5 badge text-bg-info">Aduana</span>
                </div>
            </div>
        </>
    )
}