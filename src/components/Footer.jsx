import socials from "../../src/data/socials.json";
export default function Footer() {

    return (
        <footer className="bg-info text-warning">
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-4">
                        <div className="col">
                            <div className="mb-2 p-1">
                                <a to="/" className="d-flex justify-content-start ">
                                    <img src="/logo_afip_blanco.png" width={128} height={50} alt="Logo de la institución AFIP" />
                                </a>
                            </div>
                            <div className="d-flex gap-1 align-items-center">
                                {socials.map((social) => (
                                    <a href={social.href} key={social.Id} target="_blank">
                                        <img src={social.img} width={34} height={34} alt="" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 d-none d-lg-block">
                        <div className="col container row gap-3">
                            <div className="col border-end">
                                <div className="d-flex justify-content-center">
                                    <ul style={{ listStyleType: 'none' }}>
                                        <li className="mb-2"><a href="#" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Institucional</a></li>
                                        <li className="mb-2"><a href="#" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Denuncias</a></li>
                                        <li className="mb-2"><a href="#" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Transparencia Activa</a></li>
                                        <li className="mb-2"><a href="#" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Selección de personal</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col border-end">
                                <div className="d-flex justify-content-end">
                                    <ul style={{ listStyleType: 'none' }}>
                                        <li className="mb-2"><a href="#" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Derechos y obligaciones</a></li>
                                        <li className="mb-2"><a href="#" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Aviso legal</a></li>
                                        <li className="mb-2"><a href="#" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Excombatientes de Malvinas</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex justify-content-end">
                                    <ul style={{ listStyleType: 'none' }}>
                                        <li className="mb-2"><a href="#" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contacto</a></li>
                                        <li className="mb-2"><a href="#" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Facturación apócrifa</a></li>
                                        <li className="mb-2"><a href="#" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Transparencia Activa</a></li>
                                        <li className="mb-2"><a href="#" className="link-light link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Constatación de comprobantes</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}