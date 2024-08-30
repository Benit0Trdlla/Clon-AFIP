export default function Slider() {
    const images = ["Slider/Slider-1.jpg", "Slider/Slider-2.jpg", "Slider/Slider-3.jpg"];
    return (
        <div id="carouselIndicators" className="carousel slide border border-3 rounded rounded-4 h-100">
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
                {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
            <div className="carousel-inner rounded rounded-4 h-100">
                {images.map((image, index) => (
                    <div className={`h-100 carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                        <img src={image} className="d-block w-100" alt="..." />
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