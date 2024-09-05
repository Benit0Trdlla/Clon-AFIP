import { Link } from "react-router-dom"
import Header from "./Header"
export default function PactoFiscal() {
    const cards = [
        { id: 0, title: 'Regularización de activos', subtitle: 'Lo tuyo es tuyo', img: 'PactoFiscal/card-01.jpg' },
        { id: 1, title: 'Moratoria', subtitle: 'Sin deudas', img: 'PactoFiscal/card-02.jpg' },
        { id: 2, title: 'Beneficio a cumplidores', subtitle: 'A quienes cumplieron con todas las obligaciones de Bienes Personales', img: 'PactoFiscal/card-03.jpg' },
        { id: 3, title: 'REIBP', subtitle: 'Régimen especial de ingreso del Impuesto sobre los Bienes Personales', img: 'PactoFiscal/card-04.jpg' },
    ]

    return (
        <>
            <Header />
            <div className="container">
                <img src="pacto-fiscal-banner-lg.jpg" className="w-100 mt-4 mb-5 border-3 rounded rounded-2 img-fluid" alt="" />
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between rounded rounded-2 border border-black p-5">
                    <div className="text-center text-lg-start">
                        <h1 className="fw-semibold">📅 Agenda 2024</h1>
                        <p className="text-muted">Conocé las principales fechas de vencimiento para cumplir con tus obligaciones.</p>
                    </div>
                    <Link to={'/pactofiscal/vencimientos'} className="btn btn-info mt-2 mt-lg-0">
                        Ingresar
                    </Link>
                </div>
                <div className="row d-flex row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    {cards.map((card) => (
                        <article className="col mb-3 mt-3 ms-lg-0 d-flex justify-content-center align-items-center " key={card.id} >
                            <div className="card mb-3 h-100" style={{ width: '16rem' }}>
                                <img src={card.img} className="card-img-top" alt={`Imagen de ${card.title}`} style={{ height: '100px', objectFit: 'cover', width: '100%' }} />
                                <div className="card-body" style={{}}>
                                    <h5 className="card-title text-center fw-bold">{card.title}</h5>
                                    <p className="card-text text-center">{card.subtitle}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    )
}