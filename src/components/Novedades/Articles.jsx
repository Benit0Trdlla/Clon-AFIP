import Header from "./Header"
import { Link, useParams } from "react-router-dom"
import articles from "./articles.json"
export default function Articles() {
    const { articleId } = useParams()
    const socials = [
        { id: 1, img: 'RedesFooter/twitter.svg', href: 'https://twitter.com/afipcomunica' },
        { id: 2, img: 'RedesFooter/instagram.svg', href: 'https://www.instagram.com/afipcomunica/' },
        { id: 3, img: 'RedesFooter/facebook.svg', href: 'https://es-la.facebook.com/AFIPComunica/' },
        { id: 4, img: 'RedesFooter/linkedin.svg', href: 'https://www.linkedin.com/company/afip?originalSubdomain=es' },
        { id: 5, img: 'RedesFooter/youtube.svg', href: 'https://www.youtube.com/channel/UCe0zC5Uf5U1YDDMF3_W-97A' },
        { id: 6, img: 'RedesFooter/whatsapp.svg', href: 'https://www.whatsapp.com/channel/0029VaFz1Ur7z4kXZ888GJ2X' },
        { id: 7, img: 'RedesFooter/telegram.svg', href: 'https://t.me/AFIP_Comunica' },
    ]
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
                    <span className="fw-semibold text-uppercase badge text-bg-info mt-2 d-none d-lg-block d-flex align-self-center">{articles[articleId].category}</span>
                    <div className="d-none d-lg-block d-flex gap-1 align-self-center">
                        Compartir
                        {socials.map((social) => (
                            <a href={social.href} key={social.id} target="_blank">
                                <img src={social.img} width={34} height={34} alt="" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="border-bottom">
                    <h1 className="fw-bold mt-3 py-3">{articles[articleId].title}</h1>
                    <h3 className="mt-2 mb-3 py-1 text-secondary">{articles[articleId].subtitle}</h3>
                    <p className="mt-2 text-secondary">{`PUBLICADO: ${articles[articleId].date}`}</p>
                </div>
                <div className="border-bottom">
                    <p className="mt-3 py-3">{articles[articleId].description}</p>
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