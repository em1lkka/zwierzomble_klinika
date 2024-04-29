import vetPicture from "../assets/veterinary-with-dog.png";
import { Link } from "react-router-dom";
import AnimalRegister from '../AnimalRegister';

function Article() {
    return(
        <div className="article-section">
            <div className="article-main">
                <div className='article-text'>
                    <h2 className="main-article-text">Czy twój zwierzombl wpadł pod samochód?A może poszedł za garaże się klepać i dostał bencki? My go wyleczymy!</h2>
                    <h4 className="sub-article-text">Z-MED to profesjonalna klinika weterynaryjna specjalizująca się w leczeniu zwierzombli i innych sierściuchów.</h4>
                </div>
                <a href='/AnimalRegister.js' className="set-visit-btn">
                    Umów się na wizytę
                </a>
            </div>
            <div className="article-image">
                <img src={vetPicture} alt="veterinary-with-dog" className='article-vet-picture'/>
            </div>
            
        </div>
    );
}

export default Article