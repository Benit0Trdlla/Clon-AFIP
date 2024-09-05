export default function Accordions({ day, date, title, subtitle, accNumber, children }) {
    return (
        <>
            <div className="accordion mb-3" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <div className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${accNumber}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${accNumber}`}>
                        <div style={{ width: '60px', height: '60px' }} className="d-flex flex-column text-secondary text-center border rounded ms-3">
                            <p className="bg-info text-white fw-semibold border-bottom mb-0">{day}</p>
                            <p className="px-2 mb-0">{date}</p>
                        </div>
                        <h2 className="accordion-header">
                            <button className="btn accordion-butto">
                                <p className="mb-0 text-start text-info fw-semibold">{title}</p>
                                <span className="text-secondary">{subtitle}</span>
                            </button>
                        </h2>
                    </div>
                    <div
                        id={`panelsStayOpen-collapse${accNumber}`}
                        className="accordion-collapse collapse"
                    >
                        <div className="accordion-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}