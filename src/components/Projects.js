import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const Projects = () => {
    return ( 
        <div className="maindiv">
            <div className="d-flex flex-column align-items-center mb-5">
                <h3>Expenses</h3>
                <p className="w-50 text-center">Aplikacja webowa do zarządzania finansami. Kontrola budżetów, rejestracja wydatków oraz statystki rozchodów i przychodów.</p>
                <Link to='https://github.com/cezow/expenses' target="_blank"> <Button className="btn-info">Link</Button></Link>
            </div>
            <div className="d-flex flex-column align-items-center mb-5">
                <h3>Divorce</h3>
                <p className="w-50 text-center">Aplikacja webowa korzystająca z modelu Machine Learning. Udzielając opowiedzi na zadane pytania ankiety, przewidywane jest prawdopodobieństwo rozwodu.</p>
                <Link to='https://github.com/cezow/divorce' target="_blank"> <Button className="btn-info">Link</Button></Link>
            </div>
            <div className="d-flex flex-column align-items-center">
                <h3>Coctails</h3>
                <p className="w-50 text-center">Prosta aplikacja webowa API będąca wyszukiwarką znanych koktajli.</p>
                <Link to='/projekt'> <Button className="btn-warning">Sprawdź</Button></Link>
            </div>                                      
        </div>
);
}
 
export default Projects;