import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEarthAmerica} from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
    return (
        <nav>
            <div className="nav-logo">
                <FontAwesomeIcon icon={faEarthAmerica} />
                my travel journal
            </div>
        </nav>
    )
}