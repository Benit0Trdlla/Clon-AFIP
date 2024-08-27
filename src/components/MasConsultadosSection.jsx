export default function MasConsultadosSection() {
    const InfoCards = [
        { Id: 1, Title: 'Clave Fiscal', ImgUrl: 'MasConsultados/clave-fiscal.svg' },
        { Id: 2, Title: 'Monotributo', ImgUrl: 'MasConsultados/monotributo.svg' },
        { Id: 3, Title: 'Presentaciones Digitales', ImgUrl: 'MasConsultados/presentaciones.svg' },
        { Id: 4, Title: 'ABC - Consultas Frecuentes', ImgUrl: 'MasConsultados/abc.svg' },
        { Id: 5, Title: 'Micrositios', ImgUrl: 'MasConsultados/micrositios.svg' },
        { Id: 6, Title: 'Guías paso a paso', ImgUrl: 'MasConsultados/vencimientos.svg' },
        { Id: 7, Title: 'Aportes en línea', ImgUrl: 'MasConsultados/vencimientos.svg' },
        { Id: 8, Title: 'Formularios', ImgUrl: 'MasConsultados/vencimientos.svg' },
        { Id: 9, Title: 'Vencimientos', ImgUrl: 'MasConsultados/vencimientos.svg' },
    ]
    return (
        <section className="container">
            <h2 className="fw-bold mt-4 mb-3">Más Consultados</h2>
            <div className="container text-center">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3">
                    {InfoCards.map((card) => (
                        <div className="col" key={card.Id}>
                            <a href="" className="link-info fw-bold link-underline-opacity-0 link-underline-opacity-75-hover d-inline-flex mb-3 mt-3 d-md-flex flex-md-row flex-column col gap-md-3 align-items-center">
                                <img src={card.ImgUrl} width={80} height={80} alt="" />
                                {card.Title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}