import React, { Component } from "react";
import FavCuisinesItem from "../fav-cuisines-item/FavCuisinesItem.component";
import "./favCuisinesTab.styles.scss";
import { cuisines } from "../../cuisinesData";

class FavCuisines extends Component {
	render(props) {
		return (
			<div className="fav-cuisines-slide">
				{cuisines.map(cuisine => (
					<FavCuisinesItem key={cuisine.title} {...cuisine} />
				))}
			</div>
		);
	}
}

export default FavCuisines;
