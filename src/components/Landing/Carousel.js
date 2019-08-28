import React, {Component} from 'react';

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="2500">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://img.andrewprokos.com/TORONTO-PANORAMIC-SKYLINE-DUSK-1200PX.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://i.imgur.com/IdQbfbg.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://i.imgur.com/alSqEz8.jpg" className="d-block w-100" alt="..." />
                </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Carousel;
