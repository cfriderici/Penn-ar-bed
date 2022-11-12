import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


// ------ COMPONENT ------  //

// const Carousel = () => {
//     return (

    export default () => (

        <Carousel autoPlay>
        <div>
            <img src={ require('../img/IMG_2937.JPG') } alt=""/>
            <p className="legend">Christina / Baie des Trépassés / 02.02.2022</p>
        </div>
        <div>
            <img src={ require('../img/IMG_0762.jpg') } alt=""/>
            <p className="legend">Tom / Pointe du Raz / 15.10.2022</p>
        </div>
        <div>
            <img src={ require('../img/IMG_3778.jpg') } alt=""/>
            <p className="legend">Anna / Posr Theolen / 20.12.2022</p>
        </div>
        </Carousel>
    );

//             )
// }

// export default Carousel;
