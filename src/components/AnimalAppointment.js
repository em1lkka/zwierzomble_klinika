

function AnimalAppointment() {
    return(
        <div className="animal-appointment">
            <h2 className="data-section-title">Umów wizytę zwierzombla</h2>
            <div className="animal-data-section">
                <div className="section left">
                    <input type="text" placeholder="Imię" className="input-box small"></input>
                    <input type="text" placeholder="Wiek" className="input-box small"></input>
                    <input type="text" placeholder="Rasa" className="input-box small"></input>
                    <textarea placeholder="Historia chorób" className="input-box large"></textarea>
                </div>
                <div className="section right">
                    <select required>
                        <option disabled selected hidden></option>
                        <option>Pies</option>
                        <option>Kot</option>
                        <option>Chomik</option>
                        <option>Świnka morska</option>
                        <option>Żółw</option>
                        <option>Inne...</option>
                    </select>
                    <button>Umów</button>
                </div>
            </div>

        </div>
    );
}

export default AnimalAppointment