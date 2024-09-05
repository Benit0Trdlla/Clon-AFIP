import accordionsData from '../../data/accordionsData.json'
export default function Accordions({ children }) {
    return (
        <>
            {accordionsData.map((accordion, index) => (
                <div className="accordion mb-3" id="accordionPanelsStayOpenExample" key={index}>
                    <div className="accordion-item">
                        <div className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${accordion.accNumber}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${accordion.accNumber}`}>
                            <div style={{ width: '60px', height: '60px', minHeight: '60px', minWidth: '60px' }} className="d-flex flex-column text-secondary text-center border rounded">
                                <p className="bg-info text-white fw-semibold border-bottom mb-0">{accordion.day}</p>
                                <p className="px-2 mb-0 fw-semibold text-secondary">{accordion.date}</p>
                            </div>
                            <h2 className="accordion-header">
                                <button className="btn accordion-butto">
                                    <p className="mb-0 text-start text-info fw-semibold">{accordion.title}</p>
                                    <div className='text-secondary text-start'>
                                        <span>{accordion.subtitle}</span>
                                    </div>
                                </button>
                            </h2>
                        </div>
                        <div id={`panelsStayOpen-collapse${accordion.accNumber}`} className="accordion-collapse collapse">
                            <div className="accordion-body">
                                {Array.isArray(children) ? children[index] : children}
                                <button className="btn btn-outline-primary">Mas información</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}