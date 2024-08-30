export default function Login() {
    return (
        <div className="bg-info text-white border border-3 rounded rounded-4 h-100 p-4">
            <div className="text-center d-flex flex-column">
                <h2>Ingresar con Clave Fiscal</h2>
                <div className="d-flex justify-content-center mt-1 p-2">
                    <button className="btn btn-light">Iniciar Sesion</button>
                </div>
                <a href="#" className="link-secondary fw-bold link-underline-opacity-0 link-underline-opacity-75-hover">Recuperar Clave Fiscal</a>
            </div>
            <hr style={{ backgroundColor: 'white', height: '4px' }} />
            <div className="d-flex justify-content-center flex-column gap-3">
                <button type="button" className="btn btn-outline-light">Comenzar Inscripción</button>
                <button type="button" className="btn btn-outline-light">Constacia de CUIT</button>
            </div>
        </div>
    )
}