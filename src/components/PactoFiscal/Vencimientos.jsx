import Header from "./Header"
import Accordions from "./Accordions"
export default function Vencimientos() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="text-center py-5">
                    <h1 className="fw-semibold">Nuevo Pacto Fiscal</h1>
                    <h2 className="fw-semibold mt-3 mb-3 fs-5 text-secondary">Fechas de vencimiento para el cumplimiento de las obligaciones</h2>
                </div>
                <h1 className="fw-semibold fs-3 mb-3 ms-1">Vencimientos de 2024</h1>
                <div className="row ms-0 me-0">
                    <div className="col-md-7 px-1 mb-3 mb-lg-0">
                        <h2 className="fw-semibold fs-3 text-secondary mb-3">Septiembre</h2>
                        <Accordions day="LUN" date="45" title="CHILE" subtitle="example" accNumber="Four">
                            <p>sss</p>
                        </Accordions>
                    </div>
                    <div className="col-md-4">
                        <div className="border border-dark mb-3 rounded p-3">
                            <h1 className="fs-5 fw-bold">Regularización de Activos</h1>
                            <p className=" text-secondary">Lo tuyo es tuyo</p>
                            <button className="btn btn-outline-primary">Ingresar</button>
                        </div>
                        <div className="border mb-3 rounded p-3">
                            <h1 className="fs-5 fw-bold">Regularización de Activos</h1>
                            <p className=" text-secondary">Lo tuyo es tuyo</p>
                            <button className="btn btn-outline-primary">Ingresar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}