import { useState } from "react";


function AnimalAppointment() {
    const [imie, setImie] = useState('');
    const [wiek, setWiek] = useState('');
    const [rasa, setRasa] = useState('');
    const [historiaChorob, setHistoriaChorob] = useState('');
    const [rodzaj, setRodzaj] = useState('');
    const [wprowadzoneDane, setWprowadzoneDane] = useState([]);

    const handleDodaj = () => {
        const noweDane = {
            imie: imie,
            wiek: wiek,
            rasa: rasa,
            historiaChorob: historiaChorob,
            rodzaj: rodzaj
        };
        setWprowadzoneDane([...wprowadzoneDane, noweDane]);
        setImie('');
        setWiek('');
        setRasa('');
        setHistoriaChorob('');
        setRodzaj('');
    }


    return(
        <div className="animal-appointment">
            <h2 className="data-section-title">Umów wizytę zwierzombla</h2>
            <div className="animal-data-section">
                <div className="section left">
                    <input type="text" placeholder="Imię" value={imie} onChange={(e) => setImie(e.target.value)} className="input-box small"></input>
                    <input type="text" placeholder="Wiek" value={wiek} onChange={(e) => setWiek(e.target.value)} className="input-box small"></input>
                    <input type="text" placeholder="Rasa" value={rasa} onChange={(e) => setRasa(e.target.value)} className="input-box small"></input>
                    <textarea placeholder="Historia chorób" value={historiaChorob} onChange={(e) => setHistoriaChorob(e.target.value)} className="input-box large"></textarea>
                </div>
                <div className="section right">
                    <select required value={rodzaj} onChange={(e) => setRodzaj(e.target.value)}>
                        <option disabled selected hidden></option>
                        <option>Pies</option>
                        <option>Kot</option>
                        <option>Chomik</option>
                        <option>Świnka morska</option>
                        <option>Żółw</option>
                        <option>Inne...</option>
                    </select>
                    <button onClick={handleDodaj}>Umów</button>
                </div>
            </div>

        </div>
    );
}

export default AnimalAppointment