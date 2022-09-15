import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function LocationDetails(props) {
	return (
		<div className="location-details">
			<FontAwesomeIcon icon={faLocationDot} className="icon" />
			{props.item.location}
			<span>
				<a href={props.item.googleMapsUrl}>View on Google Maps</a>
			</span>
		</div>
	);
}

export default function Card(props) {
	// console.log(props)
	return (
		<div className="card">
			<img src={props.item.imageUrl} className="card-img" />
			<div className="card-data">
                <LocationDetails item={props.item}/>
				<h3 className="title">{props.item.title}</h3>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
				<p className="description">
                    {props.item.description}
                </p>
			</div>
		</div>
	);
}
