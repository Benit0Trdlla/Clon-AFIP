import Header from "./Header"
import Accordions from "./Accordions"
export default function Vencimientos() {
    const cards = [
        { Id: 0, title: "📝 Regularización de Activos", subtitle: "Lo tuyo es tuyo" },
        { Id: 1, title: "🤝 Moratoria", subtitle: "Sin deudas" },
        { Id: 2, title: "✅ Beneficios a cumplidores", subtitle: "A quienes cumplieron con todas las obligaciones de Bienes Personales" },
        { Id: 3, title: "🏠 REIBP", subtitle: "Régimen especial de ingreso del Impuesto sobre los Bienes Personales" },
    ]
    return (
        <>
            <Header />
            <div className="container">
                <div className="text-center py-5">
                    <h1 className="fw-semibold">Nuevo Pacto Fiscal</h1>
                    <h2 className="fw-semibold mt-3 mb-3 fs-5 text-secondary">Fechas de vencimiento para el cumplimiento de las obligaciones</h2>
                </div>
                <h1 className="fw-semibold fs-3 mb-3 ms-1 text-center text-md-start">Vencimientos de 2024</h1>
                <div className="row ms-0 me-0">
                    <div className="col-md-7 px-1 mb-3 mb-lg-0">
                        <h2 className="fw-semibold fs-3 text-secondary mb-3">Septiembre</h2>
                        <Accordions>
                            {/* Esto será pasado como "children" a cada acordeón */}
                            <div className="fs-6">
                                <p>
                                    Pago al contado o mediante los planes de facilidades de hasta 3 cuotas, comprendidos en los incisos a), b) y c) del artículo 6 de la ley 27.743:
                                </p>
                                <ul>
                                    <li>60% de condonación adhiriendo entre el 16 de agosto y el 14 de septiembre de 2024.</li>
                                </ul>
                            </div>
                            <div>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Terminación de CUIT</th>
                                            <th scope="col">Fecha de presentación</th>
                                            <th scope="col">Fecha de pago</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">0-1-2-3</th>
                                            <td>18/09/2024</td>
                                            <td>19/09/2024</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4-5-6</th>
                                            <td>19/09/2024</td>
                                            <td>20/09/2024</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7-8-9</th>
                                            <td>20/09/2024</td>
                                            <td>23/09/2024</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Terminación de CUIT</th>
                                            <th scope="col">Fecha de presentación</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">0-1-2-3</th>
                                            <td>19/09/2024</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4-5-6</th>
                                            <td>20/09/2024</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7-8-9</th>
                                            <td>23/09/2024</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <p className="fw-bold">
                                    ¡Última oportunidad para declarar dinero en efectivo sin costo!
                                </p>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Etapa</th>
                                            <th scope="col">Fecha límite para el ingreso del pago adelantado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>30/09/2024</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Etapa</th>
                                            <th scope="col">Fecha límite para el ingreso del pago adelantado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>30/09/2024</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Terminación de CUIT</th>
                                            <th scope="col">Fecha límite para realizar el pago inicial</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Todas</th>
                                            <td>30/09/2024</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Accordions>
                        <h2 className="fw-semibold fs-3 text-secondary mb-3">Octubre</h2>
                        <p>...</p>
                    </div>
                    <div className="col-md-4">
                        {cards.map((card) => (
                            <div key={card.Id}>
                                <div className="border border-dark mb-3 rounded p-3">
                                    <h1 className="fs-5 fw-bold">{card.title}</h1>
                                    <p className="text-secondary">{card.subtitle}</p>
                                    <button className="btn btn-outline-primary">Ingresar al micrositio</button>
                                </div>
                                <hr className="d-none d-lg-block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}