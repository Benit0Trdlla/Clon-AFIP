export default function Banner({ imgMobile, imgDesktop }) {
    return (
        <div className="mb-3">
            <img src={imgMobile} alt="Nuevo pacto fiscal banner" title="Nuevo pacto fiscal" className="w-100 mt-4 border-3 rounded rounded-2 d-md-none" />
            <img src={imgDesktop} alt="Nuevo pacto fiscal banner" title="Nuevo pacto fiscal" className="w-100 mt-4 mb-5 border-3 rounded rounded-2 d-none d-md-block" />
        </div>
    )
}