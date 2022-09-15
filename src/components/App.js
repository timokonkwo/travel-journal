import "../assets/App.css";
import data from "../assets/data";

import Navbar from "./Navbar";
import Card from "./Card";


function App() {
	const cards = data.map((item) => <Card item={item} />);

	return (
		<div>
			<Navbar />
			  <div className="cards-wrapper">{cards}</div>
		</div>
	);
}

export default App;
