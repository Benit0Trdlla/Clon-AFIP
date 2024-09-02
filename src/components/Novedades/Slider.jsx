export default function Slider() {
    const images = ['Slider/Novedades/image.jfif', 'Slider/Novedades/image-2.jfif', 'Slider/Novedades/image-3.jfif'];
    return (
        <div id="carouselIndicators" className="carousel slide mt-4">
            <div className="carousel-indicators">
                {images.map((image, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner rounded">
                {images.map((image, index) => (
                    <div className={`h-50 carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                        <img src={image} className="img-fluid" alt="..." />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}