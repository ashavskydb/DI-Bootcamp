import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App">
            <Carousel>
                <div>
                    <img src="https://www.tripsavvy.com/thmb/q7T4VvYEVhUgiO9H3yHSQfD2stQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/junk-boat-in-victoria-harbour-497523948-59b4a4e90d327a00118f6767.jpg" alt="Hong Kong"/>
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="https://macaonews.org/wp-content/uploads/2023/12/macao.jpg" alt="Macao"/>
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src="https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg" alt="Japan"/>
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src="https://vegasexperience.com/wp-content/uploads/2023/01/Photo-of-Las-Vegas-Downtown.jpg" alt="Las Vegas"/>
                    <p className="legend">Las Vegas</p>
                </div>
            </Carousel>
        </div>
    );
}

export default App;