import Head from "./components/Head";
import Header from "./components/Header";
import RegisterForm from "./components/AnimalAppointment";
import AnimalAppointment from "./components/AnimalAppointment";
import "./AnimalRegister.css";

function AnimalRegister() {
    return(
        <>
            <Head />
            <Header />
            <AnimalAppointment />
        </>
        
    );
}

export default AnimalRegister