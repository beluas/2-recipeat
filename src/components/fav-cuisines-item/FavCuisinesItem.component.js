import React from "react";
import "./favCuisinesItem.styles.scss";
import { connect } from "react-redux";
import { fetchRecipe } from "../../redux/actions/recipes";

const FavCuisinesItem = ({ title, srcImg, fetchRecipe }) => {
	console.log(srcImg);
	const styles = { backgroundImage: `url(${srcImg})` };
	return (
		<div
			onClick={() => {
				localStorage.setItem("term", title);
				const term = localStorage.getItem("term");
				fetchRecipe(term);
			}}
			className="fav-cuisines-item"
			style={styles}
		>
			<h3>{title}</h3>
		</div>
	);
};
const dispatchToProps = {
	fetchRecipe
};

export default connect(null, dispatchToProps)(FavCuisinesItem);
