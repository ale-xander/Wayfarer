import React, {Component} from 'react';

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://image.shutterstock.com/image-photo/panoramic-london-skyline-iconic-symbol-260nw-783218599.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://image.shutterstock.com/image-photo/landscape-panoramic-view-on-eiffel-260nw-705219370.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQWmtYmiktGxusJ-dNtkmmSl9gr-rmNLjflmKY9W-8DOeOG3nJA" className="d-block w-100" alt="..." />
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
